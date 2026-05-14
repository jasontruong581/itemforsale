export function FooterSection() {
  return (
    <section id="contact" data-reveal className="reveal px-6 pb-10 pt-4 sm:px-8 lg:px-12 lg:pb-14">
      <div className="surface-panel mx-auto max-w-7xl rounded-[2rem] bg-[linear-gradient(135deg,rgba(17,185,228,0.14),rgba(255,255,255,0.5))] p-6 sm:p-8 lg:flex lg:items-center lg:justify-between">
        <div className="max-w-2xl">
          <p className="eyebrow text-[11px] uppercase tracking-[0.4em]">CTA</p>
          <h2 className="heading-section mt-3 text-3xl font-bold text-[var(--color-text)] sm:text-4xl">
            Muốn hỏi nhanh tình trạng hoặc deal gọn?
          </h2>
          <p className="mt-4 text-[15px] leading-7 text-[var(--color-muted)]">
            Nhắn mình trực tiếp là nhanh nhất. Nếu món còn hàng, mình phản hồi và chốt thông tin cụ
            thể ngay.
          </p>
        </div>

        <div className="mt-6 lg:mt-0">
          <a
            href="https://www.m.me/tien.tran.534956/"
            target="_blank"
            rel="noreferrer"
            className="button-secondary inline-flex min-w-[184px] items-center justify-center rounded-full px-6 py-3 text-sm font-semibold shadow-[0_16px_40px_var(--color-shadow)] transition duration-300 hover:-translate-y-0.5"
          >
            Nhắn mình ngay
          </a>
        </div>
      </div>
    </section>
  )
}
