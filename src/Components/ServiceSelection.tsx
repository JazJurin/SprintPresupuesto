import { useState, useEffect } from "react";
import Total from "./Total";
import Service from "./Service";
import servicesData from "../Services.json";
export default function ServiceSelection() {
	const [selectedServices, SetSelectedServices] = useState({});
	const [services, setServices] = useState([]);

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
		return services.reduce((total, service) => {
			if (selectedServices[service.id]) {
				return total + service.price;
			}
			return total;
		}, 0);
	}

	return (
		<div>
			<h1>Consigue la mejor calidad</h1>
			<div className="grid grid-cols-1 md:grid-cols-3 gap-4">
				{services.map((service) => (
					<Service
						key={service.id}
						data={service}
						selected={selectedServices[service.id]}
						onSelect={() => handleServicesToggle(service.id)}
					/>
				))}
			</div>
			<Total total={calculateTotal()} />
		</div>
	);
}
