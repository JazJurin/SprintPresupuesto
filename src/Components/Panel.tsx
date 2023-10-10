import { useState } from "react";

export default function Panel({ onUpdate }) {
	const [numPages, SetNumPages] = useState(1);
	const [numLanguages, setNumLenguages] = useState(1);

	const handleNumPages = (e) => {
		const value = parseInt(e.target.value);
		SetNumPages(value);
		onUpdate(numLanguages, value);
	};

	const handleNumLanguages = (e) => {
		const value = parseInt(e.target.value);
		setNumLenguages(value);
		onUpdate(numPages, value);
	};

	return (
		<div>
			<div>
				<label>
					Número de páginas:
					<input
						type="number"
						value={numPages}
						onChange={handleNumPages}
						min={1}
					/>
				</label>
			</div>
			<div>
				<label>
					Número de idiomas:
					<input
						type="number"
						value={numLanguages}
						onChange={handleNumLanguages}
						min={1}
					/>
				</label>
			</div>
		</div>
	);
}
