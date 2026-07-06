import React from 'react'
import ScrollAnimate from '../components/ScrollAnimate'

const blogPosts = [
  {
    id: 1,
    title: 'Building Modern Web Applications with React',
    excerpt: 'Learn how to create fast, responsive, and scalable applications using React and modern best practices.',
    date: 'June 15, 2024',
    author: 'Zyrvox Digital',
    category: 'Development',
  },
  {
    id: 2,
    title: 'UI/UX Design Tips for Better User Experiences',
    excerpt: 'Essential design principles to make your applications more intuitive and user-friendly.',
    date: 'June 10, 2024',
    author: 'Zyrvox Digital',
    category: 'Design',
  },
  {
    id: 3,
    title: 'Graphic Design Trends 2024',
    excerpt: 'The latest trends in graphic design that you should know about.',
    date: 'June 5, 2024',
    author: 'Zyrvox Digital',
    category: 'Design',
  },
  {
    id: 4,
    title: 'E-Commerce Website Best Practices',
    excerpt: 'Top techniques to make your online store more effective and increase conversions.',
    date: 'May 30, 2024',
    author: 'Zyrvox Digital',
    category: 'Development',
  },
  {
    id: 5,
    title: 'Creating a Strong Brand Identity',
    excerpt: 'Why brand identity matters and how to create one that stands out.',
    date: 'May 25, 2024',
    author: 'Zyrvox Digital',
    category: 'Branding',
  },
  {
    id: 6,
    title: 'Website Performance Optimization',
    excerpt: 'Make your website faster and provide a better user experience.',
    date: 'May 20, 2024',
    author: 'Zyrvox Digital',
    category: 'Development',
  },
]

export default function Blog() {
  return (
    <div className="bg-transparent min-h-screen pt-32 pb-24 px-6">
      <div className="container mx-auto max-w-7xl">
        <ScrollAnimate type="fade-up">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-zyrvox-gold/10 border border-zyrvox-gold/30 mb-6">
              <span className="text-zyrvox-gold font-mono font-bold uppercase tracking-wider text-xs">
                BLOG
              </span>
            </div>
            <h1 className="text-4xl md:text-5xl font-display font-bold text-zyrvox-text mb-4">
              Latest <span className="text-zyrvox-electric">Articles</span>
            </h1>
            <p className="text-zyrvox-text-2 max-w-2xl mx-auto">
              Thoughts, tutorials, and insights about design, development, and digital marketing.
            </p>
          </div>
        </ScrollAnimate>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post, idx) => (
            <ScrollAnimate key={post.id} type="fade-up" delay={idx * 0.1}>
              <div className="group bg-zyrvox-card rounded-2xl overflow-hidden border border-zyrvox-electric/20 hover:border-zyrvox-electric hover:shadow-zyrvox-glow transition-all duration-300">
                <div className="relative h-48 overflow-hidden bg-gradient-to-br from-zyrvox-dark-2 to-zyrvox-card">
                  <div className="absolute inset-0 flex items-center justify-center text-5xl">
                    {post.category === 'Design' ? '🎨' : post.category === 'Development' ? '💻' : '✨'}
                  </div>
                  <div className="absolute top-4 left-4">
                    <span className="px-3 py-1 bg-zyrvox-electric text-zyrvox-dark text-sm font-medium rounded-full">
                      {post.category}
                    </span>
                  </div>
                </div>

                <div className="p-6">
                  <div className="flex items-center gap-4 text-zyrvox-text-2 text-sm mb-4">
                    <div className="flex items-center gap-2">
                      <span>📅</span>
                      <span>{post.date}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <span>✍️</span>
                      <span>{post.author}</span>
                    </div>
                  </div>

                  <h3 className="text-xl font-bold text-zyrvox-text mb-3 group-hover:text-zyrvox-electric transition-colors">
                    {post.title}
                  </h3>

                  <p className="text-zyrvox-text-2 mb-4 line-clamp-2">
                    {post.excerpt}
                  </p>

                  <button className="flex items-center gap-2 text-zyrvox-electric font-medium group-hover:gap-3 transition-all">
                    Read More →
                  </button>
                </div>
              </div>
            </ScrollAnimate>
          ))}
        </div>
      </div>
    </div>
  )
}
