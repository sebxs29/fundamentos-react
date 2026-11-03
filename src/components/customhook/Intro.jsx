import useLocalStorage from "../../hooks/useLocalStorage"

// Clave con la que se guarda el contador en el navegador
const CLAVE = "fundamentos-react:contador"

const Intro = () => {
  // Usamos nuestro hook exactamente igual que useState
  const [contador, setContador] = useLocalStorage(CLAVE, 0)

  return (
    <div className="relative w-full overflow-hidden rounded-[2rem] border border-white/15 bg-white/[0.07] p-7 text-left shadow-[0_24px_80px_rgba(0,0,0,0.28)] backdrop-blur-2xl sm:p-12">
      <div className="pointer-events-none absolute -right-16 -top-24 h-64 w-64 rounded-full bg-cyan-300/10 blur-3xl" />

      <div className="relative">
        {/* Encabezado */}
        <div className="mb-8 flex items-start justify-between gap-4">
          <div>
            <p className="mb-3 text-[10px] font-bold uppercase tracking-[0.3em] text-cyan-300/75">
              custom hook
            </p>
            <h1 className="text-3xl font-semibold tracking-tight text-white sm:text-4xl">
              useLocalStorage
            </h1>
          </div>

          <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl border border-cyan-200/20 bg-cyan-300/10 text-cyan-200 shadow-lg shadow-cyan-950/30">
            <span className="text-lg">⌘</span>
          </div>
        </div>

        {/* Contador persistente */}
        <div className="flex flex-col gap-6 rounded-2xl border border-white/10 bg-slate-950/25 p-6 shadow-inner shadow-black/10 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <p className="mb-2 text-[10px] font-semibold uppercase tracking-[0.25em] text-slate-400">
              Valor guardado en el navegador
            </p>

            <p className="font-mono text-4xl font-semibold tracking-tight text-white tabular-nums sm:text-5xl">
              {contador}
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-2">
            <button
              className="rounded-xl border border-white/10 bg-white/[0.06] px-5 py-3 text-sm font-semibold text-slate-200 transition-all duration-300 hover:-translate-y-0.5 hover:border-white/20 hover:bg-white/10 focus:outline-none focus:ring-4 focus:ring-white/10"
              onClick={() => setContador(contador - 1)}
            >
              −1
            </button>

            <button
              className="rounded-xl border border-cyan-200/20 bg-gradient-to-r from-cyan-300/20 to-indigo-400/20 px-5 py-3 text-sm font-semibold text-cyan-50 transition-all duration-300 hover:-translate-y-0.5 hover:border-cyan-200/40 hover:from-cyan-300/30 hover:to-indigo-400/30 hover:shadow-lg hover:shadow-cyan-950/30 focus:outline-none focus:ring-4 focus:ring-cyan-300/20"
              onClick={() => setContador(contador + 1)}
            >
              +1
            </button>

            <button
              className="rounded-xl border border-transparent px-4 py-3 text-sm text-slate-400 transition-all duration-300 hover:border-white/10 hover:bg-white/[0.06] hover:text-white focus:outline-none focus:ring-4 focus:ring-white/10"
              onClick={() => setContador(0)}
            >
              Reiniciar
            </button>
          </div>
        </div>

        <p className="mt-5 text-sm leading-relaxed text-slate-400">
          Recarga la página (F5): el valor se mantiene gracias a que el hook
          sincroniza el estado con{" "}
          <code className="rounded-md bg-white/10 px-1.5 py-0.5 font-mono text-xs text-cyan-200">
            localStorage
          </code>
          .
        </p>
      </div>
    </div>
  )
}

export default Intro
