// import React, { useState, useEffect } from 'react';
// import { useParams, useNavigate } from 'react-router-dom';
// import { quizData } from '../data/quizData';

// const QuizPage = () => {
//   const { subject, level } = useParams();
//   const navigate = useNavigate();
//   const [currentQuestion, setCurrentQuestion] = useState(0);
//   const [answers, setAnswers] = useState({});
//   const [timeLeft, setTimeLeft] = useState(300); // 5 minutes in seconds
//   const [quizCompleted, setQuizCompleted] = useState(false);

//   const questions = quizData[subject]?.[level] || [];
  
//   useEffect(() => {
//     if (questions.length === 0) {
//       navigate('/');
//       return;
//     }

//     const timer = setInterval(() => {
//       setTimeLeft((time) => {
//         if (time <= 1) {
//           clearInterval(timer);
//           handleQuizSubmit();
//           return 0;
//         }
//         return time - 1;
//       });
//     }, 1000);

//     return () => clearInterval(timer);
//   }, [questions.length, navigate]);

//   const handleAnswerSelect = (questionId, answerIndex) => {
//     setAnswers(prev => ({
//       ...prev,
//       [questionId]: answerIndex
//     }));
//   };

//   const handleQuizSubmit = () => {
//     if (quizCompleted) return;
    
//     setQuizCompleted(true);
//     const score = calculateScore();
    
//     // Store results in localStorage for results page
//     localStorage.setItem('quizResults', JSON.stringify({
//       subject,
//       level,
//       score,
//       totalQuestions: questions.length,
//       answers,
//       questions
//     }));
    
//     navigate('/results');
//   };

//   const calculateScore = () => {
//     return questions.reduce((score, question) => {
//       if (answers[question.id] === question.correctAnswer) {
//         return score + 1;
//       }
//       return score;
//     }, 0);
//   };

//   const formatTime = (seconds) => {
//     const mins = Math.floor(seconds / 60);
//     const secs = seconds % 60;
//     return `${mins}:${secs < 10 ? '0' : ''}${secs}`;
//   };

//   const getQuestionStatus = (questionId) => {
//     return answers[questionId] !== undefined ? 'attempted' : 'unattempted';
//   };

//   if (questions.length === 0) {
//     return (
//       <div className="min-h-screen bg-gray-50 flex items-center justify-center">
//         <div className="text-center">
//           <h2 className="text-2xl font-bold text-red-600">Quiz not found!</h2>
//           <button 
//             onClick={() => navigate('/')}
//             className="mt-4 bg-blue-500 text-white px-6 py-2 rounded-lg"
//           >
//             Go Home
//           </button>
//         </div>
//       </div>
//     );
//   }

//   const currentQ = questions[currentQuestion];

//   return (
//     <div className="min-h-screen bg-gray-50 p-4">
//       <div className="max-w-6xl mx-auto">
//         {/* Header */}
//         <div className="bg-white rounded-xl shadow-lg p-6 mb-6">
//           <div className="flex flex-col md:flex-row justify-between items-center">
//             <div>
//               <h1 className="text-2xl font-bold text-gray-800">
//                 {level === 'basic' ? 'Basic' : 'Advanced'} DBMS Quiz
//               </h1>
//               <p className="text-gray-600">
//                 Module: {currentQ.module}
//               </p>
//             </div>
//             <div className="flex items-center space-x-4 mt-4 md:mt-0">
//               <div className={`text-lg font-semibold ${
//                 timeLeft < 60 ? 'text-red-600' : 'text-gray-700'
//               }`}>
//                 ⏱️ {formatTime(timeLeft)}
//               </div>
//               <button
//                 onClick={handleQuizSubmit}
//                 className="bg-green-500 hover:bg-green-600 text-white font-semibold py-2 px-6 rounded-lg transition-colors duration-200"
//               >
//                 Submit Quiz
//               </button>
//             </div>
//           </div>
//         </div>

//         <div className="flex flex-col lg:flex-row gap-6">
//           {/* Question Section */}
//           <div className="lg:w-2/3">
//             <div className="bg-white rounded-xl shadow-lg p-6 mb-6">
//               <div className="flex justify-between items-center mb-4">
//                 <span className="text-sm text-gray-500">
//                   Question {currentQuestion + 1} of {questions.length}
//                 </span>
//                 <span className="text-sm font-medium text-blue-600">
//                   {currentQ.module}
//                 </span>
//               </div>
              
//               <h2 className="text-xl font-semibold text-gray-800 mb-6">
//                 {currentQ.question}
//               </h2>

//               <div className="space-y-3">
//                 {currentQ.options.map((option, index) => (
//                   <label
//                     key={index}
//                     className={`flex items-center p-4 rounded-lg border-2 cursor-pointer transition-all duration-200 ${
//                       answers[currentQ.id] === index
//                         ? 'border-blue-500 bg-blue-50'
//                         : 'border-gray-200 hover:border-gray-300'
//                     }`}
//                   >
//                     <input
//                       type="radio"
//                       name={`question-${currentQ.id}`}
//                       value={index}
//                       checked={answers[currentQ.id] === index}
//                       onChange={() => handleAnswerSelect(currentQ.id, index)}
//                       className="h-4 w-4 text-blue-600 focus:ring-blue-500"
//                     />
//                     <span className="ml-3 text-gray-700">{option}</span>
//                   </label>
//                 ))}
//               </div>
//             </div>

//             {/* Navigation Buttons */}
//             <div className="flex justify-between">
//               <button
//                 onClick={() => setCurrentQuestion(prev => Math.max(0, prev - 1))}
//                 disabled={currentQuestion === 0}
//                 className="bg-gray-500 hover:bg-gray-600 disabled:bg-gray-300 text-white font-semibold py-2 px-6 rounded-lg transition-colors duration-200"
//               >
//                 Previous
//               </button>
              
//               {currentQuestion === questions.length - 1 ? (
//                 <button
//                   onClick={handleQuizSubmit}
//                   className="bg-green-500 hover:bg-green-600 text-white font-semibold py-2 px-6 rounded-lg transition-colors duration-200"
//                 >
//                   Review & Submit
//                 </button>
//               ) : (
//                 <button
//                   onClick={() => setCurrentQuestion(prev => Math.min(questions.length - 1, prev + 1))}
//                   className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-6 rounded-lg transition-colors duration-200"
//                 >
//                   Next
//                 </button>
//               )}
//             </div>
//           </div>

//           {/* Progress Tracker */}
//           <div className="lg:w-1/3">
//             <div className="bg-white rounded-xl shadow-lg p-6 sticky top-4">
//               <h3 className="text-lg font-semibold text-gray-800 mb-4">
//                 Question Tracker
//               </h3>
              
//               <div className="grid grid-cols-5 gap-2 mb-4">
//                 {questions.map((question, index) => (
//                   <button
//                     key={question.id}
//                     onClick={() => setCurrentQuestion(index)}
//                     className={`h-10 rounded-lg flex items-center justify-center text-sm font-medium transition-all duration-200 ${
//                       getQuestionStatus(question.id) === 'attempted'
//                         ? 'bg-green-500 text-white hover:bg-green-600'
//                         : 'bg-red-100 text-red-700 hover:bg-red-200'
//                     } ${
//                       currentQuestion === index ? 'ring-2 ring-blue-500 ring-offset-2' : ''
//                     }`}
//                   >
//                     {index + 1}
//                   </button>
//                 ))}
//               </div>

//               <div className="space-y-2 text-sm">
//                 <div className="flex items-center">
//                   <div className="w-3 h-3 bg-green-500 rounded-full mr-2"></div>
//                   <span className="text-gray-600">Attempted</span>
//                 </div>
//                 <div className="flex items-center">
//                   <div className="w-3 h-3 bg-red-100 rounded-full mr-2"></div>
//                   <span className="text-gray-600">Not Attempted</span>
//                 </div>
//               </div>

//               <div className="mt-4 p-3 bg-blue-50 rounded-lg">
//                 <p className="text-sm text-blue-700">
//                   <strong>Progress:</strong> {Object.keys(answers).length} / {questions.length} questions attempted
//                 </p>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default QuizPage;


// import React, { useState, useEffect } from 'react';
// import { useParams, useNavigate, useLocation } from 'react-router-dom';
// import { getAllQuestions, getQuestionsByTopic } from '../data/quizData';

// const QuizPage = () => {
//   const { subject, level } = useParams();
//   const navigate = useNavigate();
//   const location = useLocation();
//   const [currentQuestion, setCurrentQuestion] = useState(0);
//   const [answers, setAnswers] = useState({});
//   const [timeLeft, setTimeLeft] = useState(300); // 5 minutes in seconds
//   const [quizCompleted, setQuizCompleted] = useState(false);

//   // Get selected topic from navigation state or use 'all'
//   const selectedTopic = location.state?.topic || 'all';

//   // Get questions based on selected topic
//   const questions = selectedTopic === 'all' 
//     ? getAllQuestions(subject, level)
//     : getQuestionsByTopic(subject, level, selectedTopic);
  
//   useEffect(() => {
//     if (questions.length === 0) {
//       navigate('/');
//       return;
//     }

//     const timer = setInterval(() => {
//       setTimeLeft((time) => {
//         if (time <= 1) {
//           clearInterval(timer);
//           handleQuizSubmit();
//           return 0;
//         }
//         return time - 1;
//       });
//     }, 1000);

//     return () => clearInterval(timer);
//   }, [questions.length, navigate]);

//   const handleAnswerSelect = (questionId, answerIndex) => {
//     setAnswers(prev => ({
//       ...prev,
//       [questionId]: answerIndex
//     }));
//   };

//   const handleQuizSubmit = () => {
//     if (quizCompleted) return;
    
//     setQuizCompleted(true);
//     const score = calculateScore();
    
//     // Store results in localStorage for results page
//     localStorage.setItem('quizResults', JSON.stringify({
//       subject,
//       level,
//       topic: selectedTopic,
//       score,
//       totalQuestions: questions.length,
//       answers,
//       questions
//     }));
    
//     navigate('/results');
//   };

//   const calculateScore = () => {
//     return questions.reduce((score, question) => {
//       if (answers[question.id] === question.correctAnswer) {
//         return score + 1;
//       }
//       return score;
//     }, 0);
//   };

//   const formatTime = (seconds) => {
//     const mins = Math.floor(seconds / 60);
//     const secs = seconds % 60;
//     return `${mins}:${secs < 10 ? '0' : ''}${secs}`;
//   };

//   const getQuestionStatus = (questionId) => {
//     return answers[questionId] !== undefined ? 'attempted' : 'unattempted';
//   };

//   if (questions.length === 0) {
//     return (
//       <div className="min-h-screen bg-gray-50 flex items-center justify-center">
//         <div className="text-center">
//           <h2 className="text-2xl font-bold text-red-600">Quiz not found!</h2>
//           <button 
//             onClick={() => navigate('/')}
//             className="mt-4 bg-blue-500 text-white px-6 py-2 rounded-lg"
//           >
//             Go Home
//           </button>
//         </div>
//       </div>
//     );
//   }

//   const currentQ = questions[currentQuestion];

//   return (
//     <div className="min-h-screen bg-gray-50 p-4">
//       <div className="max-w-6xl mx-auto">
//         {/* Header */}
//         <div className="bg-white rounded-xl shadow-lg p-6 mb-6">
//           <div className="flex flex-col md:flex-row justify-between items-center">
//             <div>
//               <h1 className="text-2xl font-bold text-gray-800">
//                 {level === 'basic' ? 'Basic' : 'Advanced'} DBMS Quiz
//               </h1>
//               <p className="text-gray-600">
//                 Topic: {selectedTopic === 'all' ? 'All Topics' : selectedTopic}
//               </p>
//               <p className="text-sm text-gray-500">
//                 Module: {currentQ.module}
//               </p>
//             </div>
//             <div className="flex items-center space-x-4 mt-4 md:mt-0">
//               <div className={`text-lg font-semibold ${
//                 timeLeft < 60 ? 'text-red-600' : 'text-gray-700'
//               }`}>
//                 ⏱️ {formatTime(timeLeft)}
//               </div>
//               <button
//                 onClick={handleQuizSubmit}
//                 className="bg-green-500 hover:bg-green-600 text-white font-semibold py-2 px-6 rounded-lg transition-colors duration-200"
//               >
//                 Submit Quiz
//               </button>
//             </div>
//           </div>
//         </div>

//         <div className="flex flex-col lg:flex-row gap-6">
//           {/* Question Section */}
//           <div className="lg:w-2/3">
//             <div className="bg-white rounded-xl shadow-lg p-6 mb-6">
//               <div className="flex justify-between items-center mb-4">
//                 <span className="text-sm text-gray-500">
//                   Question {currentQuestion + 1} of {questions.length}
//                 </span>
//                 <span className="text-sm font-medium text-blue-600">
//                   {currentQ.module}
//                 </span>
//               </div>
              
//               <h2 className="text-xl font-semibold text-gray-800 mb-6">
//                 {currentQ.question}
//               </h2>

//               <div className="space-y-3">
//                 {currentQ.options.map((option, index) => (
//                   <label
//                     key={index}
//                     className={`flex items-center p-4 rounded-lg border-2 cursor-pointer transition-all duration-200 ${
//                       answers[currentQ.id] === index
//                         ? 'border-blue-500 bg-blue-50'
//                         : 'border-gray-200 hover:border-gray-300'
//                     }`}
//                   >
//                     <input
//                       type="radio"
//                       name={`question-${currentQ.id}`}
//                       value={index}
//                       checked={answers[currentQ.id] === index}
//                       onChange={() => handleAnswerSelect(currentQ.id, index)}
//                       className="h-4 w-4 text-blue-600 focus:ring-blue-500"
//                     />
//                     <span className="ml-3 text-gray-700">{option}</span>
//                   </label>
//                 ))}
//               </div>
//             </div>

//             {/* Navigation Buttons */}
//             <div className="flex justify-between">
//               <button
//                 onClick={() => setCurrentQuestion(prev => Math.max(0, prev - 1))}
//                 disabled={currentQuestion === 0}
//                 className="bg-gray-500 hover:bg-gray-600 disabled:bg-gray-300 text-white font-semibold py-2 px-6 rounded-lg transition-colors duration-200"
//               >
//                 Previous
//               </button>
              
//               {currentQuestion === questions.length - 1 ? (
//                 <button
//                   onClick={handleQuizSubmit}
//                   className="bg-green-500 hover:bg-green-600 text-white font-semibold py-2 px-6 rounded-lg transition-colors duration-200"
//                 >
//                   Review & Submit
//                 </button>
//               ) : (
//                 <button
//                   onClick={() => setCurrentQuestion(prev => Math.min(questions.length - 1, prev + 1))}
//                   className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-6 rounded-lg transition-colors duration-200"
//                 >
//                   Next
//                 </button>
//               )}
//             </div>
//           </div>

//           {/* Progress Tracker */}
//           <div className="lg:w-1/3">
//             <div className="bg-white rounded-xl shadow-lg p-6 sticky top-4">
//               <h3 className="text-lg font-semibold text-gray-800 mb-4">
//                 Question Tracker
//               </h3>
              
//               <div className="grid grid-cols-5 gap-2 mb-4">
//                 {questions.map((question, index) => (
//                   <button
//                     key={question.id}
//                     onClick={() => setCurrentQuestion(index)}
//                     className={`h-10 rounded-lg flex items-center justify-center text-sm font-medium transition-all duration-200 ${
//                       getQuestionStatus(question.id) === 'attempted'
//                         ? 'bg-green-500 text-white hover:bg-green-600'
//                         : 'bg-red-100 text-red-700 hover:bg-red-200'
//                     } ${
//                       currentQuestion === index ? 'ring-2 ring-blue-500 ring-offset-2' : ''
//                     }`}
//                   >
//                     {index + 1}
//                   </button>
//                 ))}
//               </div>

//               <div className="space-y-2 text-sm">
//                 <div className="flex items-center">
//                   <div className="w-3 h-3 bg-green-500 rounded-full mr-2"></div>
//                   <span className="text-gray-600">Attempted</span>
//                 </div>
//                 <div className="flex items-center">
//                   <div className="w-3 h-3 bg-red-100 rounded-full mr-2"></div>
//                   <span className="text-gray-600">Not Attempted</span>
//                 </div>
//               </div>

//               <div className="mt-4 p-3 bg-blue-50 rounded-lg">
//                 <p className="text-sm text-blue-700">
//                   <strong>Progress:</strong> {Object.keys(answers).length} / {questions.length} questions attempted
//                 </p>
//                 <p className="text-sm text-blue-700">
//                   <strong>Topic:</strong> {selectedTopic === 'all' ? 'All Topics' : selectedTopic}
//                 </p>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default QuizPage;


// import React, { useState, useEffect } from 'react';
// import { useParams, useNavigate, useLocation } from 'react-router-dom';
// import { getAllQuestions, getQuestionsByTopic } from '../data/cprogramming/quizData';

// const QuizPage = () => {
//   const { subject, level } = useParams();
//   const navigate = useNavigate();
//   const location = useLocation();
//   const [currentQuestion, setCurrentQuestion] = useState(0);
//   const [answers, setAnswers] = useState({});
//   const [timeLeft, setTimeLeft] = useState(600); // 10 minutes in seconds
//   const [quizCompleted, setQuizCompleted] = useState(false);

//   // Get selected topic from navigation state or use 'all'
//   const selectedTopic = location.state?.topic || 'all';

//   // Get questions based on selected topic
//   const questions = selectedTopic === 'all' 
//     ? getAllQuestions(subject, level)
//     : getQuestionsByTopic(subject, level, selectedTopic);
  
//   useEffect(() => {
//     if (questions.length === 0) {
//       navigate('/');
//       return;
//     }

//     const timer = setInterval(() => {
//       setTimeLeft((time) => {
//         if (time <= 1) {
//           clearInterval(timer);
//           handleQuizSubmit();
//           return 0;
//         }
//         return time - 1;
//       });
//     }, 1000);

//     return () => clearInterval(timer);
//   }, [questions.length, navigate]);

//   const handleAnswerSelect = (questionId, answerIndex) => {
//     setAnswers(prev => ({
//       ...prev,
//       [questionId]: answerIndex
//     }));
//   };

//   const handleQuizSubmit = () => {
//     if (quizCompleted) return;
    
//     setQuizCompleted(true);
//     const score = calculateScore();
    
//     // Store results in localStorage for results page
//     localStorage.setItem('quizResults', JSON.stringify({
//       subject,
//       level,
//       topic: selectedTopic,
//       score,
//       totalQuestions: questions.length,
//       answers,
//       questions
//     }));
    
//     navigate('/results');
//   };

//   const calculateScore = () => {
//     return questions.reduce((score, question) => {
//       if (answers[question.id] === question.correctAnswer) {
//         return score + 1;
//       }
//       return score;
//     }, 0);
//   };

//   const formatTime = (seconds) => {
//     const mins = Math.floor(seconds / 60);
//     const secs = seconds % 60;
//     return `${mins}:${secs < 10 ? '0' : ''}${secs}`;
//   };

//   const getQuestionStatus = (questionId) => {
//     return answers[questionId] !== undefined ? 'attempted' : 'unattempted';
//   };

//   if (questions.length === 0) {
//     return (
//       <div className="min-h-screen bg-gray-50 flex items-center justify-center">
//         <div className="text-center">
//           <h2 className="text-2xl font-bold text-red-600">Quiz not found!</h2>
//           <button 
//             onClick={() => navigate('/')}
//             className="mt-4 bg-blue-500 text-white px-6 py-2 rounded-lg"
//           >
//             Go Home
//           </button>
//         </div>
//       </div>
//     );
//   }

//   const currentQ = questions[currentQuestion];

//   return (
//     <div className="min-h-screen bg-gray-50 p-4">
//       <div className="max-w-6xl mx-auto">
//         {/* Header */}
//         <div className="bg-white rounded-xl shadow-lg p-6 mb-6">
//           <div className="flex flex-col md:flex-row justify-between items-center">
//             <div>
//               <h1 className="text-2xl font-bold text-gray-800">
//                 {level === 'basic' ? 'Unit 1' : 'Advanced'} C Programming Quiz
//               </h1>
//               <p className="text-gray-600">
//                 Topic: {selectedTopic === 'all' ? 'All Topics' : selectedTopic}
//               </p>
//               <p className="text-sm text-gray-500">
//                 Module: {currentQ.module}
//               </p>
//             </div>
//             <div className="flex items-center space-x-4 mt-4 md:mt-0">
//               <div className={`text-lg font-semibold ${
//                 timeLeft < 60 ? 'text-red-600' : 'text-gray-700'
//               }`}>
//                 ⏱️ {formatTime(timeLeft)}
//               </div>
//               <button
//                 onClick={handleQuizSubmit}
//                 className="bg-green-500 hover:bg-green-600 text-white font-semibold py-2 px-6 rounded-lg transition-colors duration-200"
//               >
//                 Submit Quiz
//               </button>
//             </div>
//           </div>
//         </div>

//         <div className="flex flex-col lg:flex-row gap-6">
//           {/* Question Section */}
//           <div className="lg:w-2/3">
//             <div className="bg-white rounded-xl shadow-lg p-6 mb-6">
//               <div className="flex justify-between items-center mb-4">
//                 <span className="text-sm text-gray-500">
//                   Question {currentQuestion + 1} of {questions.length}
//                 </span>
//                 <span className="text-sm font-medium text-blue-600">
//                   {currentQ.module}
//                 </span>
//               </div>
              
//               <h2 className="text-xl font-semibold text-gray-800 mb-6">
//                 {currentQ.question}
//               </h2>

//               <div className="space-y-3">
//                 {currentQ.options.map((option, index) => (
//                   <label
//                     key={index}
//                     className={`flex items-center p-4 rounded-lg border-2 cursor-pointer transition-all duration-200 ${
//                       answers[currentQ.id] === index
//                         ? 'border-blue-500 bg-blue-50'
//                         : 'border-gray-200 hover:border-gray-300'
//                     }`}
//                   >
//                     <input
//                       type="radio"
//                       name={`question-${currentQ.id}`}
//                       value={index}
//                       checked={answers[currentQ.id] === index}
//                       onChange={() => handleAnswerSelect(currentQ.id, index)}
//                       className="h-4 w-4 text-blue-600 focus:ring-blue-500"
//                     />
//                     <span className="ml-3 text-gray-700">{option}</span>
//                   </label>
//                 ))}
//               </div>
//             </div>

//             {/* Navigation Buttons */}
//             <div className="flex justify-between">
//               <button
//                 onClick={() => setCurrentQuestion(prev => Math.max(0, prev - 1))}
//                 disabled={currentQuestion === 0}
//                 className="bg-gray-500 hover:bg-gray-600 disabled:bg-gray-300 text-white font-semibold py-2 px-6 rounded-lg transition-colors duration-200"
//               >
//                 Previous
//               </button>
              
//               {currentQuestion === questions.length - 1 ? (
//                 <button
//                   onClick={handleQuizSubmit}
//                   className="bg-green-500 hover:bg-green-600 text-white font-semibold py-2 px-6 rounded-lg transition-colors duration-200"
//                 >
//                   Review & Submit
//                 </button>
//               ) : (
//                 <button
//                   onClick={() => setCurrentQuestion(prev => Math.min(questions.length - 1, prev + 1))}
//                   className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-6 rounded-lg transition-colors duration-200"
//                 >
//                   Next
//                 </button>
//               )}
//             </div>
//           </div>

//           {/* Progress Tracker */}
//           <div className="lg:w-1/3">
//             <div className="bg-white rounded-xl shadow-lg p-6 sticky top-4">
//               <h3 className="text-lg font-semibold text-gray-800 mb-4">
//                 Question Tracker
//               </h3>
              
//               <div className="grid grid-cols-5 gap-2 mb-4">
//                 {questions.map((question, index) => (
//                   <button
//                     key={question.id}
//                     onClick={() => setCurrentQuestion(index)}
//                     className={`h-10 rounded-lg flex items-center justify-center text-sm font-medium transition-all duration-200 ${
//                       getQuestionStatus(question.id) === 'attempted'
//                         ? 'bg-green-500 text-white hover:bg-green-600'
//                         : 'bg-red-100 text-red-700 hover:bg-red-200'
//                     } ${
//                       currentQuestion === index ? 'ring-2 ring-blue-500 ring-offset-2' : ''
//                     }`}
//                   >
//                     {index + 1}
//                   </button>
//                 ))}
//               </div>

//               <div className="space-y-2 text-sm">
//                 <div className="flex items-center">
//                   <div className="w-3 h-3 bg-green-500 rounded-full mr-2"></div>
//                   <span className="text-gray-600">Attempted</span>
//                 </div>
//                 <div className="flex items-center">
//                   <div className="w-3 h-3 bg-red-100 rounded-full mr-2"></div>
//                   <span className="text-gray-600">Not Attempted</span>
//                 </div>
//               </div>

//               <div className="mt-4 p-3 bg-blue-50 rounded-lg">
//                 <p className="text-sm text-blue-700">
//                   <strong>Progress:</strong> {Object.keys(answers).length} / {questions.length} questions attempted
//                 </p>
//                 <p className="text-sm text-blue-700">
//                   <strong>Topic:</strong> {selectedTopic === 'all' ? 'All Topics' : selectedTopic}
//                 </p>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default QuizPage;


// import React, { useState } from "react";
// import ResultReview from "./ResultReview";

// // REPLACE WITH YOUR ACTUAL DEPLOYED WEB APP URL
// const API_URL = "https://script.google.com/macros/s/AKfycbzwusVB7uZ0OHHQea3hqSforR0U5IfUJZ1YsCT5CAdCnsJwQ_fczQ6UJ-MfTnJTUdoA3Q/exec";

// export default function Quiz() {
//   const [name, setName] = useState("");
//   const [prn, setPrn] = useState("");
//   const [started, setStarted] = useState(false);
//   const [questions, setQuestions] = useState([]);
//   const [current, setCurrent] = useState(0);
//   const [answers, setAnswers] = useState({});
//   const [finished, setFinished] = useState(false);
//   const [score, setScore] = useState(0);
//   const [loading, setLoading] = useState(false);

//   // ---------- RANDOMIZE ----------
//   function shuffle(arr) {
//     return [...arr]
//       .sort(() => Math.random() - 0.5)
//       .slice(0, 50);
//   }

//   // ---------- START QUIZ ----------
//   const startQuiz = async () => {
//     if (!name || !prn) {
//       alert("Enter Name & PRN");
//       return;
//     }

//     setLoading(true);
//     console.log("=== STARTING QUIZ ===");
//     console.log("Name:", name);
//     console.log("PRN:", prn);

//     try {
//       // Validate PRN
//       const validateURL = `${API_URL}?action=validate&prn=${prn}&_=${Date.now()}`;
//       console.log("Validate URL:", validateURL);
      
//       const validResponse = await fetch(validateURL);
//       console.log("Validate Response Status:", validResponse.status);
//       console.log("Validate Response OK:", validResponse.ok);
      
//       const validText = await validResponse.text();
//       console.log("Validate Raw Response:", validText);
      
//       let valid;
//       try {
//         valid = JSON.parse(validText);
//         console.log("Validate Parsed Response:", valid);
//       } catch (parseError) {
//         console.error("Failed to parse validate response:", parseError);
//         alert("Error: Server returned invalid response for validation");
//         setLoading(false);
//         return;
//       }

//       if (valid.status === "ERROR") {
//         console.error("Server error:", valid.message);
//         alert("Server error: " + valid.message);
//         setLoading(false);
//         return;
//       }

//       if (valid.status === "NOT_ALLOWED") {
//         alert("PRN not allowed");
//         setLoading(false);
//         return;
//       }

//       if (valid.status === "ALREADY_SUBMITTED") {
//         alert("You already attempted exam");
//         setLoading(false);
//         return;
//       }

//       // Get questions
//       const questionsURL = `${API_URL}?action=questions&_=${Date.now()}`;
//       console.log("Questions URL:", questionsURL);
      
//       const questionsResponse = await fetch(questionsURL);
//       console.log("Questions Response Status:", questionsResponse.status);
//       console.log("Questions Response OK:", questionsResponse.ok);
      
//       const questionsText = await questionsResponse.text();
//       console.log("Questions Raw Response:", questionsText);
      
//       let data;
//       try {
//         data = JSON.parse(questionsText);
//         console.log("Questions Parsed Response:", data);
//         console.log("Questions Count:", data.length);
//         console.log("First Question:", data[0]);
//       } catch (parseError) {
//         console.error("Failed to parse questions response:", parseError);
//         alert("Error: Server returned invalid response for questions");
//         setLoading(false);
//         return;
//       }

//       if (data.status === "ERROR") {
//         console.error("Server error:", data.message);
//         alert("Server error: " + data.message);
//         setLoading(false);
//         return;
//       }

//       if (!Array.isArray(data)) {
//         console.error("Questions response is not an array:", typeof data);
//         alert("Error: Invalid questions format");
//         setLoading(false);
//         return;
//       }

//       if (data.length === 0) {
//         alert("No questions available");
//         setLoading(false);
//         return;
//       }

//       const shuffled = shuffle(data);
//       console.log("Shuffled questions count:", shuffled.length);
      
//       setQuestions(shuffled);
//       setStarted(true);
      
//     } catch (error) {
//       console.error("=== ERROR STARTING QUIZ ===");
//       console.error("Error type:", error.constructor.name);
//       console.error("Error message:", error.message);
//       console.error("Error stack:", error.stack);
//       alert("Error connecting to server: " + error.message);
//     }
    
//     setLoading(false);
//   };

//   // ---------- SELECT OPTION ----------
//   const selectOption = (index) => {
//     setAnswers({
//       ...answers,
//       [current]: index + 1
//     });
//   };

//   // ---------- NEXT ----------
//   const next = () => {
//     if (current < questions.length - 1) {
//       setCurrent(current + 1);
//     } else {
//       submitExam();
//     }
//   };

//   // ---------- SUBMIT ----------
//   const submitExam = async () => {
//     console.log("=== SUBMITTING EXAM ===");
    
//     let s = 0;
//     questions.forEach((q, i) => {
//       if (answers[i] === q.answer) s++;
//     });
    
//     console.log("Final Score:", s);
//     setScore(s);
//     setLoading(true);

//     try {
//       const submitURL = `${API_URL}?action=submit&name=${encodeURIComponent(name)}&prn=${prn}&score=${s}&total=50&_=${Date.now()}`;
//       console.log("Submit URL:", submitURL);
      
//       const response = await fetch(submitURL);
//       console.log("Submit Response Status:", response.status);
      
//       const responseText = await response.text();
//       console.log("Submit Raw Response:", responseText);
      
//       const result = JSON.parse(responseText);
//       console.log("Submit Parsed Response:", result);
      
//       setFinished(true);
//     } catch (error) {
//       console.error("=== ERROR SUBMITTING EXAM ===");
//       console.error("Error:", error);
//       alert("Error submitting exam. Your score is " + s);
//       setFinished(true);
//     }
    
//     setLoading(false);
//   };

//   // ---------- START SCREEN ----------
//   if (!started) {
//     return (
//       <div style={{ padding: 30, maxWidth: 500, margin: "auto" }}>
//         <h1 style={{ textAlign: "center", color: "#333" }}>C Programming Unit 1 Quiz</h1>
        
//         <div style={{ marginBottom: 20 }}>
//           <label style={{ display: "block", marginBottom: 5 }}>Name:</label>
//           <input
//             type="text"
//             value={name}
//             onChange={(e) => setName(e.target.value)}
//             style={{
//               width: "100%",
//               padding: 10,
//               fontSize: 16,
//               border: "1px solid #ccc",
//               borderRadius: 4
//             }}
//             disabled={loading}
//           />
//         </div>

//         <div style={{ marginBottom: 20 }}>
//           <label style={{ display: "block", marginBottom: 5 }}>PRN:</label>
//           <input
//             type="text"
//             value={prn}
//             onChange={(e) => setPrn(e.target.value)}
//             style={{
//               width: "100%",
//               padding: 10,
//               fontSize: 16,
//               border: "1px solid #ccc",
//               borderRadius: 4
//             }}
//             disabled={loading}
//           />
//         </div>

//         <button
//           onClick={startQuiz}
//           disabled={loading}
//           style={{
//             width: "100%",
//             padding: 15,
//             fontSize: 18,
//             backgroundColor: loading ? "#ccc" : "#4CAF50",
//             color: "white",
//             border: "none",
//             borderRadius: 4,
//             cursor: loading ? "not-allowed" : "pointer"
//           }}
//         >
//           {loading ? "Loading..." : "Start Exam"}
//         </button>
//       </div>
//     );
//   }

//   // ---------- RESULT ----------
//   if (finished) {
//     return <ResultReview questions={questions} answers={answers} score={score} />;
//   }

//   // ---------- QUIZ UI ----------
//   const q = questions[current];
  
//   if (!q) {
//     return <div style={{ padding: 30 }}>Loading question...</div>;
//   }

//   return (
//     <div style={{ padding: 30, maxWidth: 800, margin: "auto" }}>
//       <h3 style={{ color: "#555" }}>Question {current + 1} / 50</h3>
      
//       <h2 style={{ marginBottom: 30, color: "#333" }}>{q.question}</h2>

//       <div>
//         {q.options.map((op, i) => (
//           <div
//             key={i}
//             style={{
//               marginBottom: 15,
//               padding: 15,
//               border: answers[current] === i + 1 ? "2px solid #4CAF50" : "1px solid #ddd",
//               borderRadius: 8,
//               cursor: "pointer",
//               backgroundColor: answers[current] === i + 1 ? "#e8f5e9" : "white"
//             }}
//             onClick={() => selectOption(i)}
//           >
//             <input
//               type="radio"
//               checked={answers[current] === i + 1}
//               onChange={() => selectOption(i)}
//               style={{ marginRight: 10 }}
//             />
//             {op}
//           </div>
//         ))}
//       </div>

//       <button
//         onClick={next}
//         disabled={!answers[current]}
//         style={{
//           marginTop: 30,
//           padding: 15,
//           fontSize: 18,
//           backgroundColor: answers[current] ? "#2196F3" : "#ccc",
//           color: "white",
//           border: "none",
//           borderRadius: 4,
//           cursor: answers[current] ? "pointer" : "not-allowed",
//           width: "100%"
//         }}
//       >
//         {current === 49 ? "Submit Exam" : "Next"}
//       </button>
//     </div>
//   );
// }

//import React, { useState, useEffect } from "react";
import ResultReview from "./ResultReview";

const API_URL = "https://script.google.com/macros/s/AKfycbzwusVB7uZ0OHHQea3hqSforR0U5IfUJZ1YsCT5CAdCnsJwQ_fczQ6UJ-MfTnJTUdoA3Q/exec";

export default function Quiz() {
  const [name, setName] = useState("");
  const [prn, setPrn] = useState("");
  const [started, setStarted] = useState(false);
  const [questions, setQuestions] = useState([]);
  const [current, setCurrent] = useState(0);
  const [answers, setAnswers] = useState({});
  const [finished, setFinished] = useState(false);
  const [score, setScore] = useState(0);
  const [loading, setLoading] = useState(false);
  const [timeLeft, setTimeLeft] = useState(30 * 60); // 30 minutes in seconds

  // Timer functionality
  useEffect(() => {
    if (started && !finished && timeLeft > 0) {
      const timer = setInterval(() => {
        setTimeLeft((prev) => {
          if (prev <= 1) {
            clearInterval(timer);
            submitExam(); // Auto-submit when time runs out
            return 0;
          }
          return prev - 1;
        });
      }, 1000);

      return () => clearInterval(timer);
    }
  }, [started, finished, timeLeft]);

  // Format time as MM:SS
  const formatTime = (seconds) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins.toString().padStart(2, "0")}:${secs.toString().padStart(2, "0")}`;
  };

  // Randomize questions
  function shuffle(arr) {
    return [...arr]
      .sort(() => Math.random() - 0.5)
      .slice(0, 50);
  }

  // Start Quiz
  const startQuiz = async () => {
    if (!name.trim() || !prn.trim()) {
      alert("Please enter both Name and PRN");
      return;
    }

    setLoading(true);

    try {
      // Validate PRN
      const validateURL = `${API_URL}?action=validate&prn=${prn}&_=${Date.now()}`;
      const validResponse = await fetch(validateURL);
      const valid = await validResponse.json();

      if (valid.status === "NOT_ALLOWED") {
        alert("PRN not allowed. Please contact your instructor.");
        setLoading(false);
        return;
      }

      if (valid.status === "ALREADY_SUBMITTED") {
        alert("You have already attempted this exam.");
        setLoading(false);
        return;
      }

      // Get questions
      const questionsURL = `${API_URL}?action=questions&_=${Date.now()}`;
      const questionsResponse = await fetch(questionsURL);
      const data = await questionsResponse.json();

      if (!Array.isArray(data) || data.length === 0) {
        alert("No questions available. Please contact your instructor.");
        setLoading(false);
        return;
      }

      setQuestions(shuffle(data));
      setStarted(true);
      setTimeLeft(30 * 60); // Reset timer
    } catch (error) {
      console.error("Error starting quiz:", error);
      alert("Error connecting to server. Please try again.");
    }

    setLoading(false);
  };

  // Select option
  const selectOption = (index) => {
    setAnswers({
      ...answers,
      [current]: index + 1,
    });
  };

  // Navigate to question
  const goToQuestion = (index) => {
    setCurrent(index);
  };

  // Submit exam
  const submitExam = async () => {
    let s = 0;
    questions.forEach((q, i) => {
      if (answers[i] === q.answer) s++;
    });

    setScore(s);
    setLoading(true);

    try {
      await fetch(
        `${API_URL}?action=submit&name=${encodeURIComponent(name)}&prn=${prn}&score=${s}&total=50&_=${Date.now()}`
      );
      setFinished(true);
    } catch (error) {
      console.error("Error submitting exam:", error);
      alert("Error submitting exam. Your score is " + s);
      setFinished(true);
    }

    setLoading(false);
  };

  // Confirm submit
  const handleSubmit = () => {
    const unanswered = questions.length - Object.keys(answers).length;
    if (unanswered > 0) {
      if (
        window.confirm(
          `You have ${unanswered} unanswered questions. Are you sure you want to submit?`
        )
      ) {
        submitExam();
      }
    } else {
      if (window.confirm("Are you sure you want to submit the exam?")) {
        submitExam();
      }
    }
  };

  // ---------- START SCREEN ----------
  if (!started) {
    return (
      <div
        style={{
          minHeight: "100vh",
          background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          padding: 20,
        }}
      >
        <div
          style={{
            backgroundColor: "white",
            borderRadius: 20,
            boxShadow: "0 20px 60px rgba(0,0,0,0.3)",
            padding: 40,
            maxWidth: 500,
            width: "100%",
          }}
        >
          <div style={{ textAlign: "center", marginBottom: 30 }}>
            <h1
              style={{
                color: "#667eea",
                fontSize: 32,
                fontWeight: "bold",
                margin: 0,
                marginBottom: 10,
              }}
            >
              📚 C Programming Quiz
            </h1>
            <p style={{ color: "#666", fontSize: 16, margin: 0 }}>
              Unit 1 Assessment
            </p>
          </div>

          <div
            style={{
              backgroundColor: "#f8f9ff",
              borderRadius: 12,
              padding: 20,
              marginBottom: 25,
            }}
          >
            <h3 style={{ margin: 0, marginBottom: 10, color: "#333" }}>
              ⚠️ Instructions
            </h3>
            <ul
              style={{
                margin: 0,
                paddingLeft: 20,
                color: "#666",
                fontSize: 14,
                lineHeight: 1.8,
              }}
            >
              <li>Total Questions: 50</li>
              <li>Time Limit: 30 minutes</li>
              <li>Each question has 4 options</li>
              <li>Quiz will auto-submit when time expires</li>
              <li>You can navigate between questions</li>
            </ul>
          </div>

          <div style={{ marginBottom: 20 }}>
            <label
              style={{
                display: "block",
                marginBottom: 8,
                color: "#333",
                fontWeight: "600",
                fontSize: 14,
              }}
            >
              Full Name *
            </label>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Enter your full name"
              style={{
                width: "100%",
                padding: 14,
                fontSize: 16,
                border: "2px solid #e0e0e0",
                borderRadius: 10,
                outline: "none",
                transition: "border-color 0.3s",
                boxSizing: "border-box",
              }}
              onFocus={(e) => (e.target.style.borderColor = "#667eea")}
              onBlur={(e) => (e.target.style.borderColor = "#e0e0e0")}
              disabled={loading}
            />
          </div>

          <div style={{ marginBottom: 30 }}>
            <label
              style={{
                display: "block",
                marginBottom: 8,
                color: "#333",
                fontWeight: "600",
                fontSize: 14,
              }}
            >
              PRN Number *
            </label>
            <input
              type="text"
              value={prn}
              onChange={(e) => setPrn(e.target.value)}
              placeholder="Enter your PRN"
              style={{
                width: "100%",
                padding: 14,
                fontSize: 16,
                border: "2px solid #e0e0e0",
                borderRadius: 10,
                outline: "none",
                transition: "border-color 0.3s",
                boxSizing: "border-box",
              }}
              onFocus={(e) => (e.target.style.borderColor = "#667eea")}
              onBlur={(e) => (e.target.style.borderColor = "#e0e0e0")}
              disabled={loading}
            />
          </div>

          <button
            onClick={startQuiz}
            disabled={loading}
            style={{
              width: "100%",
              padding: 16,
              fontSize: 18,
              fontWeight: "bold",
              background: loading
                ? "#ccc"
                : "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
              color: "white",
              border: "none",
              borderRadius: 10,
              cursor: loading ? "not-allowed" : "pointer",
              transition: "transform 0.2s, box-shadow 0.2s",
              boxShadow: loading
                ? "none"
                : "0 4px 15px rgba(102, 126, 234, 0.4)",
            }}
            onMouseEnter={(e) => {
              if (!loading) {
                e.target.style.transform = "translateY(-2px)";
                e.target.style.boxShadow =
                  "0 6px 20px rgba(102, 126, 234, 0.6)";
              }
            }}
            onMouseLeave={(e) => {
              if (!loading) {
                e.target.style.transform = "translateY(0)";
                e.target.style.boxShadow =
                  "0 4px 15px rgba(102, 126, 234, 0.4)";
              }
            }}
          >
            {loading ? "Loading..." : "Start Exam"}
          </button>
        </div>
      </div>
    );
  }

  // ---------- RESULT SCREEN ----------
  if (finished) {
    return (
      <ResultReview
        questions={questions}
        answers={answers}
        score={score}
        name={name}
        prn={prn}
      />
    );
  }

  // ---------- QUIZ SCREEN ----------
  const q = questions[current];

  if (!q) {
    return (
      <div style={{ padding: 30, textAlign: "center" }}>Loading question...</div>
    );
  }

  const answeredCount = Object.keys(answers).length;
  const unansweredCount = questions.length - answeredCount;

  return (
    <div
      style={{
        minHeight: "100vh",
        backgroundColor: "#f5f7fa",
        padding: 20,
      }}
    >
      {/* Header with student info and timer */}
      <div
        style={{
          background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
          borderRadius: 15,
          padding: 20,
          marginBottom: 20,
          boxShadow: "0 4px 15px rgba(0,0,0,0.1)",
        }}
      >
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            flexWrap: "wrap",
            gap: 15,
          }}
        >
          <div style={{ color: "white" }}>
            <div style={{ fontSize: 18, fontWeight: "bold" }}>{name}</div>
            <div style={{ fontSize: 14, opacity: 0.9 }}>PRN: {prn}</div>
          </div>
          <div
            style={{
              backgroundColor: timeLeft < 300 ? "#ff4444" : "rgba(255,255,255,0.2)",
              padding: "12px 24px",
              borderRadius: 10,
              color: "white",
              fontSize: 24,
              fontWeight: "bold",
              fontFamily: "monospace",
              minWidth: 100,
              textAlign: "center",
            }}
          >
            ⏱️ {formatTime(timeLeft)}
          </div>
        </div>
      </div>

      <div style={{ display: "flex", gap: 20, flexWrap: "wrap-reverse" }}>
        {/* Main question area */}
        <div style={{ flex: "1 1 600px" }}>
          <div
            style={{
              backgroundColor: "white",
              borderRadius: 15,
              padding: 30,
              boxShadow: "0 2px 10px rgba(0,0,0,0.08)",
              marginBottom: 20,
            }}
          >
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                marginBottom: 25,
                paddingBottom: 15,
                borderBottom: "2px solid #f0f0f0",
              }}
            >
              <h3 style={{ color: "#667eea", margin: 0, fontSize: 18 }}>
                Question {current + 1} of {questions.length}
              </h3>
              <div
                style={{
                  backgroundColor: answers[current] ? "#4caf50" : "#ffeb3b",
                  color: answers[current] ? "white" : "#333",
                  padding: "6px 12px",
                  borderRadius: 20,
                  fontSize: 12,
                  fontWeight: "bold",
                }}
              >
                {answers[current] ? "✓ Answered" : "⚠ Unanswered"}
              </div>
            </div>

            <h2
              style={{
                color: "#333",
                fontSize: 20,
                lineHeight: 1.6,
                marginBottom: 30,
              }}
            >
              {q.question}
            </h2>

            <div>
              {q.options.map((op, i) => (
                <div
                  key={i}
                  style={{
                    marginBottom: 12,
                    padding: 16,
                    border:
                      answers[current] === i + 1
                        ? "3px solid #667eea"
                        : "2px solid #e0e0e0",
                    borderRadius: 12,
                    cursor: "pointer",
                    backgroundColor:
                      answers[current] === i + 1 ? "#f0f4ff" : "white",
                    transition: "all 0.2s",
                  }}
                  onClick={() => selectOption(i)}
                  onMouseEnter={(e) => {
                    if (answers[current] !== i + 1) {
                      e.currentTarget.style.backgroundColor = "#f9f9f9";
                      e.currentTarget.style.borderColor = "#667eea";
                    }
                  }}
                  onMouseLeave={(e) => {
                    if (answers[current] !== i + 1) {
                      e.currentTarget.style.backgroundColor = "white";
                      e.currentTarget.style.borderColor = "#e0e0e0";
                    }
                  }}
                >
                  <label
                    style={{
                      display: "flex",
                      alignItems: "center",
                      cursor: "pointer",
                      fontSize: 16,
                    }}
                  >
                    <input
                      type="radio"
                      checked={answers[current] === i + 1}
                      onChange={() => selectOption(i)}
                      style={{
                        marginRight: 12,
                        width: 20,
                        height: 20,
                        cursor: "pointer",
                      }}
                    />
                    <span>{op}</span>
                  </label>
                </div>
              ))}
            </div>
          </div>

          {/* Navigation buttons */}
          <div
            style={{
              display: "flex",
              gap: 10,
              justifyContent: "space-between",
            }}
          >
            <button
              onClick={() => setCurrent(Math.max(0, current - 1))}
              disabled={current === 0}
              style={{
                padding: "12px 24px",
                fontSize: 16,
                backgroundColor: current === 0 ? "#e0e0e0" : "#667eea",
                color: "white",
                border: "none",
                borderRadius: 10,
                cursor: current === 0 ? "not-allowed" : "pointer",
                fontWeight: "600",
              }}
            >
              ← Previous
            </button>

            {current === questions.length - 1 ? (
              <button
                onClick={handleSubmit}
                style={{
                  padding: "12px 32px",
                  fontSize: 16,
                  background: "linear-gradient(135deg, #4caf50 0%, #45a049 100%)",
                  color: "white",
                  border: "none",
                  borderRadius: 10,
                  cursor: "pointer",
                  fontWeight: "bold",
                  boxShadow: "0 4px 15px rgba(76, 175, 80, 0.4)",
                }}
              >
                Submit Exam
              </button>
            ) : (
              <button
                onClick={() => setCurrent(Math.min(questions.length - 1, current + 1))}
                style={{
                  padding: "12px 24px",
                  fontSize: 16,
                  backgroundColor: "#667eea",
                  color: "white",
                  border: "none",
                  borderRadius: 10,
                  cursor: "pointer",
                  fontWeight: "600",
                }}
              >
                Next →
              </button>
            )}
          </div>
        </div>

        {/* Question palette sidebar */}
        <div style={{ flex: "0 0 280px" }}>
          <div
            style={{
              backgroundColor: "white",
              borderRadius: 15,
              padding: 20,
              boxShadow: "0 2px 10px rgba(0,0,0,0.08)",
              position: "sticky",
              top: 20,
            }}
          >
            <h3
              style={{
                margin: 0,
                marginBottom: 15,
                fontSize: 16,
                color: "#333",
              }}
            >
              Question Palette
            </h3>

            <div style={{ marginBottom: 20, fontSize: 13 }}>
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  marginBottom: 8,
                }}
              >
                <div
                  style={{
                    width: 16,
                    height: 16,
                    backgroundColor: "#4caf50",
                    borderRadius: 3,
                    marginRight: 8,
                  }}
                />
                <span>Answered ({answeredCount})</span>
              </div>
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  marginBottom: 8,
                }}
              >
                <div
                  style={{
                    width: 16,
                    height: 16,
                    backgroundColor: "#ffcdd2",
                    borderRadius: 3,
                    marginRight: 8,
                  }}
                />
                <span>Unanswered ({unansweredCount})</span>
              </div>
              <div style={{ display: "flex", alignItems: "center" }}>
                <div
                  style={{
                    width: 16,
                    height: 16,
                    backgroundColor: "#667eea",
                    borderRadius: 3,
                    marginRight: 8,
                  }}
                />
                <span>Current</span>
              </div>
            </div>

            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(5, 1fr)",
                gap: 8,
                maxHeight: "calc(100vh - 300px)",
                overflowY: "auto",
              }}
            >
              {questions.map((_, i) => (
                <button
                  key={i}
                  onClick={() => goToQuestion(i)}
                  style={{
                    width: "100%",
                    aspectRatio: "1",
                    border:
                      current === i ? "3px solid #667eea" : "1px solid #ddd",
                    borderRadius: 8,
                    backgroundColor: answers[i]
                      ? "#4caf50"
                      : current === i
                      ? "#667eea"
                      : "#ffcdd2",
                    color: answers[i] || current === i ? "white" : "#333",
                    fontSize: 14,
                    fontWeight: current === i ? "bold" : "normal",
                    cursor: "pointer",
                    transition: "all 0.2s",
                  }}
                  onMouseEnter={(e) => {
                    e.target.style.transform = "scale(1.1)";
                  }}
                  onMouseLeave={(e) => {
                    e.target.style.transform = "scale(1)";
                  }}
                >
                  {i + 1}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}