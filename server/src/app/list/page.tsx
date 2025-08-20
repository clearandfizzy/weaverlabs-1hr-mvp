'use client';

import React, {useEffect, useState} from 'react';
import Link from 'next/link';

interface Ingredient {
	id: string;
	name: string;
}

interface RecipeIngredient {
	ingredientId: string;
	quantity: number;
}

interface Recipe {
	id: string;
	name: string;
	ingredients: RecipeIngredient[];
}

export default function RecipeListPage() {
	const [recipes, setRecipes] = useState<Recipe[]>([]);
	const [ingredients, setIngredients] = useState<Ingredient[]>([]);

	useEffect(() => {
		fetch('/api/recipes').then(res => res.json()).then(setRecipes);
		fetch('/api/ingredients').then(res => res.json()).then(setIngredients);
	}, []);

	const getIngredientName = (id: string) => ingredients.find(i => i.id === id)?.name || id;

	const deleteRecipe = async (id: string) => {
		setRecipes(prev => prev.filter(r => r.id !== id)); // Optimistic
		await fetch('/api/recipes', {
			method: 'DELETE',
			headers: {'Content-Type': 'application/json'},
			body: JSON.stringify({id})
		});
	};

	return (
		<div className="max-w-2xl mx-auto px-4 py-8 bg-white rounded-lg shadow-md">
			<h1 className="text-2xl font-bold mb-6 text-center">Recipes</h1>
			<div className="mb-6 text-center">
				<Link href="/recipe">
					<button
						className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded shadow transition">
						Add New Recipe
					</button>
				</Link>
			</div>
			<table className="w-full border border-gray-200 rounded mb-8">
				<thead className="bg-gray-100">
				<tr>
					<th className="py-2 px-3 text-left">Name</th>
					<th className="py-2 px-3 text-left">Ingredients</th>
					<th className="py-2 px-3 text-left">Delete</th>
				</tr>
				</thead>
				<tbody>
				{recipes.map(recipe => (
					<tr key={recipe.id} className="border-t hover:bg-gray-50">
						<td className="py-2 px-3">{recipe.name}</td>
						<td className="py-2 px-3">
							{recipe.ingredients.map(ri => `${getIngredientName(ri.ingredientId)} (${ri.quantity})`).join(', ')}
						</td>
						<td className="py-2 px-3">
							<button onClick={() => deleteRecipe(recipe.id)} aria-label={`Delete ${recipe.name}`}
									className="text-red-600 hover:text-red-800 p-1 rounded transition">
								🗑️
							</button>
						</td>
					</tr>
				))}
				</tbody>
			</table>
		</div>
	);
}
