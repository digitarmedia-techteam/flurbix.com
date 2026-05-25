'use client'

import { useEffect, useRef } from 'react'

export default function CursorGlow() {
  const glowRef = useRef<HTMLDivElement>(null)
  const posRef = useRef<{ x: number; y: number }>({ x: -300, y: -300 })
  const targetRef = useRef<{ x: number; y: number }>({ x: -300, y: -300 })
  const animRef = useRef<number>(0)

  useEffect(() => {
    const onMouseMove = (e: MouseEvent) => {
      targetRef.current = { x: e.clientX, y: e.clientY }
    }
    window.addEventListener('mousemove', onMouseMove)

    const animate = () => {
      posRef.current.x += (targetRef.current.x - posRef.current.x) * 0.12
      posRef.current.y += (targetRef.current.y - posRef.current.y) * 0.12

      if (glowRef.current) {
        glowRef.current.style.left = `${posRef.current.x}px`
        glowRef.current.style.top = `${posRef.current.y}px`
      }

      animRef.current = requestAnimationFrame(animate)
    }
    animate()

    return () => {
      window.removeEventListener('mousemove', onMouseMove)
      cancelAnimationFrame(animRef.current)
    }
  }, [])

  return (
    <div
      ref={glowRef}
      aria-hidden="true"
      style={{
        position: 'fixed',
        width: '300px',
        height: '300px',
        borderRadius: '50%',
        pointerEvents: 'none',
        zIndex: 9999,
        background:
          'radial-gradient(circle, rgba(6,182,212,0.12) 0%, transparent 70%)',
        transform: 'translate(-50%, -50%)',
        left: '-300px',
        top: '-300px',
      }}
    />
  )
}
