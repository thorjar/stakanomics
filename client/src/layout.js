import { createMenu, initMenuToggle } from './menu.js'

// WordPress-style layout component
export function createLayout(content, currentPage) {
  setTimeout(() => initMenuToggle(), 0)
  
  return `
<header class="site-header">
  <div class="max-w-6xl mx-auto px-4 py-4 flex items-center justify-between">
    <a href="/" data-link class="text-2xl font-bold text-gray-800 no-underline">My Site</a>
    ${createMenu(currentPage)}
  </div>
</header>

<main class="max-w-6xl mx-auto px-4 py-8">
  ${content}
</main>

<footer class="border-t border-gray-200 mt-12">
  <div class="max-w-6xl mx-auto px-4 py-6 text-center text-gray-500 text-sm">
    <p>&copy; 2026 My Site. All rights reserved.</p>
  </div>
</footer>
`
}
