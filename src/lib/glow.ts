import type { MouseEvent } from 'react'

export const handleGlowPointer = <T extends HTMLElement>(event: MouseEvent<T>) => {
  const bounds = event.currentTarget.getBoundingClientRect()
  const x = `${event.clientX - bounds.left}px`
  const y = `${event.clientY - bounds.top}px`

  event.currentTarget.style.setProperty('--glow-x', x)
  event.currentTarget.style.setProperty('--glow-y', y)
}
