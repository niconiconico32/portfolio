import { Link } from 'react-router-dom'
import logobrainy from '@/assets/logobrainy.png'
import { RichText } from '@/components/rich-text'
import { useI18n } from '@/i18n'

const bodyClass = 'text-base leading-relaxed text-[#F5F1E8]/80'

function Brainy() {
  const { t } = useI18n()
  const copy = t.brainy

  return (
    <div className="min-h-svh bg-black px-6 py-16 text-[#F5F1E8] sm:py-24">
      <article className="mx-auto flex max-w-3xl flex-col gap-12">
        <Link
          to="/projects"
          className="text-sm text-[#F5F1E8]/60 underline-offset-4 hover:text-[#F5F1E8] hover:underline"
        >
          {t.common.backToProjects}
        </Link>

        <header className="flex flex-col gap-4">
          <img
            src={logobrainy}
            alt="Brainy"
            className="h-24 w-auto self-start"
          />
          <h1 className="font-heading text-3xl font-semibold tracking-tight sm:text-4xl">
            {copy.title}
          </h1>
          <p className="font-heading text-base font-medium text-[#F5F1E8]/70 sm:text-lg">
            {copy.role}
          </p>
          {copy.intro.map((paragraph) => (
            <p key={paragraph} className={bodyClass}>
              {paragraph}
            </p>
          ))}
        </header>

        <section className="flex flex-col gap-4">
          <h2 className="font-heading text-xl font-semibold tracking-tight">
            {copy.evidence.heading}
          </h2>
          <ul className={`list-disc space-y-2 pl-5 ${bodyClass}`}>
            {copy.evidence.items.map((item) => (
              <li key={item}>
                <RichText text={item} />
              </li>
            ))}
          </ul>
          <p className={bodyClass}>
            <RichText text={copy.evidence.links} />
          </p>
        </section>

        <section className="flex flex-col gap-4">
          <h2 className="font-heading text-xl font-semibold tracking-tight">
            {copy.owned.heading}
          </h2>
          {copy.owned.paragraphs.map((paragraph) => (
            <p key={paragraph} className={bodyClass}>
              {paragraph}
            </p>
          ))}
        </section>

        <section className="flex flex-col gap-6">
          <h2 className="font-heading text-xl font-semibold tracking-tight">
            {copy.architecture.heading}
          </h2>

          {copy.architecture.blocks.map((block) => (
            <div key={block.heading} className="flex flex-col gap-2">
              <h3 className="font-heading text-base font-semibold">
                {block.heading}
              </h3>
              <p className={bodyClass}>
                <RichText text={block.body} />
              </p>
            </div>
          ))}

          <p className={bodyClass}>
            <RichText text={copy.architecture.closing} />
          </p>
        </section>

        <section className="flex flex-col gap-4">
          <h2 className="font-heading text-xl font-semibold tracking-tight">
            {copy.boundary.heading}
          </h2>
          <p className={bodyClass}>{copy.boundary.body}</p>
        </section>

        <footer className="flex flex-col gap-2 border-t border-[#F5F1E8]/10 pt-8 text-sm leading-relaxed text-[#F5F1E8]/60">
          <p>
            <RichText text={copy.footer.stack} />
          </p>
          <p>
            <RichText text={copy.footer.lastActive} />
          </p>
        </footer>
      </article>
    </div>
  )
}

export default Brainy
