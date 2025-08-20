# Recipe List Page

## Overview
This page displays a list of recipes, each with its associated ingredients and quantities. Users can add new recipes or delete existing ones. The page is designed for clarity, responsiveness, and ease of use.

## Features
- **Recipe Listing:** Shows all recipes fetched from the backend, including their names and ingredients.
- **Ingredient Display:** Ingredients are shown by name and quantity, leveraging a lookup from the ingredients API.
- **Add Recipe:** A button navigates to the recipe creation page (`/recipe`).
- **Delete Recipe:** Users can delete recipes with an optimistic UI update for responsiveness.
- **Responsive UI:** Layout adapts to various screen sizes using Tailwind CSS.

## Data Flow
- **Fetching Data:**
  - Recipes and ingredients are fetched from `/api/recipes` and `/api/ingredients` respectively on component mount.
  - Data is stored in local state using React's `useState`.
- **Ingredient Name Resolution:**
  - Ingredient IDs in recipes are mapped to their names using a helper function for user-friendly display.
- **Optimistic Deletion:**
  - When a recipe is deleted, it is immediately removed from the UI before the API call completes, improving perceived performance.

## UI/UX Considerations
- **Clarity:** Recipes and ingredients are presented in a table for easy scanning.
- **Accessibility:** Delete buttons use `aria-label` for screen readers.
- **Performance:** Optimistic updates ensure a snappy user experience.
- **Styling:** Tailwind CSS provides a modern, clean look and responsive design.

## React & TypeScript Best Practices
- **Type Safety:** Interfaces (`Recipe`, `Ingredient`, `RecipeIngredient`) ensure robust type checking.
- **Hooks:** Uses `useState` and `useEffect` for state and lifecycle management.
- **Component Structure:** Logic is encapsulated in a single functional component for maintainability.

## Suggestions for Improvement
- **Error Handling:** Add user feedback for failed API requests or deletions.
- **Loading States:** Show loading indicators while fetching data.
- **Confirmation Dialog:** Prompt users before deleting a recipe to prevent accidental deletions.
- **Pagination:** For large datasets, consider paginating the recipe list.

## File Location
`src/app/list/page.tsx`

---
This README documents the design, functionality, and best practices of the Recipe List Page for maintainers and future contributors.
