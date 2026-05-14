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
    duration: '12:45',
    thumbnail: 'https://images.unsplash.com/photo-1559757148-5c350d0d3c56?auto=format&fit=crop&q=80&w=1200',
    youtubeId: '3g6w9JjS7F0',
    description: 'Learn the basic divisions of the nervous system, including the CNS and PNS, and the function of neurons and glia.',
    instructor: 'Ninja Nerd'
  },
  {
    id: '2',
    title: 'Structures and Layers of the Heart',
    category: 'Cardiovascular',
    duration: '15:20',
    thumbnail: 'https://images.unsplash.com/photo-1628595351029-c2bf17511435?auto=format&fit=crop&q=80&w=1200',
    youtubeId: '8_V5c9u-t8c',
    description: 'A detailed walkthrough of the four chambers of the heart and the critical valves that regulate blood flow.',
    instructor: 'Ninja Nerd'
  },
  {
    id: '3',
    title: 'Muscle Structure and Function',
    category: 'Muscular',
    duration: '18:30',
    thumbnail: 'https://images.unsplash.com/photo-1590105577767-e21a1067899f?auto=format&fit=crop&q=80&w=1200',
    youtubeId: 'gE7a1Tz1y6g',
    description: 'Master the major muscle groups of the human body, including their microscopic structure and contraction mechanics.',
    instructor: 'Ninja Nerd'
  },
  {
    id: '4',
    title: 'Anatomy of the Lungs and Pleura',
    category: 'Respiratory',
    duration: '11:55',
    thumbnail: 'https://images.unsplash.com/photo-1576086213369-97a306d36557?auto=format&fit=crop&q=80&w=1200',
    youtubeId: 'hog2PeS3K5k',
    description: 'Explore the mechanics of ventilation and how oxygen and carbon dioxide are exchanged in the alveoli.',
    instructor: 'Ninja Nerd'
  },
  {
    id: '5',
    title: 'Gastric Secretion and Digestion',
    category: 'Digestive',
    duration: '14:10',
    thumbnail: 'https://images.unsplash.com/photo-1530026405186-ed1f139313f8?auto=format&fit=crop&q=80&w=1200',
    youtubeId: 'fR0QW-N0o-o',
    description: 'Trace the path of food through the alimentary canal and learn about the accessory organs of digestion.',
    instructor: 'Ninja Nerd'
  },
  {
    id: '6',
    title: 'Central Nervous System Overview',
    category: 'Nervous',
    duration: '22:15',
    thumbnail: 'https://images.unsplash.com/photo-1559757148-5c350d0d3c56?auto=format&fit=crop&q=80&w=1200',
    youtubeId: 'h1n5U36jNto',
    description: 'A comprehensive look at the brain and spinal cord structures.',
    instructor: 'Ninja Nerd'
  },
  {
    id: '7',
    title: 'Sympathetic Nervous System',
    category: 'Nervous',
    duration: '19:40',
    thumbnail: 'https://images.unsplash.com/photo-1559757148-5c350d0d3c56?auto=format&fit=crop&q=80&w=1200',
    youtubeId: 'K5VvG3Zc400',
    description: 'Understanding the fight-or-flight response and the autonomic nervous system.',
    instructor: 'Ninja Nerd'
  },
  {
    id: '8',
    title: 'Anatomy of the Heart and Coronary Circulation',
    category: 'Cardiovascular',
    duration: '25:10',
    thumbnail: 'https://images.unsplash.com/photo-1628595351029-c2bf17511435?auto=format&fit=crop&q=80&w=1200',
    youtubeId: 'r2Gj17Vw1_c',
    description: 'Deep dive into the blood supply of the heart muscle.',
    instructor: 'Ninja Nerd'
  },
  {
    id: '9',
    title: 'Muscles of the Upper Limb',
    category: 'Muscular',
    duration: '32:20',
    thumbnail: 'https://images.unsplash.com/photo-1590105577767-e21a1067899f?auto=format&fit=crop&q=80&w=1200',
    youtubeId: 's2g7rX-n9qQ',
    description: 'Detailed anatomy of the shoulder, arm, and forearm muscles.',
    instructor: 'Ninja Nerd'
  },
  {
    id: '10',
    title: 'Muscles of the Lower Limb',
    category: 'Muscular',
    duration: '28:15',
    thumbnail: 'https://images.unsplash.com/photo-1434494878577-86c23bcb06b9?auto=format&fit=crop&q=80&w=1200',
    youtubeId: 't7a7-X6n3gQ',
    description: 'Detailed anatomy of the hip, thigh, and leg muscles.',
    instructor: 'Ninja Nerd'
  },
  {
    id: '11',
    title: 'Mechanics of Breathing: Pressure Changes',
    category: 'Respiratory',
    duration: '15:45',
    thumbnail: 'https://images.unsplash.com/photo-1576086213369-97a306d36557?auto=format&fit=crop&q=80&w=1200',
    youtubeId: '7N6x5k3z9_U',
    description: 'Understanding Boyle\'s law and its application in human respiration.',
    instructor: 'Ninja Nerd'
  },
  {
    id: '12',
    title: 'Digestion & Absorption of Proteins',
    category: 'Digestive',
    duration: '18:20',
    thumbnail: 'https://images.unsplash.com/photo-1530026405186-ed1f139313f8?auto=format&fit=crop&q=80&w=1200',
    youtubeId: 'u7_i4pA-v_E',
    description: 'How the body breaks down proteins and absorbs amino acids.',
    instructor: 'Ninja Nerd'
  },
  {
    id: '13',
    title: 'Anatomy of the Eye',
    category: 'Nervous',
    duration: '22:30',
    thumbnail: 'https://images.unsplash.com/photo-1559757175-5700dde675bc?auto=format&fit=crop&q=80&w=1200',
    youtubeId: '3Z5y1mX9vL0',
    description: 'Explore the internal and external structures of the eye, including the retina, lens, and extraocular muscles.',
    instructor: 'Ninja Nerd'
  },
  {
    id: '14',
    title: 'Anatomy of the Kidney',
    category: 'Urinary',
    duration: '24:45',
    thumbnail: 'https://images.unsplash.com/photo-1530026405186-ed1f139313f8?auto=format&fit=crop&q=80&w=1200',
    youtubeId: 'G7p3W8bQ4kE',
    description: 'Understand the gross anatomy of the kidney, including the cortex, medulla, and nephron distribution.',
    instructor: 'Ninja Nerd'
  },
  {
    id: '15',
    title: 'Cranial Nerves Overview',
    category: 'Nervous',
    duration: '35:10',
    thumbnail: 'https://images.unsplash.com/photo-1559757148-5c350d0d3c56?auto=format&fit=crop&q=80&w=1200',
    youtubeId: '3_H-cR1_7zI',
    description: 'Complete overview of the 12 cranial nerves, their origins, and functions.',
    instructor: 'Ninja Nerd'
  },
  {
    id: '16',
    title: 'Skeletal System Anatomy',
    category: 'Skeletal',
    duration: '28:30',
    thumbnail: 'https://images.unsplash.com/photo-1582719188393-bb71ca45dbb9?auto=format&fit=crop&q=80&w=1200',
    youtubeId: 'wZ3wR-t2aV0',
    description: 'Introduction to bone tissue, types of bones, and the overall skeletal structure.',
    instructor: 'Ninja Nerd'
  },
  {
    id: '17',
    title: 'Endocrine System Overview',
    category: 'Endocrine',
    duration: '21:45',
    thumbnail: 'https://images.unsplash.com/photo-1530026405186-ed1f139313f8?auto=format&fit=crop&q=80&w=1200',
    youtubeId: '4R2m6S285aE',
    description: 'Master the major glands of the endocrine system and the hormones they produce.',
    instructor: 'Ninja Nerd'
  },
  {
    id: '18',
    title: 'Male Reproductive System',
    category: 'Reproductive',
    duration: '25:20',
    thumbnail: 'https://images.unsplash.com/photo-1530026405186-ed1f139313f8?auto=format&fit=crop&q=80&w=1200',
    youtubeId: 'rC5yL-XyQ1I',
    description: 'Detailed anatomy of the male reproductive system structures and functions.',
    instructor: 'Ninja Nerd'
  },
  {
    id: '19',
    title: 'Female Reproductive System',
    category: 'Reproductive',
    duration: '29:15',
    thumbnail: 'https://images.unsplash.com/photo-1530026405186-ed1f139313f8?auto=format&fit=crop&q=80&w=1200',
    youtubeId: '4Qn4Z4aE1_M',
    description: 'Detailed anatomy of the female reproductive system including the uterus, ovaries, and fallopian tubes.',
    instructor: 'Ninja Nerd'
  },
  {
    id: '20',
    title: 'Blood Pressure Regulation',
    category: 'Cardiovascular',
    duration: '18:40',
    thumbnail: 'https://images.unsplash.com/photo-1628595351029-c2bf17511435?auto=format&fit=crop&q=80&w=1200',
    youtubeId: '1Qn5k4_GvY0',
    description: 'How the body regulates blood pressure through neural and hormonal mechanisms.',
    instructor: 'Ninja Nerd'
  }
];
