export type AnatomySystem = 'Skeletal' | 'Muscular' | 'Nervous' | 'Cardiovascular' | 'Digestive' | 'Respiratory' | 'Urinary' | 'Endocrine';
export type AnatomyRegion = 'Head & Neck' | 'Upper Limb' | 'Thorax' | 'Abdomen' | 'Pelvis' | 'Lower Limb' | 'Back';

export interface Question {
  id: string;
  text: string;
  image?: string;
  options: string[];
  correctAnswer: number;
  explanation: string;
  system?: AnatomySystem;
  region?: AnatomyRegion;
}

export interface QuizData {
  id: string;
  title: string;
  description: string;
  questions: Question[];
}

