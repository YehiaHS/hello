import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import { useLanguage } from './LanguageContext'
import LanguageSelector from './LanguageSelector'
import { profile } from './data'

const SectionShell = ({ id, label, title, children }) => (
  <section
    id={id}
    aria-labelledby={`${id}-title`}
    className="relative overflow-hidden rounded-[20px] border-4 border-ink bg-white/90 p-10 shadow-brutal transition hover:-translate-y-1 hover:shadow-[12px_12px_0_0_#0e0e10]"
  >
    <div className="flex flex-col gap-6">
      <div>
        <div className="flex items-center gap-3">
          <div className="h-3 w-3 rounded-sm bg-brutalMagenta shadow-brutalSm" />
          <p className="font-mono text-sm uppercase tracking-[0.3em] text-ink/60">{label}</p>
        </div>
        <h2 id={`${id}-title`} className="mt-4 text-3xl font-semibold md:text-4xl">
          {title}
        </h2>
      </div>
      {children}
    </div>
  </section>
)

SectionShell.propTypes = {
  id: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
}

const Hero = () => {
  const { t } = useLanguage()
  
  return (
    <header className="relative overflow-hidden rounded-[28px] border-4 border-ink bg-white p-10 shadow-brutal md:p-16">
      <div className="absolute -left-24 -top-24 h-48 w-48 rotate-6 border-4 border-ink bg-brutalYellow opacity-70" />
      <div className="absolute -right-20 bottom-12 h-36 w-36 -rotate-6 border-4 border-ink bg-brutalCyan opacity-70" />
      <div className="pointer-events-none absolute inset-0 mix-blend-multiply" aria-hidden>
        <div className="absolute right-6 top-8 h-28 w-28 rotate-12 border-4 border-ink bg-brutalMagenta/80 blur-[1px] animate-flicker" />
        <div className="absolute left-20 bottom-4 h-20 w-64 -skew-y-6 border-4 border-ink bg-gradient-to-r from-brutalYellow via-brutalCyan to-brutalMagenta opacity-70" />
      </div>
      <div className="relative grid gap-12 md:grid-cols-[1.4fr_1fr]">
        <div className="space-y-6">
          <div className="inline-flex items-center gap-3 rounded-full border-2 border-ink bg-brutalCyan px-5 py-2 font-mono text-xs uppercase tracking-[0.2em] shadow-brutalSm">
            {t('portfolio')}
          </div>
          <div className="text-2xl font-medium text-ink/70 md:text-3xl">
            {t('hello')}
          </div>
          <h1 className="text-4xl font-semibold leading-tight md:text-6xl">
            {profile.name}
          </h1>
          <p className="max-w-xl text-lg font-medium text-ink/80 md:text-xl">
            {t('tagline')}
          </p>
        <p className="max-w-2xl text-lg text-ink/70">{profile.summary}</p>
        <div className="flex flex-wrap gap-4">
          {profile.highlights.map((item) => (
            <span
              key={item}
              className="rounded-md border-2 border-ink bg-alabaster px-4 py-2 font-mono text-xs uppercase tracking-[0.2em] shadow-brutalSm"
            >
              {item}
            </span>
          ))}
        </div>
      </div>
      <div className="relative flex flex-col gap-4 rounded-[20px] border-4 border-ink bg-alabaster p-6 text-sm shadow-brutal">
        <div className="flex items-center justify-between border-b-2 border-dashed border-ink pb-4">
          <span className="font-mono text-xs uppercase tracking-[0.3em] text-ink/70">{t('contactMe')}</span>
          <span className="rounded-md bg-ink px-3 py-1 font-mono text-xs uppercase tracking-[0.3em] text-alabaster shadow-brutalSm">
            Available
          </span>
        </div>
        <div className="space-y-3 font-mono text-sm">
          <div className="flex items-center justify-between">
            <span>WhatsApp</span>
            <a href={`https://wa.me/${profile.contact.whatsapp.replace(/[^0-9]/g, '')}`} target="_blank" rel="noreferrer" className="rounded-sm border-2 border-ink bg-brutalYellow px-2 py-1 text-xs uppercase shadow-brutalSm">
              {profile.contact.whatsapp}
            </a>
          </div>
          <div className="flex items-center justify-between">
            <span>{t('phone')}</span>
            <a href={`tel:${profile.contact.phone}`} className="rounded-sm border-2 border-ink bg-white px-2 py-1 text-xs uppercase shadow-brutalSm">
              {profile.contact.phone}
            </a>
          </div>
          <div className="flex items-center justify-between">
            <span>{t('email')}</span>
            <a href={`mailto:${profile.contact.email}`} className="rounded-sm border-2 border-ink bg-brutalCyan px-2 py-1 text-xs uppercase shadow-brutalSm">
              {profile.contact.email}
            </a>
          </div>
          <div className="flex items-center justify-between border-t-2 border-dashed border-ink pt-3">
            <span>{t('location')}</span>
            <span className="rounded-sm border-2 border-ink bg-white px-2 py-1 text-xs uppercase shadow-brutalSm">
              {profile.location}
            </span>
          </div>
        </div>
      </div>
    </div>
  </header>
  )
}

const BrutalistTicker = () => {
  const tickerItems = [
    'Digital Storyteller',
    'Creative Technologist',
    ...profile.highlights,
    'Fluent in Arabic / English / French',
    'Open to Boundary-Pushing Collaborations',
  ]

  const loopItems = [...tickerItems, ...tickerItems]

  return (
    <div className="relative overflow-hidden rounded-[24px] border-4 border-ink bg-ink text-alabaster shadow-brutal">
      <div className="pointer-events-none absolute inset-y-0 left-0 w-16 bg-gradient-to-r from-alabaster/80 to-transparent mix-blend-screen" aria-hidden />
      <div className="pointer-events-none absolute inset-y-0 right-0 w-16 bg-gradient-to-l from-alabaster/80 to-transparent mix-blend-screen" aria-hidden />
      <div className="flex whitespace-nowrap">
        <div className="animate-ticker flex min-w-[200%] items-center gap-10 px-8 py-5">
          {loopItems.map((item, index) => (
            <span
              key={`${item}-${index}`}
              className="flex items-center gap-3 font-mono text-xs uppercase tracking-[0.35em] md:text-sm"
            >
              <span className="h-2 w-2 rounded-sm bg-brutalYellow shadow-brutalSm" />
              {item}
            </span>
          ))}
        </div>
      </div>
      <div className="pointer-events-none absolute inset-0 border-4 border-dashed border-alabaster/40 mix-blend-screen" aria-hidden />
      <div className="pointer-events-none absolute -inset-3 border-4 border-ink opacity-30 blur-[2px]" aria-hidden />
    </div>
  )
}

const SkillsSection = () => {
  const { t } = useLanguage()
  return (
    <SectionShell id="skills" label="Capabilities" title={t('skillsTitle')}>
      <div className="grid gap-6 md:grid-cols-2">
        {profile.skills.map(({ title, items, accent }) => (
          <div key={title} className="flex h-full flex-col gap-4 rounded-[18px] border-4 border-ink bg-white p-6 shadow-brutal">
            <div className={`inline-flex items-center gap-3 rounded-md border-2 border-ink px-4 py-1 font-mono text-xs uppercase tracking-[0.2em] shadow-brutalSm ${accent}`}>
              {title}
            </div>
            <ul className="space-y-3 text-sm text-ink/80">
              {items.map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <span className="mt-1 h-2 w-2 rounded-full bg-ink" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </SectionShell>
  )
}

const AwardsSection = () => {
  const { t } = useLanguage()
  return (
    <SectionShell id="awards" label="Recognition" title={t('awardsTitle')}>
      <div className="grid gap-4 md:grid-cols-2">
      {profile.awards.map((award) => (
        <div
          key={award.name}
          className="flex items-center justify-between rounded-[16px] border-4 border-ink bg-alabaster px-6 py-4 font-mono text-sm shadow-brutalSm"
        >
          <span>{award.name}</span>
          <span className="rounded-md border-2 border-ink bg-white px-3 py-1 text-xs uppercase shadow-brutalSm">
            {award.year}
          </span>
        </div>
      ))}
    </div>
  </SectionShell>
  )
}

const EducationSection = () => {
  const { t } = useLanguage()
  return (
    <SectionShell id="education" label="Education" title={t('educationTitle')}>
      <div className="space-y-6">
        {profile.education.map((item) => (
          <div key={item.degree} className="relative rounded-[18px] border-4 border-ink bg-white p-6 shadow-brutal">
            <div className="flex flex-col gap-2 md:flex-row md:items-center md:justify-between">
              <div>
                <p className="text-xl font-semibold">{item.degree}</p>
                <p className="text-sm font-mono uppercase tracking-[0.2em] text-ink/60">{item.institution}</p>
              </div>
              <div className="flex flex-col items-start gap-2 md:items-end">
                {item.location ? (
                  <span className="rounded-md border-2 border-ink bg-brutalMagenta px-3 py-1 font-mono text-xs uppercase text-alabaster shadow-brutalSm">
                    {item.location}
                  </span>
                ) : null}
                <span className="rounded-md border-2 border-ink bg-brutalYellow px-3 py-1 font-mono text-xs uppercase shadow-brutalSm">
                  {item.period}
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </SectionShell>
  )
}

const ContactSection = () => {
  const { t } = useLanguage()
  return (
    <SectionShell id="contact" label="Stay In Touch" title={t('contactTitle')}>
      <div className="grid gap-6 md:grid-cols-[1.2fr_1fr]">
        <div className="rounded-[18px] border-4 border-ink bg-alabaster p-6 shadow-brutal">
          <h3 className="mb-4 font-mono text-sm uppercase tracking-[0.3em] text-ink/70">Why reach out?</h3>
          <p className="text-base text-ink/80">
            Yehia is excited to contribute to bold, interdisciplinary projects where storytelling meets technology. Open to internships,
            creative collaborations, and junior roles spanning media production, marketing, and software experiences.
          </p>
        </div>
        <div className="flex flex-col gap-4">
          <a
            href={`mailto:${profile.contact.email}`}
            className="flex items-center justify-between rounded-[18px] border-4 border-ink bg-brutalCyan px-6 py-4 font-mono text-sm uppercase shadow-brutal transition hover:-translate-y-1"
          >
            <span>{t('email')}</span>
            <span className="text-right text-xs normal-case">{profile.contact.email}</span>
          </a>
          <a
            href={`https://wa.me/${profile.contact.whatsapp.replace(/[^0-9]/g, '')}`}
            target="_blank"
            rel="noreferrer"
            className="flex items-center justify-between rounded-[18px] border-4 border-ink bg-brutalMagenta px-6 py-4 font-mono text-sm uppercase text-alabaster shadow-brutal transition hover:-translate-y-1"
          >
            <span>WhatsApp</span>
            <span className="text-right text-xs normal-case">{profile.contact.whatsapp}</span>
          </a>
          <a
            href={`tel:${profile.contact.phone}`}
            className="flex items-center justify-between rounded-[18px] border-4 border-ink bg-brutalYellow px-6 py-4 font-mono text-sm uppercase shadow-brutal transition hover:-translate-y-1"
          >
            <span>{t('phone')}</span>
            <span className="text-right text-xs normal-case">{profile.contact.phone}</span>
          </a>
        </div>
      </div>
    </SectionShell>
  )
}

function App() {
  const { t } = useLanguage()
  
  return (
    <div className="min-h-screen bg-alabaster pb-24">
      <LanguageSelector />
      <div className="mx-auto flex w-full max-w-6xl flex-col gap-14 px-4 pt-16 md:gap-16 md:px-10">
        <Hero />
        <BrutalistTicker />
        
        <Link
          to="/portfolio"
          className="group relative overflow-hidden rounded-[24px] border-4 border-ink bg-gradient-to-br from-brutalYellow via-brutalCyan to-brutalMagenta p-1 shadow-brutal transition hover:-translate-y-1 hover:shadow-[12px_12px_0_0_#0e0e10]"
        >
          <div className="flex items-center justify-between rounded-[18px] bg-white px-8 py-6">
            <div className="flex items-center gap-4">
              <div className="flex h-12 w-12 items-center justify-center rounded-md border-2 border-ink bg-brutalCyan shadow-brutalSm">
                <span className="text-2xl">🎨</span>
              </div>
              <div>
                <p className="font-mono text-xs uppercase tracking-[0.3em] text-ink/60">Explore</p>
                <h3 className="text-2xl font-semibold">{t('viewPortfolio')}</h3>
              </div>
            </div>
            <span className="text-3xl transition group-hover:translate-x-2">→</span>
          </div>
        </Link>

        <SkillsSection />
        <AwardsSection />
        <EducationSection />
        <ContactSection />
      </div>
      <footer className="mx-auto mt-16 w-full max-w-6xl px-4 md:px-10">
        <div className="rounded-[16px] border-4 border-ink bg-white px-6 py-4 font-mono text-xs uppercase tracking-[0.3em] text-ink/70 shadow-brutalSm">
          Designed for Yehia Hatem Salah Salem · {new Date().getFullYear()}
        </div>
      </footer>
    </div>
  )
}

export default App
