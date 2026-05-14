import React from 'react';
import Hero from '../components/Hero';
import ValueProps from '../components/ValueProps';
import Features from '../components/Features';
import ContentGrid from '../components/ContentGrid';
import Testimonials from '../components/Testimonials';
import { Link } from 'react-router-dom';


const Home: React.FC = () => {
  return (
    <main>
      <Hero />
      <ValueProps />
      <Features />
      <ContentGrid />
      <Testimonials />
      <section className="bg-slate-50 py-20 border-y border-outline">
        <div className="section-container text-center">
          <h2 className="text-3xl sm:text-4xl mb-6 text-primary">Ready to start your journey?</h2>
          <p className="text-text-muted mb-8 text-lg max-w-xl mx-auto">
            Experience the most comprehensive and interactive anatomy platform designed for your success.
          </p>
          <Link to="/articles" className="btn-secondary px-10 py-4 text-lg inline-block">
            Start Learning Now
          </Link>

        </div>
      </section>
    </main>
  );
};

export default Home;
