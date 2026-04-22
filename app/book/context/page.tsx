'use client'

import { useState, useEffect } from 'react'
import { useRouter } from 'next/navigation'
import { ArrowRight } from 'lucide-react'
import { useBooking } from '../BookingProvider'
import Button from '@/components/ui/Button'

const GENDER_OPTIONS = ['Male', 'Female', 'Other', 'Prefer not to say']

type Question = { id: string; question: string; options: string[] }

const CONTEXT_QUESTIONS: Record<string, Question[]> = {
  'I have a medical condition': [
    {
      id: 'condition',
      question: 'What best describes your condition?',
      options: ['Diabetes / Neuropathy', 'Arthritis', 'Plantar fasciitis', 'Heel pain', 'Back or knee issues', 'Other'],
    },
    {
      id: 'duration',
      question: 'How long have you been managing this?',
      options: ['Less than 3 months', '3–12 months', '1–3 years', 'More than 3 years'],
    },
    {
      id: 'care',
      question: 'Is a healthcare professional involved in your care?',
      options: ['Yes — doctor or physio', 'Not currently', 'No'],
    },
  ],
  "I'm recovering from an injury or surgery": [
    {
      id: 'injury_type',
      question: 'What type of injury or procedure?',
      options: ['Foot or ankle surgery', 'Knee surgery', 'Ligament or tendon injury', 'Fracture recovery', 'Sports injury', 'Other'],
    },
    {
      id: 'recovery_stage',
      question: 'Where are you in your recovery?',
      options: ['Early (0–6 weeks)', 'Mid (6 weeks – 3 months)', 'Late (3–6 months)', 'Long-term (6+ months)'],
    },
    {
      id: 'physio',
      question: 'Are you working with a physiotherapist?',
      options: ['Yes', 'Not yet', 'No'],
    },
  ],
  'I have structural foot issues': [
    {
      id: 'structure',
      question: 'What best describes your foot structure?',
      options: ['Flat feet (fallen arches)', 'High arches', 'Bunion or hallux', 'Hammertoes', 'Wide or narrow feet', 'Not sure'],
    },
    {
      id: 'discomfort',
      question: 'Do you experience pain or discomfort?',
      options: ['Yes, regularly', 'Occasionally', 'No — mostly awareness'],
    },
  ],
  "I'm an athlete or active person": [
    {
      id: 'sport',
      question: 'What is your primary sport or activity?',
      options: ['Running', 'Court sports', 'Team sports', 'Gym / Weightlifting', 'Cycling', 'Multiple sports'],
    },
    {
      id: 'frequency',
      question: 'How often do you train?',
      options: ['Daily', '4–5 times a week', '2–3 times a week', 'Occasionally'],
    },
    {
      id: 'concern',
      question: 'What is your primary concern?',
      options: ['Performance optimisation', 'Injury prevention', 'Pain during activity', 'Recovery', 'None — general interest'],
    },
  ],
  'I stand or walk for long hours': [
    {
      id: 'hours',
      question: 'How many hours per day do you stand or walk?',
      options: ['4–6 hours', '6–8 hours', '8–10 hours', '10+ hours'],
    },
    {
      id: 'surface',
      question: 'What surface do you primarily work on?',
      options: ['Hard floor (concrete or tile)', 'Mixed surfaces', 'Outdoor or uneven terrain', 'Office or carpeted'],
    },
    {
      id: 'fatigue',
      question: 'Do you experience end-of-day foot or leg fatigue?',
      options: ['Yes, significant', 'Sometimes', 'Rarely'],
    },
  ],
  'I want to understand how I move': [
    {
      id: 'motivation',
      question: 'What is your primary motivation?',
      options: ['General curiosity', 'Optimise daily movement', 'Understanding posture', 'Preventive health', 'Doctor or physio suggested'],
    },
    {
      id: 'concerns',
      question: 'Do you have any current foot or lower-limb concerns?',
      options: ['Yes', 'No'],
    },
  ],
}

function StepProgress({ current }: { current: number }) {
  return (
    <div className="mb-10">
      <p className="eyebrow mb-3">Step {current} of 4</p>
      <div className="flex gap-1.5">
        {[1, 2, 3, 4].map(s => (
          <div
            key={s}
            className={`h-0.5 flex-1 rounded-full transition-colors duration-300 ${
              s <= current ? 'bg-amber' : 'bg-ink-border'
            }`}
          />
        ))}
      </div>
    </div>
  )
}

function OptionButton({
  label,
  selected,
  onClick,
}: {
  label: string
  selected: boolean
  onClick: () => void
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={`w-full text-left px-4 py-3 rounded-xl border text-sm transition-all duration-200 ${
        selected
          ? 'border-amber bg-amber/10 text-bone font-medium'
          : 'border-ink-border bg-ink-card text-bone-dim hover:border-amber/40 hover:text-bone'
      }`}
    >
      {label}
    </button>
  )
}

export default function StepContext() {
  const router = useRouter()
  const { data, update } = useBooking()

  useEffect(() => {
    if (!data.intent) router.replace('/book/you')
  }, [data.intent, router])

  const [age, setAge] = useState(data.age)
  const [gender, setGender] = useState(data.gender)
  const [answers, setAnswers] = useState<Record<string, string>>(data.contextAnswers)

  const questions = CONTEXT_QUESTIONS[data.intent] ?? []

  const answeredCount = questions.filter(q => answers[q.id]).length
  const revealedCount = Math.min(answeredCount + 1, questions.length)
  const showContext = age.trim().length > 0 && gender !== ''

  const allContextAnswered = questions.length === 0 || questions.every(q => answers[q.id])
  const isValid = age.trim().length > 0 && gender !== '' && allContextAnswered

  const handleAnswer = (questionId: string, answer: string) => {
    setAnswers(prev => ({ ...prev, [questionId]: answer }))
  }

  const handleContinue = () => {
    if (!isValid) return
    update({ age: age.trim(), gender, contextAnswers: answers })
    router.push('/book/schedule')
  }

  return (
    <div className="min-h-screen py-16 px-5 md:px-8">
      <div className="max-w-lg mx-auto animate-fade-up">
        <StepProgress current={2} />

        <div className="mb-8">
          <h1 className="heading-lg mb-2">Tell us more</h1>
          <p className="body-md">We use this to calibrate your assessment.</p>
        </div>

        <div className="space-y-6">
          {/* Age */}
          <div>
            <label className="block text-sm font-medium text-bone mb-2">
              Age <span className="text-amber">*</span>
            </label>
            <input
              type="number"
              min={1}
              max={120}
              value={age}
              onChange={e => setAge(e.target.value)}
              placeholder="e.g. 34"
              className="w-full bg-ink-card border border-ink-border rounded-xl px-4 py-3 text-sm text-bone placeholder-bone-muted focus:outline-none focus:border-amber/60 transition-colors"
            />
          </div>

          {/* Gender — appears after age is entered */}
          {age.trim().length > 0 && (
            <div className="animate-fade-up">
              <label className="block text-sm font-medium text-bone mb-3">
                Gender <span className="text-amber">*</span>
              </label>
              <div className="grid grid-cols-2 gap-2">
                {GENDER_OPTIONS.map(opt => (
                  <OptionButton
                    key={opt}
                    label={opt}
                    selected={gender === opt}
                    onClick={() => setGender(opt)}
                  />
                ))}
              </div>
              <p className="text-xs text-bone-muted mt-2">Used to calibrate your movement profile.</p>
            </div>
          )}

          {/* Context questions — progressive reveal */}
          {showContext &&
            questions.slice(0, revealedCount).map(q => (
              <div key={q.id} className="animate-fade-up">
                <div className="divider mb-6" />
                <label className="block text-sm font-medium text-bone mb-3">
                  {q.question} <span className="text-amber">*</span>
                </label>
                <div className="space-y-2">
                  {q.options.map(opt => (
                    <OptionButton
                      key={opt}
                      label={opt}
                      selected={answers[q.id] === opt}
                      onClick={() => handleAnswer(q.id, opt)}
                    />
                  ))}
                </div>
              </div>
            ))}

          {/* CTA — only appears when all questions answered */}
          {isValid && (
            <div className="animate-fade-up pt-2">
              <Button
                variant="primary"
                size="lg"
                className="w-full"
                onClick={handleContinue}
              >
                Continue <ArrowRight size={16} />
              </Button>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
