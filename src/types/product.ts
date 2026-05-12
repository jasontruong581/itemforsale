export type ProductStatus = 'available' | 'sold'

export type Product = {
  id: string
  name: string
  price: string
  imageUrl: string
  referenceUrl: string
  status: ProductStatus
  note?: string
  contactUrl?: string
}
