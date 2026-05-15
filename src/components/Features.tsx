import React from 'react';
import { motion } from 'framer-motion';
import { MousePointer2, BrainCircuit, Layout, Zap } from 'lucide-react';
import { Link } from 'react-router-dom';

const Features: React.FC = () => {
  return (
    <section className="bg-slate-50 py-24 border-t border-outline">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Large Featured Card */}
          <motion.div 
            whileHover={{ y: -5 }}
            className="lg:col-span-2 bg-primary rounded-3xl p-10 text-white relative overflow-hidden group shadow-2xl"
          >
            <div className="relative z-10">
              <div className="w-14 h-14 bg-white/10 rounded-2xl flex items-center justify-center mb-8">
                <BrainCircuit size={32} />
              </div>
              <h3 className="text-3xl font-bold mb-4">Spaced Repetition Mastery</h3>
              <p className="text-slate-300 text-lg max-w-md mb-8 leading-relaxed">
                Our algorithm calculates the perfect time to review each term, ensuring information moves from short-term to long-term memory.
              </p>
              <Link to="/articles" className="bg-white text-primary px-6 py-3 rounded-xl font-bold hover:bg-slate-100 transition-colors inline-block">
                Start Learning
              </Link>
            </div>
            {/* Abstract Background Shape */}
            <div className="absolute top-0 right-0 w-80 h-80 bg-secondary/20 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/2" />
          </motion.div>

          {/* Small Feature Card 1 */}
          <Link to="/articles">
            <motion.div 
              whileHover={{ y: -5 }}
              className="bg-white rounded-3xl p-8 border border-outline shadow-sm hover:shadow-xl transition-all h-full"
            >
              <div className="w-12 h-12 bg-blue-50 rounded-xl flex items-center justify-center mb-6 text-blue-600">
                <MousePointer2 size={24} />
              </div>
              <h3 className="text-xl font-bold mb-3">Interactive Atlas</h3>
              <p className="text-text-muted">
                Explore thousands of structures with high-resolution anatomical illustrations.
              </p>
            </motion.div>
          </Link>

          {/* Small Feature Card 2 */}
          <Link to="/quiz">
            <motion.div 
              whileHover={{ y: -5 }}
              className="bg-white rounded-3xl p-8 border border-outline shadow-sm hover:shadow-xl transition-all h-full"
            >
              <div className="w-12 h-12 bg-green-50 rounded-xl flex items-center justify-center mb-6 text-green-600">
                <Layout size={24} />
              </div>
              <h3 className="text-xl font-bold mb-3">Custom Quizzes</h3>
              <p className="text-text-muted">
                Focus on exactly what you need for your next exam with tailored quiz sessions.
              </p>
            </motion.div>
          </Link>

          {/* Small Feature Card 3 */}
          <Link to="/articles">
            <motion.div 
              whileHover={{ y: -5 }}
              className="bg-white rounded-3xl p-8 border border-outline shadow-sm hover:shadow-xl transition-all h-full"
            >
              <div className="w-12 h-12 bg-orange-50 rounded-xl flex items-center justify-center mb-6 text-orange-600">
                <Zap size={24} />
              </div>
              <h3 className="text-xl font-bold mb-3">Quick Search</h3>
              <p className="text-text-muted">
                Find any structure, article, or video in seconds with our powerful smart search.
              </p>
            </motion.div>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Features;
