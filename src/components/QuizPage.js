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


import React, { useState, useEffect } from 'react';
import { useParams, useNavigate, useLocation } from 'react-router-dom';
import { getAllQuestions, getQuestionsByTopic } from '../data/cprogramming/quizData';

const QuizPage = () => {
  const { subject, level } = useParams();
  const navigate = useNavigate();
  const location = useLocation();
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState({});
  const [timeLeft, setTimeLeft] = useState(600); // 10 minutes in seconds
  const [quizCompleted, setQuizCompleted] = useState(false);

  // Get selected topic from navigation state or use 'all'
  const selectedTopic = location.state?.topic || 'all';

  // Get questions based on selected topic
  const questions = selectedTopic === 'all' 
    ? getAllQuestions(subject, level)
    : getQuestionsByTopic(subject, level, selectedTopic);
  
  useEffect(() => {
    if (questions.length === 0) {
      navigate('/');
      return;
    }

    const timer = setInterval(() => {
      setTimeLeft((time) => {
        if (time <= 1) {
          clearInterval(timer);
          handleQuizSubmit();
          return 0;
        }
        return time - 1;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, [questions.length, navigate]);

  const handleAnswerSelect = (questionId, answerIndex) => {
    setAnswers(prev => ({
      ...prev,
      [questionId]: answerIndex
    }));
  };

  const handleQuizSubmit = () => {
    if (quizCompleted) return;
    
    setQuizCompleted(true);
    const score = calculateScore();
    
    // Store results in localStorage for results page
    localStorage.setItem('quizResults', JSON.stringify({
      subject,
      level,
      topic: selectedTopic,
      score,
      totalQuestions: questions.length,
      answers,
      questions
    }));
    
    navigate('/results');
  };

  const calculateScore = () => {
    return questions.reduce((score, question) => {
      if (answers[question.id] === question.correctAnswer) {
        return score + 1;
      }
      return score;
    }, 0);
  };

  const formatTime = (seconds) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins}:${secs < 10 ? '0' : ''}${secs}`;
  };

  const getQuestionStatus = (questionId) => {
    return answers[questionId] !== undefined ? 'attempted' : 'unattempted';
  };

  if (questions.length === 0) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-red-600">Quiz not found!</h2>
          <button 
            onClick={() => navigate('/')}
            className="mt-4 bg-blue-500 text-white px-6 py-2 rounded-lg"
          >
            Go Home
          </button>
        </div>
      </div>
    );
  }

  const currentQ = questions[currentQuestion];

  return (
    <div className="min-h-screen bg-gray-50 p-4">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="bg-white rounded-xl shadow-lg p-6 mb-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div>
              <h1 className="text-2xl font-bold text-gray-800">
                {level === 'basic' ? 'Unit 1' : 'Advanced'} C Programming Quiz
              </h1>
              <p className="text-gray-600">
                Topic: {selectedTopic === 'all' ? 'All Topics' : selectedTopic}
              </p>
              <p className="text-sm text-gray-500">
                Module: {currentQ.module}
              </p>
            </div>
            <div className="flex items-center space-x-4 mt-4 md:mt-0">
              <div className={`text-lg font-semibold ${
                timeLeft < 60 ? 'text-red-600' : 'text-gray-700'
              }`}>
                ⏱️ {formatTime(timeLeft)}
              </div>
              <button
                onClick={handleQuizSubmit}
                className="bg-green-500 hover:bg-green-600 text-white font-semibold py-2 px-6 rounded-lg transition-colors duration-200"
              >
                Submit Quiz
              </button>
            </div>
          </div>
        </div>

        <div className="flex flex-col lg:flex-row gap-6">
          {/* Question Section */}
          <div className="lg:w-2/3">
            <div className="bg-white rounded-xl shadow-lg p-6 mb-6">
              <div className="flex justify-between items-center mb-4">
                <span className="text-sm text-gray-500">
                  Question {currentQuestion + 1} of {questions.length}
                </span>
                <span className="text-sm font-medium text-blue-600">
                  {currentQ.module}
                </span>
              </div>
              
              <h2 className="text-xl font-semibold text-gray-800 mb-6">
                {currentQ.question}
              </h2>

              <div className="space-y-3">
                {currentQ.options.map((option, index) => (
                  <label
                    key={index}
                    className={`flex items-center p-4 rounded-lg border-2 cursor-pointer transition-all duration-200 ${
                      answers[currentQ.id] === index
                        ? 'border-blue-500 bg-blue-50'
                        : 'border-gray-200 hover:border-gray-300'
                    }`}
                  >
                    <input
                      type="radio"
                      name={`question-${currentQ.id}`}
                      value={index}
                      checked={answers[currentQ.id] === index}
                      onChange={() => handleAnswerSelect(currentQ.id, index)}
                      className="h-4 w-4 text-blue-600 focus:ring-blue-500"
                    />
                    <span className="ml-3 text-gray-700">{option}</span>
                  </label>
                ))}
              </div>
            </div>

            {/* Navigation Buttons */}
            <div className="flex justify-between">
              <button
                onClick={() => setCurrentQuestion(prev => Math.max(0, prev - 1))}
                disabled={currentQuestion === 0}
                className="bg-gray-500 hover:bg-gray-600 disabled:bg-gray-300 text-white font-semibold py-2 px-6 rounded-lg transition-colors duration-200"
              >
                Previous
              </button>
              
              {currentQuestion === questions.length - 1 ? (
                <button
                  onClick={handleQuizSubmit}
                  className="bg-green-500 hover:bg-green-600 text-white font-semibold py-2 px-6 rounded-lg transition-colors duration-200"
                >
                  Review & Submit
                </button>
              ) : (
                <button
                  onClick={() => setCurrentQuestion(prev => Math.min(questions.length - 1, prev + 1))}
                  className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-6 rounded-lg transition-colors duration-200"
                >
                  Next
                </button>
              )}
            </div>
          </div>

          {/* Progress Tracker */}
          <div className="lg:w-1/3">
            <div className="bg-white rounded-xl shadow-lg p-6 sticky top-4">
              <h3 className="text-lg font-semibold text-gray-800 mb-4">
                Question Tracker
              </h3>
              
              <div className="grid grid-cols-5 gap-2 mb-4">
                {questions.map((question, index) => (
                  <button
                    key={question.id}
                    onClick={() => setCurrentQuestion(index)}
                    className={`h-10 rounded-lg flex items-center justify-center text-sm font-medium transition-all duration-200 ${
                      getQuestionStatus(question.id) === 'attempted'
                        ? 'bg-green-500 text-white hover:bg-green-600'
                        : 'bg-red-100 text-red-700 hover:bg-red-200'
                    } ${
                      currentQuestion === index ? 'ring-2 ring-blue-500 ring-offset-2' : ''
                    }`}
                  >
                    {index + 1}
                  </button>
                ))}
              </div>

              <div className="space-y-2 text-sm">
                <div className="flex items-center">
                  <div className="w-3 h-3 bg-green-500 rounded-full mr-2"></div>
                  <span className="text-gray-600">Attempted</span>
                </div>
                <div className="flex items-center">
                  <div className="w-3 h-3 bg-red-100 rounded-full mr-2"></div>
                  <span className="text-gray-600">Not Attempted</span>
                </div>
              </div>

              <div className="mt-4 p-3 bg-blue-50 rounded-lg">
                <p className="text-sm text-blue-700">
                  <strong>Progress:</strong> {Object.keys(answers).length} / {questions.length} questions attempted
                </p>
                <p className="text-sm text-blue-700">
                  <strong>Topic:</strong> {selectedTopic === 'all' ? 'All Topics' : selectedTopic}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default QuizPage;