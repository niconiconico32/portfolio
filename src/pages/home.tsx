import { Link } from 'react-router-dom'
import { Button } from '@/components/ui/button'
import { Orb23 } from '@/components/orbs/orb-23'

const fonts = [
  { name: 'Pixelify Sans', className: 'font-pixelify' },
  { name: 'Silkscreen', className: 'font-silkscreen' },
  { name: 'VT323', className: 'font-vt323' },
  { name: 'Handjet', className: 'font-handjet' },
]

function Home() {
  return (
    <div className="flex min-h-svh flex-col items-center justify-center gap-10 bg-black text-[#F5F1E8]">
      <div className="flex flex-col items-center gap-8 text-center">
        {fonts.map((f) => (
          <div key={f.name} className="flex flex-col items-center gap-1">
            <span className="text-[10px] uppercase tracking-[0.3em] text-[#F5F1E8]/40">
              {f.name}
            </span>
            <h1
              className={`${f.className} text-4xl font-semibold tracking-tight sm:text-5xl`}
            >
              Nicolas Gomez
            </h1>
          </div>
        ))}
        <p className="font-heading text-sm font-medium tracking-[0.3em] text-[#F5F1E8]/70 sm:text-base">
          Product Engineer
        </p>
      </div>

      <Orb23 size={400} state="thinking" />

      <div className="flex flex-row items-center gap-4">
        <Button
          asChild
          className="h-11 rounded-none bg-[#F5F1E8] px-7 text-black hover:bg-[#F5F1E8]/90"
        >
          <Link to="/projects">See Projects</Link>
        </Button>
        <Button
          asChild
          variant="outline"
          className="h-11 rounded-none border-[#F5F1E8] bg-transparent px-7 text-[#F5F1E8] hover:bg-[#F5F1E8] hover:text-black"
        >
          <Link to="/about-me">About Me</Link>
        </Button>
      </div>
    </div>
  )
}

export default Home
