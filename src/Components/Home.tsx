import { Link } from "react-router-dom";
import imgCalculadora from "../assets/images/imgCalculadora.jpg"

export default function Home() {
    return (
        <div className="hero min-h-screen"
            style={{ backgroundImage:  `url(${imgCalculadora})` }}>
        <div className="hero-overlay bg-opacity-30"></div>
        <div className="hero-content text-center text-neutral-content">
          <div className="max-w-md">
            <h1 className="mb-5 text-black text-5xl font-bold">Bienvenido!</h1>
            <p className="m-10 text-black bg-white bg-opacity-40 text-2xl">Te brindamos acceso a una calculadora digital que te ayudará a calcular tu presupuesto en base a todas tus preferencias.Accede para obtenerlo.</p>
            <Link to="/Calculadora" className="btn btn-neutral">Obetener mi presupuesto</Link>
          </div>
        </div>
      </div>
)
}