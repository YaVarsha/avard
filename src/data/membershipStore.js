const APPLICATIONS_KEY = "avard-membership-applications"
const MEMBERS_KEY = "avard-members-list"
const EMAIL_LOG_KEY = "avard-membership-email-log"

const readJson = (key, fallback) => {
  try {
    const saved = localStorage.getItem(key)
    return saved ? JSON.parse(saved) : fallback
  } catch {
    return fallback
  }
}

const writeJson = (key, value) => {
  localStorage.setItem(key, JSON.stringify(value))
}

const createId = (prefix) => {
  const randomId = crypto?.randomUUID?.() || `${Date.now()}-${Math.random().toString(16).slice(2)}`
  return `${prefix}-${randomId}`
}

export const getMembershipApplications = () => readJson(APPLICATIONS_KEY, [])

export const saveMembershipApplications = (applications) => {
  writeJson(APPLICATIONS_KEY, applications)
}

export const getMembers = () => readJson(MEMBERS_KEY, [])

export const saveMembers = (members) => {
  writeJson(MEMBERS_KEY, members)
}

export const getEmailLog = () => readJson(EMAIL_LOG_KEY, [])

export const logMembershipEmail = ({ to, subject, body, type }) => {
  const emails = getEmailLog()
  const email = {
    id: createId("email"),
    to,
    subject,
    body,
    type,
    sentAt: new Date().toISOString(),
  }

  writeJson(EMAIL_LOG_KEY, [email, ...emails])
  return email
}

export const submitMembershipApplication = (application) => {
  const applications = getMembershipApplications()
  const newApplication = {
    ...application,
    id: createId("member-app"),
    status: "Pending Review",
    paymentStatus: "Not Requested",
    receiptId: "",
    submittedAt: new Date().toISOString(),
    reviewedAt: "",
    paidAt: "",
  }

  saveMembershipApplications([newApplication, ...applications])
  logMembershipEmail({
    to: newApplication.email,
    type: "Application Received",
    subject: "AVARD membership application received",
    body: `Dear ${newApplication.name}, your membership application has been received. Our team will review it and notify you after verification.`,
  })

  return newApplication
}

export const updateMembershipApplication = (applicationId, updater) => {
  const applications = getMembershipApplications()
  const updatedApplications = applications.map((application) => {
    if (application.id !== applicationId) return application
    return updater(application)
  })

  saveMembershipApplications(updatedApplications)
  return updatedApplications.find((application) => application.id === applicationId)
}

export const approveMembershipApplication = (applicationId) => {
  const application = updateMembershipApplication(applicationId, (current) => ({
    ...current,
    status: "Approved",
    paymentStatus: "Payment Requested",
    reviewedAt: new Date().toISOString(),
  }))

  if (application) {
    logMembershipEmail({
      to: application.email,
      type: "Approved",
      subject: "Your AVARD membership application has been approved",
      body: `Dear ${application.name}, your membership application has been approved. Please pay the membership fee using the donation/payment page or contact AVARD for payment instructions.`,
    })
  }

  return application
}

export const rejectMembershipApplication = (applicationId) => {
  const application = updateMembershipApplication(applicationId, (current) => ({
    ...current,
    status: "Rejected",
    paymentStatus: "Not Applicable",
    reviewedAt: new Date().toISOString(),
  }))

  if (application) {
    logMembershipEmail({
      to: application.email,
      type: "Rejected",
      subject: "AVARD membership application update",
      body: `Dear ${application.name}, thank you for your interest. Your membership application was not selected at this time.`,
    })
  }

  return application
}

export const markMembershipPaymentReceived = (applicationId) => {
  const receiptId = `AVARD-MEM-${Date.now()}`
  const application = updateMembershipApplication(applicationId, (current) => ({
    ...current,
    status: "Active Member",
    paymentStatus: "Paid",
    receiptId,
    paidAt: new Date().toISOString(),
  }))

  if (application) {
    const members = getMembers()
    const member = {
      id: application.id,
      name: application.name,
      email: application.email,
      phone: application.phone,
      city: application.city,
      state: application.state,
      organizationName: application.organizationName,
      designation: application.designation,
      website: application.website,
      membershipType: application.membershipType,
      interest: application.interest,
      joinedAt: new Date().toISOString(),
      receiptId,
    }

    saveMembers([member, ...members.filter((existing) => existing.id !== member.id)])
    logMembershipEmail({
      to: application.email,
      type: "Receipt Sent",
      subject: "AVARD membership payment receipt",
      body: `Dear ${application.name}, your membership fee payment has been received. Receipt ID: ${receiptId}. Welcome to AVARD's member network.`,
    })
  }

  return application
}

export const buildMembershipReceiptText = (application) => (
  `AVARD Membership Receipt\n\nReceipt ID: ${application.receiptId || "Pending"}\nName: ${application.name}\nEmail: ${application.email}\nPhone: ${application.phone}\nMembership Type: ${application.membershipType}\nPayment Status: ${application.paymentStatus}\nIssued On: ${application.paidAt ? new Date(application.paidAt).toLocaleString() : "Pending"}\n\nAssociation of Voluntary Agencies for Rural Development (AVARD)`
)
