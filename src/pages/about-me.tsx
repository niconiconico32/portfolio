import { Link } from 'react-router-dom'
import { AsciiPiece } from '@/components/ascii/ascii-piece'
import * as cloudSea from '@/components/ascii/pieces/cloud-sea'
import usachLogo from '@/assets/usach.png'
import duocLogo from '@/assets/duoc.png'

const education = [
  {
    logo: usachLogo,
    alt: 'Universidad de Santiago de Chile',
    degree: 'Journalism',
    institution: 'Universidad de Santiago de Chile',
    dates: '2014 — 2019',
  },
  {
    logo: duocLogo,
    alt: 'Duoc UC',
    degree: 'Computer Science',
    institution: 'Duoc UC',
    dates: '2023 — 2026',
  },
]

const skills = [
  {
    specialty: 'Product',
    items: ['Product Engineering', 'Product Strategy', 'UX Writing'],
  },
  { specialty: 'Mobile', items: ['React Native', 'Expo', 'TypeScript'] },
  { specialty: 'Web', items: ['React', 'HTML', 'CSS', 'JavaScript'] },
  {
    specialty: 'Backend',
    items: ['Supabase', 'PostgreSQL', 'SQL', 'Edge Functions', 'RLS'],
  },
  {
    specialty: 'Subscription',
    items: ['RevenueCat', 'Stripe Billing', 'Web-to-App Identity'],
  },
  {
    specialty: 'Delivery',
    items: ['Playwright', 'GitHub', 'App Store', 'Google Play'],
  },
]

const sectionLabel =
  'font-heading text-sm font-semibold uppercase tracking-[0.25em] text-[#F5F1E8]/45'

function AboutMe() {
  return (
    <div className="min-h-svh bg-black px-6 py-16 text-[#F5F1E8] sm:py-24">
      <div className="mx-auto flex w-full max-w-3xl flex-col gap-16">
        <Link
          to="/"
          className="text-sm text-[#F5F1E8]/60 underline-offset-4 hover:text-[#F5F1E8] hover:underline"
        >
          ← Back
        </Link>

        <header className="flex flex-col items-center gap-6 text-center">
          <AsciiPiece piece={cloudSea} className="w-full" />
          <h1 className="font-heading text-3xl font-semibold tracking-tight sm:text-4xl">
            Product Engineer · Full-Stack &amp; Mobile
          </h1>
          <p className="font-heading text-base text-[#F5F1E8]/80 sm:text-lg">
            I build and launch subscription-based web and mobile products,
            combining software engineering, product strategy and storytelling.
          </p>
          <p className="max-w-2xl text-sm leading-relaxed text-[#F5F1E8]/60 sm:text-base">
            Journalist turned software engineer, focused on building
            user-centered products with React, React Native, TypeScript, Python
            and Supabase—from initial research and UX to payments, deployment and
            growth.
          </p>
        </header>

        <section className="flex flex-col items-center gap-6">
          <h2 className={sectionLabel}>Education</h2>
          <div className="flex w-full max-w-xl flex-col gap-4 text-left">
            {education.map((item) => (
              <div
                key={item.institution}
                className="flex items-center gap-5 rounded-lg border border-[#F5F1E8]/10 p-4 transition-colors hover:border-[#F5F1E8]/25"
              >
                <div className="flex h-16 w-28 shrink-0 items-center justify-center rounded-md bg-[#F5F1E8] p-2">
                  <img
                    src={item.logo}
                    alt={item.alt}
                    className="h-full w-full object-contain"
                  />
                </div>
                <div className="flex flex-col gap-0.5">
                  <h3 className="font-heading text-base font-semibold">
                    {item.degree}
                  </h3>
                  <p className="text-sm text-[#F5F1E8]/70">
                    {item.institution}
                  </p>
                  <p className="text-xs uppercase tracking-[0.15em] text-[#F5F1E8]/40">
                    {item.dates}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="flex flex-col items-center gap-6">
          <h2 className={sectionLabel}>Skills</h2>
          <dl className="flex w-full max-w-xl flex-col divide-y divide-[#F5F1E8]/10 border-y border-[#F5F1E8]/10">
            {skills.map((group) => (
              <div
                key={group.specialty}
                className="flex flex-col items-center gap-3 py-4"
              >
                <dt className="text-sm font-medium text-[#F5F1E8]/50">
                  {group.specialty}
                </dt>
                <dd className="flex flex-wrap justify-center gap-2">
                  {group.items.map((skill) => (
                    <span
                      key={skill}
                      className="rounded-full border border-[#F5F1E8]/15 px-3 py-1 text-xs text-[#F5F1E8]/80"
                    >
                      {skill}
                    </span>
                  ))}
                </dd>
              </div>
            ))}
          </dl>
        </section>
      </div>
    </div>
  )
}

export default AboutMe
