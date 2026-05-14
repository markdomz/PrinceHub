import type { QuizData, Question } from '../types/quiz';

export const allQuestions: Question[] = [
  // --- SKELETAL SYSTEM ---
  {
    id: 's1',
    text: 'Which bone is known as the "collarbone"?',
    options: ['Scapula', 'Clavicle', 'Sternum', 'Humerus'],
    correctAnswer: 1,
    explanation: 'The clavicle is a long bone that serves as a strut between the shoulder blade and the sternum.',
    system: 'Skeletal',
    region: 'Upper Limb'
  },
  {
    id: 's2',
    text: 'The femur is located in which part of the body?',
    options: ['Arm', 'Leg', 'Torso', 'Head'],
    correctAnswer: 1,
    explanation: 'The femur is the thigh bone, the longest and strongest bone in the human body.',
    system: 'Skeletal',
    region: 'Lower Limb'
  },
  {
    id: 's3',
    text: 'How many vertebrae are in the lumbar spine?',
    options: ['7', '12', '5', '4'],
    correctAnswer: 2,
    explanation: 'The lumbar spine typically consists of 5 vertebrae (L1-L5).',
    system: 'Skeletal',
    region: 'Back'
  },
  {
    id: 's4',
    text: 'Which bone forms the forehead?',
    options: ['Occipital', 'Parietal', 'Frontal', 'Temporal'],
    correctAnswer: 2,
    explanation: 'The frontal bone forms the forehead and the upper part of the eye sockets.',
    system: 'Skeletal',
    region: 'Head & Neck'
  },
  {
    id: 's5',
    text: 'The "xiphoid process" is part of which bone?',
    options: ['Sternum', 'Pelvis', 'Scapula', 'Mandible'],
    correctAnswer: 0,
    explanation: 'The xiphoid process is the small cartilaginous process at the lower part of the sternum.',
    system: 'Skeletal',
    region: 'Thorax'
  },
  {
    id: 's6',
    text: 'Which bone is the only movable bone in the skull?',
    options: ['Maxilla', 'Zygomatic', 'Mandible', 'Ethmoid'],
    correctAnswer: 2,
    explanation: 'The mandible (lower jaw) is the only movable bone of the skull.',
    system: 'Skeletal',
    region: 'Head & Neck'
  },
  {
    id: 's7',
    text: 'The "atlas" is which cervical vertebra?',
    options: ['C1', 'C2', 'C7', 'T1'],
    correctAnswer: 0,
    explanation: 'C1 is the atlas; it supports the head and allows for nodding.',
    system: 'Skeletal',
    region: 'Back'
  },
  {
    id: 's8',
    text: 'Which bone is commonly known as the "shoulder blade"?',
    options: ['Clavicle', 'Scapula', 'Humerus', 'Sternum'],
    correctAnswer: 1,
    explanation: 'The scapula is the bone that connects the humerus with the clavicle.',
    system: 'Skeletal',
    region: 'Upper Limb'
  },
  {
    id: 's9',
    text: 'The "patella" is which type of bone?',
    options: ['Long bone', 'Flat bone', 'Sesamoid bone', 'Irregular bone'],
    correctAnswer: 2,
    explanation: 'The patella (kneecap) is the largest sesamoid bone in the body.',
    system: 'Skeletal',
    region: 'Lower Limb'
  },
  {
    id: 's10',
    text: 'How many ribs are in a typical human cage?',
    options: ['10 pairs', '12 pairs', '14 pairs', '24 pairs'],
    correctAnswer: 1,
    explanation: 'There are 12 pairs (24 total) ribs in the human body.',
    system: 'Skeletal',
    region: 'Thorax'
  },
  {
    id: 's11',
    text: 'Which bone is the "shin bone"?',
    options: ['Fibula', 'Tibia', 'Femur', 'Patella'],
    correctAnswer: 1,
    explanation: 'The tibia is the larger and stronger of the two bones in the leg below the knee.',
    system: 'Skeletal',
    region: 'Lower Limb'
  },
  {
    id: 's12',
    text: 'What is the largest bone in the human foot?',
    options: ['Talus', 'Calcaneus', 'Navicular', 'Cuboid'],
    correctAnswer: 1,
    explanation: 'The calcaneus, or heel bone, is the largest of the tarsal bones in the foot.',
    system: 'Skeletal',
    region: 'Lower Limb'
  },
  {
    id: 's13',
    text: 'The "acetabulum" is found in which part of the skeleton?',
    options: ['Skull', 'Shoulder', 'Hip', 'Ankle'],
    correctAnswer: 2,
    explanation: 'The acetabulum is the socket of the hip bone into which the head of the femur fits.',
    system: 'Skeletal',
    region: 'Pelvis'
  },
  {
    id: 's14',
    text: 'Which bone is located on the thumb side of the forearm?',
    options: ['Ulna', 'Radius', 'Humerus', 'Fibula'],
    correctAnswer: 1,
    explanation: 'The radius is the lateral bone of the forearm, located on the thumb side.',
    system: 'Skeletal',
    region: 'Upper Limb'
  },

  // --- MUSCULAR SYSTEM ---
  {
    id: 'm1',
    text: 'Which muscle is primarily responsible for flexing the elbow?',
    options: ['Triceps Brachii', 'Biceps Brachii', 'Deltoid', 'Trapezius'],
    correctAnswer: 1,
    explanation: 'The biceps brachii is a two-headed muscle that lies on the upper arm between the shoulder and the elbow.',
    system: 'Muscular',
    region: 'Upper Limb'
  },
  {
    id: 'm2',
    text: 'The "Sartorius" muscle is found in which region?',
    options: ['Back', 'Neck', 'Thigh', 'Chest'],
    correctAnswer: 2,
    explanation: 'The sartorius is the longest muscle in the human body, running down the length of the thigh.',
    system: 'Muscular',
    region: 'Lower Limb'
  },
  {
    id: 'm3',
    text: 'Which muscle group is located on the front of the thigh?',
    options: ['Hamstrings', 'Quadriceps', 'Adductors', 'Gastrocnemius'],
    correctAnswer: 1,
    explanation: 'The quadriceps femoris is a large muscle group that includes the four prevailing muscles on the front of the thigh.',
    system: 'Muscular',
    region: 'Lower Limb'
  },
  {
    id: 'm4',
    text: 'The "Orbicularis Oculi" muscle is located where?',
    options: ['Around the mouth', 'Around the eye', 'In the neck', 'In the palm'],
    correctAnswer: 1,
    explanation: 'The orbicularis oculi is a muscle in the face that closes the eyelids.',
    system: 'Muscular',
    region: 'Head & Neck'
  },
  {
    id: 'm5',
    text: 'Which muscle is the primary muscle of respiration?',
    options: ['External Intercostals', 'Internal Intercostals', 'Diaphragm', 'Rectus Abdominis'],
    correctAnswer: 2,
    explanation: 'The diaphragm is a dome-shaped, muscular and membranous partition that separates the thoracic and abdominal cavities.',
    system: 'Muscular',
    region: 'Thorax'
  },
  {
    id: 'm6',
    text: 'The "Gastrocnemius" is more commonly known as which muscle?',
    options: ['Thigh', 'Bicep', 'Calf', 'Forearm'],
    correctAnswer: 2,
    explanation: 'The gastrocnemius is the large muscle at the back of the lower leg (calf).',
    system: 'Muscular',
    region: 'Lower Limb'
  },
  {
    id: 'm7',
    text: 'Which muscle is responsible for "shrugging" the shoulders?',
    options: ['Deltoid', 'Pectoralis Major', 'Trapezius', 'Latissimus Dorsi'],
    correctAnswer: 2,
    explanation: 'The trapezius muscle is responsible for moving, rotating, and stabilizing the scapula and extending the head at the neck.',
    system: 'Muscular',
    region: 'Back'
  },
  {
    id: 'm8',
    text: 'Which muscle is known as the "widest muscle of the back"?',
    options: ['Trapezius', 'Latissimus Dorsi', 'Rhomboid Major', 'Erector Spinae'],
    correctAnswer: 1,
    explanation: 'The latissimus dorsi is the largest and widest muscle of the human back.',
    system: 'Muscular',
    region: 'Back'
  },
  {
    id: 'm9',
    text: 'What is the largest muscle in the human body?',
    options: ['Sartorius', 'Gluteus Maximus', 'Latissimus Dorsi', 'Rectus Femoris'],
    correctAnswer: 1,
    explanation: 'The gluteus maximus is the largest and heaviest muscle in the human body.',
    system: 'Muscular',
    region: 'Lower Limb'
  },
  {
    id: 'm10',
    text: 'Which muscle forms the rounded contour of the shoulder?',
    options: ['Pectoralis Major', 'Deltoid', 'Trapezius', 'Biceps'],
    correctAnswer: 1,
    explanation: 'The deltoid muscle is the muscle forming the rounded contour of the human shoulder.',
    system: 'Muscular',
    region: 'Upper Limb'
  },

  // --- NERVOUS SYSTEM ---
  {
    id: 'n1',
    text: 'Which cranial nerve is responsible for hearing and balance?',
    options: ['CN II', 'CN V', 'CN VIII', 'CN X'],
    correctAnswer: 2,
    explanation: 'The vestibulocochlear nerve (CN VIII) carries sensory information for both hearing and balance.',
    system: 'Nervous',
    region: 'Head & Neck'
  },
  {
    id: 'n2',
    text: 'The "Vagus Nerve" is which cranial nerve?',
    options: ['CN IX', 'CN X', 'CN XI', 'CN XII'],
    correctAnswer: 1,
    explanation: 'The vagus nerve is the tenth cranial nerve (CN X).',
    system: 'Nervous',
    region: 'Head & Neck'
  },
  {
    id: 'n3',
    text: 'Which part of the brain is responsible for coordinating movement and balance?',
    options: ['Cerebrum', 'Cerebellum', 'Thalamus', 'Medulla'],
    correctAnswer: 1,
    explanation: 'The cerebellum receives information from the sensory systems and regulates motor movements.',
    system: 'Nervous',
    region: 'Head & Neck'
  },
  {
    id: 'n4',
    text: 'The "Phrenic Nerve" innervates which muscle?',
    options: ['Heart', 'Diaphragm', 'Biceps', 'Hamstrings'],
    correctAnswer: 1,
    explanation: 'The phrenic nerve originates from C3-C5 and provides motor control to the diaphragm.',
    system: 'Nervous',
    region: 'Thorax'
  },
  {
    id: 'n5',
    text: 'Which lobe of the brain is primarily responsible for visual processing?',
    options: ['Frontal', 'Parietal', 'Temporal', 'Occipital'],
    correctAnswer: 3,
    explanation: 'The occipital lobe is the visual processing center of the mammalian brain.',
    system: 'Nervous',
    region: 'Head & Neck'
  },
  {
    id: 'n6',
    text: 'Which nerve is the longest and widest single nerve in the human body?',
    options: ['Femoral nerve', 'Sciatic nerve', 'Vagus nerve', 'Phrenic nerve'],
    correctAnswer: 1,
    explanation: 'The sciatic nerve is the largest single nerve in the body.',
    system: 'Nervous',
    region: 'Lower Limb'
  },

  // --- CARDIOVASCULAR SYSTEM ---
  {
    id: 'c1',
    text: 'Which chamber of the heart pumps oxygenated blood to the rest of the body?',
    options: ['Right Atrium', 'Right Ventricle', 'Left Atrium', 'Left Ventricle'],
    correctAnswer: 3,
    explanation: 'The left ventricle pumps oxygen-rich blood through the aortic valve into the aorta.',
    system: 'Cardiovascular',
    region: 'Thorax'
  },
  {
    id: 'c2',
    text: 'What is the largest artery in the human body?',
    options: ['Pulmonary Artery', 'Carotid Artery', 'Aorta', 'Femoral Artery'],
    correctAnswer: 2,
    explanation: 'The aorta is the main and largest artery in the human body.',
    system: 'Cardiovascular',
    region: 'Thorax'
  },
  {
    id: 'c3',
    text: 'Which blood vessels carry blood AWAY from the heart?',
    options: ['Veins', 'Arteries', 'Capillaries', 'Venules'],
    correctAnswer: 1,
    explanation: 'Arteries carry blood away from the heart, while veins carry blood toward the heart.',
    system: 'Cardiovascular',
    region: 'Thorax'
  },
  {
    id: 'c4',
    text: 'The "Mitral Valve" is located between which two chambers?',
    options: ['Right Atrium & Ventricle', 'Left Atrium & Ventricle', 'Right & Left Atria', 'Aorta & Left Ventricle'],
    correctAnswer: 1,
    explanation: 'The mitral valve (bicuspid valve) is located between the left atrium and left ventricle.',
    system: 'Cardiovascular',
    region: 'Thorax'
  },

  // --- DIGESTIVE SYSTEM ---
  {
    id: 'd1',
    text: 'Where does the majority of nutrient absorption occur?',
    options: ['Stomach', 'Small Intestine', 'Large Intestine', 'Esophagus'],
    correctAnswer: 1,
    explanation: 'Most chemical digestion and nutrient absorption take place in the small intestine.',
    system: 'Digestive',
    region: 'Abdomen'
  },
  {
    id: 'd2',
    text: 'Which organ produces bile?',
    options: ['Gallbladder', 'Pancreas', 'Liver', 'Spleen'],
    correctAnswer: 2,
    explanation: 'The liver produces bile, which is then stored in the gallbladder.',
    system: 'Digestive',
    region: 'Abdomen'
  },
  {
    id: 'd3',
    text: 'What is the longest part of the small intestine?',
    options: ['Duodenum', 'Jejunum', 'Ileum', 'Cecum'],
    correctAnswer: 2,
    explanation: 'The ileum is the final and longest segment of the small intestine.',
    system: 'Digestive',
    region: 'Abdomen'
  },

  // --- RESPIRATORY SYSTEM ---
  {
    id: 'r1',
    text: 'What is the medical term for the "windpipe"?',
    options: ['Larynx', 'Pharynx', 'Trachea', 'Esophagus'],
    correctAnswer: 2,
    explanation: 'The trachea is a cartilaginous tube that connects the larynx to the bronchi.',
    system: 'Respiratory',
    region: 'Thorax'
  },
  {
    id: 'r2',
    text: 'How many lobes does the RIGHT lung have?',
    options: ['1', '2', '3', '4'],
    correctAnswer: 2,
    explanation: 'The right lung has 3 lobes, while the left lung has 2 lobes (to accommodate the heart).',
    system: 'Respiratory',
    region: 'Thorax'
  },

  // --- URINARY SYSTEM ---
  {
    id: 'u1',
    text: 'What is the functional unit of the kidney?',
    options: ['Neuron', 'Nephron', 'Alveolus', 'Osteon'],
    correctAnswer: 1,
    explanation: 'The nephron is the microscopic structural and functional unit of the kidney.',
    system: 'Urinary',
    region: 'Abdomen'
  },
  {
    id: 'u2',
    text: 'Which tube carries urine from the kidney to the bladder?',
    options: ['Urethra', 'Ureter', 'Nephron', 'Vasa Recta'],
    correctAnswer: 1,
    explanation: 'The ureters are tubes made of smooth muscle fibers that propel urine from the kidneys to the urinary bladder.',
    system: 'Urinary',
    region: 'Abdomen'
  },

  // --- ENDOCRINE SYSTEM ---
  {
    id: 'e1',
    text: 'Which gland is often referred to as the "master gland"?',
    options: ['Thyroid', 'Adrenal', 'Pituitary', 'Pancreas'],
    correctAnswer: 2,
    explanation: 'The pituitary gland is called the master gland because it controls many other endocrine glands.',
    system: 'Endocrine',
    region: 'Head & Neck'
  },
  {
    id: 'e2',
    text: 'Which hormone is produced by the pancreas to lower blood sugar?',
    options: ['Glucagon', 'Insulin', 'Adrenaline', 'Thyroxine'],
    correctAnswer: 1,
    explanation: 'Insulin is produced by the beta cells of the pancreas and helps lower blood glucose levels.',
    system: 'Endocrine',
    region: 'Abdomen'
  },

  // --- CLINICAL ANATOMY ---
  {
    id: 'cl1',
    text: 'Inflammation of the appendix is known as:',
    options: ['Appendicitis', 'Arthritis', 'Bronchitis', 'Gastritis'],
    correctAnswer: 0,
    explanation: 'Appendicitis is inflammation of the appendix.',
    system: 'Digestive',
    region: 'Abdomen'
  },
  {
    id: 'cl2',
    text: 'Which condition is characterized by the weakening of the heart muscle?',
    options: ['Cardiomyopathy', 'Arthritis', 'Nephritis', 'Hepatitis'],
    correctAnswer: 0,
    explanation: 'Cardiomyopathy is a group of diseases that affect the heart muscle.',
    system: 'Cardiovascular',
    region: 'Thorax'
  },
  {
    id: 'cl3',
    text: 'A "stinger" or "burner" is an injury to which structure?',
    options: ['Lumbar plexus', 'Brachial plexus', 'Sciatic nerve', 'Optic nerve'],
    correctAnswer: 1,
    explanation: 'A stinger is a common injury in contact sports, caused by a stretch or compression of the brachial plexus.',
    system: 'Nervous',
    region: 'Head & Neck'
  },
  {
    id: 'cl4',
    text: 'A "Boxer\'s fracture" is a fracture of which bone?',
    options: ['Radius', 'Ulna', '5th Metacarpal', 'Clavicle'],
    correctAnswer: 2,
    explanation: 'A boxer\'s fracture is a break through the neck of the fifth metacarpal.',
    system: 'Skeletal',
    region: 'Upper Limb'
  }
];

export const quizzes: Record<string, QuizData> = {
  'basic-id': {
    id: 'basic-id',
    title: 'Basic Identification',
    description: 'Learn names and locations of structures. Perfect for beginners.',
    questions: allQuestions.filter(q => q.id.startsWith('s') || q.id.startsWith('m'))
  },
  'advanced-id': {
    id: 'advanced-id',
    title: 'Advanced Identification',
    description: 'Detailed structures including nerves, vessels, and attachments.',
    questions: allQuestions.filter(q => q.id.startsWith('n') || q.id.startsWith('c'))
  },
  'clinical': {
    id: 'clinical',
    title: 'Clinical Anatomy',
    description: 'Apply your knowledge to clinical scenarios and pathology.',
    questions: allQuestions.filter(q => q.id.includes('cl'))
  },
  'musculoskeletal': {
    id: 'musculoskeletal',
    title: 'Muscle Attachments',
    description: 'Learn origins, insertions, innervations and actions.',
    questions: allQuestions.filter(q => q.system === 'Muscular')
  },
  'skeletal-system': {
    id: 'skeletal-system',
    title: 'Skeletal System Quiz',
    description: 'Master all the bones and their features.',
    questions: allQuestions.filter(q => q.system === 'Skeletal')
  },
  'muscular-system': {
    id: 'muscular-system',
    title: 'Muscular System Quiz',
    description: 'Identify major muscles and their functions.',
    questions: allQuestions.filter(q => q.system === 'Muscular')
  },
  'nervous-system': {
    id: 'nervous-system',
    title: 'Nervous System Quiz',
    description: 'Understand the brain, spinal cord, and nerves.',
    questions: allQuestions.filter(q => q.system === 'Nervous')
  },
  'custom': {
    id: 'custom',
    title: 'Custom Quiz',
    description: 'Your personalized study session.',
    questions: []
  }
};


