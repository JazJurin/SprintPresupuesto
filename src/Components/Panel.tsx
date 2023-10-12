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
			<div>
				<label>
					Número de páginas:
					<button onClick={decreasePages}>-</button>
					<input
						type="number"
						value={numPages}
						onChange={handleNumPages}
						min={1}
					/>
					<button onClick={increasePages}>+</button>
				</label>
			</div>
			<div>
				<label>
					Número de idiomas:
					<button onClick={decreaseLanguages}>-</button>
					<input
						type="number"
						value={numLanguages}
						onChange={handleNumLanguages}
						min={1}
					/>
					<button onClick={increaseLanguages}>+</button>
				</label>
					</div>
					</>
			)}
		</div>
	);
}
