import { Button } from '@/components/ui/button'
import { Orb23 } from '@/components/orbs/orb-23'

function App() {
  return (
    <div className="flex min-h-svh flex-col items-center justify-center gap-10 bg-black text-[#F5F1E8]">
      <div className="flex flex-col items-center gap-3 text-center">
        <h1 className="font-heading text-4xl font-semibold tracking-tight sm:text-5xl">
          Nicolas Gomez
        </h1>
        <p className="font-heading text-sm font-medium tracking-[0.3em] text-[#F5F1E8]/70 sm:text-base">
          mobile developer
        </p>
      </div>

      <Orb23 size={400} state="thinking" />

      <div className="flex flex-row items-center gap-4">
        <Button className="h-11 rounded-none bg-[#F5F1E8] px-7 text-black hover:bg-[#F5F1E8]/90">
          See Projects
        </Button>
        <Button
          variant="outline"
          className="h-11 rounded-none border-[#F5F1E8] bg-transparent px-7 text-[#F5F1E8] hover:bg-[#F5F1E8] hover:text-black"
        >
          About Me
        </Button>
      </div>
    </div>
  )
}

export default App
