import { FilterTabs } from '../components/filter-tabs'
import { ProductCard } from '../components/product-card'
import type { Product } from '../types/product'

type ProductFilter = 'all' | 'available' | 'sold'

type ProductSectionProps = {
  products: Product[]
  filter: ProductFilter
  onFilterChange: (filter: ProductFilter) => void
  defaultContactUrl: string
}

export function ProductSection({
  products,
  filter,
  onFilterChange,
  defaultContactUrl,
}: ProductSectionProps) {
  const counts = {
    all: products.length,
    available: products.filter((product) => product.status === 'available').length,
    sold: products.filter((product) => product.status === 'sold').length,
  }

  const visibleProducts =
    filter === 'all' ? products : products.filter((product) => product.status === filter)

  return (
    <section id="products" data-reveal className="reveal px-6 py-10 sm:px-8 lg:px-12">
      <div className="mx-auto max-w-7xl space-y-8">
        <div className="flex flex-col gap-5 lg:flex-row lg:items-end lg:justify-between">
          <div className="max-w-2xl">
            <p className="eyebrow text-sm uppercase tracking-[0.3em]">Danh sách sản phẩm</p>
            <h2 className="mt-3 text-3xl font-bold tracking-tight text-[var(--color-text)] sm:text-4xl">
              Chọn món hợp gu, xem giá ngay, rồi nhắn mình để chốt nhanh.
            </h2>
          </div>

          <FilterTabs activeFilter={filter} counts={counts} onChange={onFilterChange} />
        </div>

        <div className="grid auto-rows-fr gap-6 md:grid-cols-2 xl:grid-cols-3">
          {visibleProducts.map((product) => (
            <div key={product.id} className="h-full">
              <ProductCard product={product} defaultContactUrl={defaultContactUrl} />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
