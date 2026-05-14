import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Play, Clock, Search, Filter, X, ChevronRight, Video, User } from 'lucide-react';
import { videoLessons } from '../data/videos';

const categories = ['All', 'Skeletal', 'Muscular', 'Nervous', 'Cardiovascular', 'Digestive', 'Respiratory'];

const Videos: React.FC = () => {
  const [search, setSearch] = useState('');
  const [activeCategory, setActiveCategory] = useState('All');
  const [selectedVideo, setSelectedVideo] = useState<any>(null);

  const filteredVideos = videoLessons.filter(v => {
    const matchesSearch = v.title.toLowerCase().includes(search.toLowerCase()) || 
                         v.description.toLowerCase().includes(search.toLowerCase());
    const matchesCategory = activeCategory === 'All' || v.category === activeCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="pt-24 pb-20 min-h-screen bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="mb-16 text-center">
          <span className="inline-flex items-center gap-2 px-6 py-2 rounded-full bg-secondary/10 text-secondary text-xs font-black uppercase tracking-widest mb-6 border border-secondary/20">
            <Video size={14} /> Video Lessons
          </span>
          <h1 className="text-5xl md:text-7xl font-black text-primary mb-6 tracking-tighter">
            Expert <span className="text-secondary">Anatomy</span> Tutorials
          </h1>
          <p className="text-text-muted text-xl max-w-2xl mx-auto leading-relaxed font-medium">
            Master complex anatomical concepts through high-definition video lessons taught by world-class medical experts.
          </p>
        </motion.div>

        {/* Controls */}
        <div className="flex flex-col md:flex-row gap-6 mb-12">
          <div className="relative flex-grow">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-text-muted" size={20} />
            <input
              type="text"
              placeholder="Search video lessons..."
              value={search}
              onChange={e => setSearch(e.target.value)}
              className="w-full pl-12 pr-4 py-4 rounded-2xl border border-outline bg-white shadow-sm focus:ring-2 focus:ring-primary focus:outline-none text-primary"
            />
          </div>
          <div className="flex gap-2 overflow-x-auto pb-2 no-scrollbar">
            {categories.map(cat => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-5 py-2 rounded-full font-semibold text-sm transition-all whitespace-nowrap ${
                  activeCategory === cat 
                    ? 'bg-primary text-white shadow-lg shadow-primary/20' 
                    : 'bg-white border border-outline text-text-muted hover:border-primary hover:text-primary'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Video Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredVideos.map((video, i) => (
            <motion.div
              key={video.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              whileHover={{ y: -5 }}
              className="group bg-white rounded-[2rem] overflow-hidden border border-outline shadow-sm hover:shadow-xl transition-all cursor-pointer"
              onClick={() => setSelectedVideo(video)}
            >
              <div className="relative aspect-video overflow-hidden">
                <img 
                  src={video.thumbnail} 
                  alt={video.title} 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors flex items-center justify-center">
                  <div className="w-16 h-16 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center group-hover:bg-secondary group-hover:scale-110 transition-all duration-300">
                    <Play className="text-white fill-white ml-1" size={24} />
                  </div>
                </div>
                <div className="absolute bottom-4 right-4 bg-black/60 backdrop-blur-md text-white text-xs font-bold px-3 py-1.5 rounded-lg">
                  {video.duration}
                </div>
              </div>
              <div className="p-8">
                <div className="flex items-center gap-3 mb-4">
                  <span className="text-[10px] font-black uppercase tracking-widest px-3 py-1 bg-primary/10 text-primary rounded-full">
                    {video.category}
                  </span>
                  <div className="flex items-center gap-1 text-text-muted text-xs">
                    <User size={12} /> {video.instructor}
                  </div>
                </div>
                <h3 className="text-xl font-black text-primary mb-3 group-hover:text-secondary transition-colors">
                  {video.title}
                </h3>
                <p className="text-text-muted text-sm leading-relaxed line-clamp-2">
                  {video.description}
                </p>
                <div className="mt-6 flex items-center gap-2 text-primary font-bold text-sm group-hover:gap-3 transition-all">
                  Watch Full Lesson <ChevronRight size={16} />
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {filteredVideos.length === 0 && (
          <div className="text-center py-24">
            <div className="w-20 h-20 bg-slate-100 rounded-full flex items-center justify-center mx-auto mb-4 text-text-muted">
              <Video size={32} />
            </div>
            <h3 className="text-xl font-bold text-primary mb-2">No videos found</h3>
            <p className="text-text-muted">Try a different search term or category.</p>
          </div>
        )}
      </div>

      {/* Video Modal */}
      <AnimatePresence>
        {selectedVideo && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedVideo(null)}
              className="absolute inset-0 bg-primary/90 backdrop-blur-xl"
            />
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="bg-white rounded-[2.5rem] overflow-hidden shadow-2xl w-full max-w-5xl relative z-[110]"
            >
              <button 
                onClick={() => setSelectedVideo(null)}
                className="absolute top-6 right-6 w-12 h-12 bg-white/20 hover:bg-white/40 text-white rounded-full flex items-center justify-center backdrop-blur-md transition-colors z-[120]"
              >
                <X size={24} />
              </button>
              <div className="aspect-video w-full bg-black">
                <iframe
                  width="100%"
                  height="100%"
                  src={`https://www.youtube.com/embed/${selectedVideo.youtubeId}?autoplay=1`}
                  title={selectedVideo.title}
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              </div>
              <div className="p-10">
                <div className="flex flex-wrap items-center justify-between gap-6 mb-6">
                  <div>
                    <div className="flex items-center gap-3 mb-3">
                      <span className="text-xs font-black uppercase tracking-widest px-4 py-1.5 bg-secondary text-white rounded-full">
                        {selectedVideo.category}
                      </span>
                      <span className="flex items-center gap-1.5 text-text-muted text-sm font-medium">
                        <Clock size={16} /> {selectedVideo.duration}
                      </span>
                    </div>
                    <h2 className="text-3xl font-black text-primary">{selectedVideo.title}</h2>
                  </div>
                  <div className="flex items-center gap-4 p-4 rounded-2xl bg-slate-50 border border-outline">
                    <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary font-bold text-xl">
                      {selectedVideo.instructor.split(' ')[1].charAt(0)}
                    </div>
                    <div>
                      <div className="text-xs text-text-muted font-bold uppercase tracking-widest">Instructor</div>
                      <div className="font-bold text-primary">{selectedVideo.instructor}</div>
                    </div>
                  </div>
                </div>
                <p className="text-text-muted text-lg leading-relaxed max-w-3xl">
                  {selectedVideo.description}
                </p>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Videos;
