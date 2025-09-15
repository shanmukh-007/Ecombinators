import { useEffect } from 'react'
import { motion, useMotionValue, useSpring } from 'framer-motion'

// Interactive background layer with a cursor-following glow
export default function InteractiveLayer() {
  const x = useMotionValue(0)
  const y = useMotionValue(0)

  // Smooth the motion values
  const springX = useSpring(x, { stiffness: 120, damping: 20, mass: 0.4 })
  const springY = useSpring(y, { stiffness: 120, damping: 20, mass: 0.4 })

  useEffect(() => {
    const handler = (e: MouseEvent) => {
      x.set(e.clientX)
      y.set(e.clientY)
    }
    window.addEventListener('mousemove', handler)
    return () => window.removeEventListener('mousemove', handler)
  }, [x, y])

  return (
    <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
      {/* Soft global hue blobs */}
      <motion.div
        aria-hidden
        className="absolute -top-24 -left-24 w-[40rem] h-[40rem] rounded-full blur-3xl"
        style={{ background: 'radial-gradient(closest-side, rgba(0,194,255,0.12), transparent 65%)' }}
        animate={{ rotate: [0, 360] }}
        transition={{ duration: 60, repeat: Infinity, ease: 'linear' }}
      />
      <motion.div
        aria-hidden
        className="absolute -bottom-32 -right-24 w-[36rem] h-[36rem] rounded-full blur-3xl"
        style={{ background: 'radial-gradient(closest-side, rgba(139,92,246,0.10), transparent 65%)' }}
        animate={{ rotate: [360, 0] }}
        transition={{ duration: 55, repeat: Infinity, ease: 'linear' }}
      />

      {/* Cursor-following spotlight */}
      <motion.div
        aria-hidden
        className="absolute w-[28rem] h-[28rem] rounded-full mix-blend-screen"
        style={{
          x: springX,
          y: springY,
          translateX: '-50%',
          translateY: '-50%',
          background: 'radial-gradient(circle at center, rgba(0,194,255,0.18), rgba(139,92,246,0.14), rgba(244,114,182,0.08), transparent 60%)',
          filter: 'blur(40px)'
        }}
      />
    </div>
  )
}

