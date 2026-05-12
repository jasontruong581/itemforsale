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
    <section data-reveal className="reveal relative overflow-hidden px-6 pt-4 sm:px-8 lg:px-12">
      <div className="hero-glow absolute left-1/2 top-0 h-[24rem] w-[24rem] -translate-x-1/2 rounded-full bg-cyan-300/18 blur-3xl" />
      <div className="hero-glow absolute right-0 top-12 h-56 w-56 rounded-full bg-sky-200/35 blur-3xl" />

      <div
        onMouseMove={handleGlowPointer}
        className="surface-panel glow-mouse mx-auto max-w-7xl rounded-[2rem] px-5 py-5 sm:px-7 sm:py-6 lg:px-8 lg:py-6"
      >
        <div className="content-layer">
          <div className="mb-4 flex flex-wrap items-center justify-between gap-3">
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

          <div className="grid gap-5 lg:grid-cols-[minmax(0,1.35fr)_auto] lg:items-end">
            <div className="max-w-3xl space-y-4">
              <p className="eyebrow text-[11px] uppercase tracking-[0.4em]">Giá rõ. Link thật. Chốt nhanh.</p>
              <h1 className="heading-display max-w-3xl text-[2.7rem] font-black text-[var(--color-text)] sm:text-[3.6rem] lg:text-[4.55rem]">
                Đồ mình từng mua,
                <span className="mt-1 block text-[var(--color-primary-strong)]">giờ để lại với giá đẹp.</span>
              </h1>
              <p className="max-w-lg text-[15px] leading-6 text-[var(--color-muted)]">
                Vào là xem sản phẩm ngay. Không vòng vo, không nhiều lớp thông tin.
              </p>

              <div className="flex flex-wrap gap-3 pt-1">
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

            <div className="flex w-[168px] flex-col gap-3 lg:items-stretch">
              <div className="surface-muted rounded-[1.35rem] px-4 py-3">
                <p className="text-[10px] uppercase tracking-[0.32em] text-[var(--color-muted)]">Tổng item</p>
                <p className="mt-1 text-xl font-black tracking-[-0.04em] text-[var(--color-text)]">
                  {totalProducts}
                </p>
              </div>
              <div className="surface-muted rounded-[1.35rem] px-4 py-3">
                <p className="text-[10px] uppercase tracking-[0.32em] text-[var(--color-muted)]">Còn hàng</p>
                <p className="mt-1 text-xl font-black tracking-[-0.04em] text-[var(--color-primary-strong)]">
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
