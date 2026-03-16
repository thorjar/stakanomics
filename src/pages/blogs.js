import { createLayout } from '../layout.js'

export function BlogsPage() {
  const posts = [
    {
      title: 'Getting Started with Our Services',
      excerpt: 'Learn how to make the most of our offerings and maximize your business potential.',
      date: 'March 10, 2026',
      author: 'Admin'
    },
    {
      title: 'Industry Trends for 2026',
      excerpt: 'Stay ahead of the curve with insights into the latest industry developments.',
      date: 'March 5, 2026',
      author: 'Admin'
    },
    {
      title: 'Best Practices for Business Growth',
      excerpt: 'Proven strategies to help your business scale and succeed in competitive markets.',
      date: 'February 28, 2026',
      author: 'Admin'
    },
    {
      title: 'Technology Updates You Should Know',
      excerpt: 'Keep up with the latest technological advancements that impact your business.',
      date: 'February 20, 2026',
      author: 'Admin'
    },
    {
      title: 'Customer Success Stories',
      excerpt: 'Read how our clients have achieved remarkable results with our solutions.',
      date: 'February 15, 2026',
      author: 'Admin'
    },
    {
      title: 'Tips for Effective Team Collaboration',
      excerpt: 'Discover tools and techniques to improve teamwork and productivity.',
      date: 'February 10, 2026',
      author: 'Admin'
    }
  ]

  const postCards = posts.map(post => `
    <article class="card">
      <h2 class="text-xl font-semibold mb-2">${post.title}</h2>
      <p class="text-gray-600 text-sm mb-4">${post.date} • ${post.author}</p>
      <p class="text-gray-600 mb-4">${post.excerpt}</p>
      <a href="#" class="text-blue-500">Read More →</a>
    </article>
  `).join('')

  return createLayout(`
    <section class="py-8">
      <h1 class="text-4xl font-bold mb-4">Blog</h1>
      <p class="text-xl text-gray-600 mb-12">Insights, news, and updates from our team</p>
      
      <div class="grid-3">
        ${postCards}
      </div>
      
      <div class="text-center mt-12">
        <button class="btn">Load More Posts</button>
      </div>
    </section>
  `, '/blogs')
}
