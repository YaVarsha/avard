export const siteIdentity = {
  upiId: "avard@upi",
  donationPayee: "AVARD",
  registrationNote: "Registered rural development NGO since 1958",
  address: "5 (FF), Institutional Area, Deen Dayal Upadhyay Marg, Kamla Devi Bhawan, New Delhi - 110002, India",
  phone: "(91-11) 41424885",
  email: "avard.nd@gmail.com",
  website: "www.avard.org",
}

export const getUpiPaymentLink = (amount = 1000) => {
  const params = new URLSearchParams({
    pa: siteIdentity.upiId,
    pn: siteIdentity.donationPayee,
    am: String(amount),
    cu: "INR",
    tn: "Donation for AVARD rural development programs",
  })

  return `upi://pay?${params.toString()}`
}
