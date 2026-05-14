import React, { useState, useMemo } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, BookOpen, Layers, Search, ArrowRight, X, Play, Info } from 'lucide-react';

const regionData: Record<string, any> = {
  'head-neck': {
    title: 'Head and Neck',
    description: 'Master the intricate structures of the skull, brain, and specialized sensory organs. This region covers clinical anatomy essential for neurology, ENT, and ophthalmology.',
    image: 'https://images.unsplash.com/photo-1559757175-5700dde675bc?auto=format&fit=crop&q=80&w=1200',
    tutorialVideo: 'qPix_X-9t7E',
    structures: [
      { name: 'Skull', type: 'Skeletal', desc: 'The complex bony framework of the head.', detail: 'The human skull is a bony structure that forms the head in the human skeleton. It supports the structures of the face and forms a cavity for the brain.', image: 'https://images.unsplash.com/photo-1583912267550-d44d4a3c617c?auto=format&fit=crop&q=80&w=800', diagramImage: '/head_neck_diagram_1778686969078.png' },
      { name: 'Mandible', type: 'Skeletal', desc: 'The largest and strongest facial bone.', detail: 'The mandible is the largest, strongest and lowest bone in the human facial skeleton. It forms the lower jaw and holds the lower teeth in place.', image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&q=80&w=800', diagramImage: '/head_neck_diagram_1778686969078.png' },
      { name: 'Cerebrum', type: 'Nervous', desc: 'Seat of higher cognitive functions.', detail: 'The cerebrum performs higher functions like interpreting touch, vision and hearing, as well as speech, reasoning, and fine control of movement.', image: 'https://images.unsplash.com/photo-1559757148-5c350d0d3c56?auto=format&fit=crop&q=80&w=800', videoId: 'qPix_X-9t7E' },
      { name: 'Thyroid Gland', type: 'Endocrine', desc: 'Vital metabolic regulator.', detail: 'The thyroid gland is an endocrine gland in the neck. It secretes hormones that primarily influence the metabolic rate.', image: 'https://images.unsplash.com/photo-1581595220975-e2d58a35d1a2?auto=format&fit=crop&q=80&w=600' },
    ]
  },
  'thorax': {
    title: 'Thorax',
    description: 'Explore the cardiovascular and respiratory powerhouses. Understand the heart, lungs, and the protective rib cage in high definition.',
    image: 'https://images.unsplash.com/photo-1628595351029-c2bf17511435?auto=format&fit=crop&q=80&w=1200',
    tutorialVideo: 'H04d3rJCLCE',
    structures: [
      { name: 'Heart', type: 'Cardiovascular', desc: 'The primary circulatory organ.', detail: 'The heart is a muscular organ that pumps blood through the blood vessels. It is located in the middle compartment of the chest.', image: 'https://images.unsplash.com/photo-1628595351029-c2bf17511435?auto=format&fit=crop&q=80&w=800', diagramImage: '/thorax_diagram_1778687175117.png', videoId: 'H04d3rJCLCE' },
      { name: 'Lungs', type: 'Respiratory', desc: 'Primary organs of respiration.', detail: 'The lungs are a pair of spongy, air-filled organs located on either side of the chest.', image: 'https://images.unsplash.com/photo-1558431382-d703fb7634f1?auto=format&fit=crop&q=80&w=800', diagramImage: '/thorax_diagram_1778687175117.png', videoId: 'mOKmjYwfDGU' },
      { name: 'Rib Cage', type: 'Skeletal', desc: 'Protective thoracic cage.', detail: 'The rib cage consists of the ribs, the vertebral column, and the sternum. It encloses the heart and lungs.', image: 'https://images.unsplash.com/photo-1498676077434-7540603d2dc9?auto=format&fit=crop&q=80&w=600' },
    ]
  },
  'upper-extremity': {
    title: 'Upper Extremity',
    description: 'From the complex shoulder girdle to the intricate mechanics of the hand.',
    image: 'https://images.unsplash.com/photo-1590105577767-e21a1067899f?auto=format&fit=crop&q=80&w=1200',
    tutorialVideo: '3GZ_pG6B-vI',
    structures: [
      { name: 'Humerus', type: 'Skeletal', desc: 'Long bone of the upper arm.', detail: 'The humerus is the only bone in the upper arm. It is a long bone that runs from the shoulder to the elbow.', image: 'https://images.unsplash.com/photo-1582584665829-009715a30647?auto=format&fit=crop&q=80&w=800', diagramImage: '/upper_extremity_diagram_1778687603925.png' },
      { name: 'Biceps Brachii', type: 'Muscular', desc: 'Powerful elbow flexor.', detail: 'The biceps brachii is a prominent muscle on the front of the upper arm. It acts on both the shoulder and elbow joints.', image: 'https://images.unsplash.com/photo-1532384748853-8f54a8f476e2?auto=format&fit=crop&q=80&w=800', videoId: '3GZ_pG6B-vI' },
    ]
  },
  'abdomen-pelvis': {
    title: 'Abdomen and Pelvis',
    description: 'Study the digestive, urinary, and reproductive systems with surgical precision.',
    image: 'https://images.unsplash.com/photo-1530026405186-ed1f139313f8?auto=format&fit=crop&q=80&w=1200',
    tutorialVideo: 'VwrsL-lCZYo',
    structures: [
      { name: 'Liver', type: 'Digestive', desc: 'Largest internal gland.', detail: 'The liver is a large, meaty organ that sits on the right side of the belly. It filters the blood coming from the digestive tract.', image: 'https://images.unsplash.com/photo-1551601651-2a8555f1a136?auto=format&fit=crop&q=80&w=800', diagramImage: '/abdomen_pelvis_diagram_1778687869840.png', videoId: 'VwrsL-lCZYo' },
      { name: 'Stomach', type: 'Digestive', desc: 'Primary digestive organ.', detail: 'The stomach is a muscular, hollow organ in the gastrointestinal tract.', image: 'https://images.unsplash.com/photo-1471864190281-ad5fe9bb0724?auto=format&fit=crop&q=80&w=800' },
    ]
  },
  'lower-extremity': {
    title: 'Lower Extremity',
    description: 'Includes the hip, thigh, leg, and foot, specialized for weight-bearing and locomotion.',
    image: 'https://images.unsplash.com/photo-1434494878577-86c23bcb06b9?auto=format&fit=crop&q=80&w=1200',
    tutorialVideo: '3c9g8X5V-bA',
    tutorialImage: '/lower_extremity_diagram_1778687891029.png',
    structures: [
      { name: 'Femur', type: 'Skeletal', desc: 'The longest bone in the body.', detail: 'The femur, or thigh bone, is the proximal bone of the leg. It is the strongest bone in the human body.', image: 'https://images.unsplash.com/photo-1512678080530-7760d81faba6?auto=format&fit=crop&q=80&w=800', diagramImage: 'https://images.unsplash.com/photo-1512678080530-7760d81faba6?auto=format&fit=crop&q=80&w=1200' },
      { name: 'Quadriceps', type: 'Muscular', desc: 'Four muscles on the front of the thigh.', detail: 'The quadriceps femoris is a large muscle group that includes the four prevailing muscles on the front of the thigh.', image: 'https://images.unsplash.com/photo-1583454110351-3cd06ca2709f?auto=format&fit=crop&q=80&w=800' },
    ]
  },
  'neuroanatomy': {
    title: 'Neuroanatomy',
    description: 'The study of the structure and organization of the nervous system, including the brain and spinal cord.',
    image: 'https://images.unsplash.com/photo-1559757148-5c350d0d3c56?auto=format&fit=crop&q=80&w=1200',
    tutorialVideo: '9X4a-tM6sYQ',
    tutorialImage: '/neuroanatomy_diagram_1778687919187.png',
    structures: [
      { name: 'Cerebrum', type: 'Nervous', desc: 'Largest part of the brain.', detail: 'The cerebrum is the largest part of the brain and is composed of right and left hemispheres. It performs higher functions like interpreting touch, vision and hearing.', image: 'https://images.unsplash.com/photo-1559757148-5c350d0d3c56?auto=format&fit=crop&q=80&w=600' },
      { name: 'Cerebellum', type: 'Nervous', desc: 'Coordinates movement and balance.', detail: 'The cerebellum is located under the cerebrum. Its function is to coordinate muscle movements, maintain posture, and balance.', image: 'https://images.unsplash.com/photo-1559757148-5c350d0d3c56?auto=format&fit=crop&q=80&w=600' },
      { name: 'Spinal Cord', type: 'Nervous', desc: 'Main pathway for information.', detail: 'The spinal cord is a long, thin, tubular bundle of nervous tissue and support cells that extends from the medulla oblongata.', image: 'https://images.unsplash.com/photo-1559757148-5c350d0d3c56?auto=format&fit=crop&q=80&w=600' },
      { name: 'Medulla Oblongata', type: 'Nervous', desc: 'Regulates breathing and heart rate.', detail: 'The medulla oblongata is the lowest part of the brain and is continuous with the spinal cord.', image: 'https://images.unsplash.com/photo-1559757148-5c350d0d3c56?auto=format&fit=crop&q=80&w=600' },
    ]
  }
};

const AtlasRegion: React.FC = () => {
  const { regionId } = useParams<{ regionId: string }>();
  const navigate = useNavigate();
  const region = regionId ? regionData[regionId] : null;

  const [searchQuery, setSearchQuery] = useState('');
  const [selectedStructure, setSelectedStructure] = useState<any>(null);
  const [showDiagram, setShowDiagram] = useState(false);
  const [showVideo, setShowVideo] = useState(false);

  // Filtered structures based on search query
  const filteredStructures = useMemo(() => {
    if (!region) return [];
    return region.structures.filter((s: any) => 
      s.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      s.type.toLowerCase().includes(searchQuery.toLowerCase())
    );
  }, [region, searchQuery]);

  if (!region) {
    return (
      <div className="pt-32 pb-20 text-center">
        <h2 className="text-2xl font-bold text-primary mb-4">Region Not Found</h2>
        <button onClick={() => navigate('/atlas')} className="btn-primary px-6 py-2">Back to Anatomy</button>
      </div>
    );
  }

  return (
    <div className="pt-24 pb-20 min-h-screen bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Breadcrumbs / Back */}
        <button 
          onClick={() => navigate('/atlas')}
          className="flex items-center gap-2 text-text-muted hover:text-primary transition-colors mb-8 font-medium"
        >
          <ChevronLeft size={20} /> Explore Anatomy
        </button>

        {/* Hero Section */}
        <div className="bg-white rounded-[2.5rem] overflow-hidden border border-outline shadow-xl mb-12">
          <div className="grid lg:grid-cols-2">
            <div className="p-8 md:p-12 flex flex-col justify-center">
              <h1 className="text-4xl md:text-5xl font-black text-primary mb-6 leading-tight">
                {region.title}
              </h1>
              <p className="text-text-muted text-lg mb-8 leading-relaxed">
                {region.description}
              </p>
              <div className="flex flex-wrap gap-4">
                <Link to={`/quiz?region=${regionId}`} className="btn-primary px-6 py-3 rounded-xl flex items-center gap-2 shadow-lg shadow-primary/20">
                  <Layers size={18} /> Test Your Knowledge
                </Link>
                {region.tutorialVideo && (
                  <button 
                    onClick={() => setShowVideo(true)}
                    className="flex items-center gap-2 px-6 py-3 rounded-xl bg-secondary text-white font-bold hover:bg-secondary-hover transition-all shadow-lg shadow-secondary/20"
                  >
                    <Play size={18} fill="currentColor" /> Watch Tutorial
                  </button>
                )}
                <Link to="/articles" className="btn-outline px-6 py-3 rounded-xl flex items-center gap-2 hover:bg-slate-50">
                  <BookOpen size={18} /> Related Guides
                </Link>
              </div>
            </div>
            <div className="h-64 lg:h-auto relative overflow-hidden">
              <motion.img 
                src={region.image} 
                alt={region.title}
                className="w-full h-full object-cover animate-float"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent pointer-events-none hidden lg:block" />
            </div>
          </div>
        </div>

        {/* Search within region */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold text-primary mb-6">Explore Structures</h2>
          <div className="relative max-w-xl">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-text-muted" size={20} />
            <input 
              type="text" 
              placeholder={`Search in ${region.title}...`}
              className="w-full pl-12 pr-4 py-4 rounded-xl border border-outline bg-white shadow-sm focus:ring-2 focus:ring-primary focus:outline-none transition-all"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>
        </div>

        {/* Structures Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <AnimatePresence>
            {filteredStructures.length > 0 ? (
              filteredStructures.map((struct: any) => (
                <motion.div
                  key={struct.name}
                  layout
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  whileHover={{ y: -5 }}
                  className="bg-white p-6 rounded-2xl border border-outline shadow-sm hover:shadow-md transition-all group relative overflow-hidden"
                >
                  <div className="absolute top-0 left-0 w-1 h-full bg-primary opacity-0 group-hover:opacity-100 transition-opacity" />
                  <div className="flex justify-between items-start mb-3">
                    <h3 className="text-xl font-bold text-primary group-hover:text-secondary transition-colors">
                      {struct.name}
                    </h3>
                    <span className="text-[10px] uppercase tracking-widest font-black px-2 py-1 bg-slate-100 rounded text-text-muted">
                      {struct.type}
                    </span>
                  </div>
                  <p className="text-text-muted text-sm mb-4">
                    {struct.desc}
                  </p>
                  <button 
                    onClick={() => {
                      console.log("Setting selected structure:", struct);
                      setSelectedStructure(struct);
                    }}
                    className="text-primary font-bold text-sm flex items-center gap-1 group-hover:translate-x-1 transition-transform relative z-10"
                  >
                    View Details <ArrowRight size={14} />
                  </button>
                </motion.div>
              ))
            ) : (
              <div className="col-span-full py-20 text-center">
                <div className="bg-slate-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6 text-text-muted">
                  <Search size={32} />
                </div>
                <h3 className="text-xl font-bold text-primary mb-2">No structures found</h3>
                <p className="text-text-muted">Try a different search term or check another region.</p>
              </div>
            )}
          </AnimatePresence>
        </div>

        {/* CTA Section */}
        <div className="mt-20 p-10 bg-secondary/10 rounded-[2rem] border border-secondary/20 flex flex-col md:flex-row items-center justify-between gap-8 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-secondary/10 rounded-full blur-3xl -mr-32 -mt-32" />
          <div className="relative z-10">
            <h3 className="text-2xl font-bold text-primary mb-2">Want to see more?</h3>
            <p className="text-text-muted">Check out our detailed anatomical diagrams for the {region.title}.</p>
          </div>
          <button 
            onClick={() => setShowDiagram(true)}
            className="relative z-10 bg-primary text-white px-8 py-4 rounded-xl font-bold hover:bg-primary-hover transition-all flex items-center gap-2 shadow-lg shadow-primary/30 shimmer"
          >
            <Layers size={20} /> View Diagrams
          </button>
        </div>
      </div>



      {/* Structure Detail Modal */}
      <AnimatePresence>
        {selectedStructure && (
          <div className="fixed inset-0 z-[1000] flex items-center justify-center p-4">
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedStructure(null)}
              className="absolute inset-0 bg-primary/90 backdrop-blur-md"
            />
            <motion.div
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: 50, opacity: 0 }}
              className="bg-white rounded-[2.5rem] overflow-hidden shadow-2xl w-full max-w-3xl relative z-[1010] flex flex-col md:flex-row"
            >
              <button 
                onClick={() => setSelectedStructure(null)}
                className="absolute top-6 right-6 w-12 h-12 bg-slate-100 hover:bg-slate-200 text-primary rounded-full flex items-center justify-center transition-colors z-[1020] shadow-sm"
              >
                <X size={24} />
              </button>
              <div className="md:w-5/12 h-64 md:h-auto relative bg-slate-100">
                <img 
                  src={selectedStructure.image} 
                  alt={selectedStructure.name}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent md:hidden" />
              </div>
              <div className="p-10 md:w-7/12 flex flex-col justify-between">
                <div>
                  <div className="flex items-center gap-2 mb-4">
                    <span className="text-[10px] uppercase tracking-widest font-black px-3 py-1 bg-primary/10 text-primary rounded-full">
                      {selectedStructure.type}
                    </span>
                    <span className="text-[10px] uppercase tracking-widest font-black px-3 py-1 bg-secondary/10 text-secondary rounded-full">
                      HD Quality
                    </span>
                  </div>
                  <h3 className="text-4xl font-black text-primary mb-6">{selectedStructure.name}</h3>
                  <div className="space-y-4 mb-8">
                    <p className="text-text-muted leading-relaxed text-lg">
                      {selectedStructure.detail}
                    </p>
                    <div className="flex items-start gap-3 p-4 bg-slate-50 rounded-2xl border border-outline">
                      <Info size={20} className="text-primary mt-1" />
                      <p className="text-sm text-text-muted italic">
                        Note: Understanding the spatial relationship of the {selectedStructure.name} is crucial for clinical applications.
                      </p>
                    </div>
                  </div>
                </div>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                   <button 
                    onClick={() => {
                      setShowDiagram(true);
                    }}
                    className="py-4 bg-primary text-white rounded-xl font-bold flex items-center justify-center gap-2 hover:bg-primary-hover transition-all shadow-lg shadow-primary/20"
                   >
                      <Layers size={18} /> View Diagram
                   </button>
                   {selectedStructure.videoId ? (
                     <button 
                      onClick={() => {
                        setShowVideo(true);
                      }}
                      className="py-4 bg-secondary text-white rounded-xl font-bold flex items-center justify-center gap-2 hover:bg-secondary-hover transition-all shadow-lg shadow-secondary/20"
                     >
                        <Play size={18} fill="currentColor" /> Watch Video
                     </button>
                   ) : (
                     <Link to="/articles" className="py-4 border-2 border-outline text-primary rounded-xl font-bold flex items-center justify-center gap-2 hover:bg-slate-50 transition-all">
                        <BookOpen size={18} /> Read Study Guide
                     </Link>
                   )}
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      {/* Diagram Modal */}
      <AnimatePresence>
        {showDiagram && (
          <div className="fixed inset-0 z-[2000] flex items-center justify-center p-4">
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => {
                setShowDiagram(false);
              }}
              className="absolute inset-0 bg-primary/95 backdrop-blur-md"
            />
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="bg-white rounded-[2rem] overflow-hidden shadow-2xl w-full max-w-4xl relative z-[2010]"
            >
              <button 
                onClick={() => {
                  setShowDiagram(false);
                }}
                className="absolute top-6 right-6 w-12 h-12 bg-white/20 hover:bg-white/40 text-white rounded-full flex items-center justify-center backdrop-blur-md transition-colors z-[2020]"
              >
                <X size={24} />
              </button>
              <div className="aspect-video w-full bg-slate-100 flex items-center justify-center overflow-hidden">
                <img 
                  src={selectedStructure?.diagramImage || region.tutorialImage} 
                  alt={selectedStructure ? `${selectedStructure.name} Diagram` : `${region.title} Diagram`}
                  className="w-full h-full object-contain"
                />
              </div>
              <div className="p-8">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 bg-secondary/20 text-secondary rounded-full flex items-center justify-center">
                    <Layers size={20} />
                  </div>
                  <h3 className="text-2xl font-black text-primary">
                    {selectedStructure ? `Detailed Structure: ${selectedStructure.name}` : `Regional Overview: ${region.title}`}
                  </h3>
                </div>
                <p className="text-text-muted leading-relaxed">
                  {selectedStructure 
                    ? `Detailed anatomical diagram of the ${selectedStructure.name}. This visual guide highlights the specific landmarks and characteristics of this structure.`
                    : `Comprehensive anatomical overview of the ${region.title} region. Use this diagram to understand the spatial orientation of major organs and tissues.`
                  }
                </p>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      {/* Video Tutorial Modal */}
      <AnimatePresence>
        {showVideo && (
          <div className="fixed inset-0 z-[3000] flex items-center justify-center p-4">
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setShowVideo(false)}
              className="absolute inset-0 bg-primary/95 backdrop-blur-xl"
            />
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="bg-white rounded-[2.5rem] overflow-hidden shadow-2xl w-full max-w-5xl relative z-[3010]"
            >
              <button 
                onClick={() => setShowVideo(false)}
                className="absolute top-6 right-6 w-12 h-12 bg-white/20 hover:bg-white/40 text-white rounded-full flex items-center justify-center backdrop-blur-md transition-colors z-[3020]"
              >
                <X size={24} />
              </button>
              <div className="aspect-video w-full bg-black">
                <iframe
                  width="100%"
                  height="100%"
                  src={`https://www.youtube.com/embed/${selectedStructure?.videoId || region.tutorialVideo}?autoplay=1`}
                  title={`${selectedStructure?.name || region.title} Tutorial`}
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              </div>
              <div className="p-8">
                <div className="flex items-center gap-3 mb-2">
                  <span className="text-[10px] font-black uppercase tracking-widest px-3 py-1 bg-secondary text-white rounded-full">
                    Video Tutorial
                  </span>
                  <span className="text-text-muted text-sm font-medium">Expert Lesson</span>
                </div>
                <h3 className="text-2xl font-black text-primary mb-2">Mastering {selectedStructure?.name || region.title}</h3>
                <p className="text-text-muted">A comprehensive video walkthrough of the {selectedStructure?.name || region.title} anatomy, highlighting key structures and clinical correlations.</p>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default AtlasRegion;

