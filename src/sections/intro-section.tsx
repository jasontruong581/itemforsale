export function IntroSection() {
  return (
    <section data-reveal className="reveal px-6 py-6 sm:px-8 lg:px-12">
      <div className="mx-auto max-w-7xl">
        <div className="surface-muted flex flex-col gap-3 rounded-[1.75rem] px-6 py-5 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <p className="eyebrow text-sm uppercase tracking-[0.3em]">Giới thiệu ngắn</p>
            <h2 className="mt-2 text-2xl font-bold tracking-tight text-[var(--color-text)] sm:text-3xl">
              Đồ mình từng mua, gom lại một chỗ để bạn xem nhanh và chốt gọn.
            </h2>
          </div>
          <p className="max-w-xl text-sm leading-6 text-[var(--color-muted)]">
            Ưu tiên phần card sản phẩm: ảnh rõ, giá nổi, link tham khảo, CTA dễ bấm.
          </p>
        </div>
      </div>
    </section>
  )
}
