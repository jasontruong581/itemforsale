import { describe, expect, it } from 'vitest'
import { mockProducts } from './mock-products'

describe('mockProducts', () => {
  it('contains sample products ready for the UI', () => {
    expect(mockProducts.length).toBeGreaterThan(5)
    expect(mockProducts.every((product) => product.id && product.name && product.price)).toBe(true)
    expect(mockProducts.some((product) => product.status === 'available')).toBe(true)
    expect(mockProducts.some((product) => product.status === 'sold')).toBe(true)
  })
})
