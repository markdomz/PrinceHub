import React from 'react';
import { Star } from 'lucide-react';
import { motion } from 'framer-motion';

const testimonials = [
  {
    name: "Dr. Sarah Chen",
    role: "Resident Surgeon",
    text: "PrinceHub was instrumental during my medical school years. The clarity of illustrations is unmatched.",
    avatar: "https://images.unsplash.com/photo-1559839734-2b71f1536783?auto=format&fit=crop&q=80&w=100&h=100"
  },
  {
    name: "Marcus Thorne",
    role: "Medical Student",
    text: "The spaced repetition quizzes helped me ace my anatomy finals. It's truly a game changer.",
    avatar: "https://images.unsplash.com/photo-1537368910025-700350fe46c7?auto=format&fit=crop&q=80&w=100&h=100"
  },
  {
    name: "Elena Rodriguez",
    role: "Physiotherapist",
    text: "I use the interactive atlas to explain complex movements to my patients. They love the visuals!",
    avatar: "https://images.unsplash.com/photo-1594824476967-48c8b964273f?auto=format&fit=crop&q=80&w=100&h=100"
  }
];

const Testimonials: React.FC = () => {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl mb-4">Recommended by Professionals</h2>
          <p className="text-text-muted text-lg">Master anatomy with the most trusted interactive tools.</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((t, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="bg-slate-50 p-8 rounded-2xl border border-outline"
            >
              <div className="flex gap-1 text-secondary mb-4">
                {[...Array(5)].map((_, idx) => <Star key={idx} size={16} fill="currentColor" />)}
              </div>
              <p className="text-primary font-medium italic mb-6 leading-relaxed">
                "{t.text}"
              </p>
              <div className="flex items-center gap-4">
                <img src={t.avatar} alt={t.name} className="w-12 h-12 rounded-full object-cover" />
                <div>
                  <div className="font-bold text-primary">{t.name}</div>
                  <div className="text-sm text-text-muted">{t.role}</div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
