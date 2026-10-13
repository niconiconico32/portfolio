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

function AboutMe() {
  return (
    <div className="flex min-h-svh flex-col items-center justify-center gap-10 bg-black px-6 text-[#F5F1E8]">
      <div className="flex max-w-2xl flex-col items-center gap-5 text-center">
        <AsciiPiece piece={cloudSea} className="w-full" />
        <h1 className="font-heading text-3xl font-semibold tracking-tight sm:text-4xl">
          Product Engineer · Full-Stack &amp; Mobile
        </h1>
        <p className="font-heading text-base text-[#F5F1E8]/80 sm:text-lg">
          I build and launch subscription-based web and mobile products,
          combining software engineering, product strategy and storytelling.
        </p>
        <p className="max-w-xl text-sm leading-relaxed text-[#F5F1E8]/60 sm:text-base">
          Journalist turned software engineer, focused on building user-centered
          products with React, React Native, TypeScript, Python and Supabase—from
          initial research and UX to payments, deployment and growth.
        </p>
      </div>

      <section className="w-full max-w-2xl text-left">
        <h2 className="font-heading text-xl font-semibold tracking-tight">
          Education
        </h2>
        <div className="mt-5 flex flex-col gap-5">
          {education.map((item) => (
            <div key={item.institution} className="flex items-center gap-4">
              <div className="flex h-16 w-28 shrink-0 items-center justify-center rounded-md bg-[#F5F1E8] p-2">
                <img
                  src={item.logo}
                  alt={item.alt}
                  className="h-full w-full object-contain"
                />
              </div>
              <div className="flex flex-col">
                <h3 className="font-heading text-base font-semibold">
                  {item.degree}
                </h3>
                <p className="text-sm text-[#F5F1E8]/80">{item.institution}</p>
                <p className="text-sm text-[#F5F1E8]/50">{item.dates}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <Link
        to="/"
        className="text-sm text-[#F5F1E8]/60 underline-offset-4 hover:text-[#F5F1E8] hover:underline"
      >
        ← Back
      </Link>
    </div>
  )
}

export default AboutMe
