import Link from "next/link";

const whatsappUrl =
  "https://wa.me/5511999999999?text=Oi%20Sandro%2C%20quero%20conversar%20sobre%20uma%20tatuagem!";

export function WhatsAppLink({ children = "Agendar conversa" }: { children?: React.ReactNode }) {
  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="inline-flex items-center gap-3 rounded-full bg-[var(--accent)] px-6 py-3 text-sm font-bold uppercase tracking-wider text-[#111110] transition-transform hover:-translate-y-1"
    >
      {children}
      <span aria-hidden="true" className="text-lg leading-none">↗</span>
    </a>
  );
}

export function SiteHeader() {
  return (
    <header className="absolute left-0 top-0 z-20 w-full px-5 py-5 sm:px-10 lg:px-16">
      <nav className="mx-auto flex max-w-7xl flex-col items-start">
        <Link href="/" className="leading-[.79] tracking-[-.08em]" aria-label="Sandro Luz Tattoo Shop - início">
          <span className="block text-[2.1rem] font-black">Sandro <em className="not-italic text-[var(--accent)]">Luz</em></span>
          <span className="block text-[2.1rem] font-black">Tattoo</span>
          <span className="block text-[2.1rem] font-black">Shop</span>
        </Link>
        <div className="mt-8 flex items-center gap-7 text-sm font-black tracking-[-.03em] text-[#f4f4f4] sm:gap-9 sm:text-base">
          <Link className="transition-colors hover:text-[var(--accent)]" href="/servicos">Serviços</Link>
          <Link className="transition-colors hover:text-[var(--accent)]" href="/sobre">Sobre Mim</Link>
          <Link className="transition-colors hover:text-[var(--accent)]" href="/contato">Contato</Link>
        </div>
      </nav>
    </header>
  );
}

export function SiteFooter() {
  return (
    <footer className="border-t border-white/10 px-5 py-6 sm:px-10 lg:px-16">
      <div className="mx-auto flex max-w-7xl flex-col gap-2 text-xs font-semibold text-[#aaa9a5] sm:flex-row sm:items-center sm:gap-4">
        <span>Sandro Luz Tattoo Shop</span>
        <span className="hidden sm:inline">•</span>
        <span>Rua Limoeiro, 1000 - Catalão - SP</span>
        <span className="hidden sm:inline">•</span>
        <a href={whatsappUrl} target="_blank" rel="noopener noreferrer" className="transition-colors hover:text-[var(--accent)]">(+55 11) 99999 9999 ↗</a>
      </div>
    </footer>
  );
}
