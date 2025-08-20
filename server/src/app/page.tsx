import Link from 'next/link';

export default function Home() {
	return (
		<main className="max-w-xl mx-auto px-6 py-12 bg-white rounded-lg shadow-md">
			<h1 className="text-3xl font-bold mb-4 text-center">Weaver Labs Recipe App</h1>
			<p className="text-lg mb-6 text-center">Welcome! This app lets you manage recipes and ingredients with a
				simple, fast interface.</p>
			<nav className="my-8">
				<ul className="flex flex-col gap-4 items-center">
					<li>
						<Link href="/list">
							<button
								className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded shadow transition">View
								Recipes
							</button>
						</Link>
					</li>
					<li>
						<Link href="/ingredients">
							<button
								className="bg-green-600 hover:bg-green-700 text-white font-semibold py-2 px-4 rounded shadow transition">View
								Ingredients
							</button>
						</Link>
					</li>
					<li>
						<Link href="/recipe">
							<button
								className="bg-purple-600 hover:bg-purple-700 text-white font-semibold py-2 px-4 rounded shadow transition">Add
								New Recipe
							</button>
						</Link>
					</li>
				</ul>
			</nav>
			<section>
				<h2>About</h2>
				<p>
					This app demonstrates full-stack React development with TypeScript, file-based backend state, and
					responsive UI. Use the navigation above to explore recipes, manage ingredients, or add new recipes.
				</p>
			</section>
		</main>
	);
}
