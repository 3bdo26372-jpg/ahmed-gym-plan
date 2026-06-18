import { useEffect, useState } from 'react'
import { ArrowUpRight, Clock3, Dumbbell, Gauge, Maximize2, Target, X } from 'lucide-react'
import { dayArabic, exerciseArabic, muscleArabic, ui, type Language } from './i18n'
import { exercisesForDay, workoutDays, type Exercise } from './workouts'

function ExerciseCard({ exercise, index, language, onPreview }: { exercise: Exercise; index: number; language: Language; onPreview: (exercise: Exercise) => void }) {
  const text = ui[language]
  const arabic = exerciseArabic[exercise.translationKey]
  const isArabic = language === 'ar'

  return (
    <article className="exercise-card">
      <button className="exercise-media" onClick={() => onPreview(exercise)} aria-label={`${text.openImage}: ${exercise.name}`}>
        <img src={exercise.image} alt={`${exercise.name} exercise demonstration`} loading="lazy" />
        <span className="exercise-index">{String(index + 1).padStart(2, '0')}</span>
        <span className="expand-image"><Maximize2 /></span>
      </button>
      <div className="exercise-content">
        <div className="exercise-title">
          <span>{isArabic ? muscleArabic[exercise.muscle] : exercise.muscle}</span>
          <h2 className={isArabic ? 'bilingual-name' : ''}>
            <span className="english-name">{exercise.name}</span>
            {isArabic && <small>{arabic.name}</small>}
          </h2>
        </div>
        <div className="exercise-stats">
          <div><Target /><span>{text.sets}<strong>{exercise.prescription}</strong></span></div>
          <div><Gauge /><span>{text.effort}<strong>RPE {exercise.rpe}</strong></span></div>
          <div><Clock3 /><span>{text.rest}<strong>{exercise.rest}</strong></span></div>
        </div>
        <div className="exercise-notes">
          <div><span>{text.technique}</span><p>{isArabic ? arabic.tip : exercise.tip}</p></div>
          <div><span>{text.why}</span><p>{isArabic ? arabic.why : exercise.why}</p></div>
        </div>
      </div>
    </article>
  )
}

export default function App() {
  const initialId = window.location.hash.replace('#/', '')
  const [activeId, setActiveId] = useState(workoutDays.some((day) => day.id === initialId) ? initialId : workoutDays[0].id)
  const [language, setLanguage] = useState<Language>(() => localStorage.getItem('ahmed-gym-language') === 'ar' ? 'ar' : 'en')
  const [preview, setPreview] = useState<Exercise | null>(null)
  const activeDay = workoutDays.find((day) => day.id === activeId) ?? workoutDays[0]
  const exercises = exercisesForDay(activeDay)
  const text = ui[language]
  const isArabic = language === 'ar'

  useEffect(() => {
    document.documentElement.lang = language
    document.documentElement.dir = isArabic ? 'rtl' : 'ltr'
    localStorage.setItem('ahmed-gym-language', language)
  }, [language, isArabic])

  useEffect(() => {
    const nav = document.querySelector('.header-nav')
    const active = nav?.querySelector('button.active')
    if (nav && active && nav.scrollWidth > nav.clientWidth) active.scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'center' })
  }, [activeId, language])

  useEffect(() => {
    if (!preview) return
    const closeOnEscape = (event: KeyboardEvent) => { if (event.key === 'Escape') setPreview(null) }
    document.body.style.overflow = 'hidden'
    window.addEventListener('keydown', closeOnEscape)
    return () => {
      document.body.style.overflow = ''
      window.removeEventListener('keydown', closeOnEscape)
    }
  }, [preview])

  const chooseDay = (id: string) => {
    setActiveId(id)
    window.history.replaceState(null, '', `#/${id}`)
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <div className="app" dir={isArabic ? 'rtl' : 'ltr'}>
      <header className="site-header">
        <a href="#/upper-a" className="brand" onClick={(event) => { event.preventDefault(); chooseDay('upper-a') }}>
          <span className="brand-icon"><Dumbbell /></span>
          <span><strong>{text.brand}</strong><small>{text.brandSub}</small></span>
        </a>
        <nav className="header-nav" aria-label={text.navLabel}>
          {workoutDays.map((day) => (
            <button key={day.id} className={day.id === activeId ? 'active' : ''} onClick={() => chooseDay(day.id)}>
              {isArabic ? dayArabic[day.id].label : day.label}
            </button>
          ))}
        </nav>
        <div className="header-actions">
          <button className="language-switch" onClick={() => setLanguage(isArabic ? 'en' : 'ar')} aria-label={text.switchLabel}>
            <span className={!isArabic ? 'selected' : ''}>EN</span><i /> <span className={isArabic ? 'selected' : ''}>AR</span>
          </button>
        </div>
      </header>

      <main>
        <section className="intro">
          <div className="intro-copy">
            <span className="section-label">{text.kicker}</span>
            <h1>{text.heroTitle1}<br />{text.heroTitle2}</h1>
            <p>{text.heroText}</p>
          </div>
          <div className="week-card">
            <span>{text.thisWeek}</span>
            <strong>{text.strength}</strong>
            <strong>{text.cardio}</strong>
            <small>{text.sessions}</small>
          </div>
        </section>

        <section className="workout-section" key={`${activeDay.id}-${language}`}>
          <div className="workout-heading">
            <div>
              <span className="section-label">{text.session} {String(workoutDays.indexOf(activeDay) + 1).padStart(2, '0')}</span>
              <h1>{isArabic ? dayArabic[activeDay.id].label : activeDay.label}</h1>
              <p>{isArabic ? dayArabic[activeDay.id].focus : activeDay.focus}</p>
            </div>
            <div className="workout-count"><strong>{exercises.length}</strong><span>{text.exercises}</span></div>
          </div>

          <div className="exercise-grid">
            {exercises.map((exercise, index) => <ExerciseCard key={exercise.id} exercise={exercise} index={index} language={language} onPreview={setPreview} />)}
          </div>

          <aside className="reminder">
            <div className="reminder-icon"><ArrowUpRight /></div>
            <div><span>{text.overload}</span><h3>{text.ready}</h3><p>{text.reminderStart} <strong>2.5–5%</strong> {text.reminderEnd}</p></div>
          </aside>
        </section>
      </main>

      <footer><span>{text.brand} {text.brandSub}</span><p>{text.footer}</p></footer>

      {preview && (
        <div className="image-lightbox" role="presentation" onClick={() => setPreview(null)}>
          <div className="lightbox-dialog" role="dialog" aria-modal="true" aria-label={preview.name} onClick={(event) => event.stopPropagation()}>
            <button className="lightbox-close" onClick={() => setPreview(null)} aria-label={text.closeImage}><X /></button>
            <img src={preview.image} alt={`${preview.name} exercise demonstration`} />
            <div className="lightbox-caption">
              <strong>{preview.name}</strong>
              {isArabic && <span>{exerciseArabic[preview.translationKey].name}</span>}
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
