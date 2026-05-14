export interface Article {
  id: number;
  title: string;
  category: string;
  region: string;
  readTime: string;
  excerpt: string;
  image: string;
  featured: boolean;
  date: string;
  author: string;
  content: string;
}

export const articles: Article[] = [
  { 
    id: 1, 
    title: 'The Complete Guide to the Skeletal System', 
    category: 'Skeletal', 
    region: 'Full Body',
    readTime: '8 min', 
    excerpt: 'Explore all 206 bones of the human body, their classification, structure, and vital functions in movement and protection.',
    image: 'https://images.unsplash.com/photo-1530497610245-94d3c16cda28?auto=format&fit=crop&q=80&w=1200',
    featured: true,
    date: 'May 12, 2026',
    author: 'Dr. Sarah Mitchell',
    content: `
      <h2>Introduction to the Human Skeleton</h2>
      <p>The adult human skeleton consists of 206 bones. It provides a structural framework for the body, protects internal organs, and allows for movement through its interaction with the muscular system.</p>
      
      <h3>Functions of the Skeletal System</h3>
      <ul>
        <li><strong>Support:</strong> Provides a structural framework for the entire body.</li>
        <li><strong>Protection:</strong> Shields vital internal organs (e.g., the skull protects the brain).</li>
        <li><strong>Movement:</strong> Bones act as levers for muscles to pull against.</li>
        <li><strong>Mineral Storage:</strong> Stores calcium and phosphorus.</li>
        <li><strong>Blood Cell Production:</strong> Occurs in the red bone marrow.</li>
      </ul>

      <h3>Classification of Bones</h3>
      <p>Bones are classified into five categories based on their shape: long bones, short bones, flat bones, irregular bones, and sesamoid bones.</p>
    `
  },
  { 
    id: 2, 
    title: 'Understanding the Brachial Plexus', 
    category: 'Nervous', 
    region: 'Upper Limb',
    readTime: '6 min', 
    excerpt: 'A deep dive into the network of nerves that sends signals from the spine to the shoulder, arm, and hand.',
    image: 'https://images.unsplash.com/photo-1559757148-5c350d0d3c56?auto=format&fit=crop&q=80&w=1200',
    featured: false,
    date: 'May 10, 2026',
    author: 'Dr. James Chen',
    content: `
      <h2>What is the Brachial Plexus?</h2>
      <p>The brachial plexus is a network of nerves formed by the anterior rami of the lower four cervical nerves and first thoracic nerve (C5, C6, C7, C8, and T1). This plexus supplies afferent and efferent nerve fibers to the chest, shoulder, arm, forearm, and hand.</p>
      
      <h3>Anatomy of the Plexus</h3>
      <p>The plexus is divided into roots, trunks, divisions, cords, and branches. Understanding this structure is critical for diagnosing peripheral nerve injuries.</p>
    `
  },
  { 
    id: 3, 
    title: 'Heart Anatomy: Chambers, Valves & Blood Flow', 
    category: 'Cardiovascular', 
    region: 'Thorax',
    readTime: '10 min', 
    excerpt: 'Master the four chambers, four valves, and the complete pathway of blood through the heart and pulmonary circuit.',
    image: 'https://images.unsplash.com/photo-1628595351029-c2bf17511435?auto=format&fit=crop&q=80&w=1200',
    featured: true,
    date: 'May 8, 2026',
    author: 'Dr. Elena Rodriguez',
    content: `
      <h2>The Engine of Life</h2>
      <p>The heart is a hollow, muscular organ about the size of a fist. It pumps blood through the circulatory system by rhythmic contraction and dilation.</p>
      
      <h3>The Four Chambers</h3>
      <p>The heart is divided into four chambers: two upper atria and two lower ventricles. The right side of the heart pumps deoxygenated blood to the lungs, while the left side pumps oxygenated blood to the rest of the body.</p>
    `
  },
  { 
    id: 4, 
    title: 'Rotator Cuff: Muscles, Tears & Clinical Anatomy', 
    category: 'Muscular', 
    region: 'Upper Limb',
    readTime: '7 min', 
    excerpt: 'Learn the four rotator cuff muscles (SITS), their attachments, and why they are prone to injury in athletes.',
    image: 'https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e?auto=format&fit=crop&q=80&w=1200',
    featured: false,
    date: 'May 5, 2026',
    author: 'Dr. Robert Wilson',
    content: `
      <h2>The SITS Muscles</h2>
      <p>The rotator cuff is a group of muscles and their tendons that act to stabilize the shoulder. The four muscles are: Supraspinatus, Infraspinatus, Teres minor, and Subscapularis.</p>
    `
  },
  { 
    id: 5, 
    title: 'The Lumbar Spine: Structure and Common Pathologies', 
    category: 'Skeletal', 
    region: 'Back',
    readTime: '9 min', 
    excerpt: 'Understand the anatomy of L1–L5 vertebrae, the intervertebral discs, and conditions like herniation and stenosis.',
    image: 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&q=80&w=1200',
    featured: false,
    date: 'May 3, 2026',
    author: 'Dr. Sarah Mitchell',
    content: `
      <h2>The Lumbar Region</h2>
      <p>The lumbar spine consists of five vertebrae in the lower back. It bears the weight of the body and is a common site for clinical issues.</p>
    `
  },
  { 
    id: 6, 
    title: 'Cranial Nerves: All 12 Explained', 
    category: 'Nervous', 
    region: 'Head & Neck',
    readTime: '12 min', 
    excerpt: 'A comprehensive breakdown of all 12 cranial nerves — their origins, pathways, and clinical testing methods.',
    image: 'https://images.unsplash.com/photo-1559757148-5c350d0d3c56?auto=format&fit=crop&q=80&w=1200',
    featured: false,
    date: 'May 1, 2026',
    author: 'Dr. James Chen',
    content: `
      <h2>12 Pairs of Cranial Nerves</h2>
      <p>The cranial nerves emerge directly from the brain and brainstem. They are critical for sensory and motor function in the head and neck.</p>
    `
  },
  { 
    id: 7, 
    title: 'Liver Anatomy & Surgical Segments', 
    category: 'Digestive', 
    region: 'Abdomen',
    readTime: '8 min', 
    excerpt: "Couinaud's 8 surgical segments of the liver explained with clinical significance for surgery and imaging.",
    image: 'https://images.unsplash.com/photo-1530026405186-ed1f139313f8?auto=format&fit=crop&q=80&w=1200',
    featured: false,
    date: 'April 28, 2026',
    author: 'Dr. Elena Rodriguez',
    content: `
      <h2>The Largest Gland</h2>
      <p>The liver is vital for metabolic functions and detoxification. Understanding its segmental anatomy is key for hepatic surgery.</p>
    `
  },
  { 
    id: 8, 
    title: 'The Femoral Triangle: Contents & Clinical Importance', 
    category: 'Muscular', 
    region: 'Lower Limb',
    readTime: '5 min', 
    excerpt: 'Explore the boundaries and contents of the femoral triangle — nerve, artery, vein, and lymphatics.',
    image: 'https://images.unsplash.com/photo-1434494878577-86c23bcb06b9?auto=format&fit=crop&q=80&w=1200',
    featured: false,
    date: 'April 25, 2026',
    author: 'Dr. Robert Wilson',
    content: `
      <h2>Boundaries and Contents</h2>
      <p>The femoral triangle is a subfascial space in the upper third of the thigh. It contains critical neurovascular structures.</p>
    `
  },
  { 
    id: 9, 
    title: 'Respiratory Mechanics: How We Breathe', 
    category: 'Respiratory', 
    region: 'Thorax',
    readTime: '6 min', 
    excerpt: 'From diaphragm contraction to alveolar gas exchange — the complete mechanics of inspiration and expiration.',
    image: 'https://images.unsplash.com/photo-1576086213369-97a306d36557?auto=format&fit=crop&q=80&w=1200',
    featured: false,
    date: 'April 22, 2026',
    author: 'Dr. Sarah Mitchell',
    content: `
      <h2>The Mechanics of Ventilation</h2>
      <p>Breathing involves pressure changes driven by muscle contraction, primarily the diaphragm and intercostal muscles.</p>
    `
  }
];
