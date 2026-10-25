import Image from "next/image";
import Link from "next/link";
import { SiteFooter, SiteHeader, WhatsAppLink } from "@/components/site-header";
import { Parallax, Reveal, RevealImage, StaggeredText } from "@/components/motion";

export default function Home() {
  return (
    <main className="noise flex min-h-screen flex-col overflow-hidden">
      <section className="relative flex min-h-150 flex-1 flex-col overflow-hidden bg-[#171717] px-5 pb-16 pt-56 sm:min-h-170 sm:px-10 sm:pt-64 lg:min-h-180 lg:px-16 lg:pt-64">
        <div className="absolute bottom-0 right-0 z-0 h-[78%] w-full bg-[radial-gradient(ellipse_at_70%_35%,#4a4a46_0%,#252522_42%,transparent_72%)] opacity-60 lg:h-full lg:w-[62%]" />
        <Parallax className="absolute inset-0 z-1">
          <Image
            src="/sandro-retrato.png"
            alt="Retrato de Sandro Luz, tatuador"
            fill
            priority
            className="left-[28%] z-1 w-[72%] object-contain object-bottom opacity-60 brightness-125 lg:left-[47%] lg:w-[53%] lg:opacity-90"
            sizes="100vw"
          />
        </Parallax>
        <div className="absolute inset-0 z-2 bg-[linear-gradient(90deg,#171717_0%,#171717_30%,rgba(23,23,23,.72)_53%,rgba(23,23,23,.12)_100%)]" />
        <SiteHeader />
        <div className="relative z-10 mx-auto flex w-full max-w-7xl flex-1 items-start pt-2 lg:items-end lg:pb-16 lg:pt-0">
          <div className="max-w-none">
            <StaggeredText
              className="font-black uppercase leading-[.78] tracking-[-.08em]"
              lines={[
                { text: "Inspire-se", className: "text-[clamp(3.7rem,8vw,10rem)] text-[#525252]" },
                { text: "Expresse-se", className: "text-[clamp(3.7rem,8vw,10rem)] text-(--accent)" },
                { text: "Tatue-se", className: "text-[clamp(3.7rem,8vw,10rem)] text-[#f4f4f4]" },
              ]}
            />
            <Reveal delay={0.55} className="mt-10 flex flex-wrap items-center gap-5">
              <WhatsAppLink>Fale comigo</WhatsAppLink>
              <Link href="/servicos" className="text-sm font-bold text-[#b4b4b4] underline decoration-(--accent) underline-offset-4 transition-colors hover:text-white">Conheça meu trabalho</Link>
            </Reveal>
          </div>
        </div>
      </section>
      <section className="bg-[#f1f0eb] px-5 py-20 text-[#171717] sm:px-10 lg:px-16 lg:py-28">
        <div className="mx-auto max-w-7xl">
          <Reveal className="flex flex-col justify-between gap-8 sm:flex-row sm:items-end">
            <div>
              <p className="mb-4 text-xs font-bold uppercase tracking-[.25em] text-[#7f9200]">Inspire-se</p>
              <h2 className="text-5xl font-black uppercase leading-[.82] tracking-[-.07em] sm:text-7xl">Referências<br />que ficam.</h2>
            </div>
            <p className="max-w-xs text-sm leading-6 text-[#686862]">Uma seleção de texturas, gestos e desenhos para começar a imaginar a sua próxima tatuagem.</p>
          </Reveal>
          <div className="mt-14 grid auto-rows-55 grid-cols-2 gap-3 sm:auto-rows-70 sm:grid-cols-4">
            <RevealImage className="image-zoom relative col-span-2 row-span-2 overflow-hidden"><Image src="/inspiration/shoulder-blackwork.webp" alt="Tatuagem floral e dragão no braço" fill loading="eager" className="object-cover" sizes="(max-width: 640px) 100vw, 50vw" /></RevealImage>
            <RevealImage className="image-zoom relative overflow-hidden" ><Image src="/inspiration/arm-fine-line.webp" alt="Tatuagem fine line botânica" fill className="object-cover" sizes="25vw" /></RevealImage>
            <RevealImage className="image-zoom relative overflow-hidden" ><Image src="/inspiration/arm-fine-line.webp" alt="Tatuagem botânica fine line no braço" fill className="object-cover" sizes="25vw" /></RevealImage>
            <RevealImage className="image-zoom relative col-span-2 overflow-hidden"><Image src="/inspiration/shoulder-blackwork.webp" alt="Tatuagem autoral floral no braço" fill className="object-cover" sizes="50vw" /></RevealImage>
          </div>
        </div>
      </section>
      <SiteFooter />
    </main>
  );
}
