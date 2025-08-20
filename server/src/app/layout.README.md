# layout.tsx

This file is the root layout for the Next.js app. In Next.js, a `layout.tsx` file defines the shared structure and UI 
elements (such as navigation, headers, and footers) that appear on every page. It wraps all page content, ensuring 
consistent styling and navigation across the app. The layout file is essential for maintaining a unified look and feel, 
handling global styles, and providing persistent components (like navbars) without repeating code in each page.

Root layout for the app, providing consistent navigation and styling across all pages.

## Purpose
- Wraps all content in `<html>` and `<body>` with `lang="en"` for accessibility. The `lang` attribute specifies the language of the document's content. Setting `lang="en"` helps browsers, screen readers, and search engines understand that the content is in English. This improves accessibility for users with assistive technologies, enables correct pronunciation and translation, and enhances SEO by allowing search engines to index the content appropriately.
- Renders a navigation bar with links to Home, Recipes, Ingredients, and Add Recipe.
- Uses Tailwind CSS for rapid, utility-first styling.
- Displays page content via `{children}` in a max-width container for readability.

## Key Functionalities
- **Navigation**: Next.js `<Link>` for fast, client-side routing. `<Link>` is preferred over `<a>`because it enables client-side navigation without full page reloads, preserves application state, and improves performance and user experience in single-page applications.
- **Styling**: Tailwind classes for layout, color, and typography.
- **Consistent Layout**: Ensures uniform look and feel across the app.

## Justification
- Centralizes navigation and styling for maintainability.
- Improves accessibility and SEO with `lang` attribute.
- Enhances user experience with responsive design and fast routing.

## Limitations
- No mobile menu or active link highlighting.
- No footer or global notifications.

---
This file demonstrates best practices in layout composition, navigation, and styling for a modern React/Next.js app.
