import { useEffect, useRef } from 'react'
import { mount, pieceIn, type MountOptions } from './mount'

interface AsciiPieceProps {
  piece: unknown
  className?: string
  options?: MountOptions
}

export function AsciiPiece({ piece, className, options }: AsciiPieceProps) {
  const ref = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    if (!ref.current) return
    return mount(ref.current, pieceIn(piece, 'piece'), options)
  }, [piece, options])

  return <canvas ref={ref} className={className} aria-hidden="true" />
}
