import { BrowserRouter, Route, Routes } from "react-router-dom";
import ServiceSelection from "../Components/ServiceSelection";
import Home from "../Components/Home";

export default function Rutas() {
    return (
        <BrowserRouter>
            <Routes>
                <Route index element={<Home />} />
                <Route path="/Calculadora"
                    element={<ServiceSelection/>} />
            </Routes>
        </BrowserRouter>
    )
}