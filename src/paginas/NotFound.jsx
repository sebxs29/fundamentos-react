import { Link } from "react-router";

function NotFound() {
    return (
        <div className="flex min-h-screen flex-col items-center justify-center bg-[radial-gradient(circle_at_50%_20%,rgba(34,211,238,0.12),transparent_35%),linear-gradient(135deg,#080b16,#17152d)] px-6 text-center">

            <h1 className="rounded-[2rem] border border-white/15 bg-white/[0.07] px-8 py-12 text-7xl font-bold tracking-tight text-cyan-200 shadow-[0_24px_80px_rgba(0,0,0,0.3)] backdrop-blur-2xl sm:px-16 sm:text-8xl">
                404
            </h1>

            <h2 className="mt-7 text-2xl font-semibold tracking-tight text-white">
                Página no encontrada
            </h2>

            <p className="mt-3 text-slate-400">
                La página que buscas no existe.
            </p>

            <Link
                to="/"
                className="mt-8 inline-flex rounded-xl border border-cyan-200/20 bg-gradient-to-r from-cyan-300/20 to-indigo-400/20 px-5 py-3 font-semibold text-cyan-50 transition-all duration-300 hover:-translate-y-0.5 hover:border-cyan-200/40 hover:from-cyan-300/30 hover:to-indigo-400/30 hover:shadow-lg hover:shadow-cyan-950/30 focus:outline-none focus:ring-4 focus:ring-cyan-300/20"
            >
                Volver al inicio
            </Link>

        </div>
    );
}

export default NotFound;