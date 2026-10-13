import { Link } from 'react-router-dom'
import { AsciiPiece } from '@/components/ascii/ascii-piece'
import * as cloudSea from '@/components/ascii/pieces/cloud-sea'
import usachLogo from '@/assets/usach.png'
import duocLogo from '@/assets/duoc.png'
import { useI18n } from '@/i18n'

const educationLogos = [usachLogo, duocLogo]

const sectionLabel =
  'font-heading text-sm font-semibold uppercase tracking-[0.25em] text-[#F5F1E8]/45'

function AboutMe() {
  const { t } = useI18n()

  return (
    <div className="min-h-svh bg-black px-6 py-16 text-[#F5F1E8] sm:py-24">
      <div className="mx-auto flex w-full max-w-3xl flex-col gap-16">
        <Link
          to="/"
          className="text-sm text-[#F5F1E8]/60 underline-offset-4 hover:text-[#F5F1E8] hover:underline"
        >
          {t.common.back}
        </Link>

        <header className="flex flex-col items-center gap-6 text-center">
          <AsciiPiece piece={cloudSea} className="w-full" />
          <h1 className="font-heading text-3xl font-semibold tracking-tight sm:text-4xl">
            {t.aboutMe.title}
          </h1>
          <p className="font-heading text-base text-[#F5F1E8]/80 sm:text-lg">
            {t.aboutMe.tagline}
          </p>
          <p className="max-w-2xl text-sm leading-relaxed text-[#F5F1E8]/60 sm:text-base">
            {t.aboutMe.description}
          </p>
        </header>

        <section className="flex flex-col items-center gap-6">
          <h2 className={sectionLabel}>{t.aboutMe.educationLabel}</h2>
          <div className="flex w-full max-w-xl flex-col gap-4 text-left">
            {t.aboutMe.education.map((item, i) => (
              <div
                key={item.institution}
                className="flex items-center gap-5 rounded-lg border border-[#F5F1E8]/10 p-4 transition-colors hover:border-[#F5F1E8]/25"
              >
                <div className="flex h-16 w-28 shrink-0 items-center justify-center rounded-md bg-[#F5F1E8] p-2">
                  <img
                    src={educationLogos[i]}
                    alt={item.institution}
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
          <h2 className={sectionLabel}>{t.aboutMe.skillsLabel}</h2>
          <dl className="flex w-full max-w-xl flex-col divide-y divide-[#F5F1E8]/10 border-y border-[#F5F1E8]/10">
            {t.aboutMe.skills.map((group) => (
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
