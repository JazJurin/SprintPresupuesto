import { useState, useEffect } from "react";
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
			<div>
				<h1>Consigue la mejor calidad</h1>
				<div className="bg-black">
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
				{selectedServices[3] && <Panel onUpdate={budget} />}
				<Total total={totalCost} />
			</div>
		</>
	);
}
