import Image from "next/image";
import { SiteFooter, SiteHeader, WhatsAppLink } from "@/components/site-header";
import { SectionTitle } from "@/components/section-title";
import { HoverLift, Reveal, RevealImage } from "@/components/motion";

const services = [
  ["01", "Blackwork", "Para quem gosta de presença. Sombras sólidas, grafismos e composições que ocupam espaço com intenção.", "/inspiration/shoulder-blackwork.webp"],
  ["02", "Fine line", "Linhas finas e precisas para desenhos sutis, cheios de personalidade e detalhes para descobrir de perto.", "/inspiration/arm-fine-line.webp"],
  ["03", "Projetos autorais", "Você traz a história, eu transformo em imagem. Um processo colaborativo para criar algo que não existe igual.", "/inspiration/shoulder-blackwork.webp"],
];

export default function ServicesPage() {
  return <main className="noise min-h-screen"><SiteHeader /><div className="mx-auto max-w-7xl px-5 pb-24 pt-40 sm:px-10 lg:px-16"><Reveal><SectionTitle eyebrow="Serviços" title={<>Tatuagem com<br /><span className="text-(--accent)">intenção.</span></>} description="Escolha um caminho ou venha com uma ideia. O mais importante é que o resultado seja seu." /></Reveal><div className="mt-20 space-y-6">{services.map(([number, title, text, image], index) => <Reveal key={number} delay={index * 0.08}><HoverLift><article className="group grid gap-8 border-t border-white/15 py-8 md:grid-cols-[80px_1fr_1fr] md:items-center"><span className="text-sm text-[#77766f] transition-colors group-hover:text-(--accent)">{number}</span><div><h2 className="text-4xl font-black uppercase tracking-tighter transition-colors group-hover:text-(--accent) sm:text-6xl">{title}</h2><p className="mt-5 max-w-md text-sm leading-6 text-(--muted)">{text}</p></div><RevealImage className="image-zoom relative h-56 overflow-hidden md:h-64"><Image src={image} alt={`Exemplo de ${title}`} fill className="object-cover grayscale transition-all duration-700 group-hover:grayscale-0" sizes="(max-width: 768px) 100vw, 33vw" /></RevealImage></article></HoverLift></Reveal>)}</div><Reveal delay={0.15} className="mt-16"><WhatsAppLink>Falar sobre meu projeto</WhatsAppLink></Reveal></div><SiteFooter /></main>;
}
