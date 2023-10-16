import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "../components/Home";
import ServiceSelection from "../components/ServiceSelection";


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