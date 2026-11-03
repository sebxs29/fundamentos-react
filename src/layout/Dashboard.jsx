import { NavLink, Outlet } from "react-router";

function Dashboard() {
    return (
        <div className="flex min-h-screen">

            {/* SIDEBAR */}
            <aside className="w-64 bg-sky-950 text-white p-5">

                <h1 className="text-3xl font-bold text-center underline mb-10">
                    Fundamentos
                </h1>

                <nav className="flex flex-col gap-3">

                    <p className="text-gray-300 font-semibold">React</p>

                    <NavLink
                        to="/use-state"
                        className={({ isActive }) =>
                            isActive
                                ? "text-sky-300 underline font-semibold"
                                : "text-white hover:text-sky-300"
                        }
                    >
                        useState
                    </NavLink>

                    <NavLink
                        to="/use-effect"
                        className={({ isActive }) =>
                            isActive
                                ? "text-sky-300 underline font-semibold"
                                : "text-white hover:text-sky-300"
                        }
                    >
                        useEffect
                    </NavLink>

                </nav>
            </aside>

            {/* CONTENIDO */}
            <main className="flex-1 p-6">
                <Outlet />
            </main>

        </div>
    );
}

export default Dashboard;