import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowLeft, Clock, Calendar, Share2, BookOpen, ArrowRight } from 'lucide-react';

import { articles } from '../data/articles';

const ArticleDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const article = articles.find(a => a.id === Number(id));
  const [isBookmarked, setIsBookmarked] = useState(false);
  const [showShareToast, setShowShareToast] = useState(false);

  const handleShare = () => {
    navigator.clipboard.writeText(window.location.href);
    setShowShareToast(true);
    setTimeout(() => setShowShareToast(false), 2000);
  };

  if (!article) {
    return (
      <div className="pt-32 pb-20 text-center">
        <h2 className="text-2xl font-bold text-primary">Article not found</h2>
        <Link to="/articles" className="text-secondary hover:underline mt-4 inline-block">Back to Library</Link>
      </div>
    );
  }

  return (
    <div className="pt-20 pb-20 bg-white relative">
      {/* Share Toast */}
      {showShareToast && (
        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 50 }}
          className="fixed bottom-10 left-1/2 -translate-x-1/2 z-50 bg-primary text-white px-6 py-3 rounded-full shadow-2xl font-bold"
        >
          Link copied to clipboard!
        </motion.div>
      )}
      {/* Hero Section */}
      <div className="relative h-[400px] w-full mb-12">
        <img src={article.image} alt={article.title} className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-t from-primary/80 to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 p-8 max-w-4xl mx-auto">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
            <Link to="/articles" className="inline-flex items-center gap-2 text-white/80 hover:text-white mb-6 transition-colors">
              <ArrowLeft size={20} /> Back to Library
            </Link>
            <div className="flex items-center gap-4 text-white/80 text-sm mb-4">
              <span className="px-3 py-1 rounded-full bg-secondary text-white font-bold uppercase tracking-wider text-xs">
                {article.category}
              </span>
              <span className="flex items-center gap-1"><Clock size={16} /> {article.readTime} read</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-black text-white leading-tight mb-4">{article.title}</h1>
          </motion.div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row gap-12">
          {/* Article Meta */}
          <div className="lg:w-1/4">
            <div className="sticky top-24 p-6 rounded-2xl bg-slate-50 border border-outline">
              <div className="mb-6">
                <div className="text-xs text-text-muted font-bold uppercase tracking-widest mb-2">Author</div>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary font-bold">
                    {article.author.charAt(4)}
                  </div>
                  <div className="font-bold text-primary text-sm">{article.author}</div>
                </div>
              </div>
              <div className="mb-6">
                <div className="text-xs text-text-muted font-bold uppercase tracking-widest mb-2">Published</div>
                <div className="flex items-center gap-2 text-primary font-bold text-sm">
                  <Calendar size={16} /> {article.date}
                </div>
              </div>
              <div className="flex gap-4">
                <button 
                  onClick={handleShare}
                  title="Share Article"
                  className="flex-1 p-3 rounded-xl border border-outline hover:bg-white hover:shadow-sm transition-all flex items-center justify-center text-primary group"
                >
                  <Share2 size={20} className="group-hover:scale-110 transition-transform" />
                </button>
                <button 
                  onClick={() => setIsBookmarked(!isBookmarked)}
                  title={isBookmarked ? "Remove Bookmark" : "Save to Library"}
                  className={`flex-1 p-3 rounded-xl border border-outline hover:bg-white hover:shadow-sm transition-all flex items-center justify-center group ${isBookmarked ? 'bg-primary text-white border-primary' : 'text-primary'}`}
                >
                  <BookOpen size={20} className={isBookmarked ? 'fill-current' : 'group-hover:scale-110 transition-transform'} />
                </button>
              </div>
            </div>
          </div>

          {/* Article Body */}
          <div className="lg:w-3/4">
            <div className="prose prose-slate prose-lg max-w-none prose-headings:text-primary prose-headings:font-black prose-p:text-text-muted prose-p:leading-relaxed prose-strong:text-primary prose-li:text-text-muted"
                 dangerouslySetInnerHTML={{ __html: article.content }} />
            
            <div className="mt-12 pt-12 border-t border-outline">
              <div className="flex items-center justify-between mb-6">
                <h4 className="font-black text-primary text-xl">Keep Exploring</h4>
                <div className="h-px flex-1 bg-outline mx-4 hidden sm:block"></div>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {(() => {
                  const currentIndex = articles.findIndex(a => a.id === article.id);
                  const nextArticle = articles[currentIndex + 1];
                  
                  if (nextArticle) {
                    return (
                      <Link 
                        to={`/articles/${nextArticle.id}`} 
                        className="p-6 rounded-2xl bg-primary text-white hover:bg-primary-hover transition-all shadow-lg shadow-primary/20 group"
                      >
                        <h5 className="font-bold mb-2 flex items-center gap-2">
                          Next Lesson <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                        </h5>
                        <p className="text-white/80 text-sm">{nextArticle.title}</p>
                      </Link>
                    );
                  } else {
                    return (
                      <Link to="/articles" className="p-6 rounded-2xl bg-primary text-white hover:bg-primary-hover transition-all shadow-lg shadow-primary/20">
                        <h5 className="font-bold mb-2">Explore Library</h5>
                        <p className="text-white/80 text-sm">Browse our extensive collection of medical articles and guides.</p>
                      </Link>
                    );
                  }
                })()}
                <Link to="/quiz" className="p-6 rounded-2xl border-2 border-primary text-primary hover:bg-primary/5 transition-all">
                  <h5 className="font-bold mb-2">Test Your Skills</h5>
                  <p className="text-text-muted text-sm">Take a quiz on this topic to reinforce your knowledge.</p>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ArticleDetail;
