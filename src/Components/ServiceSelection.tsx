import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Total from "./Total";
import Service from "./Service";
import servicesData from "./data/Services.json";
import Panel from "./Panel";
import BudgetList from "./BudgetList";

export default function ServiceSelection() {
	const [selectedServices, SetSelectedServices] = useState({});
	const [services, setServices] = useState([]);
	const [webCost, setWebCost] = useState(0);
	const [totalCost, setTotalCost] = useState(0);

	useEffect(() => {
		setServices(servicesData);
	}, []);

	function handleServicesToggle(serviceId) {
		SetSelectedServices((prevSelectedServices) => {
			const newSelectedServices = { ...prevSelectedServices };
			newSelectedServices[serviceId] = !newSelectedServices[serviceId];
			return newSelectedServices;
		});
	}

	function calculateTotal() {
		const selectServicesTotal = services.reduce((total, service) => {
			if (selectedServices[service.id]) {
				return total + service.price;
			}
			return total;
		}, 0);
		return selectServicesTotal + webCost;
	}

	function budget(numPages, numLanguages) {
		const cost = numPages * numLanguages * 30;
		setWebCost(cost);
	}

	useEffect(() => {
		setTotalCost(calculateTotal());
	}, [selectedServices, webCost]);

	return (
		<>
			<div className="bg-slate-300">
				<div>
					<h1 className="text-center text-bold text-blue-500 text-3xl">
						CONSIGUE LA MEJOR CALIDAD
					</h1>
				</div>
				<div className="text-left">
					{services.map((service) => (
						<Service
							key={service.id}
							data={service}
							selected={selectedServices[service.id]}
							onSelect={() => handleServicesToggle(service.id)}
							budget={budget}
						/>
					))}
				</div>
				<div className="flex">
					{selectedServices[3] && <Panel onUpdate={budget} />}
				</div>
				<BudgetList selectedService={selectedServices} total={totalCost} />
				<Total total={totalCost} />
				<div className="text-center mt-4">
					<Link to="/" className="btn btn-neutral">
						HOME
					</Link>
				</div>
			</div>
		</>
	);
}
