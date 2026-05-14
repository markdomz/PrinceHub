import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Search, Clock, BookOpen, ChevronRight, Tag } from 'lucide-react';
import { Link } from 'react-router-dom';

import { articles } from '../data/articles';

const categories = ['All', 'Skeletal', 'Muscular', 'Nervous', 'Cardiovascular', 'Digestive', 'Respiratory'];

const categoryColors: Record<string, string> = {
  Skeletal: 'bg-blue-100 text-blue-700',
  Muscular: 'bg-orange-100 text-orange-700',
  Nervous: 'bg-purple-100 text-purple-700',
  Cardiovascular: 'bg-red-100 text-red-700',
  Digestive: 'bg-green-100 text-green-700',
  Respiratory: 'bg-cyan-100 text-cyan-700',
  Endocrine: 'bg-yellow-100 text-yellow-700',
};

const Articles: React.FC = () => {
  const [search, setSearch] = useState('');
  const [activeCategory, setActiveCategory] = useState('All');

  const filtered = articles.filter(a => {
    const matchesSearch = a.title.toLowerCase().includes(search.toLowerCase()) || a.excerpt.toLowerCase().includes(search.toLowerCase());
    const matchesCategory = activeCategory === 'All' || a.category === activeCategory;
    return matchesSearch && matchesCategory;
  });

  const featured = filtered.filter(a => a.featured);
  const rest = filtered.filter(a => !a.featured);

  return (
    <div className="pt-24 pb-20 min-h-screen bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="mb-12 text-center">
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-secondary/10 text-secondary text-sm font-bold mb-4">
            <BookOpen size={14} /> Anatomy Library
          </span>
          <h1 className="text-4xl md:text-5xl font-black text-primary mb-4">Articles & Guides</h1>
          <p className="text-text-muted text-lg max-w-2xl mx-auto">Expert-written anatomy articles reviewed by medical professionals. From beginner overviews to advanced clinical anatomy.</p>
        </motion.div>

        {/* Search */}
        <div className="relative max-w-2xl mx-auto mb-8">
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-text-muted" size={20} />
          <input
            type="text"
            placeholder="Search articles..."
            value={search}
            onChange={e => setSearch(e.target.value)}
            className="w-full pl-12 pr-4 py-4 rounded-2xl border border-outline bg-white shadow-sm focus:ring-2 focus:ring-primary focus:outline-none text-primary"
          />
        </div>

        {/* Category Filters */}
        <div className="flex flex-wrap gap-3 justify-center mb-12">
          {categories.map(cat => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-5 py-2 rounded-full font-semibold text-sm transition-all ${activeCategory === cat ? 'bg-primary text-white shadow-lg shadow-primary/20' : 'bg-white border border-outline text-text-muted hover:border-primary hover:text-primary'}`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Featured Articles */}
        {featured.length > 0 && (
          <div className="mb-12">
            <h2 className="text-xl font-bold text-primary mb-6 flex items-center gap-2"><Tag size={18} className="text-secondary" /> Featured</h2>
            <div className="grid md:grid-cols-2 gap-8">
              {featured.map((article, i) => (
                <Link to={`/articles/${article.id}`} key={article.id}>
                  <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.1 }}
                    className="group bg-white rounded-3xl overflow-hidden border border-outline shadow-sm hover:shadow-xl transition-all cursor-pointer h-full flex flex-col">
                    <div className="h-56 overflow-hidden">
                      <img src={article.image} alt={article.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                    </div>
                    <div className="p-8 flex flex-col flex-1">
                      <div className="flex items-center gap-3 mb-4">
                        <span className={`text-xs font-bold px-3 py-1 rounded-full ${categoryColors[article.category] || 'bg-slate-100 text-slate-600'}`}>{article.category}</span>
                        <span className="text-xs text-text-muted flex items-center gap-1"><Clock size={12} /> {article.readTime} read</span>
                      </div>
                      <h3 className="text-xl font-black text-primary mb-3 group-hover:text-secondary transition-colors">{article.title}</h3>
                      <p className="text-text-muted text-sm leading-relaxed flex-1">{article.excerpt}</p>
                      <div className="mt-6 flex items-center gap-1 text-primary font-bold text-sm group-hover:translate-x-1 transition-transform">
                        Read Article <ChevronRight size={16} />
                      </div>
                    </div>
                  </motion.div>
                </Link>
              ))}
            </div>
          </div>
        )}

        {/* All Articles Grid */}
        {rest.length > 0 && (
          <div>
            <h2 className="text-xl font-bold text-primary mb-6">All Articles</h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {rest.map((article, i) => (
                <Link to={`/articles/${article.id}`} key={article.id}>
                  <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.05 }}
                    className="group bg-white rounded-2xl overflow-hidden border border-outline shadow-sm hover:shadow-lg transition-all cursor-pointer h-full flex flex-col">
                    <div className="h-44 overflow-hidden">
                      <img src={article.image} alt={article.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                    </div>
                    <div className="p-6 flex flex-col flex-1">
                      <div className="flex items-center gap-2 mb-3">
                        <span className={`text-xs font-bold px-2 py-0.5 rounded-full ${categoryColors[article.category] || 'bg-slate-100 text-slate-600'}`}>{article.category}</span>
                        <span className="text-xs text-text-muted flex items-center gap-1"><Clock size={11} /> {article.readTime}</span>
                      </div>
                      <h3 className="text-base font-black text-primary mb-2 group-hover:text-secondary transition-colors leading-snug">{article.title}</h3>
                      <p className="text-text-muted text-sm leading-relaxed flex-1 line-clamp-2">{article.excerpt}</p>
                      <div className="mt-4 flex items-center gap-1 text-primary font-bold text-sm group-hover:translate-x-1 transition-transform">
                        Read <ChevronRight size={14} />
                      </div>
                    </div>
                  </motion.div>
                </Link>
              ))}
            </div>
          </div>
        )}

        {filtered.length === 0 && (
          <div className="text-center py-24">
            <div className="w-20 h-20 bg-slate-100 rounded-full flex items-center justify-center mx-auto mb-4 text-text-muted"><Search size={32} /></div>
            <h3 className="text-xl font-bold text-primary mb-2">No articles found</h3>
            <p className="text-text-muted">Try a different search term or category.</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Articles;
