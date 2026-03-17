import { createMenu, initMenuToggle } from './menu.js';

// WordPress-style layout component
export function createLayout(content, currentPage) {
	setTimeout(() => initMenuToggle(), 0);

	return `
<header class="site-header">
  <div class="max-w-6xl mx-auto px-4 py-4 flex items-center justify-between">
    <a href="/" data-link class="flex items-center no-underline">
      <img src="https://stakanomics.com/wp-content/uploads/2025/08/logo-stakanomics.png" alt="Stakanomics" class="h-12 w-auto" />
    </a>
    ${createMenu(currentPage)}
  </div>
</header>

<main class="max-w-6xl mx-auto px-4">
  ${content}
</main>

<footer class="border-t border-gray-200 mt-12">
  <div class="max-w-6xl mx-auto px-4 py-6 text-center text-gray-500 text-sm">
    <p>&copy; 2026 Stakanomics. All rights reserved.</p>
  </div>
</footer>
`;
}
