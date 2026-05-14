import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, CheckCircle2 } from 'lucide-react';
import { Link } from 'react-router-dom';

const Hero: React.FC = () => {
  return (
    <section className="relative pt-32 pb-20 overflow-hidden bg-gradient-to-br from-[#F8F9FA] to-[#EDF2F7]">
      {/* Decorative Elements */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-primary opacity-[0.02] rounded-l-full translate-x-1/4" />
      <div className="absolute -top-24 -left-24 w-96 h-96 bg-secondary opacity-[0.03] rounded-full blur-3xl" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center lg:text-left"
          >
            <span className="inline-flex items-center px-4 py-1.5 rounded-full bg-secondary/10 text-secondary text-sm font-bold mb-6">
              #1 PLATFORM FOR ANATOMY
            </span>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-[1.1] mb-6 text-primary">
              Learn anatomy faster, <br />
              <span className="text-secondary italic">the engaging way.</span>
            </h1>
            <p className="text-lg sm:text-xl text-[var(--text-muted)] mb-8 max-w-xl mx-auto lg:mx-0 leading-relaxed">
              Master the complex world of human anatomy through interactive models, 
              expert-crafted videos, and spaced-repetition quizzes. 
              Start learning in less than 60 seconds.
            </p>

            <div className="flex flex-col sm:flex-row items-center gap-4 justify-center lg:justify-start">
              <Link to="/atlas" className="btn-primary px-8 py-4 text-lg w-full sm:w-auto">
                Start Learning Now <ArrowRight size={20} />
              </Link>
              <Link to="/articles" className="btn-outline px-8 py-4 text-lg w-full sm:w-auto text-center">
                Explore Library
              </Link>
            </div>

            <div className="mt-10 flex flex-wrap justify-center lg:justify-start gap-6">
              {[
                '1000s of Illustrations',
                'Expert Reviewed',
                'Mobile Ready'
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-2 text-primary font-medium">
                   <CheckCircle2 size={18} className="text-secondary" />
                   <span>{item}</span>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Right Content - Visual */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative hidden lg:block"
          >
            <div className="relative z-10 rounded-2xl overflow-hidden shadow-2xl border-4 border-white bg-white">
               {/* This would be a high-quality illustration or video preview */}
               <img 
                 src="https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&q=80&w=1200" 
                 alt="Human Anatomy Visualization"
                 className="w-full h-auto"
               />
               <div className="absolute inset-0 bg-gradient-to-t from-primary/10 to-transparent pointer-events-none" />
            </div>
            
            {/* Floating Achievement Badge */}
            <motion.div 
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 4, repeat: Infinity }}
              className="absolute -bottom-6 -left-6 bg-white p-4 rounded-xl shadow-lg border border-outline flex items-center gap-3 z-20"
            >
              <div className="w-12 h-12 bg-secondary/10 rounded-full flex items-center justify-center text-secondary">
                <CheckCircle2 size={24} />
              </div>
              <div>
                <div className="text-sm font-bold text-primary">Scientifically Validated</div>
                <div className="text-xs text-text-muted">Academic accuracy guaranteed</div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
