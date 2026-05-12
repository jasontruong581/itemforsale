import { handleGlowPointer } from '../lib/glow'
import type { Product } from '../types/product'

type ProductCardProps = {
  product: Product
  defaultContactUrl: string
}

export function ProductCard({ product, defaultContactUrl }: ProductCardProps) {
  const isSold = product.status === 'sold'
  const contactUrl = product.contactUrl || defaultContactUrl

  return (
    <article
      onMouseMove={handleGlowPointer}
      className={`surface-panel glow-mouse group flex h-full flex-col overflow-hidden rounded-[2rem] transition duration-500 hover:-translate-y-1 hover:shadow-[0_30px_90px_var(--color-shadow)] ${
        isSold ? 'opacity-80' : ''
      }`}
    >
      <div className="content-layer flex h-full flex-col">
        <div className="relative aspect-[4/3] overflow-hidden">
          <img
            src={product.imageUrl}
            alt={product.name}
            className="h-full w-full object-cover transition duration-700 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[rgba(15,23,42,0.68)] via-[rgba(15,23,42,0.12)] to-transparent" />
          <span
            className={`absolute left-4 top-4 rounded-full border px-3 py-1 text-xs font-semibold tracking-[0.24em] uppercase ${
              isSold
                ? 'border-rose-300/55 bg-rose-200/55 text-rose-950'
                : 'border-emerald-300/55 bg-emerald-100/75 text-emerald-950'
            }`}
          >
            {isSold ? 'Đã bán' : 'Còn hàng'}
          </span>
        </div>

        <div className="flex flex-1 flex-col justify-between gap-6 p-5">
          <div className="space-y-3">
            <h3 className="line-clamp-2 min-h-[3.5rem] text-xl font-semibold tracking-tight text-[var(--color-text)]">
              {product.name}
            </h3>
            <p className="text-3xl font-black tracking-tight text-[var(--color-primary-strong)]">
              {product.price}
            </p>
            {product.note ? (
              <p className="line-clamp-3 min-h-[4.5rem] text-sm leading-6 text-[var(--color-muted)]">
                {product.note}
              </p>
            ) : (
              <div className="min-h-[4.5rem]" />
            )}
          </div>

          <div className="mt-auto flex gap-3 max-sm:flex-col">
            <a
              href={product.referenceUrl}
              target="_blank"
              rel="noreferrer"
              className="flex-1 rounded-2xl border border-[color:var(--color-border)] bg-[var(--color-card-strong)] px-4 py-3 text-center text-sm font-medium text-[var(--color-text)] transition duration-300 hover:border-[var(--color-primary)]/35 hover:bg-white/90"
            >
              Xem link tham khảo
            </a>

            <a
              href={contactUrl}
              target="_blank"
              rel="noreferrer"
              aria-disabled={isSold}
              className={`flex-1 rounded-2xl px-4 py-3 text-center text-sm font-semibold transition duration-300 ${
                isSold
                  ? 'pointer-events-none border border-[color:var(--color-border)] bg-[var(--color-card-muted)] text-[var(--color-muted)]'
                  : 'button-primary shadow-[0_14px_40px_rgba(17,185,228,0.24)] hover:-translate-y-0.5'
              }`}
            >
              {isSold ? 'Sản phẩm đã bán' : 'Nhắn mình để chốt'}
            </a>
          </div>
        </div>
      </div>
    </article>
  )
}
