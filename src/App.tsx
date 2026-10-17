import { useEffect, useState } from "react";
import { ArrowRight, ArrowLeft, Instagram, Menu, X, ShoppingBag, Store, HandCoins, Sparkles } from "lucide-react";
import Logo from "./components/Logo";

const img = (id: string, w = 1600) => `https://images.unsplash.com/photo-${id}?auto=format&fit=crop&w=${w}&q=80`;

const NAV = [
  { label: "Shop", href: "#shop" },
  { label: "Our Story", href: "#story" },
  { label: "Become a Maker", href: "#apply" },
  { label: "Visit", href: "#visit" },
];

const CATEGORIES = ["local & handmade", "jewellery", "ceramics", "candles", "art & prints", "soaps", "home decor", "stationery", "apparel", "gifts"];

// Placeholder figures for the preview. Swap for real numbers once operations are set.
const STATS = [
  { value: "100%", label: "Of every sale goes\nback to the maker" },
  { value: "0%", label: "Commission on\nyour products" },
  { value: "80%+", label: "Of our makers are\nfrom the local area" },
  { value: "7", label: "Days a week your work\nis on the shelf" },
];

const SHOP = [
  { name: "Ceramics", id: "1577576223085-3eb295cd414f" },
  { name: "Art & Prints", id: "1764777313307-ecfd2eb20990" },
  { name: "Home & Living", id: "1590422749897-47036da0b0ff" },
  { name: "Gifts", id: "1760467830297-32e60f77d51d" },
];

const STEPS = [
  { icon: Sparkles, title: "Apply", text: "Tell us about your craft and send a few photos. We review every application by hand." },
  { icon: Store, title: "Move in", text: "Pick a shelf or display that fits your work. We handle the storefront, staff and checkout." },
  { icon: HandCoins, title: "Get paid", text: "Track sales online and keep every dollar you earn. A simple flat rent, no commission." },
];

// Sample testimonials for the preview only. Replace with real maker quotes before launch.
const QUOTES = [
  { quote: "I went from craft fairs twice a month to having my pieces in front of shoppers every single day. My sales have more than doubled.", name: "Sample Maker", brand: "Ceramics studio" },
  { quote: "The team treats my brand like it's their own. They know the story behind every candle and customers can feel it.", name: "Sample Maker", brand: "Small-batch candles" },
  { quote: "Keeping 100% of my sales changed the math of my whole business. It finally feels sustainable.", name: "Sample Maker", brand: "Jewellery designer" },
];

function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  const solid = scrolled || open;
  return (
    <header className={`fixed inset-x-0 top-0 z-50 transition-colors ${solid ? "bg-cream/95 shadow-sm backdrop-blur" : "bg-transparent"}`}>
      <div className="container-x flex h-20 items-center justify-between">
        <Logo light={!solid} />
        <nav className={`hidden items-center gap-8 text-sm font-medium md:flex ${solid ? "text-espresso" : "text-cream"}`}>
          {NAV.map((n) => (
            <a key={n.href} href={n.href} className="hover:text-clay">{n.label}</a>
          ))}
          <a href="#" aria-label="Instagram" className="hover:text-clay"><Instagram size={18} /></a>
          <a href="#shop" aria-label="Cart" className="hover:text-clay"><ShoppingBag size={18} /></a>
        </nav>
        <button className={`md:hidden ${solid ? "text-espresso" : "text-cream"}`} onClick={() => setOpen(!open)} aria-label="Menu">
          {open ? <X /> : <Menu />}
        </button>
      </div>
      {open && (
        <nav className="container-x flex flex-col gap-4 pb-6 font-serif text-2xl md:hidden">
          {NAV.map((n) => (
            <a key={n.href} href={n.href} onClick={() => setOpen(false)}>{n.label}</a>
          ))}
        </nav>
      )}
    </header>
  );
}

function Hero() {
  return (
    <section id="top" className="relative flex min-h-[92vh] items-end overflow-hidden">
      <img src={img("1764777313307-ecfd2eb20990", 2000)} alt="A local shop filled with handmade art and goods" className="absolute inset-0 h-full w-full object-cover" />
      <div className="absolute inset-0 bg-gradient-to-t from-espresso/85 via-espresso/40 to-espresso/20" />
      <div className="container-x relative pb-24 pt-40">
        <p className="eyebrow mb-5 text-sand">Handmade, close to home</p>
        <h1 className="max-w-3xl text-5xl leading-[1.05] text-cream sm:text-6xl lg:text-7xl">
          Where local makers <span className="italic">meet</span> the people who love their work.
        </h1>
        <p className="mt-6 max-w-xl text-lg text-cream/85">
          PC Creative Works is a shared retail home for independent artisans: real shelves, real shoppers, and 100% of every sale back in the maker's pocket.
        </p>
        <div className="mt-10 flex flex-wrap gap-4">
          <a href="#apply" className="btn-light">Become a Maker <ArrowRight size={16} /></a>
          <a href="#shop" className="btn border border-cream/50 text-cream hover:bg-cream/10">Shop Local</a>
        </div>
      </div>
    </section>
  );
}

function Marquee() {
  const row = [...CATEGORIES, ...CATEGORIES];
  return (
    <div className="overflow-hidden bg-espresso py-4 text-cream">
      <div className="flex w-max animate-marquee gap-8 whitespace-nowrap font-serif text-lg italic">
        {row.map((c, i) => (
          <span key={i} className="flex items-center gap-8">{c}<span className="text-clay">✦</span></span>
        ))}
      </div>
    </div>
  );
}

function Stats() {
  return (
    <section className="bg-sand/60">
      <div className="container-x grid grid-cols-2 gap-y-10 py-16 lg:grid-cols-4">
        {STATS.map((s, i) => (
          <div key={s.value} className={`border-espresso/15 px-4 text-center ${i % 2 === 1 ? "border-l" : ""} ${i === 2 ? "lg:border-l" : ""}`}>
            <div className="font-serif text-4xl text-espresso sm:text-5xl">{s.value}</div>
            <p className="mt-3 whitespace-pre-line text-sm text-espresso/70">{s.label}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

function Story() {
  return (
    <section id="story" className="container-x grid items-center gap-12 py-24 lg:grid-cols-2 lg:gap-20 lg:py-32">
      <div className="relative">
        <img src={img("1786973431661-486af5f31a50", 1200)} alt="Inside a shop filled with handmade pottery" className="aspect-[4/5] w-full rounded-[2rem] object-cover" />
        <div className="absolute -bottom-6 -right-4 hidden rounded-2xl bg-clay px-6 py-5 text-cream shadow-xl sm:block">
          <p className="font-serif text-2xl italic">Made nearby.</p>
          <p className="text-sm text-cream/80">Sold with care.</p>
        </div>
      </div>
      <div>
        <p className="eyebrow">Our story</p>
        <h2 className="mt-4 text-4xl leading-tight sm:text-5xl">Built for the makers who make a community feel like home.</h2>
        <div className="mt-6 space-y-5 text-lg leading-relaxed text-espresso/75">
          <p>
            Behind every hand-thrown mug and hand-poured candle is a small business owner doing it all: making, marketing, shipping, and somehow finding time to sell in person.
          </p>
          <p>
            PC Creative Works takes the storefront off their plate. We curate a beautiful shop stocked entirely by local artisans, staff it with people who know every maker's story, and send the full sale price straight back to the creator.
          </p>
        </div>
        <a href="#apply" className="btn-dark mt-10">Learn how it works <ArrowRight size={16} /></a>
      </div>
    </section>
  );
}

function Shop() {
  return (
    <section id="shop" className="bg-espresso py-24 text-cream lg:py-32">
      <div className="container-x">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <div>
            <p className="eyebrow">Shop the collection</p>
            <h2 className="mt-4 text-4xl sm:text-5xl">One-of-a-kind, <span className="italic">every time.</span></h2>
          </div>
          <a href="#visit" className="btn-light">Visit the shop <ArrowRight size={16} /></a>
        </div>
        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {SHOP.map((c) => (
            <a key={c.name} href="#visit" className="group relative overflow-hidden rounded-3xl">
              <img src={img(c.id, 800)} alt={c.name} className="aspect-[3/4] w-full object-cover transition-transform duration-700 group-hover:scale-105" />
              <div className="absolute inset-0 bg-gradient-to-t from-espresso/80 to-transparent" />
              <div className="absolute inset-x-0 bottom-0 flex items-center justify-between p-6">
                <span className="font-serif text-2xl">{c.name}</span>
                <ArrowRight className="transition-transform group-hover:translate-x-1" />
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}

function HowItWorks() {
  return (
    <section className="container-x py-24 lg:py-32">
      <div className="mx-auto max-w-2xl text-center">
        <p className="eyebrow">For makers</p>
        <h2 className="mt-4 text-4xl sm:text-5xl">Your craft. Our storefront. <span className="italic">Your profit.</span></h2>
      </div>
      <div className="mt-16 grid gap-6 md:grid-cols-3">
        {STEPS.map(({ icon: Icon, title, text }, i) => (
          <div key={title} className="rounded-3xl border border-espresso/10 bg-white/60 p-8">
            <div className="flex items-center justify-between">
              <span className="grid h-12 w-12 place-items-center rounded-full bg-clay/10 text-clay"><Icon size={22} /></span>
              <span className="font-serif text-5xl text-espresso/10">0{i + 1}</span>
            </div>
            <h3 className="mt-8 text-2xl">{title}</h3>
            <p className="mt-3 leading-relaxed text-espresso/70">{text}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

function Testimonials() {
  const [i, setI] = useState(0);
  const q = QUOTES[i];
  const go = (d: number) => setI((i + d + QUOTES.length) % QUOTES.length);
  return (
    <section className="bg-sand/60 py-24 lg:py-32">
      <div className="container-x max-w-4xl text-center">
        <p className="eyebrow">Maker stories</p>
        <blockquote className="mt-8 font-serif text-3xl leading-snug sm:text-4xl">“{q.quote}”</blockquote>
        <p className="mt-8 font-medium">{q.name}</p>
        <p className="text-sm text-espresso/60">{q.brand}</p>
        <div className="mt-10 flex items-center justify-center gap-4">
          <button onClick={() => go(-1)} aria-label="Previous" className="grid h-11 w-11 place-items-center rounded-full border border-espresso/20 hover:bg-espresso hover:text-cream"><ArrowLeft size={18} /></button>
          <span className="text-sm text-espresso/60">{i + 1} / {QUOTES.length}</span>
          <button onClick={() => go(1)} aria-label="Next" className="grid h-11 w-11 place-items-center rounded-full border border-espresso/20 hover:bg-espresso hover:text-cream"><ArrowRight size={18} /></button>
        </div>
      </div>
    </section>
  );
}

function Apply() {
  return (
    <section id="apply" className="container-x py-24 lg:py-32">
      <div className="grid overflow-hidden rounded-[2rem] bg-clay text-cream lg:grid-cols-2">
        <div className="p-10 sm:p-14 lg:p-16">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-cream/70">Now accepting applications</p>
          <h2 className="mt-4 text-5xl leading-[1.05] sm:text-6xl">Want to be a <span className="italic">maker?</span></h2>
          <p className="mt-6 max-w-md text-lg text-cream/85">
            If you're a passionate, hard-working artisan ready to get your work in front of more people, we'd love to meet you. Spots are limited and reviewed on a rolling basis.
          </p>
          <a href="mailto:hello@pccreativeworks.com" className="btn-light mt-10">Apply Now <ArrowRight size={16} /></a>
        </div>
        <img src={img("1633103437674-f492ea426446", 1200)} alt="An artist working on a piece in the studio" className="h-full min-h-[320px] w-full object-cover" />
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer id="visit" className="bg-espresso text-cream">
      <div className="container-x grid gap-12 py-20 md:grid-cols-2 lg:grid-cols-4">
        <div className="lg:col-span-2">
          <Logo light />
          <p className="mt-6 max-w-sm text-cream/70">A shared retail home for independent artisans. Shop local, shop handmade, and support the people behind the work.</p>
          <form className="mt-8 flex max-w-md overflow-hidden rounded-full bg-cream/10" onSubmit={(e) => e.preventDefault()}>
            <input type="email" placeholder="Your email for news & new makers" className="min-w-0 flex-1 bg-transparent px-6 py-3.5 text-sm placeholder:text-cream/50 focus:outline-none" />
            <button className="bg-cream px-6 text-sm font-medium text-espresso hover:bg-white">Join</button>
          </form>
        </div>
        <div>
          <h4 className="font-serif text-lg">Visit us</h4>
          <p className="mt-4 text-sm leading-relaxed text-cream/70">Location coming soon<br />Open 7 days a week<br />10am to 6pm</p>
        </div>
        <div>
          <h4 className="font-serif text-lg">Explore</h4>
          <ul className="mt-4 space-y-2 text-sm text-cream/70">
            {NAV.map((n) => <li key={n.href}><a href={n.href} className="hover:text-cream">{n.label}</a></li>)}
            <li><a href="#" className="inline-flex items-center gap-2 hover:text-cream"><Instagram size={14} /> @pccreativeworks</a></li>
          </ul>
        </div>
      </div>
      <div className="border-t border-cream/10">
        <div className="container-x flex flex-wrap justify-between gap-4 py-6 text-xs text-cream/50">
          <span>© {new Date().getFullYear()} PC Creative Works. All rights reserved.</span>
          <span>Made with care for local makers.</span>
        </div>
      </div>
    </footer>
  );
}

export default function App() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Marquee />
        <Stats />
        <Story />
        <Shop />
        <HowItWorks />
        <Testimonials />
        <Apply />
      </main>
      <Footer />
    </>
  );
}
