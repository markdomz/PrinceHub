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
      <h2>Introduction to the Brachial Plexus</h2>
      <p>The brachial plexus is a complex network of nerves that provides the entire somatic motor and sensory innervation to the upper limb, with the exception of the trapezius muscle and a small area of skin near the axilla. It is formed by the union of the anterior rami of the C5 through T1 spinal nerves.</p>
      
      <h3>The "Five Stages" of the Plexus</h3>
      <p>Anatomically, the brachial plexus is divided into five distinct stages, which can be remembered using the mnemonic: <strong>"Read That Damn Book Buddy"</strong> (Roots, Trunks, Divisions, Cords, Branches).</p>
      
      <ul>
        <li><strong>Roots (5):</strong> The anterior rami of C5, C6, C7, C8, and T1. They enter the neck between the anterior and middle scalene muscles.</li>
        <li><strong>Trunks (3):</strong> 
          <ul>
            <li>Superior Trunk: Union of C5 and C6 roots.</li>
            <li>Middle Trunk: Continuation of the C7 root.</li>
            <li>Inferior Trunk: Union of C8 and T1 roots.</li>
          </ul>
        </li>
        <li><strong>Divisions (6):</strong> Each trunk divides into anterior and posterior divisions as it passes behind the clavicle. Anterior divisions typically supply flexor muscles, while posterior divisions supply extensor muscles.</li>
        <li><strong>Cords (3):</strong> Named based on their relationship to the axillary artery:
          <ul>
            <li>Lateral Cord: Formed by anterior divisions of Superior and Middle trunks.</li>
            <li>Medial Cord: Continuation of the anterior division of the Inferior trunk.</li>
            <li>Posterior Cord: Formed by the union of all three posterior divisions.</li>
          </ul>
        </li>
        <li><strong>Terminal Branches (5):</strong> The major nerves of the arm: Musculocutaneous, Axillary, Median, Radial, and Ulnar nerves.</li>
      </ul>

      <h3>Clinical Correlations: Plexus Injuries</h3>
      <p>Injuries to the brachial plexus can lead to significant functional loss. Two classic presentations include:</p>
      <ol>
        <li><strong>Erb's Palsy (Upper Plexus Injury):</strong> Damage to C5-C6 roots. Often results from a forced increase in the angle between the neck and shoulder. The arm hangs by the side in medial rotation (the "waiter's tip" position).</li>
        <li><strong>Klumpke's Palsy (Lower Plexus Injury):</strong> Damage to C8-T1. Usually occurs when the upper limb is suddenly pulled superiorly (e.g., grabbing a tree branch while falling). It results in a "claw hand" due to loss of the intrinsic hand muscles.</li>
      </ol>

      <h3>Key Muscles Innervated</h3>
      <p>Understanding which nerve supplies which muscle is vital for localization:</p>
      <ul>
        <li><strong>Musculocutaneous:</strong> Biceps brachii, Brachialis (Forearm flexion).</li>
        <li><strong>Radial:</strong> Triceps, Extensors of the wrist and fingers (The "great extensor nerve").</li>
        <li><strong>Median:</strong> Most forearm flexors, Thenar muscles (Precision grip).</li>
        <li><strong>Ulnar:</strong> Most intrinsic hand muscles (Power grip).</li>
        <li><strong>Axillary:</strong> Deltoid and Teres minor (Shoulder abduction).</li>
      </ul>
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
      <h2>Anatomy of the Rotator Cuff</h2>
      <p>The rotator cuff is a functional unit composed of four muscles and their tendons that wrap around the glenohumeral (shoulder) joint. Its primary purpose is to provide dynamic stability to the shoulder, which is the most mobile—and therefore most unstable—joint in the human body.</p>
      
      <h3>The "SITS" Muscles</h3>
      <p>The four muscles of the rotator cuff can be remembered by the acronym <strong>SITS</strong>:</p>
      <ul>
        <li><strong>Supraspinatus:</strong> Originates in the supraspinous fossa and attaches to the greater tubercle of the humerus. It initiates the first 15 degrees of shoulder abduction.</li>
        <li><strong>Infraspinatus:</strong> Originates in the infraspinous fossa and attaches to the greater tubercle. It is a powerful external rotator of the arm.</li>
        <li><strong>Teres Minor:</strong> A small muscle that also attaches to the greater tubercle. Like the infraspinatus, it assists in external rotation.</li>
        <li><strong>Subscapularis:</strong> The only member located on the anterior side of the scapula. It attaches to the lesser tubercle and is responsible for internal rotation.</li>
      </ul>

      <h3>Functional Importance</h3>
      <p>While each muscle has a specific movement it assists with, their most critical collective role is to pull the "ball" (head of the humerus) tightly into the "socket" (glenoid fossa) during arm movement. Without a functional rotator cuff, the large deltoid muscle would simply pull the humerus upward into the acromion process rather than rotating it.</p>

      <h3>Clinical Insights: Rotator Cuff Tears</h3>
      <p>Rotator cuff injuries are incredibly common, especially in overhead athletes (pitchers, swimmers) and the elderly. The <strong>Supraspinatus tendon</strong> is the most frequently injured due to its location beneath the acromion, where it can become "impinged" or squeezed during movement.</p>
      
      <h4>Symptoms of a Tear:</h4>
      <ul>
        <li>Dull ache deep in the shoulder.</li>
        <li>Weakness when lifting or rotating the arm.</li>
        <li>Pain that disturbs sleep, particularly if lying on the affected shoulder.</li>
        <li>Crackling or popping sensations (crepitus) when moving the shoulder in certain positions.</li>
      </ul>

      <h3>The "Drop Arm" Test</h3>
      <p>A classic clinical test for a full-thickness supraspinatus tear is the Drop Arm Test. The clinician abducts the patient's arm to 90 degrees and asks them to lower it slowly. If the arm drops suddenly or the patient experiences severe pain, the test is considered positive.</p>
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
      <h2>Structure of the Lumbar Spine</h2>
      <p>The lumbar spine consists of the five largest and strongest vertebrae in the human body, labeled L1 through L5. Located between the thoracic spine (chest) and the sacrum (pelvis), the lumbar region bears the majority of the body's weight and provides the flexibility needed for lifting, twisting, and bending.</p>
      
      <h3>Anatomy of a Lumbar Vertebra</h3>
      <p>Unlike cervical or thoracic vertebrae, lumbar vertebrae have a massive <strong>vertebral body</strong> designed for weight-bearing. Other key features include:</p>
      <ul>
        <li><strong>Pedicles:</strong> Strong bony bridges that connect the body to the posterior elements.</li>
        <li><strong>Laminae:</strong> Flat plates of bone that form the posterior wall of the spinal canal.</li>
        <li><strong>Spinous Process:</strong> Short and thick, providing attachments for powerful back muscles.</li>
        <li><strong>Intervertebral Discs:</strong> Located between each vertebra, these act as shock absorbers. They consist of a tough outer ring (annulus fibrosus) and a jelly-like center (nucleus pulposus).</li>
      </ul>

      <h3>The Spinal Canal and Cauda Equina</h3>
      <p>The spinal cord typically ends at the L1-L2 level in adults. Below this point, the spinal canal contains a bundle of nerve roots known as the <strong>cauda equina</strong> (Latin for "horse's tail"). These nerves provide sensation and motor control to the lower limbs and pelvic organs.</p>

      <h3>Common Pathologies</h3>
      <p>Due to the high mechanical stress on the lower back, several conditions are common:</p>
      <ul>
        <li><strong>Lumbar Disc Herniation:</strong> Occurs when the nucleus pulposus pushes through a tear in the annulus fibrosus. If it presses on a nerve root (like the sciatic nerve), it causes "sciatica"—pain radiating down the leg.</li>
        <li><strong>Spinal Stenosis:</strong> A narrowing of the spinal canal, often due to arthritis and bone spurs. This can compress the cauda equina, leading to pain and weakness that typically improves when leaning forward.</li>
        <li><strong>Spondylolisthesis:</strong> A condition where one vertebra slips forward over the one below it, often caused by a stress fracture in the pars interarticularis (spondylolysis).</li>
      </ul>

      <h3>Clinical Correlation: The Straight Leg Raise</h3>
      <p>To test for a herniated disc, clinicians often perform the Straight Leg Raise (SLR) test. While the patient lies flat, the clinician lifts the extended leg. If the patient experiences radiating pain between 30 and 70 degrees, it suggests nerve root irritation.</p>
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
      <h2>The Liver: A Metabolic Powerhouse</h2>
      <p>The liver is the largest internal organ and the largest gland in the human body. Located primarily in the right upper quadrant of the abdomen, it performs over 500 vital functions, including detoxification, protein synthesis, and the production of bile necessary for digestion.</p>
      
      <h3>Gross Anatomy and Lobes</h3>
      <p>Traditionally, the liver is described as having four lobes based on surface features: the large Right and Left lobes, and the smaller Caudate and Quadrate lobes. However, for surgical purposes, a more functional classification is used.</p>

      <h3>Couinaud Classification: The 8 Segments</h3>
      <p>The Couinaud classification is the universal standard for liver anatomy in surgery and radiology. It divides the liver into <strong>8 independent functional segments</strong>. Each segment has its own dual blood supply (portal vein and hepatic artery) and its own biliary drainage.</p>
      <ul>
        <li><strong>Segment I:</strong> The Caudate lobe, located posteriorly.</li>
        <li><strong>Segments II, III, IV:</strong> Make up the functional left liver.</li>
        <li><strong>Segments V, VI, VII, VIII:</strong> Make up the functional right liver.</li>
      </ul>
      <p>This "segmental" approach allows surgeons to perform a "segmentectomy"—removing a diseased portion of the liver while preserving the blood supply to the remaining segments.</p>

      <h3>The Dual Blood Supply</h3>
      <p>Unique among organs, the liver receives blood from two sources:</p>
      <ol>
        <li><strong>Hepatic Artery (25%):</strong> Supplies oxygenated blood from the general circulation.</li>
        <li><strong>Portal Vein (75%):</strong> Supplies nutrient-rich (but deoxygenated) blood directly from the digestive tract, allowing the liver to process absorbed nutrients and toxins immediately.</li>
      </ol>

      <h3>Microscopic Structure: The Hepatic Lobule</h3>
      <p>The functional unit of the liver is the lobule, a hexagonal structure centered around a central vein. At the corners of the hexagon are "portal triads," each containing a branch of the portal vein, hepatic artery, and bile duct.</p>
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
      <h2>Anatomy of the Femoral Triangle</h2>
      <p>The femoral triangle (Scarpa's triangle) is a wedge-shaped subfascial space located in the superior-medial aspect of the anterior thigh. It serves as a major transition point for neurovascular structures passing between the pelvis and the lower limb.</p>
      
      <h3>Boundaries of the Triangle</h3>
      <p>The triangle is defined by three distinct borders:</p>
      <ul>
        <li><strong>Superior Border:</strong> The Inguinal Ligament.</li>
        <li><strong>Lateral Border:</strong> The medial margin of the Sartorius muscle.</li>
        <li><strong>Medial Border:</strong> The medial margin of the Adductor Longus muscle.</li>
        <li><strong>Floor:</strong> Formed by the Iliopsoas and Pectineus muscles.</li>
        <li><strong>Roof:</strong> Formed by the fascia lata and skin.</li>
      </ul>

      <h3>Contents: The "NAVEL" Mnemonic</h3>
      <p>The contents of the femoral triangle are arranged from <strong>Lateral to Medial</strong>. This is critical for clinical procedures:</p>
      <ol>
        <li><strong>N - Nerve:</strong> The Femoral Nerve (the most lateral structure).</li>
        <li><strong>A - Artery:</strong> The Femoral Artery.</li>
        <li><strong>V - Vein:</strong> The Femoral Vein.</li>
        <li><strong>E - Empty Space:</strong> The femoral canal (allows the vein to expand).</li>
        <li><strong>L - Lymphatics:</strong> Deep inguinal lymph nodes (including Cloquet's node).</li>
      </ol>

      <h3>Clinical Applications</h3>
      <p>The femoral triangle is of great clinical importance for several reasons:</p>
      <ul>
        <li><strong>Femoral Pulse:</strong> The femoral artery is easily palpable at the mid-inguinal point, halfway between the ASIS and the pubic symphysis.</li>
        <li><strong>Arterial Access:</strong> It is a common site for cardiac catheterization and angiography, as the femoral artery is large and superficial here.</li>
        <li><strong>Femoral Hernia:</strong> A type of hernia where abdominal contents push into the femoral canal. These are more common in women due to the wider female pelvis.</li>
        <li><strong>Venous Access:</strong> The femoral vein is often used for central venous line placement when other sites (like the neck or chest) are unavailable.</li>
      </ul>
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
      <p>Respiration is the process of gas exchange, but "ventilation" refers specifically to the mechanical process of moving air into and out of the lungs. This movement is driven by pressure gradients created by changes in the volume of the thoracic cavity, following <strong>Boyle's Law</strong> (pressure and volume are inversely related).</p>
      
      <h3>Inspiration: An Active Process</h3>
      <p>Inspiration (breathing in) is always an active process involving muscle contraction:</p>
      <ul>
        <li><strong>The Diaphragm:</strong> The primary muscle of respiration. When it contracts, it flattens and moves inferiorly, increasing the vertical dimension of the thoracic cavity.</li>
        <li><strong>External Intercostals:</strong> These muscles lift the ribs upward and outward (the "bucket handle" movement), increasing the transverse and anteroposterior dimensions.</li>
      </ul>
      <p>As the volume increases, the pressure inside the lungs (intrapulmonary pressure) drops below atmospheric pressure, and air rushes in.</p>

      <h3>Expiration: Typically Passive</h3>
      <p>During quiet breathing, expiration (breathing out) is a passive process. The diaphragm and external intercostals relax, and the natural "elastic recoil" of the lung tissue and thoracic wall decreases the volume, forcing air out.</p>

      <h3>Forced Breathing and Accessory Muscles</h3>
      <p>During exercise or respiratory distress, additional muscles are recruited:</p>
      <ul>
        <li><strong>Accessory Muscles of Inspiration:</strong> Sternocleidomastoid, Scalenes, and Pectoralis minor.</li>
        <li><strong>Muscles of Forced Expiration:</strong> Abdominal muscles (rectus abdominis, obliques) and internal intercostals.</li>
      </ul>

      <h3>Clinical Note: Pneumothorax</h3>
      <p>The lungs are "stuck" to the chest wall by the surface tension of pleural fluid in the pleural cavity. If air enters this space (a pneumothorax) due to trauma or a ruptured bleb, the negative pressure is lost, and the lung's elastic recoil causes it to collapse.</p>
    `
  }
]
