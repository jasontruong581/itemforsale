import { useEffect, useState } from 'react'
import { CONTACT_URL, mockProducts } from './data/mock-products'
import { hasRemoteSheet, loadProducts } from './lib/products'
import { FooterSection } from './sections/footer-section'
import { HeroSection } from './sections/hero-section'
import { ProductSection } from './sections/product-section'
import type { Product } from './types/product'

type ThemeMode = 'day' | 'night'

function App() {
  const [products, setProducts] = useState<Product[]>(mockProducts)
  const [theme, setTheme] = useState<ThemeMode>(() => {
    if (typeof window === 'undefined') {
      return 'day'
    }

    const storedTheme = window.localStorage.getItem('sale-personal-theme')
    return storedTheme === 'night' ? 'night' : 'day'
  })
  const [loadState, setLoadState] = useState<'loading' | 'ready' | 'error'>(
    hasRemoteSheet ? 'loading' : 'ready',
  )
  const [errorMessage, setErrorMessage] = useState('')
  const [filter, setFilter] = useState<'all' | 'available' | 'sold'>('all')

  useEffect(() => {
    window.localStorage.setItem('sale-personal-theme', theme)
    document.documentElement.dataset.theme = theme
  }, [theme])

  useEffect(() => {
    let ignore = false

    const syncProducts = async () => {
      try {
        const loadedProducts = await loadProducts()

        if (ignore) {
          return
        }

        setProducts(loadedProducts)
        setLoadState('ready')
        setErrorMessage('')
      } catch (error) {
        if (ignore) {
          return
        }

        setLoadState('error')
        setErrorMessage(error instanceof Error ? error.message : 'Unknown error')
      }
    }

    void syncProducts()

    return () => {
      ignore = true
    }
  }, [])

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible')
            observer.unobserve(entry.target)
          }
        })
      },
      { threshold: 0.16, rootMargin: '0px 0px -8% 0px' },
    )

    const elements = document.querySelectorAll('[data-reveal]')
    elements.forEach((element) => observer.observe(element))

    return () => observer.disconnect()
  }, [theme, filter, products])

  const availableProducts = products.filter((product) => product.status === 'available').length

  return (
    <div
      data-theme={theme}
      className="page-shell relative min-h-screen overflow-hidden bg-[var(--color-page)] text-[var(--color-text)]"
    >
      <div className="page-bg pointer-events-none absolute inset-0" />
      <div className="page-grid pointer-events-none absolute inset-0" />

      <main className="relative z-10 py-5 sm:py-6">
        <HeroSection
          totalProducts={products.length}
          availableProducts={availableProducts}
          theme={theme}
          onToggleTheme={() => setTheme((current) => (current === 'day' ? 'night' : 'day'))}
        />

        <section className="px-6 pt-1 sm:px-8 lg:px-12">
          <div className="mx-auto max-w-7xl">
            <div className="surface-panel rounded-[1.25rem] px-5 py-3 text-sm text-[var(--color-muted)]">
              {loadState === 'loading' ? <p>Đang nạp dữ liệu từ Google Sheet...</p> : null}
              {loadState === 'error' ? (
                <p>
                  Không tải được Google Sheet nên site đang dùng mock data sample. Chi tiết:{' '}
                  {errorMessage}
                </p>
              ) : null}
              {loadState === 'ready' && hasRemoteSheet ? (
                <p>Dữ liệu hiện đang lấy từ Google Sheet public feed.</p>
              ) : null}
              {loadState === 'ready' && !hasRemoteSheet ? (
                <p>
                  Site đang chạy với mock data sample. Thêm `VITE_GOOGLE_SHEET_CSV_URL` để chuyển
                  sang dữ liệu thật.
                </p>
              ) : null}
            </div>
          </div>
        </section>

        <ProductSection
          products={products}
          filter={filter}
          onFilterChange={setFilter}
          defaultContactUrl={CONTACT_URL}
        />
        <FooterSection contactUrl={CONTACT_URL} />
      </main>
    </div>
  )
}

export default App
