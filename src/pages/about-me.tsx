import { Link } from 'react-router-dom'

function AboutMe() {
  return (
    <div className="flex min-h-svh flex-col items-center justify-center gap-10 bg-black px-6 text-[#F5F1E8]">
      <div className="flex max-w-2xl flex-col items-center gap-5 text-center">
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
