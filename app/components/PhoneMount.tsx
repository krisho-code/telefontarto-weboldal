/** Pure-CSS hero illustration: floating phone snapped onto a magnetic mount. */
export default function PhoneMount() {
  return (
    <div className="relative mx-auto flex h-[460px] w-[300px] items-center justify-center">
      {/* glow + rings */}
      <div className="absolute inset-0 -z-10 rounded-full bg-accent/20 blur-[90px]" />
      <div className="animate-ring absolute h-64 w-64 rounded-full border border-accent/40" />
      <div className="animate-ring absolute h-64 w-64 rounded-full border border-accent/30 [animation-delay:1.5s]" />

      {/* mount base */}
      <div className="absolute bottom-6 h-24 w-5 rounded-full bg-gradient-to-b from-[#2a2e35] to-[#111317]" />
      <div className="absolute bottom-[88px] h-10 w-10 rounded-full border-2 border-accent bg-[#0b0c0e] shadow-[0_0_30px_var(--accent)]" />

      {/* phone */}
      <div className="animate-float relative h-[400px] w-[196px] rounded-[38px] border border-white/15 bg-gradient-to-b from-[#1a1d22] to-[#0a0b0d] p-2 shadow-2xl">
        <div className="relative h-full w-full overflow-hidden rounded-[30px] bg-gradient-to-br from-[#0d1f0a] via-[#0a0b0d] to-[#1a2a05]">
          <div className="mx-auto mt-3 h-5 w-20 rounded-full bg-black" />
          <div className="mt-10 text-center font-mono text-[11px] tracking-widest text-accent">
            SNAPPED ✓
          </div>
          <div className="mt-2 text-center text-5xl font-semibold tabular-nums">
            9:41
          </div>
          <div className="mx-6 mt-10 h-24 rounded-2xl border border-white/10 bg-white/5" />
          <div className="mx-6 mt-3 h-10 rounded-2xl border border-white/10 bg-white/5" />
          {/* magnet ring on back, peeking through glow */}
          <div className="absolute bottom-10 left-1/2 h-14 w-14 -translate-x-1/2 rounded-full border border-accent/60 shadow-[0_0_24px_var(--accent)]" />
        </div>
      </div>
    </div>
  );
}
