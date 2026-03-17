import { createLayout } from '../layout.js';

export function BlogsPage() {
	const posts = [
		{
			title: 'Getting Started with Our Services',
			excerpt:
				'Learn how to make the most of our offerings and maximize your business potential.',
			date: 'March 10, 2026',
			author: 'Admin',
		},
		{
			title: 'Industry Trends for 2026',
			excerpt:
				'Stay ahead of the curve with insights into the latest industry developments.',
			date: 'March 5, 2026',
			author: 'Admin',
		},
		{
			title: 'Best Practices for Business Growth',
			excerpt:
				'Proven strategies to help your business scale and succeed in competitive markets.',
			date: 'February 28, 2026',
			author: 'Admin',
		},
		{
			title: 'Technology Updates You Should Know',
			excerpt:
				'Keep up with the latest technological advancements that impact your business.',
			date: 'February 20, 2026',
			author: 'Admin',
		},
		{
			title: 'Customer Success Stories',
			excerpt:
				'Read how our clients have achieved remarkable results with our solutions.',
			date: 'February 15, 2026',
			author: 'Admin',
		},
		{
			title: 'Tips for Effective Team Collaboration',
			excerpt:
				'Discover tools and techniques to improve teamwork and productivity.',
			date: 'February 10, 2026',
			author: 'Admin',
		},
	];

	const postCards = posts
		.map(
			post => `
    <article class="bg-white border border-[#E5E5E5] rounded-[10px] p-[30px] hover:shadow-lg transition">
      <h2 class="text-[20px] font-semibold mb-3 text-[#1A1A1C]">${post.title}</h2>
      <p class="text-[14px] text-[#545454] mb-4">${post.date} • ${post.author}</p>
      <p class="text-[15px] text-[#545454] mb-6">${post.excerpt}</p>
      <a href="#" class="text-[#02ADA8] font-['Outfit'] font-[600] hover:text-[#FF601A] transition">Read More →</a>
    </article>
  `,
		)
		.join('');

	return createLayout(
		`
    <section class="py-[80px] md:py-[60px]">
      <div class="max-w-[1180px] mx-auto px-4 md:px-[40px]">
        <h1 class="text-[36px] md:text-[52px] font-semibold leading-[46px] md:leading-[60px] mb-4 text-[#1A1A1C]">Blog</h1>
        <p class="text-[18px] text-[#545454] mb-[60px]">Insights, news, and updates from our team</p>

        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[40px]">
          ${postCards}
        </div>

        <div class="text-center mt-[60px]">
          <button class="bg-[#02ADA8] text-white font-['Outfit'] text-[13px] font-medium px-[40px] py-[15px] rounded-[33px] hover:bg-[#FF601A] transition">Load More Posts</button>
        </div>
      </div>
    </section>
  `,
		'/blogs',
	);
}
