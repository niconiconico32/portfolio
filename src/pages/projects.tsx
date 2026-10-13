import { Link } from 'react-router-dom'
import { useI18n } from '@/i18n'

function Projects() {
  const { t } = useI18n()

  return (
    <div className="flex min-h-svh flex-col items-center justify-center gap-14 bg-black px-6 text-[#F5F1E8]">
      <nav className="flex flex-col items-center gap-8">
        <Link
          to="/projects/brainy"
          className="font-heading text-4xl font-semibold tracking-tight transition-opacity hover:opacity-60 sm:text-5xl"
        >
          Brainy
        </Link>
        <Link
          to="/projects/rin"
          className="font-heading text-4xl font-semibold tracking-tight transition-opacity hover:opacity-60 sm:text-5xl"
        >
          Rin
        </Link>
      </nav>

      <Link
        to="/"
        className="text-sm text-[#F5F1E8]/60 underline-offset-4 hover:text-[#F5F1E8] hover:underline"
      >
        {t.common.back}
      </Link>
    </div>
  )
}

export default Projects
