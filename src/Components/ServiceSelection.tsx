import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Total from "./Total";
import Service from "./Service";
import servicesData from "./data/Services.json";
import Panel from "./Panel";

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
			<div className="text-center">
				<h1 className="text-3xl font-bold my-4">CONSIGUE LA MEJOR CALIDAD</h1>
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
				{selectedServices[3] && <Panel onUpdate={budget} />}
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
