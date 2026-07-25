import { useMemo, useRef, useState } from 'react'
import type { FormEvent, ReactNode } from 'react'
import { assessmentHighlights, assessmentSection } from '../../content/homepage'
import {
  getLeadSubmissionDisabledReason,
  isLeadSubmissionEnabled,
  submitLead,
} from '../../lib/api/forms'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { CheckCircle2Icon } from 'lucide-react'

type FormMode = 'contact' | 'assessment'
type SubmissionState = 'idle' | 'submitting' | 'success' | 'error'

type FieldName =
  | 'name'
  | 'email'
  | 'company'
  | 'phone'
  | 'annualEnergySpend'
  | 'prioritySolution'
  | 'message'

type FormValues = Record<FieldName, string>

const emptyValues: FormValues = {
  name: '',
  email: '',
  company: '',
  phone: '',
  annualEnergySpend: '',
  prioritySolution: '',
  message: '',
}

const fieldMeta: Record<FieldName, { label: string; required: boolean }> = {
  name: { label: 'Name', required: true },
  email: { label: 'Email', required: true },
  company: { label: 'Company', required: true },
  phone: { label: 'Phone', required: false },
  annualEnergySpend: { label: 'Annual Energy Spend', required: true },
  prioritySolution: { label: 'Priority Solution', required: true },
  message: { label: 'Message', required: false },
}

const assessmentSteps: FieldName[][] = [
  ['name', 'email', 'company', 'phone'],
  ['annualEnergySpend', 'prioritySolution', 'message'],
]
const contactSteps: FieldName[][] = [['name', 'email', 'company', 'phone', 'message']]

const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
const phonePattern = /^[+()\d][\d\s()-]{6,}$/

function validateField(name: FieldName, value: string): string {
  const trimmed = value.trim()
  switch (name) {
    case 'name':
      return trimmed ? '' : 'Please enter your name.'
    case 'email':
      if (!trimmed) return 'Please enter your email.'
      return emailPattern.test(trimmed) ? '' : 'Please enter a valid email address.'
    case 'company':
      return trimmed ? '' : 'Please enter your company.'
    case 'phone':
      if (!trimmed) return ''
      return phonePattern.test(trimmed) ? '' : 'Please enter a valid phone number.'
    case 'annualEnergySpend':
      return trimmed ? '' : 'Please select a range.'
    case 'prioritySolution':
      return trimmed ? '' : 'Please select a solution.'
    case 'message':
      return ''
  }
}

export function AssessmentSection() {
  const [mode, setMode] = useState<FormMode>('assessment')
  const [step, setStep] = useState(0)
  const [values, setValues] = useState<FormValues>(emptyValues)
  const [errors, setErrors] = useState<Partial<Record<FieldName, string>>>({})
  const [touched, setTouched] = useState<Partial<Record<FieldName, boolean>>>({})
  const [state, setState] = useState<SubmissionState>('idle')
  const [error, setError] = useState('')
  const formRef = useRef<HTMLFormElement>(null)
  const submissionEnabled = isLeadSubmissionEnabled
  const disabledReason = useMemo(
    () => (submissionEnabled ? '' : getLeadSubmissionDisabledReason()),
    [submissionEnabled],
  )

  const steps = mode === 'assessment' ? assessmentSteps : contactSteps
  const totalSteps = steps.length
  const currentFields = steps[step] ?? []
  const isLastStep = step === totalSteps - 1

  const formTitle = useMemo(
    () => (mode === 'assessment' ? 'Green Transition Assessment' : 'Contact GPower Solutions'),
    [mode],
  )

  function switchMode(next: FormMode) {
    if (next === mode) return
    setMode(next)
    setStep(0)
    setErrors({})
    setTouched({})
    setState('idle')
    setError('')
  }

  function setValue(name: FieldName, value: string) {
    setValues((prev) => ({ ...prev, [name]: value }))
    if (touched[name]) {
      setErrors((prev) => ({ ...prev, [name]: validateField(name, value) }))
    }
  }

  function onBlurField(name: FieldName) {
    setTouched((prev) => ({ ...prev, [name]: true }))
    setErrors((prev) => ({ ...prev, [name]: validateField(name, values[name]) }))
  }

  function validateFields(fields: FieldName[]): boolean {
    const nextErrors: Partial<Record<FieldName, string>> = {}
    const nextTouched: Partial<Record<FieldName, boolean>> = {}
    let valid = true
    fields.forEach((field) => {
      const message = validateField(field, values[field])
      nextErrors[field] = message
      nextTouched[field] = true
      if (message) valid = false
    })
    setErrors((prev) => ({ ...prev, ...nextErrors }))
    setTouched((prev) => ({ ...prev, ...nextTouched }))
    return valid
  }

  function focusField(name: FieldName | undefined) {
    if (!name) return
    requestAnimationFrame(() => {
      const element = formRef.current?.elements.namedItem(name)
      if (element instanceof HTMLElement) element.focus()
    })
  }

  function onNext() {
    if (!validateFields(currentFields)) {
      focusField(currentFields.find((field) => validateField(field, values[field])))
      return
    }
    const nextStep = Math.min(step + 1, totalSteps - 1)
    setStep(nextStep)
    setErrors({})
    setTouched({})
    focusField(steps[nextStep]?.[0])
  }

  function onBack() {
    const prevStep = Math.max(step - 1, 0)
    setStep(prevStep)
    setErrors({})
    setTouched({})
    focusField(steps[prevStep]?.[0])
  }

  async function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()

    if (!submissionEnabled) {
      setState('error')
      setError(disabledReason || 'Form submissions are temporarily unavailable.')
      return
    }

    if (!validateFields(currentFields)) {
      focusField(currentFields.find((field) => validateField(field, values[field])))
      return
    }

    setState('submitting')
    setError('')

    try {
      await submitLead({
        kind: mode,
        name: values.name,
        email: values.email,
        company: values.company,
        phone: values.phone,
        message: values.message,
        annualEnergySpend: values.annualEnergySpend,
        prioritySolution: values.prioritySolution,
      })

      setValues(emptyValues)
      setErrors({})
      setTouched({})
      setStep(0)
      setState('success')
    } catch (submissionError) {
      const detail =
        submissionError instanceof Error
          ? submissionError.message
          : 'Something went wrong. Please try again.'

      setError(detail)
      setState('error')
    }
  }

  const inputClass = "flex w-full rounded-md border border-slate-300 bg-white px-4 py-3 text-sm font-medium shadow-sm transition-all hover:border-slate-400 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gpower-green focus-visible:border-gpower-green disabled:cursor-not-allowed disabled:opacity-50"
  const selectClass = "flex w-full rounded-md border border-slate-300 bg-white px-4 py-3 text-sm font-medium shadow-sm transition-all hover:border-slate-400 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gpower-green focus-visible:border-gpower-green disabled:cursor-not-allowed disabled:opacity-50 appearance-none bg-no-repeat bg-[url('data:image/svg+xml;charset=US-ASCII,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%2224%22%20height%3D%2224%22%20viewBox%3D%220%200%2024%2024%22%20fill%3D%22none%22%20stroke%3D%22currentColor%22%20stroke-width%3D%222%22%20stroke-linecap%3D%22round%22%20stroke-linejoin%3D%22round%22%3E%3Cpolyline%20points%3D%226%209%2012%2015%2018%209%22%3E%3C%2Fpolyline%3E%3C%2Fsvg%3E')] bg-[position:right_16px_center] bg-[length:16px_16px] pr-12"
  const errorInputClass = "border-red-500 focus-visible:ring-red-500/50 focus-visible:border-red-500 bg-red-50"

  function renderLabel(name: FieldName, control: ReactNode) {
    const meta = fieldMeta[name]
    const shownError = touched[name] ? errors[name] : ''
    return (
      <div className="flex flex-col gap-1.5">
        <label className="text-sm font-semibold text-gpower-navy">
          {meta.label}
          {meta.required && (
            <span className="text-red-500 ml-1" aria-hidden="true">*</span>
          )}
        </label>
        {control}
        {shownError && (
          <span className="text-xs text-red-500 font-medium mt-1" id={`${name}-error`} role="alert">
            {shownError}
          </span>
        )}
      </div>
    )
  }

  function renderInput(name: FieldName, type = 'text', autoComplete?: string) {
    const shownError = touched[name] ? errors[name] : ''
    return renderLabel(
      name,
      <input
        type={type}
        name={name}
        value={values[name]}
        autoComplete={autoComplete}
        aria-invalid={shownError ? true : undefined}
        aria-describedby={shownError ? `${name}-error` : undefined}
        onChange={(event) => setValue(name, event.target.value)}
        onBlur={() => onBlurField(name)}
        className={`${inputClass} ${shownError ? errorInputClass : ''}`}
      />,
    )
  }

  function renderSelect(name: FieldName, placeholder: string, options: string[]) {
    const shownError = touched[name] ? errors[name] : ''
    return renderLabel(
      name,
      <select
        name={name}
        value={values[name]}
        aria-invalid={shownError ? true : undefined}
        aria-describedby={shownError ? `${name}-error` : undefined}
        onChange={(event) => setValue(name, event.target.value)}
        onBlur={() => onBlurField(name)}
        className={`${selectClass} ${shownError ? errorInputClass : ''} ${values[name] === '' ? 'text-slate-400' : ''}`}
      >
        <option value="" disabled>
          {placeholder}
        </option>
        {options.map((option) => (
          <option key={option} value={option}>
            {option}
          </option>
        ))}
      </select>,
    )
  }

  function renderTextArea(name: FieldName) {
    const shownError = touched[name] ? errors[name] : ''
    return renderLabel(
      name,
      <textarea
        name={name}
        rows={4}
        value={values[name]}
        aria-invalid={shownError ? true : undefined}
        aria-describedby={shownError ? `${name}-error` : undefined}
        onChange={(event) => setValue(name, event.target.value)}
        onBlur={() => onBlurField(name)}
        className={`flex w-full rounded-md border border-slate-300 bg-white px-4 py-3 text-sm font-medium shadow-sm transition-all hover:border-slate-400 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gpower-green focus-visible:border-gpower-green disabled:cursor-not-allowed disabled:opacity-50 min-h-[120px] resize-y ${shownError ? errorInputClass : ''}`}
      />,
    )
  }

  function renderStepFields() {
    if (mode === 'assessment' && step === 1) {
      return (
        <div className="space-y-5">
          <div className="grid sm:grid-cols-2 gap-5">
            {renderSelect('annualEnergySpend', 'Select range', [
              'Below 1 Cr',
              '1 Cr - 10 Cr',
              '10 Cr+',
            ])}
            {renderSelect('prioritySolution', 'Select solution', [
              'Solar Energy Solutions',
              'Green Hydrogen Solutions',
              'Battery Energy Storage (BESS)',
              'Fuel Cell Solutions',
            ])}
          </div>
          {renderTextArea('message')}
        </div>
      )
    }

    return (
      <div className="space-y-5">
        <div className="grid sm:grid-cols-2 gap-5">
          {renderInput('name', 'text', 'name')}
          {renderInput('email', 'email', 'email')}
        </div>
        <div className="grid sm:grid-cols-2 gap-5">
          {renderInput('company', 'text', 'organization')}
          {renderInput('phone', 'tel', 'tel')}
        </div>
        {mode === 'contact' && renderTextArea('message')}
      </div>
    )
  }

  return (
    <section className="relative py-24 lg:py-32 overflow-hidden" id={assessmentSection.id}>
      <div
        className="absolute inset-0 bg-cover bg-center z-0"
        aria-hidden="true"
        style={{ backgroundImage: `url(/contactus.webp)` }}
      />
      <div className="absolute inset-0 bg-gpower-navy/90 z-0" aria-hidden="true" />
      {/* Decorative Brand Watermark */}
      <div className="absolute top-1/2 left-1/4 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] opacity-[0.02] pointer-events-none z-0 brightness-0 invert" aria-hidden="true">
        <img src={`${import.meta.env.BASE_URL}logo.svg`} alt="" className="w-full h-full object-contain" />
      </div>

      <div className="container mx-auto px-6 xl:px-0 relative z-10 grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
        <div className="text-white">
          <p className="text-gpower-green font-bold tracking-widest uppercase text-xs mb-4">{assessmentSection.eyebrow}</p>
          <h2 className="text-4xl lg:text-5xl font-bold tracking-tight mb-6 leading-tight font-heading">{assessmentSection.title}</h2>
          <p className="text-lg text-white/80 leading-relaxed mb-10 max-w-lg">{assessmentSection.body}</p>
          <ul className="space-y-4">
            {assessmentHighlights.map((item) => (
              <li key={item} className="flex items-center gap-3">
                <CheckCircle2Icon className="w-6 h-6 text-gpower-green shrink-0" />
                <span className="text-white font-medium">{item}</span>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <Card className="border border-slate-200 shadow-2xl bg-white rounded-2xl overflow-hidden">
            <CardContent className="p-8 lg:p-12">
              <h3 className="text-2xl font-bold text-gpower-navy mb-8 font-heading">{formTitle}</h3>

              <div className="flex bg-slate-100 p-1 rounded-md mb-8" role="group" aria-label="Form mode">
                <button
                  type="button"
                  className={`flex-1 py-2 px-4 rounded text-sm font-semibold transition-all duration-200 ${mode === 'assessment' ? 'bg-white text-gpower-navy shadow-sm' : 'text-slate-500 hover:text-gpower-navy'}`}
                  onClick={() => switchMode('assessment')}
                >
                  Assessment
                </button>
                <button
                  type="button"
                  className={`flex-1 py-2 px-4 rounded text-sm font-semibold transition-all duration-200 ${mode === 'contact' ? 'bg-white text-gpower-navy shadow-sm' : 'text-slate-500 hover:text-gpower-navy'}`}
                  onClick={() => switchMode('contact')}
                >
                  Contact
                </button>
              </div>

              {mode === 'assessment' && (
                <div className="mb-8">
                  <div className="h-1.5 bg-slate-100 rounded-full overflow-hidden mb-2" aria-hidden="true">
                    <div className="h-full bg-gpower-green transition-all duration-300" style={{ width: `${((step + 1) / totalSteps) * 100}%` }} />
                  </div>
                  <p className="text-xs font-semibold text-slate-400 tracking-wider uppercase" aria-live="polite">
                    Step {step + 1} of {totalSteps}
                  </p>
                </div>
              )}

              {state === 'success' ? (
                <div className="text-center py-12" role="status">
                  <div className="w-16 h-16 bg-emerald-50 text-gpower-green rounded-full flex items-center justify-center mx-auto mb-6">
                    <CheckCircle2Icon className="w-8 h-8" />
                  </div>
                  <p className="text-xl font-bold text-gpower-navy mb-6">
                    Thank you. Your request has been submitted.
                  </p>
                  <Button variant="outline" onClick={() => setState('idle')} className="rounded-md">
                    Submit another response
                  </Button>
                </div>
              ) : (
                <form
                  ref={formRef}
                  onSubmit={(event) => {
                    void onSubmit(event)
                  }}
                  noValidate
                  className="space-y-6"
                >
                  {renderStepFields()}

                  <div className="flex items-center gap-4 pt-6 mt-6 border-t border-slate-100">
                    {step > 0 && (
                      <Button variant="outline" type="button" onClick={onBack} className="rounded-md px-6 border-slate-300 text-slate-700">
                        Back
                      </Button>
                    )}
                    {isLastStep ? (
                      <Button
                        type="submit"
                        className="rounded-md bg-gpower-navy text-white hover:bg-slate-800 shadow-md transition-all text-sm font-semibold h-11 flex-1"
                        disabled={!submissionEnabled || state === 'submitting'}
                        aria-busy={state === 'submitting' ? true : undefined}
                      >
                        {state === 'submitting'
                          ? 'Submitting…'
                          : mode === 'assessment'
                            ? 'Get Your Free Assessment'
                            : 'Send Message'}
                      </Button>
                    ) : (
                      <Button
                        type="button"
                        onClick={onNext}
                        className="rounded-md bg-gpower-navy text-white hover:bg-slate-800 shadow-md transition-all text-sm font-semibold h-11 flex-1"
                      >
                        Continue
                      </Button>
                    )}
                  </div>

                  {!submissionEnabled && (
                    <p className="text-sm text-red-500 text-center font-medium mt-4" role="status" aria-live="polite">
                      {disabledReason}
                    </p>
                  )}

                  <div role="alert" aria-live="assertive" aria-atomic="true">
                    {state === 'error' && <p className="text-sm text-red-500 text-center font-medium bg-red-50 py-3 rounded-md mt-4">{error}</p>}
                  </div>
                </form>
              )}
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
