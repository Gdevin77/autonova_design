import { FaKey, FaMicrochip, FaGasPump, FaExclamationTriangle, FaSearch, FaArrowRight, FaPhoneAlt, FaWhatsapp, FaCheckCircle, FaTools, FaMapMarkedAlt, FaBolt, FaMoneyBillWave, FaComments, FaShieldAlt } from "react-icons/fa";
import { Link as Link_ } from "react-router-dom";
import Seo from "../lib/seo";
import { business, contactLinks } from "../lib/constants";
import { services } from "../data/services";
import { faqs } from "../data/faqs";
import { Reveal } from "../lib/reveal";
import Container from "../components/ui/Container";
import SectionTitle from "../components/ui/SectionTitle";
import Badge from "../components/ui/Badge";
import Button from "../components/ui/Button";
import TestimonialCarousel from "../components/TestimonialCarousel";
import FaqList from "../components/FaqList";
import QuickQuote from "../components/QuickQuote";

const heroImg = "https://images.unsplash.com/photo-1615906655593-ad0386982a0f?auto=format&fit=crop&w=1800&q=80";
const icons = [FaKey, FaMicrochip, FaGasPump, FaExclamationTriangle, FaSearch];

const whyItems = [
  { icon: FaBolt, title: "Fast response", text: "Quick call-outs across Harare." },
  { icon: FaTools, title: "Pro-grade tools", text: "Live-data scanners, ECU and key programmers." },
  { icon: FaMoneyBillWave, title: "Fair pricing", text: "Clear quotes before work starts." },
  { icon: FaShieldAlt, title: "Trusted workmanship", text: "Every job tested and verified." },
  { icon: FaMapMarkedAlt, title: "We come to you", text: "Home, office or roadside." },
  { icon: FaComments, title: "Clear communication", text: "Plain-language updates, no jargon." }
];

const steps = [
  { title: "Contact us", text: "Call, WhatsApp or book online with your vehicle details." },
  { title: "We diagnose & confirm", text: "We scan, find the fault and agree the plan with you." },
  { title: "We fix, program & test", text: "Work is done on site, then verified with you." }
];

const trust = [
  { value: "40+", label: "Automotive services" },
  { value: "Harare-wide", label: "Mobile call-outs" },
  { value: "Mon – Sun", label: "Sunday emergencies too" },
  { value: "Pro-grade", label: "Diagnostic equipment" }
];

const jsonLd = [
  {
    "@context": "https://schema.org",
    "@type": "AutoRepair",
    name: business.name,
    description: business.tagline,
    url: "https://autonova.co.zw",
    telephone: `+${business.phoneE164}`,
    areaServed: "Harare, Zimbabwe",
    openingHoursSpecification: [
      { "@type": "OpeningHoursSpecification", dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"], opens: "07:00", closes: "18:00" },
      { "@type": "OpeningHoursSpecification", dayOfWeek: "Saturday", opens: "08:00", closes: "16:00" }
    ]
  },
  {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((f) => ({ "@type": "Question", name: f.q, acceptedAnswer: { "@type": "Answer", text: f.a } }))
  }
];

const HomePage = () => {
  const preview = services.slice(0, 5).map((item, i) => ({ ...item, Icon: icons[i], to: `/services/${item.slug}` }));

  return (
    <>
      <Seo
        title="AUTONOVA - Automotive Key & ECU Solutions"
        description="Professional automotive key programming, ECU coding, injector coding, diagnostics, and mobile support anywhere in Harare."
        path="/"
        jsonLd={jsonLd}
      />

      <section className="relative overflow-hidden bg-navy text-white">
        <div className="absolute inset-0 bg-cover bg-center opacity-30" style={{ backgroundImage: `url(${heroImg})` }} aria-hidden="true" />
        <div className="absolute inset-0 bg-gradient-to-r from-navy via-navy/95 to-navy/70" aria-hidden="true" />
        <div className="absolute -right-24 -top-24 h-96 w-96 rounded-full bg-accent/30 blur-3xl" aria-hidden="true" />
        <Container className="relative grid items-center gap-12 pb-28 pt-14 sm:pt-20 lg:grid-cols-[1.1fr_0.9fr]">
          <div className="fade-in-up">
            <Badge className="border-white/20 bg-white/10 text-white">Mobile service · {business.area}</Badge>
            <h1 className="mt-5 text-4xl font-extrabold leading-[1.05] sm:text-6xl">
              Car won't start? <span className="text-gradient">We come to you.</span>
            </h1>
            <p className="mt-5 max-w-xl text-lg text-slate-300">
              Key programming, ECU coding, injector coding and advanced diagnostics, done on site anywhere in Harare. Fast, fairly priced, professional.
            </p>
            <div className="mt-7 flex flex-wrap gap-3">
              <a href={contactLinks.call} className="inline-flex items-center gap-2 rounded-lg bg-accent px-6 py-3 text-sm font-bold text-white shadow-glow transition-colors hover:bg-accentSoft">
                <FaPhoneAlt /> Call now
              </a>
              <a href={contactLinks.whatsapp} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-lg bg-green-600 px-6 py-3 text-sm font-bold text-white transition-colors hover:bg-green-700">
                <FaWhatsapp /> WhatsApp us
              </a>
            </div>
            <ul className="mt-8 flex flex-wrap gap-x-6 gap-y-2 text-sm text-slate-300">
              {["Mobile service", "Fast response", "Transparent quotes"].map((t) => (
                <li key={t} className="inline-flex items-center gap-2"><FaCheckCircle className="text-sky-400" /> {t}</li>
              ))}
            </ul>
          </div>
          <div className="fade-in-up"><QuickQuote /></div>
        </Container>
      </section>

      <Container className="relative z-10 -mt-14">
        <dl className="grid grid-cols-2 gap-px overflow-hidden rounded-2xl border border-line bg-line shadow-card lg:grid-cols-4">
          {trust.map((t) => (
            <div key={t.label} className="bg-surface p-5 text-center">
              <dd className="text-xl font-extrabold text-accent sm:text-2xl">{t.value}</dd>
              <dt className="mt-1 text-xs text-textMuted sm:text-sm">{t.label}</dt>
            </div>
          ))}
        </dl>
      </Container>

      <section className="py-20">
        <Reveal><SectionTitle eyebrow="Services" title="Specialist automotive electronics" description="From lost keys to stubborn warning lights, we diagnose and fix it properly." /></Reveal>
        <Container className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {preview.map(({ Icon, ...svc }, i) => (
            <Reveal key={svc.slug} delay={i * 70} className="h-full">
              <Link_ to={svc.to} className="group flex h-full flex-col rounded-2xl border border-line bg-surface p-6 shadow-sm transition hover:-translate-y-1 hover:border-accent/40 hover:shadow-glow">
                <span className="grid h-12 w-12 place-items-center rounded-xl bg-accent/10 text-xl text-accent"><Icon /></span>
                <h3 className="mt-5 text-lg font-bold">{svc.title}</h3>
                <p className="mt-2 flex-1 text-sm text-textMuted">{svc.description}</p>
                <span className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-accent">Learn more <FaArrowRight className="transition-transform group-hover:translate-x-1" /></span>
              </Link_>
            </Reveal>
          ))}
          <Reveal delay={350} className="h-full">
            <Link_ to="/services" className="group flex h-full flex-col justify-between rounded-2xl bg-accent p-6 text-white shadow-glow transition hover:-translate-y-1 hover:bg-accentSoft">
              <div>
                <p className="text-4xl font-extrabold">40+</p>
                <h3 className="mt-2 text-lg font-bold">Automotive services</h3>
                <p className="mt-2 text-sm text-white/80">Diagnostics, ECU and modules, keys, injectors, programming and electrical.</p>
              </div>
              <span className="mt-5 inline-flex items-center gap-2 text-sm font-semibold">Browse all services <FaArrowRight className="transition-transform group-hover:translate-x-1" /></span>
            </Link_>
          </Reveal>
        </Container>
      </section>

      <section className="bg-surface py-20">
        <Reveal><SectionTitle eyebrow="Why AUTONOVA" title="Done right, the first time" description="Professional process, clear communication and reliable outcomes." /></Reveal>
        <Container className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {whyItems.map((item, i) => (
            <Reveal key={item.title} delay={i * 60}>
              <div className="flex gap-4 rounded-2xl border border-line bg-background p-5">
                <span className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-navy text-lg text-white"><item.icon /></span>
                <div><h3 className="font-bold">{item.title}</h3><p className="mt-1 text-sm text-textMuted">{item.text}</p></div>
              </div>
            </Reveal>
          ))}
        </Container>
      </section>

      <section className="py-20">
        <Reveal><SectionTitle eyebrow="Process" title="Back on the road in 3 steps" /></Reveal>
        <Container className="mt-10 grid gap-5 sm:grid-cols-3">
          {steps.map((step, i) => (
            <Reveal key={step.title} delay={i * 100}>
              <div className="h-full rounded-2xl border border-line bg-surface p-6 shadow-sm">
                <span className="grid h-11 w-11 place-items-center rounded-full bg-accent text-lg font-extrabold text-white">{i + 1}</span>
                <p className="mt-4 text-lg font-bold">{step.title}</p>
                <p className="mt-1 text-sm text-textMuted">{step.text}</p>
              </div>
            </Reveal>
          ))}
        </Container>
      </section>

      <section className="bg-surface py-20">
        <Reveal><SectionTitle eyebrow="Reviews" title="What customers say" centered /></Reveal>
        <Container className="mt-10"><TestimonialCarousel /></Container>
      </section>

      <section className="py-20">
        <Reveal><SectionTitle eyebrow="FAQ" title="Common questions" centered /></Reveal>
        <Container className="mt-10"><FaqList /></Container>
      </section>

      <section className="pb-4">
        <Container>
          <div className="relative overflow-hidden rounded-3xl bg-navy p-8 text-center text-white sm:p-14">
            <div className="absolute -left-16 -top-16 h-64 w-64 rounded-full bg-accent/40 blur-3xl" aria-hidden="true" />
            <h2 className="relative text-3xl font-extrabold sm:text-4xl">Need help right now?</h2>
            <p className="relative mx-auto mt-3 max-w-xl text-slate-300">Call or message us and we'll tell you what it takes to get your vehicle sorted.</p>
            <div className="relative mt-7 flex flex-wrap justify-center gap-3">
              <a href={contactLinks.call} className="inline-flex items-center gap-2 rounded-lg bg-accent px-6 py-3 text-sm font-bold text-white hover:bg-accentSoft"><FaPhoneAlt /> Call now</a>
              <a href={contactLinks.whatsapp} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-lg bg-green-600 px-6 py-3 text-sm font-bold text-white hover:bg-green-700"><FaWhatsapp /> WhatsApp</a>
              <Button as="link" to="/book" variant="ghost">Book online</Button>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
};

export default HomePage;
