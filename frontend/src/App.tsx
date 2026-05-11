import { useState } from 'react'
import certificatesIcon from './assets/Certificates Icon.png'
import communityIcon from './assets/community icon.png'
import fireIcon from './assets/fireicon.png'
import heroVisual from './assets/Hero Section.png'
import logoImage from './assets/lerneo logo 1.png'
import phoneIcon from './assets/phone icon.png'
import structuredIcon from './assets/SLPH icon.png'
import Button from './components/ui/Button'
import SectionHeading from './components/ui/SectionHeading'

const NAV_LINKS = [
  { label: 'Home', href: '#top' },
  { label: 'Courses', href: '#courses' },
  { label: 'Pricing', href: '#pricing' },
  { label: 'Resources', href: '#resources' },
] as const

const STATS = [
  { value: '200+', label: 'Courses' },
  { value: '50K+', label: 'Students' },
  { value: '120+', label: 'Instructors' },
  { value: '4.8/5', label: 'Avg Rating' },
]

type FeatureItem = {
  icon?: string
  iconType?: 'bolt'
  title: string
  desc: string
}

const FEATURES: FeatureItem[] = [
  {
    icon: structuredIcon,
    title: 'Structured Learning Paths',
    desc: 'Curated paths from zero to job-ready in web development, AI, design, and more.',
  },
  {
    icon: fireIcon,
    title: 'Hands-on Projects',
    desc: 'Build real projects for your portfolio with guided lessons and practical milestones.',
  },
  {
    iconType: 'bolt',
    title: 'Freemium Access',
    desc: 'Start with free lessons, then upgrade only when you want the full catalog and perks.',
  },
  {
    icon: certificatesIcon,
    title: 'Certificates',
    desc: 'Earn verified certificates that help strengthen your profile and resume.',
  },
  {
    icon: communityIcon,
    title: 'Community',
    desc: 'Ask questions, share progress, and learn alongside other ambitious builders.',
  },
  {
    icon: phoneIcon,
    title: 'Learn Anywhere',
    desc: 'Continue your progress on any device without losing your place.',
  },
]

const CATEGORIES = [
  { icon: 'web', name: 'Web Dev', count: '48 courses' },
  { icon: 'ai', name: 'AI & ML', count: '32 courses' },
  { icon: 'security', name: 'Cybersecurity', count: '24 courses' },
  { icon: 'design', name: 'UI/UX Design', count: '29 courses' },
  { icon: 'data', name: 'Data Science', count: '21 courses' },
  { icon: 'mobile', name: 'Mobile Dev', count: '18 courses' },
  { icon: 'cloud', name: 'Cloud & DevOps', count: '15 courses' },
  { icon: 'game', name: 'Game Dev', count: '12 courses' },
] as const

const COURSES = [
  {
    category: 'Web Development',
    title: 'The Complete HTML & CSS Bootcamp',
    rating: '4.9',
    students: '12.4K students',
    price: 'Free',
    level: 'Beginner',
    cardTone: 'violet',
    icon: 'web',
  },
  {
    category: 'AI & ML',
    title: 'Machine Learning with Python: Zero to Hero',
    rating: '4.8',
    students: '8.7K students',
    price: 'N4,999',
    level: 'Beginner',
    cardTone: 'green',
    icon: 'ai',
  },
  {
    category: 'UI/UX Design',
    title: 'Figma Mastery: Design Beautiful Interfaces',
    rating: '4.9',
    students: '15.6K students',
    price: 'Free',
    level: 'Beginner',
    cardTone: 'gold',
    icon: 'design',
  },
] as const

type TopicIconName = (typeof CATEGORIES)[number]['icon']
type Course = (typeof COURSES)[number]

const categoryIconClasses: Record<TopicIconName, string> = {
  web: 'text-slate-950',
  ai: 'text-slate-950',
  security: 'text-sky-300',
  design: 'text-[#1c1628]',
  data: 'text-slate-950',
  mobile: 'text-indigo-400',
  cloud: 'text-sky-300',
  game: 'text-sky-300',
}

const courseToneClasses: Record<Course['cardTone'], string> = {
  violet: 'bg-[#46197b]',
  green: 'bg-[#0f5f31]',
  gold: 'bg-[#66590d]',
}

const featureAssetClasses: Record<string, string> = {
  'Structured Learning Paths': 'w-6',
  'Hands-on Projects': 'w-5',
  Freemium: 'w-5',
  Certificates: 'w-6',
  Community: 'w-6',
  'Learn Anywhere': 'w-6',
}

const sectionShellClass = 'border-t border-white/5 px-5 py-12 sm:px-8 lg:px-10'

function joinClasses(...classes: Array<string | false | null | undefined>) {
  return classes.filter(Boolean).join(' ')
}

function TopicIcon({
  name,
  className,
  monochrome = false,
}: {
  name: TopicIconName
  className?: string
  monochrome?: boolean
}) {
  const stroke = monochrome ? 'rgba(16, 12, 22, 0.92)' : 'currentColor'
  const fill = monochrome ? 'rgba(16, 12, 22, 0.92)' : 'currentColor'

  switch (name) {
    case 'web':
      return (
        <svg viewBox="0 0 24 24" className={className} aria-hidden="true">
          <rect x="3" y="5" width="18" height="14" rx="2.5" fill="none" stroke={stroke} strokeWidth="1.7" />
          <path d="M8 9.7 6.4 12 8 14.3" fill="none" stroke={stroke} strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M16 9.7 17.6 12 16 14.3" fill="none" stroke={stroke} strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M10.8 15 13.2 9" fill="none" stroke={stroke} strokeWidth="1.7" strokeLinecap="round" />
        </svg>
      )
    case 'ai':
      return (
        <svg viewBox="0 0 24 24" className={className} aria-hidden="true">
          <ellipse cx="12" cy="12" rx="8.8" ry="6.7" fill="none" stroke={stroke} strokeWidth="1.7" />
          <rect x="7.1" y="8" width="9.8" height="8" rx="2.2" fill="none" stroke={stroke} strokeWidth="1.7" />
          <path d="M12 5.8v2M12 16.3v2M5.8 12h1.6M16.6 12h1.6" fill="none" stroke={stroke} strokeWidth="1.5" strokeLinecap="round" />
          <path d="M9.5 12h1M13.5 12h1" fill="none" stroke={stroke} strokeWidth="1.5" strokeLinecap="round" />
        </svg>
      )
    case 'security':
      return (
        <svg viewBox="0 0 24 24" className={className} aria-hidden="true">
          <path d="M12 3.7 18 6.4v4.7c0 4.1-2.5 7.5-6 9-3.5-1.5-6-4.9-6-9V6.4L12 3.7Z" fill="none" stroke={stroke} strokeWidth="1.8" strokeLinejoin="round" />
          <circle cx="12" cy="11.2" r="2.2" fill="none" stroke={stroke} strokeWidth="1.8" />
          <path d="M8.8 15.7c.9-1.4 2-2.1 3.2-2.1s2.4.7 3.2 2.1" fill="none" stroke={stroke} strokeWidth="1.8" strokeLinecap="round" />
        </svg>
      )
    case 'design':
      return (
        <svg viewBox="0 0 24 24" className={className} aria-hidden="true">
          <path d="M12 4c2.9 0 5.2 2.2 5.2 5 0 1.6-.7 2.9-2.2 3.8-.9.5-1.3 1.3-1.3 2.2V17c0 1.6-1.2 2.9-2.9 2.9-1.5 0-2.6-1-2.6-2.3 0-.9.4-1.7 1.2-2.3 1.1-.9 1.6-1.9 1.6-3.2V9c0-2.8 2.2-5 5-5Z" fill="none" stroke={stroke} strokeWidth="1.7" strokeLinejoin="round" />
          <path d="M6.2 9h11.6M12 4v15.8" fill="none" stroke={stroke} strokeWidth="1.3" strokeLinecap="round" opacity="0.8" />
        </svg>
      )
    case 'data':
      return (
        <svg viewBox="0 0 24 24" className={className} aria-hidden="true">
          <ellipse cx="12" cy="6.7" rx="5.8" ry="2.6" fill="none" stroke={stroke} strokeWidth="1.7" />
          <path d="M6.2 6.7v4c0 1.4 2.6 2.6 5.8 2.6s5.8-1.2 5.8-2.6v-4M6.2 10.8v4c0 1.4 2.6 2.6 5.8 2.6s5.8-1.2 5.8-2.6v-4M6.2 14.8V17c0 1.4 2.6 2.6 5.8 2.6s5.8-1.2 5.8-2.6v-2.2" fill="none" stroke={stroke} strokeWidth="1.7" strokeLinecap="round" />
        </svg>
      )
    case 'mobile':
      return (
        <svg viewBox="0 0 24 24" className={className} aria-hidden="true">
          <rect x="7" y="3.6" width="10" height="16.8" rx="2.2" fill="none" stroke={stroke} strokeWidth="1.7" />
          <path d="M10.1 6.5h3.8M11.2 17.2h1.6" fill="none" stroke={stroke} strokeWidth="1.6" strokeLinecap="round" />
          <path d="m9.8 10.2 4.4 3.6M14.2 10.2l-4.4 3.6" fill="none" stroke={stroke} strokeWidth="1.4" strokeLinecap="round" />
        </svg>
      )
    case 'cloud':
      return (
        <svg viewBox="0 0 24 24" className={className} aria-hidden="true">
          <path d="M8.2 18h8.1a4 4 0 0 0 .7-7.8A5 5 0 0 0 7.7 9 3.8 3.8 0 0 0 8.2 18Z" fill={fill} />
        </svg>
      )
    case 'game':
      return (
        <svg viewBox="0 0 24 24" className={className} aria-hidden="true">
          <rect x="4" y="7.5" width="16" height="9" rx="4.2" fill="none" stroke={stroke} strokeWidth="1.7" />
          <path d="M8 12h3M9.5 10.5v3" fill="none" stroke={stroke} strokeWidth="1.7" strokeLinecap="round" />
          <circle cx="15.6" cy="10.8" r="1" fill={fill} />
          <circle cx="17.4" cy="13.1" r="1" fill={fill} />
        </svg>
      )
  }
}

function FeatureIcon({
  icon,
  iconType,
  title,
}: {
  icon?: string
  iconType?: 'bolt'
  title: string
}) {
  if (iconType === 'bolt') {
    return (
      <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-amber-400/15 text-amber-300">
        <svg viewBox="0 0 24 24" className="h-5 w-5 fill-current" aria-hidden="true">
          <path d="M13.2 2 6.8 12h4.3L9.8 22 17.2 11.3h-4L13.2 2Z" />
        </svg>
      </span>
    )
  }

  return (
    <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-fuchsia-500/10">
      <img
        src={icon}
        alt=""
        aria-hidden="true"
        className={joinClasses('h-auto', featureAssetClasses[title] ?? 'w-6')}
      />
    </span>
  )
}

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <header className="sticky top-0 z-40 border-b border-fuchsia-900/45 bg-[#090814]/92 backdrop-blur">
      <div className="mx-auto flex min-h-[58px] w-full max-w-[1440px] items-center justify-between gap-4 px-4 py-2 sm:px-8 lg:px-10">
        <a className="inline-flex items-center gap-2.5" href="#top" aria-label="Lerneo home">
          <img
            src={logoImage}
            alt="Lerneo"
            className="h-auto w-5 object-contain mix-blend-screen brightness-125 contrast-125 saturate-150 [filter:drop-shadow(0_0_8px_rgba(168,24,216,0.18))]"
          />
          <span className="text-xl font-medium tracking-tight text-fuchsia-500">
            Lerneo
          </span>
        </a>

        <button
          type="button"
          className="inline-flex h-11 items-center justify-center rounded-xl border border-fuchsia-800/60 px-4 text-sm font-semibold text-[#f8f5f2] md:hidden"
          aria-expanded={menuOpen}
          aria-controls="primary-nav"
          onClick={() => setMenuOpen((value) => !value)}
        >
          Menu
        </button>

        <div
          id="primary-nav"
          className={joinClasses(
            'absolute left-5 right-5 top-[calc(100%+10px)] rounded-2xl border border-fuchsia-900/40 bg-[#11101d] p-4 shadow-[0_20px_60px_rgba(0,0,0,0.35)] md:static md:flex md:items-center md:gap-5 md:border-0 md:bg-transparent md:p-0 md:shadow-none',
            menuOpen ? 'flex flex-col gap-4' : 'hidden md:flex',
          )}
        >
          <nav className="flex flex-col gap-2 md:flex-row md:items-center md:gap-1" aria-label="Primary">
            {NAV_LINKS.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className={joinClasses(
                  'rounded-xl px-3 py-2 text-[13px] font-semibold text-[#f8f5f2] transition hover:text-fuchsia-300',
                  link.label === 'Home' && 'text-fuchsia-400',
                )}
                onClick={() => setMenuOpen(false)}
              >
                {link.label}
              </a>
            ))}
          </nav>

          <div className="flex flex-col gap-3 md:ml-2 md:flex-row md:items-center md:gap-3">
            <Button variant="primary" fullWidth className="md:w-auto">
              Sign Up
            </Button>
            <Button variant="outline" fullWidth className="md:w-auto">
              Log In
            </Button>
          </div>
        </div>
      </div>
    </header>
  )
}

function HeroSection() {
  return (
    <section className="relative min-h-[540px] overflow-hidden bg-[#090814] sm:min-h-[620px] lg:min-h-[692px]">
      <div className="pointer-events-none absolute inset-y-0 right-0 w-[72%] overflow-hidden sm:w-[68%] md:w-[63%] lg:w-[60%]">
        <img
          src={heroVisual}
          alt=""
          aria-hidden="true"
          className="h-full max-w-none w-[185%] object-cover object-right sm:w-[172%] md:w-[160%] lg:w-[152%]"
        />
      </div>

      <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(90deg,rgba(9,8,20,1)_0%,rgba(9,8,20,1)_42%,rgba(9,8,20,0.96)_57%,rgba(9,8,20,0.56)_74%,rgba(9,8,20,0.08)_100%)]" />
      <div className="pointer-events-none absolute inset-y-0 left-0 w-[62%] bg-[#090814]" />
      <div
        className="pointer-events-none absolute left-0 top-0 h-44 w-44 opacity-90 sm:h-56 sm:w-56 lg:h-[296px] lg:w-[312px]"
        style={{
          backgroundImage:
            'radial-gradient(circle, rgba(191,55,255,0.95) 2px, transparent 2.1px)',
          backgroundSize: '19px 19px',
        }}
      />

      <div className="absolute left-1/2 top-5 z-10 flex w-[calc(100%-40px)] max-w-max -translate-x-1/2 items-center justify-center gap-2 rounded-full px-4 py-2 text-center text-[10px] font-bold text-white sm:w-auto">
        <span className="h-2.5 w-2.5 rounded-full bg-emerald-400" />
        <span>50,000+ learners already enrolled</span>
      </div>

      <div className="relative z-10 w-full max-w-[760px] px-5 pb-16 pt-28 sm:px-8 sm:pt-32 lg:px-6 lg:pb-24 lg:pt-24">
        <p className="mb-2 text-lg font-extrabold uppercase tracking-[0.04em] text-white sm:text-2xl">
          Empower your future
        </p>
        <h1 className="max-w-[12ch] text-5xl font-bold leading-[0.94] text-[#f8f5f2] sm:text-6xl lg:text-[82px]">
          Master Tech Skills
        </h1>
        <h1 className="mt-2 max-w-[10ch] text-5xl font-bold leading-[0.94] text-transparent sm:text-6xl lg:text-[82px] bg-gradient-to-b from-fuchsia-400 to-fuchsia-600 bg-clip-text">
          That unlocks Opportunities
        </h1>
        <p className="mt-5 max-w-[40rem] text-base font-extrabold leading-7 text-[#f8f5f2] sm:text-lg lg:text-[21px] lg:leading-8">
          From beginner to job-ready. Learn web dev, AI, cybersecurity,
          design, and more at your own pace.
        </p>

        <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:flex-wrap">
          <Button
            variant="heroPrimary"
            size="hero"
            fullWidth
            className="sm:w-auto sm:min-w-[248px]"
          >
            Get Started
          </Button>
          <Button
            variant="heroSecondary"
            size="hero"
            fullWidth
            className="sm:w-auto sm:min-w-[248px]"
          >
            Explore Courses
          </Button>
        </div>
      </div>
    </section>
  )
}

function StatsRow() {
  return (
    <section className="relative z-10 -mt-5 bg-[#090814] px-5 pb-3 sm:-mt-8 sm:px-8 lg:-mt-11 lg:px-10">
      <div className="mx-auto grid max-w-[980px] grid-cols-1 gap-6 rounded-2xl border-2 border-fuchsia-800 bg-[#090814] px-6 py-5 text-center shadow-[0_12px_40px_rgba(0,0,0,0.18)] sm:grid-cols-2 lg:grid-cols-4 lg:gap-8">
        {STATS.map((stat) => (
          <article key={stat.label}>
            <strong className="block text-3xl font-bold text-[#f8f5f2]">
              {stat.value === '4.8/5' ? '4.8★' : stat.value}
            </strong>
            <span className="mt-1 block text-sm font-bold text-[#f8f5f2]/80">
              {stat.label}
            </span>
          </article>
        ))}
      </div>
    </section>
  )
}

function FeaturesSection() {
  return (
    <section className={sectionShellClass}>
      <SectionHeading
        eyebrow="Dashboard"
        title="Everything you need to level up"
        centered
      />

      <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
        {FEATURES.map((feature) => (
          <article
            key={feature.title}
            className="rounded-2xl border border-white/6 bg-[#292740] px-6 py-7 shadow-[0_12px_30px_rgba(0,0,0,0.16)]"
          >
            <div className="mb-4 flex items-center gap-3">
              <FeatureIcon
                icon={feature.icon}
                iconType={feature.iconType}
                title={feature.title}
              />
              <h3 className="text-xl font-bold text-fuchsia-500">{feature.title}</h3>
            </div>
            <p className="text-sm font-semibold leading-6 text-white/90">
              {feature.desc}
            </p>
          </article>
        ))}
      </div>
    </section>
  )
}

function CategoriesSection() {
  return (
    <section id="resources" className={sectionShellClass}>
      <SectionHeading eyebrow="Categories" title="Explore by topic" />

      <div className="grid grid-cols-2 gap-3 sm:grid-cols-4 xl:grid-cols-8">
        {CATEGORIES.map((category) => (
          <article
            key={category.name}
            className="rounded-2xl border border-white/6 bg-[#2b2942] px-3 py-5 text-center shadow-[0_12px_30px_rgba(0,0,0,0.16)]"
          >
            <TopicIcon
              name={category.icon}
              className={joinClasses(
                'mx-auto mb-3 h-9 w-9',
                categoryIconClasses[category.icon],
              )}
            />
            <span className="block text-xs font-semibold text-[#ece7ef] sm:text-sm">
              {category.name}
            </span>
            <span className="mt-1.5 block text-xs font-semibold text-[#8c86ab]">
              {category.count}
            </span>
          </article>
        ))}
      </div>
    </section>
  )
}

function CourseCard({ course }: { course: Course }) {
  return (
    <article className="overflow-hidden rounded-2xl border border-white/6 bg-[#191825] shadow-[0_16px_44px_rgba(0,0,0,0.18)]">
      <div
        className={joinClasses(
          'relative grid min-h-[160px] place-items-center',
          courseToneClasses[course.cardTone],
        )}
      >
        <span className="absolute right-3 top-3 rounded-full bg-emerald-400 px-3 py-1 text-[10px] font-bold uppercase tracking-[0.16em] text-white">
          {course.level}
        </span>
        <TopicIcon name={course.icon} className="h-11 w-11 text-[#110f17]" monochrome />
      </div>

      <div className="p-5">
        <p className="mb-2 text-[11px] font-bold uppercase tracking-[0.18em] text-[#a89dff]">
          {course.category}
        </p>
        <h3 className="text-xl font-bold leading-7 text-white">{course.title}</h3>
        <p className="mt-4 text-xs font-semibold text-[#8d88b4]">
          <span className="text-amber-300">Rating {course.rating}</span>
          <span className="mx-2 text-white/15">|</span>
          <span>{course.students}</span>
        </p>
        <div className="mt-4 h-px bg-white/8" />
        <div className="mt-4 flex items-center justify-between gap-3">
          <strong
            className={joinClasses(
              'text-lg font-extrabold text-white',
              course.price === 'Free' && 'text-emerald-400',
            )}
          >
            {course.price}
          </strong>
          <Button variant="enroll" size="sm">
            Enroll
          </Button>
        </div>
      </div>
    </article>
  )
}

function FeaturedCourses() {
  return (
    <section id="courses" className={sectionShellClass}>
      <SectionHeading eyebrow="Top Picks" title="Featured courses" />

      <div className="grid gap-5 xl:grid-cols-3">
        {COURSES.map((course) => (
          <CourseCard key={course.title} course={course} />
        ))}
      </div>
    </section>
  )
}

function PricingSection() {
  return (
    <section id="pricing" className={sectionShellClass}>
      <div className="relative overflow-hidden rounded-3xl bg-gradient-to-r from-fuchsia-800 to-fuchsia-700 px-6 py-12 text-center shadow-[0_18px_50px_rgba(103,9,130,0.3)] sm:px-10">
        <div className="absolute -bottom-10 -left-8 h-28 w-28 rounded-full bg-white/10" />
        <div className="absolute -right-2 -top-10 h-40 w-40 rounded-full bg-white/10" />
        <h2 className="relative text-3xl font-bold text-white sm:text-4xl">
          Ready to start your tech journey?
        </h2>
        <p className="relative mx-auto mt-3 max-w-2xl text-base font-semibold leading-7 text-white/90">
          Join 50,000+ learners on Lerneo. Start free, then upgrade when you are
          ready for deeper paths and premium support.
        </p>
        <div className="relative mt-8 flex justify-center">
          <Button variant="light" size="lg">
            Join Now
          </Button>
        </div>
      </div>
    </section>
  )
}

function App() {
  return (
    <div className="min-h-screen bg-black">
      <div
        className="mx-auto min-h-screen w-full max-w-[1440px] bg-[#090814] text-[#f8f5f2] sm:border-x sm:border-white/6"
        id="top"
      >
        <Navbar />
        <HeroSection />
        <StatsRow />
        <FeaturesSection />
        <CategoriesSection />
        <FeaturedCourses />
        <PricingSection />
      </div>
    </div>
  )
}

export default App
