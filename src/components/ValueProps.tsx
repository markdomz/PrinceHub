import React from 'react';
import { BookOpen, Video, PenTool, ShieldCheck } from 'lucide-react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const props = [
  {
    icon: <BookOpen className="text-blue-500" size={32} />,
    title: "1000s of Articles",
    desc: "Detailed anatomy articles written and reviewed by medical professionals."
  },
  {
    icon: <Video className="text-secondary" size={32} />,
    title: "Expert Videos",
    desc: "High-quality video tutorials that make complex topics easy to visualize."
  },
  {
    icon: <PenTool className="text-orange-500" size={32} />,
    title: "Interactive Quizzes",
    desc: "Test your knowledge with 100s of quizzes from beginner to advanced."
  },
  {
    icon: <ShieldCheck className="text-indigo-500" size={32} />,
    title: "Academic Accuracy",
    desc: "Our content is grounded on academic literature and research."
  }
];

const ValueProps: React.FC = () => {
  return (
    <section className="section-container">
      <div className="text-center mb-16">
        <h2 className="text-3xl sm:text-4xl mb-4">Everything you need to master anatomy</h2>
        <p className="text-text-muted max-w-2xl mx-auto text-lg">
          PrinceHub provides a comprehensive learning experience tailored for medical students and healthcare professionals.
        </p>
      </div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {props.map((item, idx) => (
          <Link 
            key={idx} 
            to={
              item.title === '1000s of Articles' ? '/articles' : 
              item.title === 'Interactive Quizzes' ? '/quiz' : 
              item.title === 'Expert Videos' ? '/videos' :
              '/atlas'
            }
          >
            <motion.div 
              whileHover={{ y: -5 }}
              className="card flex flex-col items-center text-center p-8 h-full"
            >
              <div className="mb-6 p-4 rounded-2xl bg-slate-50 group-hover:bg-secondary/10 transition-colors">
                {item.icon}
              </div>
              <h3 className="text-xl mb-3 font-bold text-primary">{item.title}</h3>
              <p className="text-text-muted leading-relaxed">
                {item.desc}
              </p>
            </motion.div>
          </Link>
        ))}
      </div>
    </section>
  );
};

export default ValueProps;
