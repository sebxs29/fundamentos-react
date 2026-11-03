import { Routes, Route, Navigate } from "react-router";

import Dashboard from "./layout/Dashboard";
import FundamentoUseState from "./paginas/FundamentoUseState";
import FundamentoUseEffect from "./paginas/FundamentoUseEffect";
import FundamentoCustomHook from "./paginas/FundamentoCustomHook";

import NotFound from "./paginas/NotFound";

function App() {
    return (
        <Routes>

            <Route element={<Dashboard />}>

                <Route path="/" element={<Navigate to="/use-state" replace />} />

                <Route path="/use-state" element={<FundamentoUseState />} />

                <Route path="/use-effect" element={<FundamentoUseEffect />} />

                <Route path="/custom-hook" element={<FundamentoCustomHook />} />

            </Route>

            <Route path="*" element={<NotFound/>} />

        </Routes>
    );
}

export default App;