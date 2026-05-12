type ProductFilter = 'all' | 'available' | 'sold'

type FilterTabsProps = {
  activeFilter: ProductFilter
  counts: Record<ProductFilter, number>
  onChange: (filter: ProductFilter) => void
}

const options = [
  { key: 'all', label: 'Tất cả' },
  { key: 'available', label: 'Còn hàng' },
  { key: 'sold', label: 'Đã bán' },
] as const

export function FilterTabs({ activeFilter, counts, onChange }: FilterTabsProps) {
  return (
    <div className="flex flex-wrap gap-3">
      {options.map((option) => {
        const isActive = option.key === activeFilter

        return (
          <button
            key={option.key}
            type="button"
            onClick={() => onChange(option.key)}
            className={`rounded-full border px-4 py-2 text-sm font-medium transition duration-300 ${
              isActive
                ? 'border-transparent bg-[var(--color-text)] text-[var(--color-page)] shadow-[0_12px_34px_var(--color-shadow)]'
                : 'border-[color:var(--color-border)] bg-[var(--color-card-strong)] text-[var(--color-muted)] hover:border-[var(--color-primary)]/30 hover:text-[var(--color-text)]'
            }`}
          >
            {option.label}
            <span className="ml-2 text-xs opacity-70">{counts[option.key]}</span>
          </button>
        )
      })}
    </div>
  )
}
