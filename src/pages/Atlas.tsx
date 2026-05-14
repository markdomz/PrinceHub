import React, { useState } from 'react';
import { Search, Filter, ChevronRight, BookOpen, Layers, Image as ImageIcon } from 'lucide-react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const regions = [
  { id: 'head-neck', title: 'Head and Neck', count: 450, color: 'bg-blue-500', image: 'https://images.unsplash.com/photo-1559757175-5700dde675bc?auto=format&fit=crop&q=80&w=300' },
  { id: 'upper-extremity', title: 'Upper Extremity', count: 320, color: 'bg-green-500', image: 'https://images.unsplash.com/photo-1590105577767-e21a1067899f?auto=format&fit=crop&q=80&w=300' },
  { id: 'thorax', title: 'Thorax', count: 280, color: 'bg-red-500', image: 'https://images.unsplash.com/photo-1576086213369-97a306d36557?auto=format&fit=crop&q=80&w=300' },
  { id: 'abdomen-pelvis', title: 'Abdomen and Pelvis', count: 390, color: 'bg-yellow-500', image: 'https://images.unsplash.com/photo-1530026405186-ed1f139313f8?auto=format&fit=crop&q=80&w=300' },
  { id: 'lower-extremity', title: 'Lower Extremity', count: 310, color: 'bg-purple-500', image: 'https://images.unsplash.com/photo-1434494878577-86c23bcb06b9?auto=format&fit=crop&q=80&w=300' },
  { id: 'neuroanatomy', title: 'Neuroanatomy', count: 520, color: 'bg-pink-500', image: 'https://images.unsplash.com/photo-1559757148-5c350d0d3c56?auto=format&fit=crop&q=80&w=300' },
];

const Atlas: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState('');

  const filteredRegions = regions.filter(r => 
    r.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="pt-24 pb-20 min-h-screen bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header Section */}
        <div className="mb-12">
          <h1 className="text-4xl font-bold text-primary mb-4">Human Anatomy Atlas</h1>
          <p className="text-text-muted text-lg max-w-2xl">
            Explore thousands of anatomical structures with our high-definition illustrations and detailed descriptions.
          </p>
        </div>

        {/* Search & Filter Bar */}
        <div className="flex flex-col md:flex-row gap-4 mb-10">
          <div className="relative flex-grow">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-text-muted" size={20} />
            <input 
              type="text" 
              placeholder="Search structures, organs, or regions..."
              className="w-full pl-12 pr-4 py-4 rounded-xl border border-outline bg-white shadow-sm focus:ring-2 focus:ring-primary focus:outline-none transition-all"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>
          <button className="flex items-center justify-center gap-2 px-6 py-4 bg-white border border-outline rounded-xl font-semibold text-primary hover:bg-slate-50 transition-colors">
            <Filter size={20} />
            Filters
          </button>
        </div>

        {/* Regions Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredRegions.map((region, index) => (
            <motion.div
              key={region.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="group bg-white rounded-2xl overflow-hidden border border-outline hover:shadow-2xl transition-all cursor-pointer"
            >
              <Link to={`/atlas/${region.id}`} className="block">
                <div className="relative h-48 overflow-hidden">
                  <img 
                    src={region.image} 
                    alt={region.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-6">
                    <span className="text-white font-medium flex items-center gap-2">
                      Browse Region <ChevronRight size={18} />
                    </span>
                  </div>
                </div>
              </Link>
              <div className="p-6">
                <div className="flex justify-between items-start mb-4">
                  <Link to={`/atlas/${region.id}`}>
                    <h3 className="text-xl font-bold text-primary hover:text-secondary transition-colors">{region.title}</h3>
                  </Link>
                  <span className="bg-slate-100 text-text-muted text-xs font-bold px-2 py-1 rounded">
                    {region.count} items
                  </span>
                </div>
                <div className="flex gap-4 text-sm text-text-muted">
                  <Link to={`/atlas/${region.id}`} className="flex items-center gap-1 hover:text-primary transition-colors">
                    <ImageIcon size={14} /> Atlas
                  </Link>
                  <Link to={`/articles/${region.id}`} className="flex items-center gap-1 hover:text-primary transition-colors">
                    <BookOpen size={14} /> Articles
                  </Link>
                  <Link to={`/quiz?region=${region.id}`} className="flex items-center gap-1 hover:text-primary transition-colors">
                    <Layers size={14} /> Quizzes
                  </Link>
                </div>
              </div>
            </motion.div>
          ))}
        </div>


        {/* Featured Content Callout */}
        <div className="mt-20 bg-primary rounded-3xl p-8 md:p-12 text-white flex flex-col md:flex-row items-center justify-between gap-8 overflow-hidden relative">
          <div className="relative z-10 max-w-xl">
            <h2 className="text-3xl font-bold mb-4">Master anatomy with our interactive tools</h2>
            <p className="text-slate-300 mb-8 text-lg">
              Go beyond the atlas. Take quizzes, watch videos, and use our spaced-repetition system to ensure you never forget what you've learned.
            </p>
            <Link to="/quiz" className="btn-secondary px-8 py-4 inline-block">Start your study session</Link>
          </div>
          <div className="relative w-full md:w-1/3 aspect-square bg-white/10 rounded-full flex items-center justify-center backdrop-blur-3xl border border-white/20">
            <ImageIcon size={120} className="text-white/40" />
            <div className="absolute -top-4 -right-4 w-24 h-24 bg-secondary/30 rounded-full blur-2xl"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Atlas;
