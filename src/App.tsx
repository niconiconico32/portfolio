import { Button } from '@/components/ui/button'

function App() {
  return (
    <div className="flex min-h-svh flex-col items-center justify-center gap-6">
      <h1 className="font-heading text-4xl font-semibold tracking-tight">
        Mi Portafolio
      </h1>
      <p className="text-muted-foreground">
        shadcn/ui está listo. Empecemos a construir.
      </p>
      <Button>Hola mundo</Button>
    </div>
  )
}

export default App
