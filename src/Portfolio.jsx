import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, Pagination, Keyboard, Mousewheel } from 'swiper/modules'
import { useLanguage } from './LanguageContext'
import LanguageSelector from './LanguageSelector'
import { portfolioWorks } from './portfolioData'

import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'

const WorkItem = ({ work }) => (
  <div className="relative flex h-full flex-col overflow-hidden rounded-[24px] border-4 border-ink bg-white shadow-brutal">
    <div className="relative aspect-video overflow-hidden border-b-4 border-ink bg-alabaster">
      {work.media.type === 'video' ? (
        <video
          src={work.media.src}
          poster={work.media.poster}
          controls
          className="h-full w-full object-cover"
          preload="metadata"
        />
      ) : (
        <img
          src={work.media.src}
          alt={work.title}
          className="h-full w-full object-cover"
        />
      )}
      <div className="pointer-events-none absolute inset-0 border-4 border-dashed border-ink/20" aria-hidden />
    </div>
    <div className="flex flex-1 flex-col gap-4 p-8">
      <div className="flex items-center justify-between gap-4">
        <span className="inline-flex rounded-md border-2 border-ink bg-brutalYellow px-3 py-1 font-mono text-xs uppercase tracking-[0.2em] shadow-brutalSm">
          {work.category}
        </span>
        <span className="font-mono text-sm text-ink/60">{work.year}</span>
      </div>
      <div>
        <h3 className="text-2xl font-semibold">{work.title}</h3>
        <p className="mt-3 text-base leading-relaxed text-ink/70">{work.description}</p>
      </div>
    </div>
  </div>
)

WorkItem.propTypes = {
  work: PropTypes.shape({
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    category: PropTypes.string.isRequired,
    thumbnail: PropTypes.string.isRequired,
    media: PropTypes.shape({
      type: PropTypes.oneOf(['image', 'video']).isRequired,
      src: PropTypes.string.isRequired,
      poster: PropTypes.string,
    }).isRequired,
    year: PropTypes.string.isRequired,
  }).isRequired,
}

function Portfolio() {
  const { t } = useLanguage()
  
  return (
    <div className="min-h-screen bg-alabaster pb-24">
      <LanguageSelector />
      <div className="mx-auto w-full max-w-7xl px-4 pt-16 md:px-10">
        <header className="mb-12 flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
          <div>
            <Link
              to="/"
              className="mb-4 inline-flex items-center gap-2 font-mono text-sm uppercase tracking-[0.2em] text-ink/70 transition hover:text-ink"
            >
              <span className="text-xl">←</span> {t('backToHome')}
            </Link>
            <h1 className="text-4xl font-semibold md:text-5xl">{t('portfolioTitle')}</h1>
            <p className="mt-2 text-lg text-ink/70">{t('portfolioSubtitle')}</p>
            <p className="mt-3 max-w-2xl text-lg text-ink/70">
              A showcase of creative projects spanning video editing, animation, graphic design, and digital storytelling.
            </p>
          </div>
        </header>

        <div className="relative">
          <Swiper
            modules={[Navigation, Pagination, Keyboard, Mousewheel]}
            spaceBetween={40}
            slidesPerView={1}
            navigation
            pagination={{ clickable: true }}
            keyboard={{ enabled: true }}
            mousewheel={{ forceToAxis: true }}
            className="brutalist-swiper"
            breakpoints={{
              768: {
                slidesPerView: 1.2,
                spaceBetween: 40,
              },
            }}
          >
            {portfolioWorks.map((work) => (
              <SwiperSlide key={work.id}>
                <WorkItem work={work} />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

        <div className="mt-16 rounded-[20px] border-4 border-ink bg-white p-8 shadow-brutal">
          <h2 className="mb-4 font-mono text-sm uppercase tracking-[0.3em] text-ink/70">
            How to Add Your Work
          </h2>
          <div className="space-y-3 text-sm text-ink/80">
            <p>
              <strong>1.</strong> Place your media files (images/videos) in the <code className="rounded border border-ink bg-alabaster px-2 py-0.5 font-mono text-xs">/public/portfolio/</code> directory.
            </p>
            <p>
              <strong>2.</strong> Edit <code className="rounded border border-ink bg-alabaster px-2 py-0.5 font-mono text-xs">src/portfolioData.js</code> to add your project details (title, description, category, media paths).
            </p>
            <p>
              <strong>3.</strong> Supported formats: JPG, PNG, GIF for images; MP4, WebM for videos.
            </p>
            <p>
              <strong>4.</strong> The carousel will automatically update with your new entries.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Portfolio
