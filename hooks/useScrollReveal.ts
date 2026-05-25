'use client'

import { useEffect, useRef } from 'react'

export function useScrollReveal(
  selector: string,
  options?: IntersectionObserverInit
) {
  const observerRef = useRef<IntersectionObserver | null>(null)

  useEffect(() => {
    const elements = document.querySelectorAll<HTMLElement>(selector)
    if (elements.length === 0) return

    observerRef.current = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible')
            observerRef.current?.unobserve(entry.target)
          }
        })
      },
      { threshold: 0.15, ...options }
    )

    elements.forEach((el) => observerRef.current!.observe(el))

    return () => {
      observerRef.current?.disconnect()
    }
  }, [selector, options])
}
