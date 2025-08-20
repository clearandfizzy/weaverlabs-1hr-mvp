import React from 'react';
import Link from 'next/link';
import './globals.css';

export default function RootLayout({children,}: Readonly<{ children: React.ReactNode; }>) {
	return (
		<html lang="en">
		<body className="min-h-screen bg-gray-50 text-gray-900 font-sans">
		<nav className="bg-white shadow-md mb-8">
			<div className="max-w-4xl mx-auto px-4 py-3 flex items-center justify-between">
				<div className="font-bold text-xl text-blue-700">Weaver Labs</div>
				<div className="flex gap-6">
					<Link href="/" className="text-gray-700 hover:text-blue-600 font-medium transition">Home</Link>
					<Link href="/list"
						  className="text-gray-700 hover:text-blue-600 font-medium transition">Recipes</Link>
					<Link href="/ingredients"
						  className="text-gray-700 hover:text-blue-600 font-medium transition">Ingredients</Link>
					<Link href="/recipe" className="text-gray-700 hover:text-blue-600 font-medium transition">Add
						Recipe</Link>
				</div>
			</div>
		</nav>
		<div className="max-w-4xl mx-auto px-4 py-8">
			{children}
		</div>
		</body>
		</html>
	);
}
