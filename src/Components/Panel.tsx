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
					<div className="grid-cols-4">
						<div>
							<div>
								<p>Número de páginas:</p>
								<button
									className="btn-xs m-2"
									onClick={decreasePages}
								>
									-
								</button>
								<input
									type="number"
									value={numPages}
									onChange={handleNumPages}
									min={1}
									className="text-center w-10 h-10 rounded-lg bg-slate-300"
								/>
								<button
									onClick={increasePages}
									className="btn-xs m-2"
								>
									+
								</button>
							</div>
						</div>
						<div>
							<div>
								<p>Número de idiomas:</p>
								<button
									className="btn-xs m-2"
									onClick={decreaseLanguages}
								>
									-
								</button>
								<input
									type="number"
									value={numLanguages}
									onChange={handleNumLanguages}
									min={1}
									className="text-center w-10 h-10 rounded-lg bg-slate-300"
								/>
								<button
									onClick={increaseLanguages}
									className="btn-xs m-2"
								>
									+
								</button>
							</div>
						</div>
					</div>
				</>
			)}
		</div>
	);
}
