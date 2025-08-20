'use client';
import React, {useEffect, useState} from 'react';

interface Ingredient {
	id: string;
	name: string;
	unit: string;
	category: string;
}

export default function IngredientsPage() {
	const [ingredients, setIngredients] = useState<Ingredient[]>([]);
	const [newName, setNewName] = useState('');
	const [newUnit, setNewUnit] = useState('');
	const [newCategory, setNewCategory] = useState('');
	const [loading, setLoading] = useState(false);

	useEffect(() => {
		fetch('/api/ingredients')
			.then(res => res.json())
			.then(setIngredients);
	}, []);

	const addIngredient = async () => {
		if (!newName || !newUnit || !newCategory) return;
		setLoading(true);
		const res = await fetch('/api/ingredients', {
			method: 'POST',
			headers: {'Content-Type': 'application/json'},
			body: JSON.stringify({name: newName, unit: newUnit, category: newCategory})
		});
		const added = await res.json();
		setIngredients(prev => [...prev, added]);
		setNewName('');
		setNewUnit('');
		setNewCategory('');
		setLoading(false);
	};

	const removeIngredient = async (id: string) => {
		setIngredients(prev => prev.filter(i => i.id !== id)); // Optimistic
		await fetch('/api/ingredients', {
			method: 'DELETE',
			headers: {'Content-Type': 'application/json'},
			body: JSON.stringify({id})
		});
	};

	return (
		<div className="max-w-2xl mx-auto px-4 py-8 bg-white rounded-lg shadow-md">
			<h1 className="text-2xl font-bold mb-6 text-center">Ingredients</h1>
			<table className="w-full border border-gray-200 rounded mb-8">
				<thead className="bg-gray-100">
				<tr>
					<th className="py-2 px-3 text-left">Name</th>
					<th className="py-2 px-3 text-left">Unit</th>
					<th className="py-2 px-3 text-left">Category</th>
					<th className="py-2 px-3 text-left">Remove</th>
				</tr>
				</thead>
				<tbody>
				{ingredients.map(ing => (
					<tr key={ing.id} className="border-t hover:bg-gray-50">
						<td className="py-2 px-3">{ing.name}</td>
						<td className="py-2 px-3">{ing.unit}</td>
						<td className="py-2 px-3">{ing.category}</td>
						<td className="py-2 px-3">
							<button onClick={() => removeIngredient(ing.id)} aria-label={`Remove ${ing.name}`}
									className="text-red-600 hover:text-red-800 p-1 rounded transition">
								🗑️
							</button>
						</td>
					</tr>
				))}
				</tbody>
			</table>
			<h2 className="text-lg font-semibold mb-2">Add Ingredient</h2>
			<div className="flex flex-col gap-3 mb-4">
				<input className="border rounded px-3 py-2 focus:outline-none focus:ring focus:border-blue-300"
					   placeholder="Name" value={newName} onChange={e => setNewName(e.target.value)}/>
				<input className="border rounded px-3 py-2 focus:outline-none focus:ring focus:border-blue-300"
					   placeholder="Unit" value={newUnit} onChange={e => setNewUnit(e.target.value)}/>
				<input className="border rounded px-3 py-2 focus:outline-none focus:ring focus:border-blue-300"
					   placeholder="Category" value={newCategory} onChange={e => setNewCategory(e.target.value)}/>
			</div>
			<button onClick={addIngredient} disabled={loading}
					className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded shadow transition disabled:opacity-50 disabled:cursor-not-allowed">
				Add
			</button>
		</div>
	);
}
