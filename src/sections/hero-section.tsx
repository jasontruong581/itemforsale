import { handleGlowPointer } from '../lib/glow'

type HeroSectionProps = {
  totalProducts: number
  availableProducts: number
  theme: 'day' | 'night'
  onToggleTheme: () => void
}

export function HeroSection({
  totalProducts,
  availableProducts,
  theme,
  onToggleTheme,
}: HeroSectionProps) {
  return (
    <section data-reveal className="reveal relative overflow-hidden px-6 pt-5 sm:px-8 lg:px-12">
      <div className="hero-glow absolute left-1/2 top-0 h-[30rem] w-[30rem] -translate-x-1/2 rounded-full bg-cyan-300/18 blur-3xl" />
      <div className="hero-glow absolute right-0 top-16 h-64 w-64 rounded-full bg-sky-200/35 blur-3xl" />

      <div
        onMouseMove={handleGlowPointer}
        className="surface-panel glow-mouse mx-auto max-w-7xl rounded-[2rem] px-6 py-6 sm:px-8 sm:py-7 lg:px-10 lg:py-8"
      >
        <div className="content-layer">
          <div className="mb-6 flex flex-wrap items-center justify-between gap-4">
            <div className="inline-flex items-center gap-2 rounded-full border border-[color:var(--color-border)] bg-[var(--color-card-strong)] px-4 py-2 text-[11px] font-semibold uppercase tracking-[0.32em] text-[var(--color-muted)]">
              personal picks
              <span className="h-1.5 w-1.5 rounded-full bg-[var(--color-primary)]" />
              giá tốt thật
            </div>

            <button
              type="button"
              onClick={onToggleTheme}
              className="inline-flex items-center gap-2 rounded-full border border-[color:var(--color-border)] bg-[var(--color-card-strong)] px-3 py-2 text-sm font-medium text-[var(--color-text)] transition duration-300 hover:-translate-y-0.5"
            >
              <span
                className={`rounded-full px-3 py-1 transition ${
                  theme === 'day'
                    ? 'bg-[var(--color-text)] text-[var(--color-page)]'
                    : 'text-[var(--color-muted)]'
                }`}
              >
                Day
              </span>
              <span
                className={`rounded-full px-3 py-1 transition ${
                  theme === 'night'
                    ? 'bg-[var(--color-text)] text-[var(--color-page)]'
                    : 'text-[var(--color-muted)]'
                }`}
              >
                Night
              </span>
            </button>
          </div>

          <div className="grid gap-8 lg:grid-cols-[minmax(0,1.25fr)_minmax(250px,0.75fr)] lg:items-end">
            <div className="max-w-3xl space-y-5">
              <p className="eyebrow text-[11px] uppercase tracking-[0.4em]">Clear deals. Clean vibe.</p>
              <h1 className="heading-display max-w-3xl text-4xl font-black text-[var(--color-text)] sm:text-5xl lg:text-[5.35rem]">
                Đồ mình từng mua,
                <span className="mt-1 block text-[var(--color-primary-strong)]">giờ để lại với giá đẹp.</span>
              </h1>
              <p className="max-w-xl text-[15px] leading-7 text-[var(--color-muted)] sm:text-base">
                Ảnh rõ, giá nổi, link thật, liên hệ nhanh. Kéo xuống là thấy sản phẩm ngay.
              </p>

              <div className="flex flex-wrap gap-3 pt-2">
                <a
                  href="#products"
                  className="button-primary rounded-full px-6 py-3 text-sm font-semibold shadow-[0_18px_50px_rgba(17,185,228,0.22)] transition duration-300 hover:-translate-y-0.5"
                >
                  Xem sản phẩm
                </a>
                <a
                  href="#contact"
                  className="rounded-full border border-[color:var(--color-border)] bg-[var(--color-card-strong)] px-6 py-3 text-sm font-semibold text-[var(--color-text)] transition duration-300 hover:-translate-y-0.5"
                >
                  Liên hệ nhanh
                </a>
              </div>
            </div>

            <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-2">
              <div className="surface-muted rounded-[1.35rem] p-4">
                <p className="text-[11px] uppercase tracking-[0.32em] text-[var(--color-muted)]">Tổng item</p>
                <p className="mt-2 text-[2rem] font-black tracking-[-0.05em] text-[var(--color-text)]">
                  {totalProducts}
                </p>
              </div>
              <div className="surface-muted rounded-[1.35rem] p-4">
                <p className="text-[11px] uppercase tracking-[0.32em] text-[var(--color-muted)]">Còn hàng</p>
                <p className="mt-2 text-[2rem] font-black tracking-[-0.05em] text-[var(--color-primary-strong)]">
                  {availableProducts}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
