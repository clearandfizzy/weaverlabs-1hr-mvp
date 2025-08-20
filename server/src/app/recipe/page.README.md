# Recipe Page (`page.tsx`)

## Purpose
This page allows users to create a new recipe by entering a name, selecting ingredients, specifying their quantities, and submitting the recipe. It is designed to be simple, intuitive, and responsive.

## Functionality
- **Recipe Name:** Users must enter a name for the recipe.
- **Ingredient Selection:** Users can select ingredients from a list fetched from `/api/ingredients`. Already-selected ingredients are disabled to prevent duplicates.
- **Quantity Input:** For each selected ingredient, users can specify the quantity using a number input (minimum value: 1).
- **Ingredient Removal:** Users can remove ingredients from the selection.
- **Submission:** On form submission, the recipe is sent via POST to `/api/recipes` and the user is redirected to the recipe list page.
- **Loading State:** The submit button is disabled while the request is in progress to prevent duplicate submissions.

## Design Decisions
- **React Hooks:** State is managed using `useState` and side effects (fetching ingredients) with `useEffect` for clarity and separation of concerns.
- **TypeScript:** Interfaces (`Ingredient`, `RecipeIngredient`) ensure type safety and code clarity.
- **UI/UX:** Tailwind CSS is used for a clean, responsive design. Buttons are disabled appropriately for better user experience.
- **Performance:** State updates are handled immutably to avoid unnecessary re-renders and bugs.

## Best Practices
- **Controlled Inputs:** All form fields are controlled for predictable state management.
- **No Direct State Mutation:** State updates use spread and map/filter to avoid mutation.
- **Error Prevention:** The form cannot be submitted without a name or ingredients.
- **Accessibility:** Button states and input types are chosen for usability.

## Further Improvements
- Add error handling for failed API requests.
- Add user feedback (e.g., success or error messages).
- Consider validation for ingredient quantities.

---
This README documents the reasoning and structure behind the recipe creation page, ensuring clarity for future maintainers and reviewers.

