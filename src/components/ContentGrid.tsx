import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ChevronRight } from 'lucide-react';

const categories = [
  {
    title: 'Skeletal System',
    desc: 'Explore the 206 bones of the human body, their structure, function, and clinical significance.',
    img: 'https://images.unsplash.com/photo-1530497610245-94d3c16cda28?w=600&auto=format&fit=crop&q=80',
    link: '/articles/1'
  },
  {
    title: 'Muscular System',
    desc: 'Learn the origins, insertions, actions, and innervations of over 600 muscles.',
    img: 'https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e?w=600&auto=format&fit=crop&q=80',
    link: '/articles/4'
  },
  {
    title: 'Nervous System',
    desc: 'Understand the brain, spinal cord, and peripheral nerves with detailed atlas maps.',
    img: 'https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=600&auto=format&fit=crop&q=80',
    link: '/articles/6'
  },
  {
    title: 'Cardiovascular System',
    desc: 'Study the heart, arteries, veins, and capillaries that keep the body alive.',
    img: 'https://images.unsplash.com/photo-1628595351029-c2bf17511435?w=600&auto=format&fit=crop&q=80',
    link: '/articles/3'
  },
  {
    title: 'Respiratory System',
    desc: 'Discover the lungs, airways, and breathing mechanics in interactive detail.',
    img: 'https://images.unsplash.com/photo-1576086213369-97a306d36557?w=600&auto=format&fit=crop&q=80',
    link: '/articles/9'
  },
  {
    title: 'Digestive System',
    desc: 'Follow the journey of food from mouth to absorption with anatomical precision.',
    img: 'https://images.unsplash.com/photo-1530026405186-ed1f139313f8?w=600&auto=format&fit=crop&q=80',
    link: '/articles/7'
  },
];

const ContentGrid: React.FC = () => {
  return (
    <section className="bg-white py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
          <div className="max-w-2xl">
            <h2 className="text-3xl sm:text-4xl mb-4">Explore our content</h2>
            <p className="text-text-muted text-lg">
              Dive into our extensive library covering every system of the human body — from bones to nerves.
            </p>
          </div>
          <Link to="/articles" className="flex items-center gap-2 text-secondary font-bold hover:gap-3 transition-all whitespace-nowrap">
            See all library <ChevronRight size={20} />
          </Link>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {categories.map((cat, idx) => (
            <Link to={cat.link || "/atlas"} key={idx}>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="group cursor-pointer"
              >
                <div className="relative aspect-square mb-6 overflow-hidden rounded-2xl bg-slate-100 border border-outline">
                  <img
                    src={cat.img}
                    alt={cat.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-primary/0 group-hover:bg-primary/5 transition-colors" />
                </div>
                <h3 className="text-xl mb-2 group-hover:text-secondary transition-colors">{cat.title}</h3>
                <p className="text-text-muted leading-relaxed mb-4">{cat.desc}</p>
                <span className="inline-flex items-center gap-1 text-primary font-semibold text-sm group-hover:translate-x-1 transition-transform">
                  Explore <ChevronRight size={16} />
                </span>
              </motion.div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ContentGrid;
