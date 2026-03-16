// Simple vanilla JS router with History API
const routes = {}
let appElement = null
let initialized = false

export function createRouter(appSelector) {
  appElement = document.querySelector(appSelector)
  
  // Handle browser back/forward
  window.addEventListener('popstate', handleLocation)
  
  // Handle link clicks with event delegation
  document.addEventListener('click', handleClick)
  
  return {
    navigate,
    route,
    start
  }
}

export function route(path, renderFn) {
  routes[path] = renderFn
  
  // Auto-start on first route if not already initialized
  if (!initialized) {
    initialized = true
    handleLocation()
  }
  
  return { navigate, route }
}

function handleClick(e) {
  const link = e.target.closest('a[data-link]')
  if (!link) return
  
  const href = link.getAttribute('href')
  if (!href || href.startsWith('#') || href.startsWith('mailto:') || href.startsWith('tel:')) return
  
  // Check if it's an external link
  if (link.target === '_blank' || link.rel === 'external') return
  
  // Check if same origin
  if (link.origin !== window.location.origin) return
  
  e.preventDefault()
  navigate(href)
}

function handleLocation() {
  const path = window.location.pathname
  const renderFn = routes[path] || routes['/']
  
  if (renderFn) {
    renderFn()
    // Scroll to top on navigation
    window.scrollTo(0, 0)
  } else {
    // 404 - render not found
    if (routes['/404']) {
      routes['/404']()
    } else {
      appElement.innerHTML = '<h1 class="text-4xl font-bold">404 - Page Not Found</h1>'
    }
  }
}

function navigate(path) {
  window.history.pushState({}, '', path)
  handleLocation()
}

function start() {
  handleLocation()
}

export { navigate }
