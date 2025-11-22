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
  <div className="group relative flex h-full flex-col border-4 border-ink bg-white shadow-brutal transition-all hover:-translate-y-2 hover:shadow-brutalLg">
    <div className="relative aspect-video overflow-hidden border-b-4 border-ink bg-ink">
      {work.media.type === 'video' ? (
        <video
          src={work.media.src}
          poster={work.media.poster}
          controls
          className="h-full w-full object-cover opacity-80 transition-opacity group-hover:opacity-100"
          preload="metadata"
        />
      ) : (
        <img
          src={work.media.src}
          alt={work.title}
          className="h-full w-full object-cover opacity-80 transition-opacity group-hover:opacity-100 grayscale group-hover:grayscale-0"
        />
      )}
      <div className="pointer-events-none absolute inset-0 border-4 border-dashed border-white/20" aria-hidden />
      <div className="absolute top-4 right-4 bg-brutalYellow border-2 border-ink px-3 py-1 font-mono text-xs uppercase tracking-widest shadow-brutalSm z-10">
        {work.category}
      </div>
    </div>
    <div className="flex flex-1 flex-col gap-6 p-8 bg-white group-hover:bg-brutalCyan transition-colors">
      <div className="flex items-center justify-between border-b-4 border-ink pb-4">
        <h3 className="text-3xl font-black uppercase leading-none">{work.title}</h3>
        <span className="font-mono text-sm font-bold">{work.year}</span>
      </div>
      <div>
        <p className="text-lg font-medium leading-relaxed text-ink">{work.description}</p>
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
        <header className="mb-16 flex flex-col gap-8 md:flex-row md:items-end md:justify-between border-b-8 border-ink pb-8">
          <div>
            <Link
              to="/"
              className="mb-6 inline-flex items-center gap-2 font-mono text-sm uppercase tracking-widest text-ink font-bold hover:bg-brutalMagenta hover:text-white px-2 py-1 transition-colors"
            >
              <span className="text-xl">←</span> {t('backToHome')}
            </Link>
            <h1 className="text-6xl font-black uppercase md:text-8xl tracking-tighter">{t('portfolioTitle')}</h1>
          </div>
          <div className="max-w-xl">
            <p className="text-xl font-bold text-ink border-l-4 border-brutalYellow pl-4">
              {t('portfolioSubtitle')}
            </p>
            <p className="mt-4 text-lg text-ink/80 font-mono">
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

        <div className="mt-24 border-4 border-ink bg-ink p-10 shadow-brutalReverse text-alabaster">
          <h2 className="mb-6 font-mono text-lg uppercase tracking-widest text-brutalYellow font-bold">
            How to Add Your Work
          </h2>
          <div className="space-y-4 text-base font-mono">
            <p className="flex items-center gap-4">
              <span className="bg-brutalMagenta text-white px-2 font-bold">1</span>
              <span>Place your media files (images/videos) in the <code className="bg-white/10 px-2 py-1">/public/portfolio/</code> directory.</span>
            </p>
            <p className="flex items-center gap-4">
              <span className="bg-brutalCyan text-ink px-2 font-bold">2</span>
              <span>Edit <code className="bg-white/10 px-2 py-1">src/portfolioData.js</code> to add your project details.</span>
            </p>
            <p className="flex items-center gap-4">
              <span className="bg-brutalLime text-ink px-2 font-bold">3</span>
              <span>Supported formats: JPG, PNG, GIF for images; MP4, WebM for videos.</span>
            </p>
            <p className="flex items-center gap-4">
              <span className="bg-brutalYellow text-ink px-2 font-bold">4</span>
              <span>The carousel will automatically update with your new entries.</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Portfolio
