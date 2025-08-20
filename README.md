# Weaver Labs Recipe App

## Overview
This is a full-stack recipe management app built with Next.js and TypeScript. It allows users to view, add, and delete recipes and ingredients, with backend state managed via a local JSON file. The app demonstrates responsive UI with optimistic updates and minimal reloads.

## Features
- 90 minute development time
- Home page with navigation to all main features
- Recipe list view (table: name, ingredients, delete)
- Add new recipe (form: name, select ingredients, quantity)
- Ingredients list view (table: add/remove ingredients)
- Backend state via file-based API routes (`data.json`)

## Implementation Details
- **Frontend:** Next.js (React + TypeScript)
- **Backend:** Next.js API routes, file-based store (`src/data/data.json`)
- **State Management:** React hooks
- **Routing:** Next.js app directory

## Decisions & Assumptions
- Used file-based backend for simplicity and speed
- Ingredient selection in recipes uses multi-select with quantity
UI updates for add/remove actions
- No authentication or user management
- All features documented in this README

## Running the App
1. Install dependencies:

```
make start
make dev
```
2.Open [http://localhost:3000](http://localhost:3000) in your browser

## Testing Instructions
- **Manual Testing:**
  - Home page navigation works
  - Ingredients page: add/remove ingredients, table updates
  - Recipe list: recipes display with ingredient names, delete works
  - New recipe: form works, save navigates to list
- **Automated Testing:**
  - No automated tests included (see bonus section below)

## Bonus: Adding Automated Tests
- To add unit tests, install Jest and create test files for API routes and components
- For E2E tests, use Playwright or Cypress to simulate user flows

## Known Issues / Edge Cases
- No validation for duplicate ingredient names
- No error messages for failed API requests
- All data is stored in a local file; concurrent edits may cause race conditions

## Experience & Reflections
- The test was clear and well-structured
- AI was helpful for rapid prototyping and error checking
- Decisions were made for speed and clarity; see above for details
- Test took 90 minutes to complete, including setup and debugging

## Reference websites
- https://www.americastestkitchen.com/recipes/vegetables
- https://www.americastestkitchen.com/cookscountry
- https://www.americastestkitchen.com/cooksillustrated
- https://www.bbcgoodfood.com/
---

Feel free to reach out for any questions or feedback!
