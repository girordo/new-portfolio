import { cn } from '../../utils/cn'
import { useEffect, useRef, useState, ReactNode } from 'react'
import { createNoise3D } from 'simplex-noise'

interface WavyBackgroundProps {
  children?: ReactNode
  className?: string
  containerClassName?: string
  colors?: string[]
  waveWidth?: number
  backgroundFill?: string
  blur?: number
  speed?: 'slow' | 'fast'
  waveOpacity?: number
  [key: string]: any
}

export const WavyBackground = ({
  children,
  className,
  containerClassName,
  colors = ['#4caf50', '#03a9f4', '#9c27b0', '#607d8b'],
  waveWidth = 36,
  backgroundFill = '#090d16',
  blur = 12,
  speed = 'slow',
  waveOpacity = 0.16,
  ...props
}: WavyBackgroundProps) => {
  const noise = createNoise3D()
  const canvasRef = useRef<HTMLCanvasElement>(null)

  const getSpeed = () => {
    switch (speed) {
      case 'slow':
        return 0.0008
      case 'fast':
        return 0.0018
      default:
        return 0.0008
    }
  }

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext('2d')
    if (!ctx) return

    let w = (canvas.width = window.innerWidth)
    let h = (canvas.height = window.innerHeight)
    ctx.filter = `blur(${blur}px)`
    let nt = 0
    let animationId: number

    const drawWave = (n: number) => {
      nt += getSpeed()
      for (let i = 0; i < n; i++) {
        ctx.beginPath()
        ctx.lineWidth = waveWidth
        ctx.strokeStyle = colors[i % colors.length]
        for (let x = 0; x < w; x += 6) {
          const y = noise(x / 750, 0.3 * i, nt) * 110
          ctx.lineTo(x, y + h * 0.45)
        }
        ctx.stroke()
        ctx.closePath()
      }
    }

    const render = () => {
      ctx.fillStyle = backgroundFill
      ctx.globalAlpha = waveOpacity
      ctx.fillRect(0, 0, w, h)
      drawWave(4)
      animationId = requestAnimationFrame(render)
    }

    render()

    const handleResize = () => {
      w = canvas.width = window.innerWidth
      h = canvas.height = window.innerHeight
      ctx.filter = `blur(${blur}px)`
    }

    window.addEventListener('resize', handleResize)
    return () => {
      cancelAnimationFrame(animationId)
      window.removeEventListener('resize', handleResize)
    }
  }, [backgroundFill, blur, colors, speed, waveOpacity, waveWidth])

  const [isSafari, setIsSafari] = useState(false)
  useEffect(() => {
    setIsSafari(
      typeof window !== 'undefined' &&
        navigator.userAgent.includes('Safari') &&
        !navigator.userAgent.includes('Chrome'),
    )
  }, [])

  return (
    <div
      className={cn('relative min-h-screen text-slate-100', containerClassName)}
    >
      <canvas
        className="fixed inset-0 pointer-events-none z-0 opacity-80"
        ref={canvasRef}
        id="wavy-canvas"
        style={{
          ...(isSafari ? { filter: `blur(${blur}px)` } : {}),
        }}
      />
      <div className={cn('relative z-10', className)} {...props}>
        {children}
      </div>
    </div>
  )
}
export default WavyBackground
