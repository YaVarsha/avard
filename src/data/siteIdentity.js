export const siteIdentity = {
  charityId: "AVARD-1958-RD",
  upiId: "avard@upi",
  donationPayee: "AVARD",
  registrationNote: "Registered rural development NGO since 1958",
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
