const donationStorageKey = "avard-donation-pledges"

const readStorage = (key, fallback = []) => {
  try {
    const saved = localStorage.getItem(key)
    return saved ? JSON.parse(saved) : fallback
  } catch {
    return fallback
  }
}

const writeStorage = (key, value) => {
  localStorage.setItem(key, JSON.stringify(value))
}

export const getDonationPledges = () => readStorage(donationStorageKey)

export const fetchDonationPledges = async () => {
  const endpoint = import.meta.env.VITE_DONATION_API_URL

  if (!endpoint) {
    return getDonationPledges()
  }

  const response = await fetch(endpoint)

  if (!response.ok) {
    throw new Error("Donation backend request failed")
  }

  const result = await response.json()
  const pledges = result.donations || []

  writeStorage(donationStorageKey, pledges)
  return pledges
}

export const saveDonationPledge = (pledge) => {
  const pledges = getDonationPledges()
  const savedPledge = {
    id: pledge.id || `DON-${Date.now()}`,
    status: pledge.status || "Pending Verification",
    createdAt: pledge.createdAt || new Date().toISOString(),
    ...pledge,
  }

  writeStorage(donationStorageKey, [savedPledge, ...pledges])
  return savedPledge
}

export const submitDonationToBackend = async (pledge) => {
  const endpoint = import.meta.env.VITE_DONATION_API_URL

  if (!endpoint) {
    return saveDonationPledge({ ...pledge, source: "Local Demo" })
  }

  const response = await fetch(endpoint, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(pledge),
  })

  if (!response.ok) {
    throw new Error("Donation backend request failed")
  }

  const result = await response.json().catch(() => ({}))
  const savedDonation = result.donation || result

  return saveDonationPledge({
    ...savedDonation,
    backendId: savedDonation.id || savedDonation.donationId,
    source: "Backend API",
    status: savedDonation.status || "Submitted",
  })
}
