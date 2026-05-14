import React, { useState } from 'react';
import { Search, Brain, CheckCircle, Clock, Trophy, Play, Star, ShieldCheck, Check, Layers, MapPin } from 'lucide-react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { allQuestions, quizzes } from '../data/quizzes';
import type { AnatomySystem, AnatomyRegion } from '../types/quiz';

const quizTypes = [
  { 
    id: 'basic-id', 
    title: 'Basic Identification', 
    description: 'Learn names and locations of structures. Perfect for beginners.', 
    icon: <Search size={24} />, 
    color: 'border-blue-500', 
    bgColor: 'bg-blue-50',
    stats: '15,000+ Questions'
  },
  { 
    id: 'advanced-id', 
    title: 'Advanced Identification', 
    description: 'Detailed structures including nerves, vessels, and attachments.', 
    icon: <Brain size={24} />, 
    color: 'border-green-500', 
    bgColor: 'bg-green-50',
    stats: '8,000+ Questions'
  },
  { 
    id: 'clinical', 
    title: 'Clinical Anatomy', 
    description: 'Apply your knowledge to clinical scenarios and pathology.', 
    icon: <ShieldCheck size={24} />, 
    color: 'border-red-500', 
    bgColor: 'bg-red-50',
    stats: '3,500+ Questions'
  },
  { 
    id: 'musculoskeletal', 
    title: 'Muscle Attachments', 
    description: 'Learn origins, insertions, innervations and actions.', 
    icon: <Star size={24} />, 
    color: 'border-purple-500', 
    bgColor: 'bg-purple-50',
    stats: '4,200+ Questions'
  },
];

const systems: AnatomySystem[] = ['Skeletal', 'Muscular', 'Nervous', 'Cardiovascular', 'Digestive', 'Respiratory', 'Urinary', 'Endocrine'];
const regions: AnatomyRegion[] = ['Head & Neck', 'Upper Limb', 'Thorax', 'Abdomen', 'Pelvis', 'Lower Limb', 'Back'];

const Quiz: React.FC = () => {
  const navigate = useNavigate();
  const [selectedSystems, setSelectedSystems] = useState<AnatomySystem[]>([]);
  const [selectedRegions, setSelectedRegions] = useState<AnatomyRegion[]>([]);

  const toggleSystem = (system: AnatomySystem) => {
    setSelectedSystems(prev => 
      prev.includes(system) ? prev.filter(s => s !== system) : [...prev, system]
    );
  };

  const toggleRegion = (region: AnatomyRegion) => {
    setSelectedRegions(prev => 
      prev.includes(region) ? prev.filter(r => r !== region) : [...prev, region]
    );
  };

  const handleBuildCustomQuiz = () => {
    // Filter questions based on selections
    const filteredQuestions = allQuestions.filter(q => {
      const systemMatch = selectedSystems.length === 0 || (q.system && selectedSystems.includes(q.system));
      const regionMatch = selectedRegions.length === 0 || (q.region && selectedRegions.includes(q.region));
      return systemMatch && regionMatch;
    });

    if (filteredQuestions.length === 0) {
      alert('No questions found for the selected filters. Try broadening your search!');
      return;
    }

    // Update the custom quiz entry in our data store
    quizzes['custom'].questions = filteredQuestions;
    
    // Navigate to the quiz session
    navigate('/quiz/custom');
  };

  return (
    <div className="pt-24 pb-20 min-h-screen bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header Section */}
        <div className="text-center mb-16">
          <motion.div 
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            className="inline-flex items-center gap-2 px-4 py-2 bg-secondary/10 text-secondary rounded-full font-bold text-sm mb-6"
          >
            <Trophy size={16} />
            Master Human Anatomy with PrinceHub
          </motion.div>
          <h1 className="text-4xl md:text-5xl font-extrabold text-primary mb-6">
            The ultimate anatomy <span className="text-secondary">learning tool</span>
          </h1>
          <p className="text-text-muted text-xl max-w-3xl mx-auto">
            Choose your quiz style and master anatomy using our proven spaced-repetition method.
          </p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
          {[
            { label: 'Total Questions', value: '45,000+', icon: <Brain size={20} /> },
            { label: 'Quality Lessons', value: '500+', icon: <CheckCircle size={20} /> },
            { label: 'Regions Covered', value: 'All 8', icon: <Clock size={20} /> },
            { label: 'Accuracy Goal', value: '95%', icon: <Trophy size={20} /> },
          ].map((stat, i) => (
            <div key={i} className="bg-white p-6 rounded-2xl border border-outline shadow-sm text-center">
              <div className="w-10 h-10 bg-slate-50 text-primary rounded-lg flex items-center justify-center mx-auto mb-4 border border-outline">
                {stat.icon}
              </div>
              <div className="text-2xl font-bold text-primary mb-1">{stat.value}</div>
              <div className="text-text-muted text-sm">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Quiz Types Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-20">
          {quizTypes.map((type) => (
            <motion.div
              key={type.id}
              whileHover={{ y: -5 }}
              className={`relative bg-white p-8 rounded-3xl border-2 ${type.color} shadow-lg cursor-pointer transition-all group`}
              onClick={() => navigate(`/quiz/${type.id}`)}
            >
              <div className="flex justify-between items-start mb-6">
                <div className={`w-14 h-14 ${type.bgColor} rounded-2xl flex items-center justify-center text-primary border border-outline`}>
                  {type.icon}
                </div>
                <div className="bg-slate-100 text-text-muted text-xs font-bold px-3 py-1 rounded-full">
                  {type.stats}
                </div>
              </div>
              <h3 className="text-2xl font-bold text-primary mb-3">{type.title}</h3>
              <p className="text-text-muted leading-relaxed mb-8">
                {type.description}
              </p>
              <button 
                className="flex items-center gap-2 font-bold text-primary group-hover:text-secondary transition-colors"
                onClick={(e) => {
                  e.stopPropagation();
                  navigate(`/quiz/${type.id}`);
                }}
              >
                Start This Quiz <Play size={18} fill="currentColor" />
              </button>
            </motion.div>
          ))}
        </div>

        {/* Custom Quiz Section */}
        <div className="bg-white rounded-[3rem] p-8 md:p-16 border border-outline shadow-xl flex flex-col lg:flex-row items-start gap-12">
          <div className="lg:w-1/2">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6">Create your own custom quiz</h2>
            <p className="text-text-muted text-lg mb-8 leading-relaxed">
              Focus on exactly what you need to learn. Select regions, structures, and systems to build a personalized study session tailored to your exam.
            </p>
            
            <div className="space-y-8 mb-10">
              <div>
                <h4 className="font-bold text-primary mb-4 flex items-center gap-2">
                  <Layers size={18} className="text-secondary" /> Select Systems
                </h4>
                <div className="flex flex-wrap gap-2">
                  {systems.map(system => (
                    <button
                      key={system}
                      onClick={() => toggleSystem(system)}
                      className={`px-4 py-3 rounded-xl text-sm font-bold border transition-all flex items-center gap-3 group ${
                        selectedSystems.includes(system)
                          ? 'bg-primary text-white border-primary shadow-lg scale-105'
                          : 'bg-white text-text-muted border-outline hover:border-primary hover:bg-slate-50'
                      }`}
                    >
                      <div className={`w-5 h-5 rounded border-2 flex items-center justify-center transition-all ${
                        selectedSystems.includes(system) 
                          ? 'bg-white border-white text-primary' 
                          : 'bg-slate-100 border-outline group-hover:border-primary'
                      }`}>
                        {selectedSystems.includes(system) && <Check size={14} strokeWidth={4} />}
                      </div>
                      {system}
                    </button>
                  ))}
                </div>
              </div>

              <div>
                <h4 className="font-bold text-primary mb-4 flex items-center gap-2">
                  <MapPin size={18} className="text-secondary" /> Select Regions
                </h4>
                <div className="flex flex-wrap gap-2">
                  {regions.map(region => (
                    <button
                      key={region}
                      onClick={() => toggleRegion(region)}
                      className={`px-4 py-3 rounded-xl text-sm font-bold border transition-all flex items-center gap-3 group ${
                        selectedRegions.includes(region)
                          ? 'bg-secondary text-primary border-secondary shadow-lg scale-105'
                          : 'bg-white text-text-muted border-outline hover:border-secondary hover:bg-slate-50'
                      }`}
                    >
                      <div className={`w-5 h-5 rounded border-2 flex items-center justify-center transition-all ${
                        selectedRegions.includes(region) 
                          ? 'bg-primary border-primary text-secondary' 
                          : 'bg-slate-100 border-outline group-hover:border-secondary'
                      }`}>
                        {selectedRegions.includes(region) && <Check size={14} strokeWidth={4} />}
                      </div>
                      {region}
                    </button>
                  ))}
                </div>
              </div>
            </div>

            <button 
              onClick={handleBuildCustomQuiz}
              disabled={selectedSystems.length === 0 && selectedRegions.length === 0}
              className={`btn-primary w-full md:w-auto px-10 py-4 text-lg shadow-xl ${
                (selectedSystems.length === 0 && selectedRegions.length === 0) ? 'opacity-50 cursor-not-allowed grayscale' : ''
              }`}
            >
              Start Custom Quiz
            </button>
          </div>

          <div className="lg:w-1/2 w-full relative">
             <div className="aspect-video lg:aspect-square bg-slate-100 rounded-3xl border border-outline flex items-center justify-center p-4 md:p-8">
                {/* Mockup UI for Custom Quiz Selection Summary */}
                <div className="w-full h-full bg-white rounded-2xl shadow-inner p-6 border border-outline overflow-y-auto">
                  <h5 className="text-sm font-bold text-primary mb-4 uppercase tracking-wider opacity-60">Quiz Summary</h5>
                  <div className="space-y-3">
                    {selectedSystems.length === 0 && selectedRegions.length === 0 ? (
                      <div className="flex flex-col items-center justify-center py-10 text-center opacity-40">
                        <Brain size={48} className="mb-4" />
                        <p className="text-sm">Select systems or regions to see your quiz summary</p>
                      </div>
                    ) : (
                      <>
                        <div className="p-4 bg-slate-50 rounded-xl border border-outline">
                          <div className="text-xs text-text-muted mb-1">Target Systems</div>
                          <div className="font-bold text-primary">
                            {selectedSystems.length > 0 ? selectedSystems.join(', ') : 'All Systems'}
                          </div>
                        </div>
                        <div className="p-4 bg-slate-50 rounded-xl border border-outline">
                          <div className="text-xs text-text-muted mb-1">Target Regions</div>
                          <div className="font-bold text-primary">
                            {selectedRegions.length > 0 ? selectedRegions.join(', ') : 'All Regions'}
                          </div>
                        </div>
                        <div className="mt-6 flex items-center justify-between p-4 bg-primary/5 rounded-xl border border-primary/20">
                          <div>
                            <div className="text-xs text-primary/60 font-bold uppercase tracking-tighter">Est. Questions</div>
                            <div className="text-2xl font-black text-primary">
                              {allQuestions.filter(q => {
                                const s = selectedSystems.length === 0 || (q.system && selectedSystems.includes(q.system));
                                const r = selectedRegions.length === 0 || (q.region && selectedRegions.includes(q.region));
                                return s && r;
                              }).length}
                            </div>
                          </div>
                          <div className="w-12 h-12 bg-primary text-white rounded-full flex items-center justify-center shadow-lg">
                            <Play size={20} fill="currentColor" />
                          </div>
                        </div>
                      </>
                    )}
                  </div>
                </div>
                {/* Float elements for extra polish */}
                <div className="absolute -top-6 -right-6 w-32 h-32 bg-secondary/10 rounded-full blur-3xl"></div>
                <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-blue-500/10 rounded-full blur-3xl"></div>
             </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Quiz;

