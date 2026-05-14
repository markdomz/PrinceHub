import React from 'react';
import { Mail, Globe } from 'lucide-react';
import { Link } from 'react-router-dom';

const Footer: React.FC = () => {
  return (
    <footer className="bg-primary text-white pt-20 pb-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-12 mb-16">
          {/* Brand */}
          <div className="col-span-2 md:col-span-3 lg:col-span-1">
            <div className="flex items-center gap-2 mb-6">
              <div className="w-8 h-8 bg-white rounded flex items-center justify-center text-primary font-bold">P</div>
              <span className="text-2xl font-bold">PrinceHub</span>
            </div>
            <p className="text-slate-400 text-sm leading-relaxed mb-6">
              PrinceHub is a personal anatomy study platform designed for efficient and interactive learning.
            </p>
            <div className="flex gap-4">
              <Mail size={20} className="text-slate-400 hover:text-white cursor-pointer transition-colors" />
              <Globe size={20} className="text-slate-400 hover:text-white cursor-pointer transition-colors" />
            </div>
          </div>

          {/* Links */}
          <div>
            <h4 className="font-bold mb-6">Anatomy</h4>
            <ul className="space-y-4 text-slate-400 text-sm">
              <li className="hover:text-white cursor-pointer"><Link to="/articles/1">Basics</Link></li>
              <li className="hover:text-white cursor-pointer"><Link to="/atlas/upper-extremity">Upper extremity</Link></li>
              <li className="hover:text-white cursor-pointer"><Link to="/atlas/lower-extremity">Lower extremity</Link></li>
              <li className="hover:text-white cursor-pointer"><Link to="/articles/3">Thorax</Link></li>
              <li className="hover:text-white cursor-pointer"><Link to="/atlas/abdomen-pelvis">Abdomen & Pelvis</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold mb-6">Resources</h4>
            <ul className="space-y-4 text-slate-400 text-sm">
              <li className="hover:text-white cursor-pointer"><Link to="/quiz">Quizzes</Link></li>
              <li className="hover:text-white cursor-pointer"><Link to="/articles">Articles</Link></li>
              <li className="hover:text-white cursor-pointer"><Link to="/atlas">Atlas</Link></li>
              <li className="hover:text-white cursor-pointer"><Link to="/articles">Physiology</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold mb-6">Company</h4>
            <ul className="space-y-4 text-slate-400 text-sm">
              <li className="hover:text-white cursor-pointer">About us</li>
              <li className="hover:text-white cursor-pointer">Team</li>
              <li className="hover:text-white cursor-pointer">Partners</li>
              <li className="hover:text-white cursor-pointer">Jobs</li>
              <li className="hover:text-white cursor-pointer">Contact</li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold mb-6">Support</h4>
            <ul className="space-y-4 text-slate-400 text-sm">
              <li className="hover:text-white cursor-pointer">Help Center</li>
              <li className="hover:text-white cursor-pointer">Terms of Use</li>
              <li className="hover:text-white cursor-pointer">Privacy Policy</li>
              <li className="hover:text-white cursor-pointer">Pricing</li>
              <li className="hover:text-white cursor-pointer flex items-center gap-2">
                <Mail size={14} /> Newsletter
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-slate-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-slate-500 text-xs">
          <p>© 2026 PrinceHub. All rights reserved.</p>
          <div className="flex gap-6">
            <span className="hover:text-white cursor-pointer">Imprint</span>
            <span className="hover:text-white cursor-pointer">Privacy</span>
            <span className="hover:text-white cursor-pointer">Terms</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
