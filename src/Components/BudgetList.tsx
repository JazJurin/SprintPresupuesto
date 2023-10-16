import { useState } from "react";
import { AiOutlineCloseCircle } from "react-icons/ai";

export default function BudgetList({ selectedService, total }) {
	const [budgets, setBudgets] = useState([]);
	const [budgetName, setBudgetName] = useState("");
	const [clientName, setClientName] = useState("");

	const addBudget = () => {
        if (budgetName && clientName) {
			const newBudget = {
				name: budgetName,
				client: clientName,
				service: selectedService,
				total: total,
			};
			setBudgets([...budgets, newBudget]);
			setBudgetName("");
			setClientName("");
		}
	};

	const deleteBudget = (index) => {
		const updateBudgets = [...budgets];
		updateBudgets.splice(index, 1);
		setBudgets(updateBudgets);
	};

	return (
		<div className="bg-white rounded-lg shadow-lg p-4 m-4 max-w-sm mx-auto text-center">
			<h1 className="text-2xl mb-2">Solicitar Presupuesto</h1>		
			<input
				className="input input-bordered join-item m-2 bg-slate-300"
				placeholder="Nombre de presupuesto"
				value={budgetName}
				onChange={(e) => setBudgetName(e.target.value)}
			/>
			<input
				className="input input-bordered join-item m-2 bg-slate-300"
				placeholder="Nombre de cliente"
				value={clientName}
				onChange={(e) => setClientName(e.target.value)}
			/>
			<button onClick={addBudget} className="btn btn-outline m-2">
				Agregar Presupuesto
            </button>
            
            <ul className="list-item p-0">
                {budgets.map((budget, index) => (
                    <>
                    <h2 className="text-2xl mb-2">Lista de presupuestos:</h2>
					<li key={index} className="m-4 text-left">
						<div>
							<strong>Nombre del Presupuesto:</strong> {budget.name}
						</div>
						<div>
                            <strong>Cliente:</strong> {budget.client}
                            <button
							className="btn-m btn-outline float-right"
							onClick={() => deleteBudget(index)}
						>
							<AiOutlineCloseCircle />
						</button>
						</div>
						<div>
							<strong>Total:</strong> {budget.total} €
						</div>
						
                        </li>
                        </>
				))}
			</ul>
		</div>
	);
}
