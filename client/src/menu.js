// Simple horizontal menu component
export function createMenu(currentPage) {
  const menuItems = [
    { label: 'Home', href: '/', active: currentPage === '/' },
    { label: 'About Us', href: '/about', active: currentPage === '/about' },
    { label: 'Services', href: '/services', active: currentPage === '/services' },
    { label: 'Blogs', href: '/blogs', active: currentPage === '/blogs' },
    { label: 'Company', href: '/company', active: currentPage === '/company' }
  ]

  const menuLinks = menuItems.map(item => `
    <li class="menu-item ${item.active ? 'current-menu-item' : ''}">
      <a href="${item.href}" data-link class="elementor-item ${item.active ? 'elementor-item-active' : ''}">${item.label}</a>
    </li>
  `).join('')

  return `
<div class="elementor-menu-wrapper">
  <nav aria-label="Menu" class="elementor-nav-menu--main">
    <ul class="elementor-nav-menu">
      ${menuLinks}
    </ul>
  </nav>
  
  <div class="elementor-menu-toggle" role="button" tabindex="0" aria-label="Menu Toggle" aria-expanded="false">
    <svg aria-hidden="true" role="presentation" class="elementor-menu-toggle__icon--open" viewBox="0 0 1000 1000" xmlns="http://www.w3.org/2000/svg">
      <path d="M104 333H896C929 333 958 304 958 271S929 208 896 208H104C71 208 42 237 42 271S71 333 104 333ZM104 583H896C929 583 958 554 958 521S929 458 896 458H104C71 458 42 487 42 521S71 583 104 583ZM104 833H896C929 833 958 804 958 771S929 708 896 708H104C71 708 42 737 42 771S71 833 104 833Z"></path>
    </svg>
    <svg aria-hidden="true" role="presentation" class="elementor-menu-toggle__icon--close" viewBox="0 0 1000 1000" xmlns="http://www.w3.org/2000/svg">
      <path d="M742 167L500 408 258 167C246 154 233 150 217 150 196 150 179 158 167 167 154 179 150 196 150 212 150 229 154 242 171 254L408 500 167 742C138 771 138 800 167 829 196 858 225 858 254 829L496 587 738 829C750 842 767 846 783 846 800 846 817 842 829 829 842 817 846 804 846 783 846 767 842 750 829 737L588 500 833 258C863 229 863 200 833 171 804 137 775 137 742 167Z"></path>
    </svg>
  </div>
  
  <nav class="elementor-nav-menu--dropdown" aria-hidden="true">
    <ul class="elementor-nav-menu">
      ${menuLinks}
    </ul>
  </nav>
</div>
`
}

export function initMenuToggle() {
  const toggle = document.querySelector('.elementor-menu-toggle')
  const dropdown = document.querySelector('.elementor-nav-menu--dropdown')
  
  if (!toggle || !dropdown) return
  
  toggle.addEventListener('click', () => {
    const isExpanded = toggle.getAttribute('aria-expanded') === 'true'
    toggle.setAttribute('aria-expanded', !isExpanded)
    dropdown.setAttribute('aria-hidden', isExpanded)
    toggle.classList.toggle('elementor-menu-toggle--active', !isExpanded)
  })
  
  document.addEventListener('click', (e) => {
    if (!e.target.closest('.elementor-menu-wrapper')) {
      toggle.setAttribute('aria-expanded', 'false')
      dropdown.setAttribute('aria-hidden', 'true')
      toggle.classList.remove('elementor-menu-toggle--active')
    }
  })
  
  let resizeTimer
  window.addEventListener('resize', () => {
    clearTimeout(resizeTimer)
    resizeTimer = setTimeout(() => {
      if (window.innerWidth > 1024) {
        toggle.setAttribute('aria-expanded', 'false')
        dropdown.setAttribute('aria-hidden', 'true')
        toggle.classList.remove('elementor-menu-toggle--active')
      }
    }, 150)
  })
}
