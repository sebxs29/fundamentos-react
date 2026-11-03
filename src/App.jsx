import { Routes, Route, Navigate } from "react-router";

import Dashboard from "./layout/Dashboard";
import FundamentoUseState from "./paginas/FundamentoUseState";
import FundamentoUseEffect from "./paginas/FundamentoUseEffect";

function App() {
    return (
        <Routes>

            <Route element={<Dashboard />}>

                <Route path="/" element={<Navigate to="/use-state" replace />} />

                <Route path="/use-state" element={<FundamentoUseState />} />

                <Route path="/use-effect" element={<FundamentoUseEffect />} />

            </Route>

        </Routes>
    );
}

export default App;