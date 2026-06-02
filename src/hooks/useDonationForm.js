import { useMemo, useState } from "react"
import { donationAmounts } from "../data/donationOptions"
import { logMembershipEmail } from "../data/membershipStore"

const initialDonor = {
  name: "",
  email: "",
  phone: "",
  pan: "",
  message: "",
}

const loadRazorpay = () =>
  new Promise((resolve) => {
    if (window.Razorpay) {
      resolve(true)
      return
    }

    const script = document.createElement("script")
    script.src = "https://checkout.razorpay.com/v1/checkout.js"
    script.onload = () => resolve(true)
    script.onerror = () => resolve(false)
    document.body.appendChild(script)
  })

const sendDonationThankYouEmail = (donor, amount) => {
  logMembershipEmail({
    to: donor.email,
    type: "Donation Thank You",
    subject: "Thank you for supporting AVARD",
    body: `Dear ${donor.name}, thank you for your generous contribution of Rs. ${amount.toLocaleString("en-IN")} to AVARD. Your support helps strengthen rural development, education, women leadership, livelihoods, and community-led action.`,
  })
}

export function useDonationForm() {
  const [selectedAmount, setSelectedAmount] = useState(donationAmounts[1])
  const [customAmount, setCustomAmount] = useState("")
  const [donor, setDonor] = useState(initialDonor)
  const [status, setStatus] = useState("")
  const [pledgePopup, setPledgePopup] = useState(false)

  const amount = useMemo(() => {
    const parsedCustom = Number(customAmount)
    return parsedCustom > 0 ? parsedCustom : selectedAmount
  }, [customAmount, selectedAmount])

  const selectAmount = (item) => {
    setSelectedAmount(item)
    setCustomAmount("")
  }

  const updateDonor = (event) => {
    const { name, value } = event.target
    setDonor((current) => ({ ...current, [name]: value }))
  }

  const closePledgePopup = () => setPledgePopup(false)

  const submitDonation = async (event) => {
    event.preventDefault()
    setStatus("")
    setPledgePopup(false)

    if (!donor.name.trim() || !donor.email.trim() || !donor.phone.trim()) {
      setStatus("Please complete your name, email, and phone number.")
      return
    }

    if (amount < 100) {
      setStatus("Please enter a donation amount of at least Rs. 100.")
      return
    }

    const key = import.meta.env.VITE_RAZORPAY_KEY_ID
    const razorpayReady = key ? await loadRazorpay() : false

    if (razorpayReady) {
      const payment = new window.Razorpay({
        key,
        amount: amount * 100,
        currency: "INR",
        name: "AVARD",
        description: "Donation for rural development programs",
        prefill: {
          name: donor.name,
          email: donor.email,
          contact: donor.phone,
        },
        notes: {
          pan: donor.pan,
          message: donor.message,
        },
        theme: {
          color: "#1f7a53",
        },
        handler: () => {
          sendDonationThankYouEmail(donor, amount)
          setStatus("Thank you. Your donation was recorded successfully. A thank-you email has been sent in demo mode.")
        },
      })

      payment.open()
      return
    }

    sendDonationThankYouEmail(donor, amount)
    setPledgePopup(true)
  }

  return {
    amount,
    customAmount,
    donor,
    pledgePopup,
    selectedAmount,
    status,
    closePledgePopup,
    selectAmount,
    setCustomAmount,
    submitDonation,
    updateDonor,
  }
}
