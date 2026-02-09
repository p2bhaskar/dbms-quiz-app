// import React, { useState, useEffect } from 'react';
// import { useNavigate } from 'react-router-dom';

// const ResultsPage = () => {
//   const navigate = useNavigate();
//   const [results, setResults] = useState(null);
//   const [showReview, setShowReview] = useState(false);
//   const [currentReviewQuestion, setCurrentReviewQuestion] = useState(0);

//   useEffect(() => {
//     const storedResults = localStorage.getItem('quizResults');
//     if (storedResults) {
//       setResults(JSON.parse(storedResults));
//     } else {
//       navigate('/');
//     }
//   }, [navigate]);

//   if (!results) {
//     return (
//       <div className="min-h-screen bg-gray-50 flex items-center justify-center">
//         <div className="text-center">
//           <h2 className="text-2xl font-bold text-gray-600">Loading results...</h2>
//         </div>
//       </div>
//     );
//   }

//   const { subject, level, score, totalQuestions, answers, questions } = results;
//   const percentage = Math.round((score / totalQuestions) * 100);

//   const getScoreColor = (percent) => {
//     if (percent >= 80) return 'text-green-600';
//     if (percent >= 60) return 'text-yellow-600';
//     return 'text-red-600';
//   };

//   const getScoreBgColor = (percent) => {
//     if (percent >= 80) return 'bg-green-100';
//     if (percent >= 60) return 'bg-yellow-100';
//     return 'bg-red-100';
//   };

//   const handleRetakeQuiz = () => {
//     navigate(`/quiz/${subject}/${level}`);
//   };

//   const handleGoHome = () => {
//     navigate('/');
//   };

//   const currentReviewQ = questions[currentReviewQuestion];

//   return (
//     <div className="min-h-screen bg-gray-50 p-4">
//       <div className="max-w-4xl mx-auto">
//         {!showReview ? (
//           /* Results Summary */
//           <div className="bg-white rounded-xl shadow-lg p-8">
//             <h1 className="text-3xl font-bold text-center text-gray-800 mb-2">
//               Quiz Completed!
//             </h1>
//             <p className="text-center text-gray-600 mb-8">
//               {level === 'basic' ? 'Basic' : 'Advanced'} DBMS Quiz Results
//             </p>

//             <div className={`rounded-2xl p-8 text-center mb-8 ${getScoreBgColor(percentage)}`}>
//               <div className="text-6xl font-bold mb-4 ${getScoreColor(percentage)}">
//                 {percentage}%
//               </div>
//               <div className="text-2xl font-semibold text-gray-700 mb-2">
//                 Score: {score} / {totalQuestions}
//               </div>
//               <div className={`text-lg font-medium ${getScoreColor(percentage)}`}>
//                 {percentage >= 80 ? 'Excellent! 🎉' : 
//                  percentage >= 60 ? 'Good Job! 👍' : 
//                  'Keep Practicing! 💪'}
//               </div>
//             </div>

//             <div className="grid md:grid-cols-3 gap-6 mb-8">
//               <div className="bg-blue-50 rounded-lg p-4 text-center">
//                 <div className="text-2xl font-bold text-blue-600">{score}</div>
//                 <div className="text-gray-600">Correct Answers</div>
//               </div>
//               <div className="bg-red-50 rounded-lg p-4 text-center">
//                 <div className="text-2xl font-bold text-red-600">{totalQuestions - score}</div>
//                 <div className="text-gray-600">Incorrect Answers</div>
//               </div>
//               <div className="bg-green-50 rounded-lg p-4 text-center">
//                 <div className="text-2xl font-bold text-green-600">{totalQuestions}</div>
//                 <div className="text-gray-600">Total Questions</div>
//               </div>
//             </div>

//             <div className="flex flex-col sm:flex-row gap-4 justify-center">
//               <button
//                 onClick={() => setShowReview(true)}
//                 className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-3 px-8 rounded-lg transition-colors duration-200"
//               >
//                 Review Answers
//               </button>
//               <button
//                 onClick={handleRetakeQuiz}
//                 className="bg-green-500 hover:bg-green-600 text-white font-semibold py-3 px-8 rounded-lg transition-colors duration-200"
//               >
//                 Retake Quiz
//               </button>
//               <button
//                 onClick={handleGoHome}
//                 className="bg-gray-500 hover:bg-gray-600 text-white font-semibold py-3 px-8 rounded-lg transition-colors duration-200"
//               >
//                 Back to Home
//               </button>
//             </div>
//           </div>
//         ) : (
//           /* Question Review */
//           <div className="bg-white rounded-xl shadow-lg p-6">
//             <div className="flex justify-between items-center mb-6">
//               <h2 className="text-2xl font-bold text-gray-800">
//                 Question Review
//               </h2>
//               <button
//                 onClick={() => setShowReview(false)}
//                 className="bg-gray-500 hover:bg-gray-600 text-white font-semibold py-2 px-4 rounded-lg"
//               >
//                 Back to Results
//               </button>
//             </div>

//             <div className="mb-6">
//               <div className="flex justify-between items-center mb-4">
//                 <span className="text-sm text-gray-500">
//                   Question {currentReviewQuestion + 1} of {questions.length}
//                 </span>
//                 <span className="text-sm font-medium text-blue-600">
//                   {currentReviewQ.module}
//                 </span>
//               </div>

//               <h3 className="text-xl font-semibold text-gray-800 mb-4">
//                 {currentReviewQ.question}
//               </h3>

//               <div className="space-y-3 mb-6">
//                 {currentReviewQ.options.map((option, index) => {
//                   const isSelected = answers[currentReviewQ.id] === index;
//                   const isCorrect = index === currentReviewQ.correctAnswer;
                  
//                   let optionStyle = "border-gray-200";
//                   if (isCorrect) {
//                     optionStyle = "border-green-500 bg-green-50";
//                   } else if (isSelected && !isCorrect) {
//                     optionStyle = "border-red-500 bg-red-50";
//                   }

//                   return (
//                     <div
//                       key={index}
//                       className={`p-4 rounded-lg border-2 ${optionStyle}`}
//                     >
//                       <div className="flex items-center">
//                         {isCorrect && (
//                           <span className="text-green-600 font-bold mr-2">✓</span>
//                         )}
//                         {isSelected && !isCorrect && (
//                           <span className="text-red-600 font-bold mr-2">✗</span>
//                         )}
//                         <span className={isCorrect ? "text-green-700 font-medium" : 
//                                        isSelected ? "text-red-700" : "text-gray-700"}>
//                           {option}
//                         </span>
//                         {isCorrect && (
//                           <span className="ml-auto text-green-600 font-semibold">
//                             Correct Answer
//                           </span>
//                         )}
//                         {isSelected && !isCorrect && (
//                           <span className="ml-auto text-red-600 font-semibold">
//                             Your Answer
//                           </span>
//                         )}
//                       </div>
//                     </div>
//                   );
//                 })}
//               </div>

//               <div className="bg-blue-50 rounded-lg p-4">
//                 <h4 className="font-semibold text-blue-800 mb-2">Explanation:</h4>
//                 <p className="text-blue-700">{currentReviewQ.explanation}</p>
//               </div>
//             </div>

//             <div className="flex justify-between">
//               <button
//                 onClick={() => setCurrentReviewQuestion(prev => Math.max(0, prev - 1))}
//                 disabled={currentReviewQuestion === 0}
//                 className="bg-gray-500 hover:bg-gray-600 disabled:bg-gray-300 text-white font-semibold py-2 px-6 rounded-lg"
//               >
//                 Previous
//               </button>
              
//               <button
//                 onClick={() => setCurrentReviewQuestion(prev => 
//                   Math.min(questions.length - 1, prev + 1)
//                 )}
//                 disabled={currentReviewQuestion === questions.length - 1}
//                 className="bg-blue-500 hover:bg-blue-600 disabled:bg-blue-300 text-white font-semibold py-2 px-6 rounded-lg"
//               >
//                 Next
//               </button>
//             </div>

//             {/* Question Navigation Dots */}
//             <div className="flex flex-wrap gap-2 mt-6 justify-center">
//               {questions.map((_, index) => (
//                 <button
//                   key={index}
//                   onClick={() => setCurrentReviewQuestion(index)}
//                   className={`w-8 h-8 rounded-full text-sm ${
//                     currentReviewQuestion === index
//                       ? 'bg-blue-500 text-white'
//                       : answers[questions[index].id] === questions[index].correctAnswer
//                       ? 'bg-green-500 text-white'
//                       : 'bg-red-500 text-white'
//                   }`}
//                 >
//                   {index + 1}
//                 </button>
//               ))}
//             </div>
//           </div>
//         )}
//       </div>
//     </div>
//   );
// };

// export default ResultsPage;


// import React, { useState, useEffect } from 'react';
// import { useNavigate } from 'react-router-dom';

// const ResultsPage = () => {
//   const navigate = useNavigate();
//   const [results, setResults] = useState(null);
//   const [showReview, setShowReview] = useState(false);
//   const [currentReviewQuestion, setCurrentReviewQuestion] = useState(0);

//   useEffect(() => {
//     const storedResults = localStorage.getItem('quizResults');
//     if (storedResults) {
//       setResults(JSON.parse(storedResults));
//     } else {
//       navigate('/');
//     }
//   }, [navigate]);

//   if (!results) {
//     return (
//       <div className="min-h-screen bg-gray-50 flex items-center justify-center">
//         <div className="text-center">
//           <h2 className="text-2xl font-bold text-gray-600">Loading results...</h2>
//         </div>
//       </div>
//     );
//   }

//   const { subject, level, topic, score, totalQuestions, answers, questions } = results;
//   const percentage = Math.round((score / totalQuestions) * 100);

//   const getScoreColor = (percent) => {
//     if (percent >= 80) return 'text-green-600';
//     if (percent >= 60) return 'text-yellow-600';
//     return 'text-red-600';
//   };

//   const getScoreBgColor = (percent) => {
//     if (percent >= 80) return 'bg-green-100';
//     if (percent >= 60) return 'bg-yellow-100';
//     return 'bg-red-100';
//   };

//   const handleRetakeQuiz = () => {
//     navigate(`/quiz/${subject}/${level}`, { state: { topic } });
//   };

//   const handleGoHome = () => {
//     navigate('/');
//   };

//   const currentReviewQ = questions[currentReviewQuestion];

//   return (
//     <div className="min-h-screen bg-gray-50 p-4">
//       <div className="max-w-4xl mx-auto">
//         {!showReview ? (
//           /* Results Summary */
//           <div className="bg-white rounded-xl shadow-lg p-8">
//             <h1 className="text-3xl font-bold text-center text-gray-800 mb-2">
//               Quiz Completed!
//             </h1>
//             <p className="text-center text-gray-600 mb-8">
//               {level === 'basic' ? 'Unit 1' : 'Advanced'} C Programming Quiz Results
//             </p>

//             <div className={`rounded-2xl p-8 text-center mb-8 ${getScoreBgColor(percentage)}`}>
//               <div className={`text-6xl font-bold mb-4 ${getScoreColor(percentage)}`}>
//                 {percentage}%
//               </div>
//               <div className="text-2xl font-semibold text-gray-700 mb-2">
//                 Score: {score} / {totalQuestions}
//               </div>
//               <div className={`text-lg font-medium ${getScoreColor(percentage)}`}>
//                 {percentage >= 80 ? 'Excellent! 🎉' : 
//                  percentage >= 60 ? 'Good Job! 👍' : 
//                  'Keep Practicing! 💪'}
//               </div>
//             </div>

//             <div className="grid md:grid-cols-3 gap-6 mb-8">
//               <div className="bg-blue-50 rounded-lg p-4 text-center">
//                 <div className="text-2xl font-bold text-blue-600">{score}</div>
//                 <div className="text-gray-600">Correct Answers</div>
//               </div>
//               <div className="bg-red-50 rounded-lg p-4 text-center">
//                 <div className="text-2xl font-bold text-red-600">{totalQuestions - score}</div>
//                 <div className="text-gray-600">Incorrect Answers</div>
//               </div>
//               <div className="bg-green-50 rounded-lg p-4 text-center">
//                 <div className="text-2xl font-bold text-green-600">{totalQuestions}</div>
//                 <div className="text-gray-600">Total Questions</div>
//               </div>
//             </div>

//             <div className="mb-6 bg-gray-50 rounded-lg p-4">
//               <p className="text-sm text-gray-700">
//                 <strong>Topic:</strong> {topic === 'all' ? 'All Topics (Mixed)' : topic}
//               </p>
//             </div>

//             <div className="flex flex-col sm:flex-row gap-4 justify-center">
//               <button
//                 onClick={() => setShowReview(true)}
//                 className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-3 px-8 rounded-lg transition-colors duration-200"
//               >
//                 Review Answers
//               </button>
//               <button
//                 onClick={handleRetakeQuiz}
//                 className="bg-green-500 hover:bg-green-600 text-white font-semibold py-3 px-8 rounded-lg transition-colors duration-200"
//               >
//                 Retake Quiz
//               </button>
//               <button
//                 onClick={handleGoHome}
//                 className="bg-gray-500 hover:bg-gray-600 text-white font-semibold py-3 px-8 rounded-lg transition-colors duration-200"
//               >
//                 Back to Home
//               </button>
//             </div>
//           </div>
//         ) : (
//           /* Question Review */
//           <div className="bg-white rounded-xl shadow-lg p-6">
//             <div className="flex justify-between items-center mb-6">
//               <h2 className="text-2xl font-bold text-gray-800">
//                 Question Review
//               </h2>
//               <button
//                 onClick={() => setShowReview(false)}
//                 className="bg-gray-500 hover:bg-gray-600 text-white font-semibold py-2 px-4 rounded-lg"
//               >
//                 Back to Results
//               </button>
//             </div>

//             <div className="mb-6">
//               <div className="flex justify-between items-center mb-4">
//                 <span className="text-sm text-gray-500">
//                   Question {currentReviewQuestion + 1} of {questions.length}
//                 </span>
//                 <span className="text-sm font-medium text-blue-600">
//                   {currentReviewQ.module}
//                 </span>
//               </div>

//               <h3 className="text-xl font-semibold text-gray-800 mb-4">
//                 {currentReviewQ.question}
//               </h3>

//               <div className="space-y-3 mb-6">
//                 {currentReviewQ.options.map((option, index) => {
//                   const isSelected = answers[currentReviewQ.id] === index;
//                   const isCorrect = index === currentReviewQ.correctAnswer;
                  
//                   let optionStyle = "border-gray-200";
//                   if (isCorrect) {
//                     optionStyle = "border-green-500 bg-green-50";
//                   } else if (isSelected && !isCorrect) {
//                     optionStyle = "border-red-500 bg-red-50";
//                   }

//                   return (
//                     <div
//                       key={index}
//                       className={`p-4 rounded-lg border-2 ${optionStyle}`}
//                     >
//                       <div className="flex items-center">
//                         {isCorrect && (
//                           <span className="text-green-600 font-bold mr-2">✓</span>
//                         )}
//                         {isSelected && !isCorrect && (
//                           <span className="text-red-600 font-bold mr-2">✗</span>
//                         )}
//                         <span className={isCorrect ? "text-green-700 font-medium" : 
//                                        isSelected ? "text-red-700" : "text-gray-700"}>
//                           {option}
//                         </span>
//                         {isCorrect && (
//                           <span className="ml-auto text-green-600 font-semibold">
//                             Correct Answer
//                           </span>
//                         )}
//                         {isSelected && !isCorrect && (
//                           <span className="ml-auto text-red-600 font-semibold">
//                             Your Answer
//                           </span>
//                         )}
//                       </div>
//                     </div>
//                   );
//                 })}
//               </div>

//               <div className="bg-blue-50 rounded-lg p-4">
//                 <h4 className="font-semibold text-blue-800 mb-2">Explanation:</h4>
//                 <p className="text-blue-700">{currentReviewQ.explanation}</p>
//               </div>
//             </div>

//             <div className="flex justify-between">
//               <button
//                 onClick={() => setCurrentReviewQuestion(prev => Math.max(0, prev - 1))}
//                 disabled={currentReviewQuestion === 0}
//                 className="bg-gray-500 hover:bg-gray-600 disabled:bg-gray-300 text-white font-semibold py-2 px-6 rounded-lg"
//               >
//                 Previous
//               </button>
              
//               <button
//                 onClick={() => setCurrentReviewQuestion(prev => 
//                   Math.min(questions.length - 1, prev + 1)
//                 )}
//                 disabled={currentReviewQuestion === questions.length - 1}
//                 className="bg-blue-500 hover:bg-blue-600 disabled:bg-blue-300 text-white font-semibold py-2 px-6 rounded-lg"
//               >
//                 Next
//               </button>
//             </div>

//             {/* Question Navigation Dots */}
//             <div className="flex flex-wrap gap-2 mt-6 justify-center">
//               {questions.map((_, index) => (
//                 <button
//                   key={index}
//                   onClick={() => setCurrentReviewQuestion(index)}
//                   className={`w-8 h-8 rounded-full text-sm ${
//                     currentReviewQuestion === index
//                       ? 'bg-blue-500 text-white'
//                       : answers[questions[index].id] === questions[index].correctAnswer
//                       ? 'bg-green-500 text-white'
//                       : 'bg-red-500 text-white'
//                   }`}
//                 >
//                   {index + 1}
//                 </button>
//               ))}
//             </div>
//           </div>
//         )}
//       </div>
//     </div>
//   );
// };

// export default ResultsPage;


import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const ResultsPage = () => {
  const navigate = useNavigate();
  const [results, setResults] = useState(null);

  useEffect(() => {
    const storedResults = localStorage.getItem('quizResults');
    if (storedResults) {
      setResults(JSON.parse(storedResults));
    } else {
      navigate('/');
    }
  }, [navigate]);

  if (!results) return null;

  const { score, totalQuestions, topic } = results;
  const percent = Math.round((score / totalQuestions) * 100);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <div className="bg-white shadow-xl rounded-xl p-8 text-center">

        <h1 className="text-3xl font-bold mb-6">Quiz Completed</h1>

        <div className="text-6xl font-bold text-blue-600 mb-4">
          {percent}%
        </div>

        <p className="text-xl mb-2">
          Score: {score} / {totalQuestions}
        </p>

        <p className="mb-6 text-gray-600">
          Topic: {topic}
        </p>

        <button
          onClick={() => navigate('/')}
          className="bg-gray-600 text-white px-6 py-3 rounded-lg"
        >
          Back Home
        </button>
      </div>
    </div>
  );
};

export default ResultsPage;
