import { useState } from "react"

const Intro = () => {

  // MOSTRAR / OCULTAR contraseña
  const [visible, setVisible] = useState(false)

  return (
    <div className="relative w-full overflow-hidden rounded-[2rem] border border-white/15 bg-white/[0.07] p-6 text-left shadow-[0_24px_80px_rgba(0,0,0,0.28)] backdrop-blur-2xl sm:p-10">
        <div className="pointer-events-none absolute -right-16 -top-24 h-64 w-64 rounded-full bg-cyan-300/10 blur-3xl" />
        <div className="relative">
          <div className="mb-8 flex items-start justify-between gap-4">
            <div>
              <p className="mb-3 text-[10px] font-bold uppercase tracking-[0.3em] text-cyan-300/75">useState</p>
              <h1 className="text-3xl font-semibold tracking-tight text-white sm:text-4xl">Iniciar sesion</h1>
            </div>
          </div>

          <div className="rounded-2xl border border-white/10 bg-slate-950/25 p-2 shadow-inner shadow-black/10 sm:flex sm:items-center">
            <input
              className="w-full rounded-xl border border-transparent bg-transparent px-4 py-3 text-sm text-slate-100 outline-none transition-all duration-300 placeholder:text-slate-500 focus:border-cyan-300/40 focus:bg-white/[0.04] focus:ring-4 focus:ring-cyan-400/10"
              type={visible ? "text" : "password"}
              placeholder="Enter your password"
            />

            <button
              className="mt-2 w-full rounded-xl border border-cyan-200/20 bg-gradient-to-r from-cyan-300/20 to-indigo-400/20 px-5 py-3 text-sm font-semibold text-cyan-50 transition-all duration-300 hover:-translate-y-0.5 hover:border-cyan-200/40 hover:from-cyan-300/30 hover:to-indigo-400/30 hover:shadow-lg hover:shadow-cyan-950/30 focus:outline-none focus:ring-4 focus:ring-cyan-300/20 sm:mt-0 sm:w-auto"
              onClick={() => setVisible(!visible)}
            >
              {visible ? "hide" : "show"}
            </button>
          </div>
        </div>
    </div>
  )
}

export default Intro