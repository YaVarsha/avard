import { useMemo, useState } from "react"
import { donationAmounts } from "../data/donationOptions"

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
          setStatus("Thank you. Your donation was recorded successfully.")
        },
      })

      payment.open()
      return
    }

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
