import { FilterTabs } from '../components/filter-tabs'
import { ProductCard } from '../components/product-card'
import type { Product } from '../types/product'

type ProductFilter = 'all' | 'available' | 'sold'

type ProductSectionProps = {
  products: Product[]
  filter: ProductFilter
  onFilterChange: (filter: ProductFilter) => void
  defaultContactUrl: string
  statusMessage: string
}

export function ProductSection({
  products,
  filter,
  onFilterChange,
  defaultContactUrl,
  statusMessage,
}: ProductSectionProps) {
  const counts = {
    all: products.length,
    available: products.filter((product) => product.status === 'available').length,
    sold: products.filter((product) => product.status === 'sold').length,
  }

  const visibleProducts =
    filter === 'all' ? products : products.filter((product) => product.status === filter)

  return (
    <section id="products" data-reveal className="reveal px-6 py-7 sm:px-8 lg:px-12">
      <div className="mx-auto max-w-7xl space-y-6">
        <div className="flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
          <div className="max-w-2xl space-y-3">
            <p className="eyebrow text-[11px] uppercase tracking-[0.4em]">Danh sách sản phẩm</p>
            <h2 className="heading-section max-w-3xl text-3xl font-bold text-[var(--color-text)] sm:text-[2.45rem]">
              Chọn món hợp gu, xem giá ngay, rồi nhắn mình để chốt nhanh.
            </h2>
            <p className="text-sm leading-6 text-[var(--color-muted)]">{statusMessage}</p>
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
