import React, { useState } from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, CheckCircle2, XCircle, Trophy, RefreshCw, Home, Brain } from 'lucide-react';
import { quizzes } from '../data/quizzes';

const QuizSession: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const quiz = id ? quizzes[id] : null;

  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedOption, setSelectedOption] = useState<number | null>(null);
  const [isAnswered, setIsAnswered] = useState(false);
  const [score, setScore] = useState(0);
  const [isFinished, setIsFinished] = useState(false);

  if (!quiz || quiz.questions.length === 0) {
    return (
      <div className="pt-32 pb-20 text-center flex flex-col items-center">
        <div className="w-20 h-20 bg-slate-100 rounded-full flex items-center justify-center text-slate-400 mb-6">
          <Brain size={40} />
        </div>
        <h2 className="text-2xl font-bold mb-4 text-primary">No questions found</h2>
        <p className="text-text-muted mb-8 max-w-xs">
          This quiz doesn't have any questions yet. Try adjusting your filters in the custom quiz builder.
        </p>
        <Link 
          to="/quiz" 
          className="bg-primary text-white px-8 py-3 rounded-xl font-bold hover:bg-primary-hover transition-all shadow-lg"
        >
          Go Back to Quizzes
        </Link>
      </div>
    );
  }

  const currentQuestion = quiz.questions[currentQuestionIndex];

  const handleOptionClick = (index: number) => {
    if (isAnswered) return;
    setSelectedOption(index);
  };

  const handleConfirm = () => {
    if (selectedOption === null) return;
    
    if (selectedOption === currentQuestion.correctAnswer) {
      setScore(prev => prev + 1);
    }
    setIsAnswered(true);
  };

  const handleNext = () => {
    if (currentQuestionIndex < quiz.questions.length - 1) {
      setCurrentQuestionIndex(prev => prev + 1);
      setSelectedOption(null);
      setIsAnswered(false);
    } else {
      setIsFinished(true);
    }
  };

  const restartQuiz = () => {
    setCurrentQuestionIndex(0);
    setSelectedOption(null);
    setIsAnswered(false);
    setScore(0);
    setIsFinished(false);
  };

  if (isFinished) {
    return (
      <div className="pt-24 pb-20 min-h-screen bg-slate-50 flex items-center justify-center p-4">
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          className="bg-white p-8 md:p-12 rounded-[2.5rem] border border-outline shadow-2xl max-w-lg w-full text-center"
        >
          <div className="w-24 h-24 bg-yellow-100 text-yellow-600 rounded-full flex items-center justify-center mx-auto mb-8">
            <Trophy size={48} />
          </div>
          <h2 className="text-3xl font-extrabold text-primary mb-2">Quiz Completed!</h2>
          <p className="text-text-muted mb-8">Great job! You've completed the {quiz.title}.</p>
          
          <div className="bg-slate-50 p-6 rounded-2xl mb-10 border border-outline">
            <div className="text-sm text-text-muted uppercase tracking-wider font-bold mb-1">Your Score</div>
            <div className="text-5xl font-black text-primary">
              {Math.round((score / quiz.questions.length) * 100)}%
            </div>
            <div className="text-text-muted mt-2">
              {score} out of {quiz.questions.length} correct
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <button 
              onClick={restartQuiz}
              className="flex items-center justify-center gap-2 font-bold py-4 px-6 bg-slate-100 text-primary rounded-xl hover:bg-slate-200 transition-colors"
            >
              <RefreshCw size={20} /> Retake
            </button>
            <button 
              onClick={() => navigate('/quiz')}
              className="flex items-center justify-center gap-2 font-bold py-4 px-6 bg-primary text-white rounded-xl hover:bg-primary-hover transition-colors shadow-lg"
            >
              <Home size={20} /> Finish
            </button>
          </div>
        </motion.div>
      </div>
    );
  }

  return (
    <div className="pt-24 pb-20 min-h-screen bg-slate-50 flex flex-col items-center p-4">
      <div className="max-w-4xl w-full">
        {/* Header with Back Button */}
        <div className="flex items-center gap-4 mb-8">
          <button 
            onClick={() => navigate('/quiz')}
            className="w-10 h-10 bg-white border border-outline rounded-full flex items-center justify-center text-primary hover:bg-slate-50 transition-colors shadow-sm"
          >
            <ChevronLeft size={24} />
          </button>
          <div className="flex-grow">
            <div className="flex justify-between items-end mb-2">
              <h2 className="text-primary font-bold text-lg">{quiz.title}</h2>
              <span className="text-text-muted font-medium text-sm">Question {currentQuestionIndex + 1} of {quiz.questions.length}</span>
            </div>
            <div className="h-2 w-full bg-slate-200 rounded-full overflow-hidden">
              <motion.div 
                className="h-full bg-secondary"
                initial={{ width: 0 }}
                animate={{ width: `${((currentQuestionIndex + 1) / quiz.questions.length) * 100}%` }}
              />
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
          {/* Question Section */}
          <motion.div 
            key={currentQuestion.id}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="bg-white p-8 rounded-[2rem] border border-outline shadow-xl"
          >
            <h3 className="text-2xl font-bold text-primary mb-8 leading-tight">
              {currentQuestion.text}
            </h3>

            {currentQuestion.image && (
              <div className="aspect-video rounded-xl overflow-hidden bg-slate-100 border border-outline mb-8">
                <img 
                  src={currentQuestion.image} 
                  alt="Anatomical Structure" 
                  className="w-full h-full object-cover"
                />
              </div>
            )}

            <div className="space-y-4">
              {currentQuestion.options.map((option, idx) => (
                <button
                  key={idx}
                  onClick={() => handleOptionClick(idx)}
                  className={`w-full p-5 rounded-2xl border-2 text-left font-bold transition-all flex justify-between items-center group ${
                    selectedOption === idx 
                      ? 'border-secondary bg-secondary/5 text-primary' 
                      : 'border-outline hover:border-slate-300 bg-white'
                  } ${
                    isAnswered && idx === currentQuestion.correctAnswer 
                      ? 'border-green-500 bg-green-50 !text-green-700' 
                      : ''
                  } ${
                    isAnswered && selectedOption === idx && idx !== currentQuestion.correctAnswer 
                      ? 'border-red-500 bg-red-50 !text-red-700' 
                      : ''
                  }`}
                  disabled={isAnswered}
                >
                  <div className="flex items-center gap-4">
                    <div className={`w-6 h-6 rounded-full border-2 flex items-center justify-center transition-all ${
                      selectedOption === idx 
                        ? 'border-secondary bg-secondary' 
                        : 'border-outline group-hover:border-slate-400'
                    } ${
                      isAnswered && idx === currentQuestion.correctAnswer 
                        ? 'border-green-500 bg-green-500' 
                        : ''
                    } ${
                      isAnswered && selectedOption === idx && idx !== currentQuestion.correctAnswer 
                        ? 'border-red-500 bg-red-500' 
                        : ''
                    }`}>
                      {selectedOption === idx && <div className="w-2 h-2 bg-white rounded-full shadow-sm" />}
                    </div>
                    {option}
                  </div>
                  {isAnswered && idx === currentQuestion.correctAnswer && <CheckCircle2 className="text-green-500 shrink-0" size={24} />}
                  {isAnswered && selectedOption === idx && idx !== currentQuestion.correctAnswer && <XCircle className="text-red-500 shrink-0" size={24} />}
                </button>
              ))}
            </div>

            {!isAnswered ? (
              <button
                onClick={handleConfirm}
                disabled={selectedOption === null}
                className={`mt-10 w-full py-4 rounded-xl font-black text-lg transition-all ${
                  selectedOption !== null 
                    ? 'bg-primary text-white shadow-lg hover:bg-primary-hover active:scale-95' 
                    : 'bg-slate-200 text-slate-400 cursor-not-allowed'
                }`}
              >
                Confirm Answer
              </button>
            ) : (
              <button
                onClick={handleNext}
                className="mt-10 w-full py-4 bg-secondary text-primary font-black text-lg rounded-xl shadow-lg hover:bg-secondary/90 transition-all flex items-center justify-center gap-2 active:scale-95"
              >
                {currentQuestionIndex === quiz.questions.length - 1 ? 'Finish Quiz' : 'Next Question'} <ChevronRight size={20} />
              </button>
            )}
          </motion.div>

          {/* Explanation / Progress Section */}
          <AnimatePresence>
            {isAnswered && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 20 }}
                className="lg:sticky lg:top-32"
              >
                <div className={`p-8 rounded-[2rem] border ${selectedOption === currentQuestion.correctAnswer ? 'bg-green-50 border-green-200' : 'bg-red-50 border-red-200'}`}>
                  <div className="flex items-center gap-3 mb-4">
                    {selectedOption === currentQuestion.correctAnswer ? (
                      <>
                        <div className="w-10 h-10 bg-green-500 text-white rounded-full flex items-center justify-center">
                          <CheckCircle2 size={24} />
                        </div>
                        <h4 className="text-xl font-bold text-green-700">Excellent!</h4>
                      </>
                    ) : (
                      <>
                        <div className="w-10 h-10 bg-red-500 text-white rounded-full flex items-center justify-center">
                          <XCircle size={24} />
                        </div>
                        <h4 className="text-xl font-bold text-red-700">Not quite...</h4>
                      </>
                    )}
                  </div>
                  <p className="text-text-main leading-relaxed text-lg">
                    {currentQuestion.explanation}
                  </p>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
};

export default QuizSession;
