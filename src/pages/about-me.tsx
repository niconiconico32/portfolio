import { Link } from 'react-router-dom'

function AboutMe() {
  return (
    <div className="flex min-h-svh flex-col items-center justify-center gap-6 bg-black text-[#F5F1E8]">
      <h1 className="font-heading text-3xl font-semibold tracking-tight">
        About Me
      </h1>
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
