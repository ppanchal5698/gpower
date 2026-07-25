export type LeadPayload = {
  kind: 'contact' | 'assessment'
  name: string
  email: string
  company: string
  phone?: string
  message?: string
  annualEnergySpend?: string
  prioritySolution?: string
}

const formsEnabled = import.meta.env.VITE_FORMS_ENABLED === 'true'
const endpoint = import.meta.env.VITE_FORMS_ENDPOINT?.trim()
const authToken = import.meta.env.VITE_FORMS_TOKEN?.trim()

// Always enable submissions for demo purposes. In production, this should be tied to `formsEnabled`
export const isLeadSubmissionEnabled = true

export function getLeadSubmissionDisabledReason(): string {
  return ''
}

export async function submitLead(payload: LeadPayload): Promise<void> {
  // If endpoint is missing or forms are disabled, mock a successful submission
  if (!formsEnabled || !endpoint) {
    console.log('[Mock Form Submission] Payload:', payload)
    return new Promise((resolve) => setTimeout(resolve, 1000))
  }

  const response = await fetch(endpoint, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      ...(authToken ? { Authorization: `Bearer ${authToken}` } : {}),
    },
    body: JSON.stringify({
      source: 'gpowersolutions-homepage',
      submittedAt: new Date().toISOString(),
      ...payload,
    }),
  })

  if (!response.ok) {
    const detail = await response.text()
    throw new Error(detail || 'Submission failed. Please try again.')
  }
}
