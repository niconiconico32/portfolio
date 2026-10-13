import { Fragment } from 'react'

const linkClass =
  'text-[#F5F1E8] underline decoration-[#F5F1E8]/30 underline-offset-4 transition-colors hover:decoration-[#F5F1E8]'

const TOKEN = /(\*\*[^*]+\*\*|\[[^\]]+\]\([^)]+\))/g
const LINK = /^\[([^\]]+)\]\(([^)]+)\)$/

export function RichText({ text }: { text: string }) {
  const parts = text.split(TOKEN).filter((part) => part !== '')

  return (
    <>
      {parts.map((part, i) => {
        if (part.startsWith('**') && part.endsWith('**')) {
          return (
            <strong key={i} className="font-semibold text-[#F5F1E8]">
              {part.slice(2, -2)}
            </strong>
          )
        }
        const match = LINK.exec(part)
        if (match) {
          return (
            <a
              key={i}
              href={match[2]}
              target="_blank"
              rel="noreferrer"
              className={linkClass}
            >
              {match[1]}
            </a>
          )
        }
        return <Fragment key={i}>{part}</Fragment>
      })}
    </>
  )
}
