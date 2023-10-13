import { useState } from "react";

export default function Panel({ onUpdate, showBottons }) {
	const [numPages, setNumPages] = useState(1);
	const [numLanguages, setNumLanguages] = useState(1);

	const handleNumPages = (e) => {
		const value = parseInt(e.target.value);
		setNumPages(value);
		onUpdate(numPages, value, numLanguages);
	};

	const handleNumLanguages = (e) => {
		const value = parseInt(e.target.value);
		setNumLanguages(value);
		onUpdate(numPages, numLanguages, value);
	};

	const increasePages = () => {
		setNumPages(numPages + 1);
		onUpdate(numPages, numPages + 1, numLanguages);
	};

	const decreasePages = () => {
		if (numPages > 1) {
			setNumPages(numPages - 1);
			onUpdate(numPages, numPages - 1, numLanguages);
		}
	};

	const increaseLanguages = () => {
		setNumLanguages(numLanguages + 1);
		onUpdate(numPages, numLanguages, numLanguages + 1);
	};

	const decreaseLanguages = () => {
		if (numLanguages > 1) {
			setNumLanguages(numLanguages - 1);
			onUpdate(numPages, numLanguages, numLanguages - 1);
		}
	};

	return (
		<div>
			{showBottons && (
				<>
					<div className="flex items-center my-2">
						<div className="relative rounded-md shadow-sm flex items-center">
							<div className="text-center">Número de páginas:</div>
							<button
								className="bg-blue-300 text-white py-1 px-2 rounded-l-full"
								onClick={decreasePages}
							>
								-
							</button>
							<input
								type="number"
								value={numPages}
								onChange={handleNumPages}
								min={1}
								className="text-center form-input block w-10 rounded-none"
							/>
							<button onClick={increasePages}
							className="bg-blue-300 text-white py-1 px-2 rounded-r-full">+</button>
						</div>
					</div>
					<div>
						<div className="relative rounded-md shadow-sm flex items-center">
						<div className="text-center">Número de idiomas:</div>
							<button
								className="bg-blue-300 text-white py-1 px-3 ml-2 rounded-l-full"
								onClick={decreaseLanguages}
							>
								-
							</button>
							<input
								type="number"
								value={numLanguages}
								onChange={handleNumLanguages}
								min={1}
								className="text-center form-input block w-10 rounded-none"
							/>
							<button
								onClick={increaseLanguages}
								className="bg-blue-300 text-white py-1 px-2 rounded-r-full"
							>
								+
							</button>
						</div>
					</div>
				</>
			)}
		</div>
	);
}
