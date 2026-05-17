export interface VideoLesson {
  id: string;
  title: string;
  category: string;
  duration: string;
  thumbnail: string;
  youtubeId: string;
  description: string;
  instructor: string;
}

export const videoLessons: VideoLesson[] = [
  {
    id: '1',
    title: 'Neuron Anatomy & Function',
    category: 'Nervous',
    duration: '23:30',
    thumbnail: 'https://i.ytimg.com/vi/qOmmqu6_g3s/hqdefault.jpg',
    youtubeId: 'qOmmqu6_g3s',
    description: 'Learn the basic anatomy of a neuron, including the dendrites, axon, and myelin sheath, and how electrical signals are transmitted.',
    instructor: 'Ninja Nerd'
  },
  {
    id: '2',
    title: 'Heart Anatomy | Structures & Chambers',
    category: 'Cardiovascular',
    duration: '39:14',
    thumbnail: 'https://i.ytimg.com/vi/dgAbpwp9gF8/hqdefault.jpg',
    youtubeId: 'dgAbpwp9gF8',
    description: 'A detailed walkthrough of the four chambers of the heart, the valves, and the coronary vessels that supply the heart muscle.',
    instructor: 'Ninja Nerd'
  },
  {
    id: '3',
    title: 'Skeletal Muscle Anatomy',
    category: 'Muscular',
    duration: '28:45',
    thumbnail: 'https://i.ytimg.com/vi/UKgbfxPTn_s/hqdefault.jpg',
    youtubeId: 'UKgbfxPTn_s',
    description: 'Explore the microscopic structure of skeletal muscle, from the epimysium down to the sarcomere, and understand how contraction occurs.',
    instructor: 'Ninja Nerd'
  },
  {
    id: '4',
    title: 'Lungs | Anatomy & Physiology',
    category: 'Respiratory',
    duration: '24:18',
    thumbnail: 'https://i.ytimg.com/vi/uYm4l_alVV0/hqdefault.jpg',
    youtubeId: 'uYm4l_alVV0',
    description: 'Explore the gross and microscopic anatomy of the lungs, including the bronchial tree, alveoli, and pleura.',
    instructor: 'Ninja Nerd'
  },
  {
    id: '5',
    title: 'Gastrointestinal Anatomy Overview',
    category: 'Digestive',
    duration: '32:10',
    thumbnail: 'https://i.ytimg.com/vi/4it-uI9e_I8/hqdefault.jpg',
    youtubeId: '4it-uI9e_I8',
    description: 'Trace the entire path of the gastrointestinal tract from the mouth to the anus, with detail on each organ\'s role in digestion.',
    instructor: 'Ninja Nerd'
  },
  {
    id: '6',
    title: 'Central Nervous System | Brain Anatomy',
    category: 'Nervous',
    duration: '45:22',
    thumbnail: 'https://i.ytimg.com/vi/ADAOsuaOSCk/hqdefault.jpg',
    youtubeId: 'ADAOsuaOSCk',
    description: 'A comprehensive look at the brain and spinal cord structures, including the cerebrum, cerebellum, and brainstem.',
    instructor: 'Ninja Nerd'
  },
  {
    id: '7',
    title: 'Autonomic Nervous System',
    category: 'Nervous',
    duration: '33:40',
    thumbnail: 'https://i.ytimg.com/vi/KEWUjSyvE-s/hqdefault.jpg',
    youtubeId: 'KEWUjSyvE-s',
    description: 'Understanding the sympathetic and parasympathetic divisions of the autonomic nervous system and how they regulate body functions.',
    instructor: 'The Noted Anatomist'
  },
  {
    id: '8',
    title: 'Electrocardiogram (ECG/EKG) Basics',
    category: 'Cardiovascular',
    duration: '41:10',
    thumbnail: 'https://i.ytimg.com/vi/CNN30YHsJw0/hqdefault.jpg',
    youtubeId: 'CNN30YHsJw0',
    description: 'Learn how to read an ECG, understand the cardiac conduction system, and identify key waveforms like the P wave, QRS complex, and T wave.',
    instructor: 'Ninja Nerd'
  },
  {
    id: '9',
    title: 'Brachial Plexus Anatomy',
    category: 'Nervous',
    duration: '38:20',
    thumbnail: 'https://i.ytimg.com/vi/RLJ8aUw468M/hqdefault.jpg',
    youtubeId: 'RLJ8aUw468M',
    description: 'Detailed anatomy of the brachial plexus — roots, trunks, divisions, cords, and the five terminal branches.',
    instructor: 'The Noted Anatomist'
  },
  {
    id: '10',
    title: 'Kidney Anatomy & Physiology',
    category: 'Urinary',
    duration: '29:15',
    thumbnail: 'https://i.ytimg.com/vi/JVOycQzgHN0/hqdefault.jpg',
    youtubeId: 'JVOycQzgHN0',
    description: 'Understand the gross anatomy of the kidney, the nephron structure, and the basics of filtration, reabsorption, and secretion.',
    instructor: 'The Noted Anatomist'
  },
  {
    id: '11',
    title: 'Ventilation & Mechanics of Breathing',
    category: 'Respiratory',
    duration: '22:05',
    thumbnail: 'https://i.ytimg.com/vi/cjxhpaBbIy8/hqdefault.jpg',
    youtubeId: 'cjxhpaBbIy8',
    description: 'Understanding Boyle\'s Law and its application in inspiration and expiration, including the role of the diaphragm and intercostals.',
    instructor: 'The Noted Anatomist'
  },
  {
    id: '12',
    title: 'Liver Anatomy & Function',
    category: 'Digestive',
    duration: '27:30',
    thumbnail: 'https://i.ytimg.com/vi/svkPGF0SbPA/hqdefault.jpg',
    youtubeId: 'svkPGF0SbPA',
    description: 'A deep dive into the anatomy of the liver, including Couinaud\'s 8 surgical segments, the portal triad, and the dual blood supply.',
    instructor: 'The Noted Anatomist'
  },
  {
    id: '13',
    title: 'Eye Anatomy & Visual Pathway',
    category: 'Nervous',
    duration: '35:50',
    thumbnail: 'https://i.ytimg.com/vi/BVENPmTQYt8/hqdefault.jpg',
    youtubeId: 'BVENPmTQYt8',
    description: 'Explore the internal and external structures of the eye, including the retina, lens, aqueous humor, and how visual signals reach the brain.',
    instructor: 'The Noted Anatomist'
  },
  {
    id: '14',
    title: 'Cranial Nerves Overview',
    category: 'Nervous',
    duration: '51:10',
    thumbnail: 'https://i.ytimg.com/vi/gpIDVyM8V4U/hqdefault.jpg',
    youtubeId: 'gpIDVyM8V4U',
    description: 'Complete overview of the 12 cranial nerves, their origins from the brainstem, and their clinical testing methods.',
    instructor: 'Ninja Nerd'
  },
  {
    id: '15',
    title: 'Skeletal System Overview',
    category: 'Skeletal',
    duration: '26:30',
    thumbnail: 'https://i.ytimg.com/vi/WmlbqVyhMts/hqdefault.jpg',
    youtubeId: 'WmlbqVyhMts',
    description: 'Introduction to bone tissue types, the axial vs. appendicular skeleton, and the key functions of the skeletal system.',
    instructor: 'Ninja Nerd'
  },
  {
    id: '16',
    title: 'Thyroid & Parathyroid Anatomy',
    category: 'Endocrine',
    duration: '19:45',
    thumbnail: 'https://i.ytimg.com/vi/5aq_rxTbtws/hqdefault.jpg',
    youtubeId: '5aq_rxTbtws',
    description: 'Anatomy and physiology of the thyroid and parathyroid glands, including the hormones they produce and their regulatory effects.',
    instructor: 'Ninja Nerd'
  },
  {
    id: '17',
    title: 'Blood Pressure Regulation',
    category: 'Cardiovascular',
    duration: '34:20',
    thumbnail: 'https://i.ytimg.com/vi/Yyz0E5CpCNQ/hqdefault.jpg',
    youtubeId: 'Yyz0E5CpCNQ',
    description: 'How the body regulates blood pressure through the baroreceptor reflex, RAAS system, and hormonal mechanisms.',
    instructor: 'Ninja Nerd'
  },
  {
    id: '18',
    title: 'Immune System Overview',
    category: 'Immune',
    duration: '43:15',
    thumbnail: 'https://i.ytimg.com/vi/qkIfYwnaYqc/hqdefault.jpg',
    youtubeId: 'qkIfYwnaYqc',
    description: 'An overview of innate vs. adaptive immunity, the roles of T cells and B cells, and how the body mounts a defense against pathogens.',
    instructor: 'Ninja Nerd'
  },
  {
    id: '19',
    title: 'Spinal Cord Anatomy',
    category: 'Nervous',
    duration: '36:25',
    thumbnail: 'https://i.ytimg.com/vi/6XtPzcXAqBc/hqdefault.jpg',
    youtubeId: '6XtPzcXAqBc',
    description: 'Detailed anatomy of the spinal cord including grey matter horns, white matter tracts, and the major ascending and descending pathways.',
    instructor: 'Ninja Nerd'
  },
  {
    id: '20',
    title: 'Muscles of the Back & Vertebral Column',
    category: 'Muscular',
    duration: '31:10',
    thumbnail: 'https://i.ytimg.com/vi/GgS5xdd4oSk/hqdefault.jpg',
    youtubeId: 'GgS5xdd4oSk',
    description: 'A thorough review of the erector spinae, deep intrinsic back muscles, and the ligaments of the vertebral column.',
    instructor: 'The Noted Anatomist'
  }
];
