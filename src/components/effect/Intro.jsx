import { useEffect, useState } from "react"

// Devuelve la hora actual formateada como HH:MM:SS
const obtenerHora = () =>
  new Date().toLocaleTimeString("es-EC", {
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
    hour12: false,
  })

const Intro = () => {
  // Estado que guarda la hora que se muestra en pantalla
  const [hora, setHora] = useState(obtenerHora)

  // useEffect: arranca el intervalo al montar el componente
  useEffect(() => {
    const intervalo = setInterval(() => {
      // Actualizamos el estado cada segundo
      setHora(obtenerHora())
    }, 1000)

    // Cleanup (limpieza): se ejecuta al desmontar el componente
    // para evitar que el intervalo siga corriendo en segundo plano
    return () => clearInterval(intervalo)
  }, []) // [] => el efecto solo se ejecuta una vez

  return (
    <div className="relative w-full overflow-hidden rounded-[2rem] border border-white/15 bg-white/[0.07] p-7 text-left shadow-[0_24px_80px_rgba(0,0,0,0.28)] backdrop-blur-2xl sm:p-12">
      <div className="pointer-events-none absolute -bottom-24 -right-20 h-64 w-64 rounded-full bg-indigo-400/15 blur-3xl" />

      <div className="relative">
        {/* Encabezado */}
        <div className="mb-8 flex items-start justify-between gap-4">
          <div>
            <p className="mb-3 text-[10px] font-bold uppercase tracking-[0.3em] text-indigo-300/80">
              useEffect
            </p>
            <h1 className="text-3xl font-semibold tracking-tight text-white sm:text-4xl">
              Reloj en vivo
            </h1>
          </div>

          <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl border border-indigo-200/20 bg-indigo-300/10 text-indigo-200 shadow-lg shadow-indigo-950/30">
            <span className="text-lg">✦</span>
          </div>
        </div>

        {/* Reloj */}
        <div className="flex flex-col gap-4 rounded-2xl border border-white/10 bg-slate-950/25 p-6 shadow-inner shadow-black/10 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <p className="mb-2 flex items-center gap-2 text-[10px] font-semibold uppercase tracking-[0.25em] text-slate-400">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-400" />
              </span>
              Actualizando cada segundo
            </p>

            <p className="font-mono text-4xl font-semibold tracking-tight text-white tabular-nums sm:text-5xl">
              {hora}
            </p>
          </div>

          <p className="max-w-xs text-sm leading-relaxed text-slate-400">
            El intervalo se crea dentro de{" "}
            <code className="rounded-md bg-white/10 px-1.5 py-0.5 font-mono text-xs text-indigo-200">
              useEffect
            </code>{" "}
            y se destruye con{" "}
            <code className="rounded-md bg-white/10 px-1.5 py-0.5 font-mono text-xs text-indigo-200">
              clearInterval
            </code>{" "}
            al salir de la página.
          </p>
        </div>
      </div>
    </div>
  )
}

export default Intro
