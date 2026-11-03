import { NavLink, Outlet } from "react-router";

function Dashboard() {
    return (
        <div className="relative flex min-h-screen flex-col overflow-hidden bg-[#080b16] text-slate-100 lg:flex-row">

            {/* SIDEBAR */}
            <aside className="z-10 flex w-full flex-col border-b border-white/10 bg-white/[0.035] px-5 py-5 backdrop-blur-2xl lg:min-h-screen lg:w-72 lg:shrink-0 lg:border-b-0 lg:border-r lg:px-7 lg:py-8">
                <div className="flex items-center gap-3 lg:mb-16">
                    <div className="flex h-11 w-11 items-center justify-center rounded-2xl border border-cyan-200/20 bg-gradient-to-br from-cyan-300/30 to-indigo-400/30 text-lg font-bold text-cyan-100 shadow-lg shadow-cyan-950/30">
                        F
                    </div>
                    <div>
                        <h1 className="text-lg font-semibold tracking-tight text-white">Fundamentos</h1>
                        <p className="text-xs text-slate-500">React workspace</p>
                    </div>
                </div>

                <nav className="mt-6 flex gap-2 overflow-x-auto lg:mt-0 lg:flex-col">
                    <p className="hidden px-3 pb-2 text-[10px] font-semibold uppercase tracking-[0.25em] text-slate-500 lg:block">React</p>

                    <NavLink
                        to="/use-state"
                        className={({ isActive }) =>
                            isActive
                                ? "group flex min-w-max items-center gap-3 rounded-2xl border border-cyan-200/20 bg-gradient-to-r from-cyan-300/15 to-indigo-400/10 px-4 py-3 text-sm font-semibold text-white shadow-lg shadow-cyan-950/20 transition-all duration-300"
                                : "group flex min-w-max items-center gap-3 rounded-2xl border border-transparent px-4 py-3 text-sm text-slate-400 transition-all duration-300 hover:border-white/10 hover:bg-white/[0.06] hover:text-white"
                        }
                    >
                        <span className="flex h-7 w-7 items-center justify-center rounded-xl bg-white/10 text-xs text-cyan-200">01</span>
                        <span>useState</span>
                    </NavLink>

                    <NavLink
                        to="/use-effect"
                        className={({ isActive }) =>
                            isActive
                                ? "group flex min-w-max items-center gap-3 rounded-2xl border border-cyan-200/20 bg-gradient-to-r from-cyan-300/15 to-indigo-400/10 px-4 py-3 text-sm font-semibold text-white shadow-lg shadow-cyan-950/20 transition-all duration-300"
                                : "group flex min-w-max items-center gap-3 rounded-2xl border border-transparent px-4 py-3 text-sm text-slate-400 transition-all duration-300 hover:border-white/10 hover:bg-white/[0.06] hover:text-white"
                        }
                    >
                        <span className="flex h-7 w-7 items-center justify-center rounded-xl bg-white/10 text-xs text-cyan-200">02</span>
                        <span>useEffect</span>
                    </NavLink>

                </nav>

            </aside>

            {/* CONTENIDO */}
            <main className="relative flex min-h-screen flex-1 overflow-hidden bg-[radial-gradient(circle_at_80%_10%,rgba(34,211,238,0.12),transparent_30%),radial-gradient(circle_at_15%_85%,rgba(99,102,241,0.14),transparent_32%),linear-gradient(135deg,#0b1020_0%,#11162a_55%,#16152d_100%)] p-5 sm:p-8 lg:p-12">
                <div className="pointer-events-none absolute -right-32 -top-32 h-96 w-96 rounded-full bg-cyan-400/10 blur-3xl" />
                <div className="pointer-events-none absolute -bottom-40 left-1/3 h-96 w-96 rounded-full bg-indigo-500/10 blur-3xl" />
                <div className="relative mx-auto flex w-full max-w-6xl flex-1 flex-col">
                    <header className="mb-8 flex items-end justify-between gap-4">
                        <div>
                            <p className="mb-2 text-xs font-semibold uppercase tracking-[0.3em] text-cyan-300/70">sebxs29-andrxuy</p>
                            <h2 className="text-2xl font-semibold tracking-tight text-white sm:text-3xl">Desarollo de aplicaciones web</h2>
                        </div>
                        
                    </header>
                    <Outlet />
                </div>
            </main>

        </div>
    );
}

export default Dashboard;