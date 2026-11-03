const Intro = () => {
  return (
    <div className="relative w-full overflow-hidden rounded-[2rem] border border-white/15 bg-white/[0.07] p-7 text-left shadow-[0_24px_80px_rgba(0,0,0,0.28)] backdrop-blur-2xl sm:p-12">
      <div className="pointer-events-none absolute -bottom-24 -right-20 h-64 w-64 rounded-full bg-indigo-400/15 blur-3xl" />
      <div className="relative flex flex-col gap-8 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <p className="mb-3 text-[10px] font-bold uppercase tracking-[0.3em] text-indigo-300/80">useEffect</p>
          <div className="text-3xl font-semibold tracking-tight text-white sm:text-4xl">Intro a useState</div>
        </div>
        <div className="flex h-14 w-14 items-center justify-center rounded-2xl border border-indigo-200/20 bg-indigo-300/10 text-indigo-200 shadow-lg shadow-indigo-950/30">
          <span className="text-lg">✦</span>
        </div>
      </div>
    </div>
  )
}

export default Intro