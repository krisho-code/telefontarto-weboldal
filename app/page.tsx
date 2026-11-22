import PhoneMount from "./components/PhoneMount";
import Waitlist from "./components/Waitlist";

const features = [
  {
    title: "Snap in 0.3 seconds",
    body: "N52 magnet array pulls your phone into the perfect spot. One hand, zero fiddling.",
    span: "md:col-span-2",
    big: "0.3s",
  },
  {
    title: "Only 4 mm thin",
    body: "Aerospace-grade aluminium. You'll forget it's there.",
    span: "",
    big: "4mm",
  },
  {
    title: "360° pivot",
    body: "Portrait, landscape, any angle. Locks exactly where you leave it.",
    span: "",
    big: "360°",
  },
  {
    title: "Car. Desk. Bike.",
    body: "One mount, three adapters. Vent clip, adhesive pad and handlebar ring included.",
    span: "md:col-span-2",
    big: "3-in-1",
  },
];

const steps = [
  { n: "01", t: "Stick", d: "Attach the ultra-thin ring to your phone or case." },
  { n: "02", t: "Mount", d: "Clip Gripr to your vent, desk or handlebar." },
  { n: "03", t: "Snap", d: "Bring the phone close. It does the rest." },
];

const faqs = [
  {
    q: "Does it work with wireless charging?",
    a: "Yes. The ring is designed to be MagSafe-friendly and won't block charging.",
  },
  {
    q: "Will it hold on bumpy roads?",
    a: "Tested with 5 kg of pull force — roughly 25x the weight of a phone.",
  },
  {
    q: "Which phones are supported?",
    a: "Any phone or case. Magnetic ring included for non-MagSafe devices.",
  },
  {
    q: "When does it ship?",
    a: "First batch is planned for early next year. Waitlist members get priority and an early-bird price.",
  },
];

export default function Home() {
  return (
    <main className="flex flex-col">
      {/* NAV */}
      <header className="sticky top-0 z-50 border-b border-line/60 bg-background/70 backdrop-blur-xl">
        <nav className="mx-auto flex h-16 max-w-6xl items-center justify-between px-6">
          <a href="#" className="text-lg font-bold tracking-tight">
            Gripr<span className="text-accent">.</span>
          </a>
          <div className="hidden gap-8 text-sm text-muted md:flex">
            <a href="#features" className="transition hover:text-foreground">Features</a>
            <a href="#how" className="transition hover:text-foreground">How it works</a>
            <a href="#faq" className="transition hover:text-foreground">FAQ</a>
          </div>
          <a
            href="#waitlist"
            className="rounded-full bg-accent px-5 py-2 text-sm font-semibold text-black transition hover:brightness-110"
          >
            Get early access
          </a>
        </nav>
      </header>

      {/* HERO */}
      <section className="relative overflow-hidden">
        <div className="grid-bg absolute inset-0 -z-10" />
        <div className="mx-auto grid max-w-6xl items-center gap-12 px-6 py-20 md:grid-cols-2 md:py-28">
          <div>
            <span className="inline-flex items-center gap-2 rounded-full border border-line bg-card px-4 py-1.5 font-mono text-xs text-muted">
              <span className="h-2 w-2 rounded-full bg-accent" /> Launching soon
            </span>
            <h1 className="text-gradient mt-6 text-5xl font-semibold leading-[1.05] tracking-tight md:text-7xl">
              The phone mount that disappears.
            </h1>
            <p className="mt-6 max-w-lg text-lg text-muted">
              Gripr is a magnetic, ultra-slim mount for your car, desk and bike.
              Snap on in a blink, never look down again.
            </p>
            <div className="mt-8">
              <Waitlist />
              <p className="mt-3 font-mono text-xs text-muted">
                No spam. Early-bird price for the first 500.
              </p>
            </div>
          </div>
          <PhoneMount />
        </div>
      </section>

      {/* MARQUEE */}
      <div className="overflow-hidden border-y border-line bg-card py-4">
        <div className="animate-marquee flex w-max gap-12 whitespace-nowrap font-mono text-sm uppercase tracking-widest text-muted">
          {Array.from({ length: 2 }).map((_, i) => (
            <div key={i} className="flex gap-12">
              {["Magnetic", "Ultra-slim", "One-handed", "MagSafe-ready", "Car", "Desk", "Bike", "Made to last"].map(
                (w) => (
                  <span key={w + i} className="flex items-center gap-12">
                    {w} <span className="text-accent">✦</span>
                  </span>
                ),
              )}
            </div>
          ))}
        </div>
      </div>

      {/* FEATURES */}
      <section id="features" className="mx-auto w-full max-w-6xl px-6 py-24">
        <p className="font-mono text-xs uppercase tracking-widest text-accent">Features</p>
        <h2 className="mt-3 max-w-xl text-4xl font-semibold tracking-tight md:text-5xl">
          Small on the outside. Strong where it counts.
        </h2>
        <div className="mt-12 grid gap-4 md:grid-cols-3">
          {features.map((f) => (
            <div
              key={f.title}
              className={`group rounded-3xl border border-line bg-card p-8 transition hover:border-accent/50 ${f.span}`}
            >
              <div className="text-5xl font-semibold text-accent">{f.big}</div>
              <h3 className="mt-8 text-xl font-semibold">{f.title}</h3>
              <p className="mt-2 text-muted">{f.body}</p>
            </div>
          ))}
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section id="how" className="border-y border-line bg-card/50">
        <div className="mx-auto max-w-6xl px-6 py-24">
          <p className="font-mono text-xs uppercase tracking-widest text-accent">How it works</p>
          <h2 className="mt-3 text-4xl font-semibold tracking-tight md:text-5xl">
            Three steps. Ten seconds.
          </h2>
          <div className="mt-12 grid gap-8 md:grid-cols-3">
            {steps.map((s) => (
              <div key={s.n}>
                <div className="font-mono text-6xl font-semibold text-line">{s.n}</div>
                <h3 className="mt-4 text-2xl font-semibold">{s.t}</h3>
                <p className="mt-2 text-muted">{s.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="mx-auto w-full max-w-3xl px-6 py-24">
        <h2 className="text-4xl font-semibold tracking-tight">Questions</h2>
        <div className="mt-8 divide-y divide-line border-y border-line">
          {faqs.map((f) => (
            <details key={f.q} className="group py-5">
              <summary className="flex cursor-pointer list-none items-center justify-between text-lg font-medium">
                {f.q}
                <span className="text-accent transition group-open:rotate-45">+</span>
              </summary>
              <p className="mt-3 text-muted">{f.a}</p>
            </details>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section id="waitlist" className="px-6 pb-24">
        <div className="relative mx-auto max-w-5xl overflow-hidden rounded-[2rem] border border-line bg-card px-8 py-20 text-center">
          <div className="absolute left-1/2 top-0 -z-0 h-64 w-64 -translate-x-1/2 -translate-y-1/2 rounded-full bg-accent/25 blur-[100px]" />
          <h2 className="relative text-4xl font-semibold tracking-tight md:text-5xl">
            Be first to snap.
          </h2>
          <p className="relative mx-auto mt-4 max-w-md text-muted">
            Join the waitlist and get early-bird pricing when we launch.
          </p>
          <div className="relative mt-8 flex justify-center">
            <Waitlist />
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="border-t border-line py-8 text-center font-mono text-xs text-muted">
        © 2026 Gripr. All rights reserved.
      </footer>
    </main>
  );
}
