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
      <p>The adult human skeleton consists of 206 bones, though this number varies slightly among individuals. It provides a structural framework for the body, protects internal organs, and allows for movement through its interaction with the muscular system. The skeletal system is divided into two main parts: the axial skeleton and the appendicular skeleton.</p>
      
      <h3>The Axial Skeleton</h3>
      <p>The axial skeleton forms the central axis of the body and consists of 80 bones. It includes the skull, the vertebral column, the ribs, and the sternum. The primary function of the axial skeleton is the protection of the central nervous system (brain and spinal cord) and the organs in the thoracic cavity.</p>
      <ul>
        <li><strong>Skull:</strong> Composed of 22 bones, it protects the brain and supports the structures of the face.</li>
        <li><strong>Vertebral Column:</strong> A series of 33 vertebrae (cervical, thoracic, lumbar, sacral, and coccygeal) that supports the torso and protects the spinal cord.</li>
        <li><strong>Thoracic Cage:</strong> Consists of 12 pairs of ribs and the sternum, protecting the heart and lungs.</li>
      </ul>

      <h3>The Appendicular Skeleton</h3>
      <p>The appendicular skeleton consists of 126 bones and includes the upper and lower limbs, as well as the pectoral (shoulder) and pelvic girdles. This part of the skeleton is primarily involved in locomotion and manipulation of the environment.</p>

      <h3>Functions of the Skeletal System</h3>
      <ul>
        <li><strong>Support:</strong> Provides a structural framework for the entire body and keeps it upright.</li>
        <li><strong>Protection:</strong> Shields vital internal organs. For example, the rib cage protects the heart and lungs, while the pelvis protects the bladder and reproductive organs.</li>
        <li><strong>Movement:</strong> Bones act as levers. When muscles contract, they pull on bones to create movement at the joints.</li>
        <li><strong>Mineral Storage:</strong> The skeleton acts as a reservoir for minerals, particularly calcium and phosphorus, which are essential for many physiological processes.</li>
        <li><strong>Blood Cell Production:</strong> Most blood cells (red, white, and platelets) are produced within the red bone marrow of certain bones, such as the pelvis, ribs, and sternum.</li>
        <li><strong>Endocrine Regulation:</strong> Bone cells release a hormone called osteocalcin, which helps regulate blood sugar and fat deposition.</li>
      </ul>

      <h3>Classification of Bones</h3>
      <p>Bones are classified into five categories based on their shape:</p>
      <ol>
        <li><strong>Long Bones:</strong> Cylinder-like shape, longer than it is wide (e.g., femur, humerus).</li>
        <li><strong>Short Bones:</strong> Cube-like shape, approximately equal in length, width, and thickness (e.g., carpals, tarsals).</li>
        <li><strong>Flat Bones:</strong> Thin and curved, providing protection and large areas for muscle attachment (e.g., sternum, ribs).</li>
        <li><strong>Irregular Bones:</strong> Complex shapes that don't fit into other categories (e.g., vertebrae, facial bones).</li>
        <li><strong>Sesamoid Bones:</strong> Small, round bones that develop in tendons where there is a lot of pressure (e.g., patella).</li>
      </ol>

      <h3>Microscopic Structure of Bone</h3>
      <p>Bone tissue (osseous tissue) is a dense connective tissue. It consists of cells (osteoblasts, osteoclasts, and osteocytes) and a mineralized extracellular matrix. The matrix contains collagen fibers for flexibility and hydroxyapatite (calcium phosphate) for hardness. There are two types of bone tissue: compact bone and spongy (cancellous) bone.</p>
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
      <p>The heart is a hollow, muscular organ about the size of a fist, located in the mediastinum of the thoracic cavity. It functions as a dual pump, circulating blood through two distinct circuits: the pulmonary circuit (to the lungs) and the systemic circuit (to the rest of the body). During an average lifetime, the heart will beat over 2.5 billion times.</p>
      
      <h3>The Four Chambers</h3>
      <p>The heart is divided into four chambers: two upper atria and two lower ventricles. The septa (interatrial and interventricular) separate the right and left sides of the heart.</p>
      <ul>
        <li><strong>Right Atrium:</strong> Receives deoxygenated blood from the body via the superior and inferior vena cava.</li>
        <li><strong>Right Ventricle:</strong> Receives blood from the right atrium and pumps it to the lungs through the pulmonary trunk.</li>
        <li><strong>Left Atrium:</strong> Receives oxygenated blood from the lungs via the pulmonary veins.</li>
        <li><strong>Left Ventricle:</strong> The thickest chamber, it receives blood from the left atrium and pumps it to the entire body via the aorta.</li>
      </ul>

      <h3>The Cardiac Valves</h3>
      <p>Valves ensure one-way blood flow through the heart. There are two types: atrioventricular (AV) valves and semilunar valves.</p>
      <ul>
        <li><strong>Tricuspid Valve:</strong> Between the right atrium and right ventricle.</li>
        <li><strong>Mitral (Bicuspid) Valve:</strong> Between the left atrium and left ventricle.</li>
        <li><strong>Pulmonary Valve:</strong> Between the right ventricle and pulmonary artery.</li>
        <li><strong>Aortic Valve:</strong> Between the left ventricle and aorta.</li>
      </ul>

      <h3>Pathway of Blood Flow</h3>
      <ol>
        <li>Deoxygenated blood enters the <strong>Right Atrium</strong>.</li>
        <li>Passes through the <strong>Tricuspid Valve</strong> into the <strong>Right Ventricle</strong>.</li>
        <li>Pumped through the <strong>Pulmonary Valve</strong> to the <strong>Lungs</strong>.</li>
        <li>Oxygenated blood returns to the <strong>Left Atrium</strong>.</li>
        <li>Passes through the <strong>Mitral Valve</strong> into the <strong>Left Ventricle</strong>.</li>
        <li>Pumped through the <strong>Aortic Valve</strong> into the <strong>Aorta</strong> and the body.</li>
      </ol>

      <h3>The Conduction System</h3>
      <p>The heart generates its own electrical impulses. The Sinoatrial (SA) node, known as the natural pacemaker, initiates the signal. The impulse travels through the Atrioventricular (AV) node, the Bundle of His, and finally through the Purkinje fibers to cause coordinated contraction of the ventricles.</p>
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
      <h2>The 12 Pairs of Cranial Nerves</h2>
      <p>The cranial nerves (CN) are a set of 12 paired nerves that arise directly from the brain and brainstem. Unlike spinal nerves, they emerge from the cranium. They are numbered using Roman numerals (I-XII) and are named based on their function or structure.</p>
      
      <h3>Classification by Function</h3>
      <p>Cranial nerves can be purely sensory, purely motor, or mixed (containing both sensory and motor fibers).</p>
      
      <h3>Detailed Breakdown</h3>
      <ol>
        <li><strong>CN I: Olfactory Nerve (Sensory):</strong> Responsible for the sense of smell.</li>
        <li><strong>CN II: Optic Nerve (Sensory):</strong> Transmits visual information from the retina to the brain.</li>
        <li><strong>CN III: Oculomotor Nerve (Motor):</strong> Controls most eye movements, eyelid elevation, and pupillary constriction.</li>
        <li><strong>CN IV: Trochlear Nerve (Motor):</strong> Controls the superior oblique muscle of the eye (downward and inward movement).</li>
        <li><strong>CN V: Trigeminal Nerve (Mixed):</strong> The largest cranial nerve. It provides facial sensation and controls the muscles of mastication (chewing). It has three branches: Ophthalmic (V1), Maxillary (V2), and Mandibular (V3).</li>
        <li><strong>CN VI: Abducens Nerve (Motor):</strong> Controls the lateral rectus muscle (abduction of the eye).</li>
        <li><strong>CN VII: Facial Nerve (Mixed):</strong> Controls muscles of facial expression, provides taste sensation to the anterior 2/3 of the tongue, and stimulates salivary glands.</li>
        <li><strong>CN VIII: Vestibulocochlear Nerve (Sensory):</strong> Responsible for hearing and balance (equilibrium).</li>
        <li><strong>CN IX: Glossopharyngeal Nerve (Mixed):</strong> Controls swallowing, provides taste to the posterior 1/3 of the tongue, and monitors blood pressure via the carotid sinus.</li>
        <li><strong>CN X: Vagus Nerve (Mixed):</strong> The "wanderer." It has the most extensive distribution, providing parasympathetic control to the heart, lungs, and digestive tract.</li>
        <li><strong>CN XI: Accessory Nerve (Motor):</strong> Controls the sternocleidomastoid and trapezius muscles (shrugging shoulders and turning head).</li>
        <li><strong>CN XII: Hypoglossal Nerve (Motor):</strong> Controls the muscles of the tongue for speech and swallowing.</li>
      </ol>

      <h3>Clinical Significance</h3>
      <p>Assessing cranial nerve function is a fundamental part of the neurological exam. For example, testing the pupillary light reflex assesses CN II and CN III, while asking a patient to stick out their tongue tests CN XII.</p>
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
