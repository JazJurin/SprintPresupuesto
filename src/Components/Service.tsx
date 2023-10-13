import Panel from "./Panel";

export default function Service({ data, selected, onSelect, budget }) {
	const isWeb = data.id === 3;
	return (
		<>
			<div className="bg-white rounded-lg shadow-lg p-4 m-4 max-w-sm mx-auto">
				<div className="flex justify-between items-center">
					<div>
						<h3 className="text-lg font-semibold">{data.name}</h3>
						<p className="text-gray-600">{data.description}</p>
						<p className="text-blue-500 font-semibold">
							Precio: {data.price} €
						</p>
					</div>
					{isWeb && selected && (
						<div className="my-4">
							<Panel onUpdate={budget} showBottons={true} />
						</div>
					)}
					<div className="flex">
						<input
							type="checkbox"
							checked={selected}
							onChange={onSelect}
							className="form-checkbox text-blue-500"
						/>
						<span className="ml-2">Seleccionar</span>
					</div>
				</div>
			</div>
		</>
	);
}
