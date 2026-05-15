import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, CheckCircle2 } from 'lucide-react';
import { Link } from 'react-router-dom';

const Hero: React.FC = () => {
  return (
    <section className="relative pt-28 pb-20 overflow-hidden" style={{ background: 'linear-gradient(135deg, #F8F9FA 0%, #EDF2F7 100%)' }}>
      {/* Decorative blobs */}
      <div style={{ position: 'absolute', top: 0, right: 0, width: '50%', height: '100%', background: '#00234B', opacity: 0.02, borderRadius: '50% 0 0 50%' }} />
      <div style={{ position: 'absolute', top: '-96px', left: '-96px', width: '384px', height: '384px', background: '#28A745', opacity: 0.03, borderRadius: '50%', filter: 'blur(80px)' }} />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="grid lg:grid-cols-2 gap-12 items-center">

          {/* Left: Text Content — no opacity animation, always visible */}
          <div className="text-center lg:text-left">
            <span className="inline-flex items-center px-4 py-1.5 rounded-full text-sm font-bold mb-6" style={{ background: 'rgba(40,167,69,0.12)', color: '#28A745' }}>
              #1 PLATFORM FOR ANATOMY
            </span>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-tight mb-6" style={{ color: '#00234B' }}>
              Learn anatomy faster,{' '}
              <br />
              <span style={{ color: '#28A745', fontStyle: 'italic' }}>the engaging way.</span>
            </h1>

            <p className="text-lg sm:text-xl mb-8 max-w-xl mx-auto lg:mx-0 leading-relaxed" style={{ color: '#43474E' }}>
              Master the complex world of human anatomy through interactive models,
              expert-crafted videos, and spaced-repetition quizzes.
              Start learning in less than 60 seconds.
            </p>

            <div className="flex flex-col sm:flex-row items-center gap-4 justify-center lg:justify-start">
              <Link to="/articles" className="btn-primary px-8 py-4 text-lg w-full sm:w-auto">
                Start Learning Now <ArrowRight size={20} />
              </Link>
              <Link to="/videos" className="btn-outline px-8 py-4 text-lg w-full sm:w-auto text-center">
                Watch Videos
              </Link>
            </div>

            <div className="mt-10 flex flex-wrap justify-center lg:justify-start gap-6">
              {['1000s of Illustrations', 'Expert Reviewed', 'Mobile Ready'].map((item, i) => (
                <div key={i} className="flex items-center gap-2 font-medium" style={{ color: '#00234B' }}>
                  <CheckCircle2 size={18} style={{ color: '#28A745' }} />
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Right: Image — visible on md+ */}
          <motion.div
            whileInView={{ opacity: 1, scale: 1 }}
            initial={{ opacity: 0, scale: 0.95 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.7 }}
            className="relative hidden md:block"
          >
            <div className="relative z-10 rounded-2xl overflow-hidden shadow-2xl border-4 border-white bg-white">
              <img
                src="https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&q=80&w=1200"
                alt="Human Anatomy Visualization"
                className="w-full h-auto"
                loading="eager"
              />
              <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top, rgba(0,35,75,0.08), transparent)', pointerEvents: 'none' }} />
            </div>

            {/* Floating Badge */}
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 4, repeat: Infinity }}
              className="absolute -bottom-6 -left-6 bg-white p-4 rounded-xl shadow-lg border flex items-center gap-3 z-20"
              style={{ borderColor: '#E9ECEF' }}
            >
              <div className="w-12 h-12 rounded-full flex items-center justify-center" style={{ background: 'rgba(40,167,69,0.12)', color: '#28A745' }}>
                <CheckCircle2 size={24} />
              </div>
              <div>
                <div className="text-sm font-bold" style={{ color: '#00234B' }}>Scientifically Validated</div>
                <div className="text-xs" style={{ color: '#43474E' }}>Academic accuracy guaranteed</div>
              </div>
            </motion.div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default Hero;
