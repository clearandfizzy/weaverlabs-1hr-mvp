'use client';

import React, {useEffect, useState} from 'react';
import {useRouter} from 'next/navigation';

interface Ingredient {
	id: string;
	name: string;
}

interface RecipeIngredient {
	ingredientId: string;
	quantity: number;
}

export default function RecipePage() {
	const [name, setName] = useState('');
	const [ingredients, setIngredients] = useState<Ingredient[]>([]);
	const [selectedIngredients, setSelectedIngredients] = useState<RecipeIngredient[]>([]);
	const [loading, setLoading] = useState(false);
	const router = useRouter();

	useEffect(() => {
		fetch('/api/ingredients').then(res => res.json()).then(setIngredients);
	}, []);

	const handleSelectIngredient = (id: string) => {
		if (selectedIngredients.some(i => i.ingredientId === id)) return;
		setSelectedIngredients([...selectedIngredients, {ingredientId: id, quantity: 1}]);
	};

	const handleQuantityChange = (id: string, qty: number) => {
		setSelectedIngredients(selectedIngredients.map(i =>
			i.ingredientId === id ? {...i, quantity: qty} : i
		));
	};

	const handleRemoveIngredient = (id: string) => {
		setSelectedIngredients(selectedIngredients.filter(i => i.ingredientId !== id));
	};

	const handleSubmit = async (e: React.FormEvent) => {
		e.preventDefault();
		if (!name || selectedIngredients.length === 0) return;
		setLoading(true);
		await fetch('/api/recipes', {
			method: 'POST',
			headers: {'Content-Type': 'application/json'},
			body: JSON.stringify({name, ingredients: selectedIngredients})
		});
		setLoading(false);
		router.push('/list');
	};

	return (
		<div className="max-w-2xl mx-auto px-4 py-8 bg-white rounded-lg shadow-md">
			<h1 className="text-2xl font-bold mb-6 text-center">Add New Recipe</h1>
			<form onSubmit={handleSubmit} className="flex flex-col gap-6">
				<input
					className="border rounded px-3 py-2 focus:outline-none focus:ring focus:border-blue-300 mb-2"
					placeholder="Recipe Name"
					value={name}
					onChange={e => setName(e.target.value)}
					required
				/>
				<div>
					<h2 className="text-lg font-semibold mb-2">Select Ingredients</h2>
					<ul className="flex flex-col gap-2 mb-4">
						{ingredients.map(ing => (
							<li key={ing.id} className="flex items-center justify-between bg-gray-50 rounded px-2 py-1">
								<span>{ing.name}</span>
								<button
									type="button"
									onClick={() => handleSelectIngredient(ing.id)}
									disabled={selectedIngredients.some(i => i.ingredientId === ing.id)}
									className="bg-green-600 hover:bg-green-700 text-white font-semibold py-1 px-3 rounded shadow transition disabled:opacity-50 disabled:cursor-not-allowed"
								>
									Add
								</button>
							</li>
						))}
					</ul>
				</div>
				<div>
					<h2 className="text-lg font-semibold mb-2">Selected Ingredients</h2>
					<ul className="flex flex-col gap-2 mb-4">
						{selectedIngredients.map(sel => (
							<li key={sel.ingredientId} className="flex items-center gap-2 bg-gray-50 rounded px-2 py-1">
								<span>{ingredients.find(i => i.id === sel.ingredientId)?.name || sel.ingredientId}</span>
								<input
									type="number"
									min={1}
									value={sel.quantity}
									onChange={e => handleQuantityChange(sel.ingredientId, Number(e.target.value))}
									className="border rounded px-2 py-1 w-20 focus:outline-none focus:ring focus:border-blue-300"
								/>
								<button
									type="button"
									onClick={() => handleRemoveIngredient(sel.ingredientId)}
									className="bg-red-600 hover:bg-red-700 text-white font-semibold py-1 px-3 rounded shadow transition"
								>
									Remove
								</button>
							</li>
						))}
					</ul>
				</div>
				<button
					type="submit"
					disabled={loading}
					className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded shadow transition disabled:opacity-50 disabled:cursor-not-allowed"
				>
					Save Recipe
				</button>
			</form>
		</div>
	);
}
