import Panel from "./Panel";
export default function Service({ data, selected, onSelect }) {
	return (
		<>
			<div className="bg-white rounded-lg shadow-lg p-4 m-4 w-64">
				<h3 className="text-lg font-semibold">{data.name}</h3>
				<p className="text-gray-600">{data.description}</p>
				<p className="text-blue-500 font-semibold">Precio: {data.price} €</p>
				<label className="flex items-center mt-4">
					<input
						type="checkbox"
						checked={selected}
						onChange={onSelect}
						className="form-checkbox text-blue-500"
					/>
					<span className="ml-2">Seleccionar</span>
				</label>
				{selected && (data.id===3) && <Panel/> }
			</div>
		</>
	);
}
