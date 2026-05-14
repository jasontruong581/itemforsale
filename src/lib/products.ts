import type { Product, ProductStatus } from '../types/product'
import { parseCsv } from './csv'

const GOOGLE_SHEET_CSV_URL = import.meta.env.VITE_GOOGLE_SHEET_CSV_URL?.trim()

const normalizeStatus = (value: string): ProductStatus => {
  return value.toLowerCase().trim() === 'sold' ? 'sold' : 'available'
}

const toProduct = (row: Record<string, string>): Product | null => {
  const id = row.id?.trim()
  const name = row.name?.trim()
  const price = row.price?.trim()
  const imageUrl = row.image_url?.trim()
  const referenceUrl = row.reference_url?.trim()

  if (!id || !name || !price || !imageUrl || !referenceUrl) {
    return null
  }

  return {
    id,
    name,
    price,
    imageUrl,
    referenceUrl,
    status: normalizeStatus(row.status ?? ''),
    ...(row.note?.trim() ? { note: row.note.trim() } : {}),
    ...(row.contact_url?.trim() ? { contactUrl: row.contact_url.trim() } : {}),
  }
}

export const hasRemoteSheet = Boolean(GOOGLE_SHEET_CSV_URL)

export const loadProducts = async () => {
  if (!GOOGLE_SHEET_CSV_URL) {
    throw new Error('Missing VITE_GOOGLE_SHEET_CSV_URL')
  }

  const response = await fetch(GOOGLE_SHEET_CSV_URL)

  if (!response.ok) {
    throw new Error(`Unable to load Google Sheet feed (${response.status})`)
  }

  const rows = parseCsv(await response.text())
  const products = rows
    .map(toProduct)
    .filter((product): product is Product => product !== null)

  if (products.length === 0) {
    throw new Error('Google Sheet feed is empty or malformed')
  }

  return products
}
