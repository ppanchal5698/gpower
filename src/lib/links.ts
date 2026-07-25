export const formLinks = {
  assessment: '?form=assessment#assessment',
  contact: '?form=contact#assessment',
} as const

export function contactEmailLink(email: string) {
  return `mailto:${email}`
}
