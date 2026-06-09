import cors from "cors"
import dotenv from "dotenv"
import express from "express"
import { MongoClient, ObjectId } from "mongodb"
import nodemailer from "nodemailer"

dotenv.config()

const app = express()
const port = Number(process.env.PORT || 4000)
const mongoUri = process.env.MONGODB_URI
const databaseName = process.env.MONGODB_DB_NAME || "avard_ngo"
const allowedOrigin = process.env.CORS_ORIGIN || "*"

let mongoClient
let donationsCollection

app.use(cors({ origin: allowedOrigin }))
app.use(express.json({ limit: "1mb" }))

const connectDatabase = async () => {
  if (!mongoUri) {
    throw new Error("MONGODB_URI is required.")
  }

  if (donationsCollection) {
    return donationsCollection
  }

  mongoClient = new MongoClient(mongoUri)
  await mongoClient.connect()

  const database = mongoClient.db(databaseName)
  donationsCollection = database.collection("donations")
  await donationsCollection.createIndex({ createdAt: -1 })

  return donationsCollection
}

const getTransporter = () => {
  if (!process.env.GMAIL_USER || !process.env.GMAIL_APP_PASSWORD) {
    return null
  }

  return nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.GMAIL_USER,
      pass: process.env.GMAIL_APP_PASSWORD,
    },
  })
}

const sendDonationEmail = async (donation) => {
  const transporter = getTransporter()

  if (!transporter) {
    return false
  }

  await transporter.sendMail({
    from: `"AVARD" <${process.env.GMAIL_USER}>`,
    to: donation.email,
    subject: "Thank you for supporting AVARD",
    text: [
      `Dear ${donation.donorName},`,
      "",
      `Thank you for your contribution pledge of Rs. ${Number(donation.amount).toLocaleString("en-IN")} to AVARD.`,
      "Please complete the payment using the bank transfer details shown on the website.",
      "After payment verification, the AVARD team will follow up for receipt processing.",
      "",
      "Regards,",
      "AVARD Team",
    ].join("\n"),
  })

  return true
}

const normalizeDonation = (payload) => {
  const amount = Number(payload.amount)

  if (!payload.donorName || !payload.email || !payload.phone || !Number.isFinite(amount) || amount < 100) {
    return null
  }

  return {
    donorName: String(payload.donorName).trim(),
    email: String(payload.email).trim(),
    phone: String(payload.phone).trim(),
    pan: String(payload.pan || "").trim(),
    message: String(payload.message || "").trim(),
    amount,
    paymentMode: payload.paymentMode || "Bank Transfer",
    program: payload.program || "General rural development support",
    status: payload.status || "Pending Verification",
    source: "MongoDB Atlas",
    razorpayPaymentId: payload.razorpayPaymentId || "",
    createdAt: new Date(),
    updatedAt: new Date(),
  }
}

const serializeDonation = (donation) => ({
  ...donation,
  id: String(donation._id),
  _id: undefined,
})

app.get("/health", async (request, response) => {
  try {
    await connectDatabase()
    response.json({ ok: true, database: "connected", service: "avard-donation-backend" })
  } catch (error) {
    response.status(500).json({ ok: false, error: error.message })
  }
})

app.get("/api/donations", async (request, response) => {
  try {
    const collection = await connectDatabase()
    const donations = await collection.find({}).sort({ createdAt: -1 }).limit(100).toArray()

    response.json({ donations: donations.map(serializeDonation) })
  } catch (error) {
    response.status(500).json({ error: error.message })
  }
})

app.post("/api/donations", async (request, response) => {
  try {
    const donation = normalizeDonation(request.body)

    if (!donation) {
      response.status(400).json({ error: "Name, email, phone, and amount above Rs. 100 are required." })
      return
    }

    const collection = await connectDatabase()
    const result = await collection.insertOne(donation)
    const savedDonation = { ...donation, _id: result.insertedId }
    const emailSent = await sendDonationEmail(savedDonation)

    response.status(201).json({
      donation: serializeDonation({ ...savedDonation, emailSent }),
      emailSent,
    })
  } catch (error) {
    response.status(500).json({ error: error.message })
  }
})

app.patch("/api/donations/:id/status", async (request, response) => {
  try {
    const { status } = request.body

    if (!status) {
      response.status(400).json({ error: "Status is required." })
      return
    }

    const collection = await connectDatabase()
    const result = await collection.findOneAndUpdate(
      { _id: new ObjectId(request.params.id) },
      { $set: { status, updatedAt: new Date() } },
      { returnDocument: "after" },
    )

    if (!result) {
      response.status(404).json({ error: "Donation not found." })
      return
    }

    response.json({ donation: serializeDonation(result) })
  } catch (error) {
    response.status(500).json({ error: error.message })
  }
})

app.listen(port, () => {
  console.log(`AVARD donation backend running on port ${port}`)
})

process.on("SIGINT", async () => {
  await mongoClient?.close()
  process.exit(0)
})
