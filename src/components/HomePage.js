// import React from 'react';
// import { useNavigate } from 'react-router-dom';

// const HomePage = () => {
//   const navigate = useNavigate();

//   const handleQuizStart = (subject, level) => {
//     navigate(`/quiz/${subject}/${level}`);
//   };

//   return (
//     <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 flex items-center justify-center p-4">
//       <div className="bg-white rounded-2xl shadow-2xl p-8 max-w-2xl w-full">
//         <h1 className="text-4xl font-bold text-center text-gray-800 mb-2">
//           DBMS Quiz Master
//         </h1>
//         <p className="text-center text-gray-600 mb-8">
//           Test your Database Management System knowledge
//         </p>
        
//         <div className="bg-blue-50 rounded-lg p-6 mb-8">
//           <h2 className="text-2xl font-semibold text-center text-blue-800 mb-4">
//             Choose Your Quiz Level
//           </h2>
          
//           <div className="grid md:grid-cols-2 gap-6">
//             <div className="bg-white rounded-xl shadow-lg p-6 border-2 border-green-200 hover:border-green-400 transition-all duration-300">
//               <h3 className="text-xl font-bold text-green-800 mb-3">Basic Level</h3>
//               <p className="text-gray-600 mb-4">
//                 Perfect for beginners. Covers fundamental concepts and basic SQL commands.
//               </p>
//               <ul className="text-sm text-gray-500 mb-4 space-y-1">
//                 <li>✓ Foundational Concepts</li>
//                 <li>✓ Basic SQL Syntax</li>
//                 <li>✓ Simple Queries</li>
//                 <li>✓ 25 Questions - 5 Minutes</li>
//               </ul>
//               <button
//                 onClick={() => handleQuizStart('dbms', 'basic')}
//                 className="w-full bg-green-500 hover:bg-green-600 text-white font-semibold py-3 px-4 rounded-lg transition-colors duration-200"
//               >
//                 Start Basic Quiz
//               </button>
//             </div>

//             <div className="bg-white rounded-xl shadow-lg p-6 border-2 border-purple-200 hover:border-purple-400 transition-all duration-300">
//               <h3 className="text-xl font-bold text-purple-800 mb-3">Advanced Level</h3>
//               <p className="text-gray-600 mb-4">
//                 For experienced learners. Tests advanced concepts and complex queries.
//               </p>
//               <ul className="text-sm text-gray-500 mb-4 space-y-1">
//                 <li>✓ Complex Relationships</li>
//                 <li>✓ Advanced SQL Features</li>
//                 <li>✓ Optimization Concepts</li>
//                 <li>✓ 25 Questions - 5 Minutes</li>
//               </ul>
//               <button
//                 onClick={() => handleQuizStart('dbms', 'advanced')}
//                 className="w-full bg-purple-500 hover:bg-purple-600 text-white font-semibold py-3 px-4 rounded-lg transition-colors duration-200"
//               >
//                 Start Advanced Quiz
//               </button>
//             </div>
//           </div>
//         </div>

//         <div className="text-center">
//           <h3 className="font-semibold text-gray-700 mb-3">Quiz Features:</h3>
//           <div className="grid grid-cols-2 md:grid-cols-4 gap-3 text-sm">
//             <div className="bg-gray-100 rounded-lg p-3">
//               <div className="font-medium text-blue-600">Timer</div>
//               <div className="text-gray-500">5 minutes</div>
//             </div>
//             <div className="bg-gray-100 rounded-lg p-3">
//               <div className="font-medium text-blue-600">Questions</div>
//               <div className="text-gray-500">25 total</div>
//             </div>
//             <div className="bg-gray-100 rounded-lg p-3">
//               <div className="font-medium text-blue-600">Progress</div>
//               <div className="text-gray-500">Visual tracker</div>
//             </div>
//             <div className="bg-gray-100 rounded-lg p-3">
//               <div className="font-medium text-blue-600">Review</div>
//               <div className="text-gray-500">With explanations</div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default HomePage;


// import React, { useState } from 'react';
// import { useNavigate } from 'react-router-dom';
// import { quizData } from '../data/quizData';

// const HomePage = () => {
//   const navigate = useNavigate();
//   const [selectedTopic, setSelectedTopic] = useState('all');

//   const handleQuizStart = (subject, level, topic = 'all') => {
//     navigate(`/quiz/${subject}/${level}`, { state: { topic } });
//   };

//   const basicTopics = quizData.dbms.basic.topics;

//   return (
//     <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 flex items-center justify-center p-4">
//       <div className="bg-white rounded-2xl shadow-2xl p-8 max-w-4xl w-full">
//         <h1 className="text-4xl font-bold text-center text-gray-800 mb-2">
//           DBMS Quiz Master
//         </h1>
//         <p className="text-center text-gray-600 mb-8">
//           Test your Database Management System knowledge
//         </p>
        
//         <div className="bg-blue-50 rounded-lg p-6 mb-8">
//           <h2 className="text-2xl font-semibold text-center text-blue-800 mb-6">
//             Choose Your Quiz Level & Topic
//           </h2>
          
//           {/* Topic Selection */}
//           <div className="mb-6">
//             <label className="block text-sm font-medium text-gray-700 mb-3">
//               Select Topic (Optional):
//             </label>
//             <select
//               value={selectedTopic}
//               onChange={(e) => setSelectedTopic(e.target.value)}
//               className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
//             >
//               <option value="all">All Topics (Mixed Quiz)</option>
//               {basicTopics.map((topic, index) => (
//                 <option key={index} value={topic.topic}>
//                   {topic.topic}
//                 </option>
//               ))}
//             </select>
//           </div>
          
//           <div className="grid md:grid-cols-2 gap-6">
//             <div className="bg-white rounded-xl shadow-lg p-6 border-2 border-green-200 hover:border-green-400 transition-all duration-300">
//               <h3 className="text-xl font-bold text-green-800 mb-3">Basic Level</h3>
//               <p className="text-gray-600 mb-4">
//                 Perfect for beginners. Covers fundamental concepts and basic SQL commands.
//               </p>
//               <ul className="text-sm text-gray-500 mb-4 space-y-1">
//                 <li>✓ Foundational Concepts</li>
//                 <li>✓ Basic SQL Syntax</li>
//                 <li>✓ Simple Queries</li>
//                 <li>✓ 25 Questions - 5 Minutes</li>
//               </ul>
//               <button
//                 onClick={() => handleQuizStart('dbms', 'basic', selectedTopic)}
//                 className="w-full bg-green-500 hover:bg-green-600 text-white font-semibold py-3 px-4 rounded-lg transition-colors duration-200"
//               >
//                 Start Basic Quiz
//               </button>
//             </div>

//             <div className="bg-white rounded-xl shadow-lg p-6 border-2 border-purple-200 hover:border-purple-400 transition-all duration-300">
//               <h3 className="text-xl font-bold text-purple-800 mb-3">Advanced Level</h3>
//               <p className="text-gray-600 mb-4">
//                 For experienced learners. Tests advanced concepts and complex queries.
//               </p>
//               <ul className="text-sm text-gray-500 mb-4 space-y-1">
//                 <li>✓ Complex Relationships</li>
//                 <li>✓ Advanced SQL Features</li>
//                 <li>✓ Optimization Concepts</li>
//                 <li>✓ 25 Questions - 5 Minutes</li>
//               </ul>
//               <button
//                 onClick={() => handleQuizStart('dbms', 'advanced', selectedTopic)}
//                 className="w-full bg-purple-500 hover:bg-purple-600 text-white font-semibold py-3 px-4 rounded-lg transition-colors duration-200"
//               >
//                 Start Advanced Quiz
//               </button>
//             </div>
//           </div>
//         </div>

//         {/* Available Topics Overview */}
//         <div className="mb-8">
//           <h3 className="text-lg font-semibold text-gray-800 mb-4">Available Topics:</h3>
//           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
//             {basicTopics.map((topic, index) => (
//               <div key={index} className="bg-gray-50 rounded-lg p-3 border border-gray-200">
//                 <h4 className="font-medium text-gray-700">{topic.topic}</h4>
//                 <p className="text-sm text-gray-500">{topic.questions.length} questions</p>
//               </div>
//             ))}
//           </div>
//         </div>

//         <div className="text-center">
//           <h3 className="font-semibold text-gray-700 mb-3">Quiz Features:</h3>
//           <div className="grid grid-cols-2 md:grid-cols-4 gap-3 text-sm">
//             <div className="bg-gray-100 rounded-lg p-3">
//               <div className="font-medium text-blue-600">Timer</div>
//               <div className="text-gray-500">5 minutes</div>
//             </div>
//             <div className="bg-gray-100 rounded-lg p-3">
//               <div className="font-medium text-blue-600">Questions</div>
//               <div className="text-gray-500">25 total</div>
//             </div>
//             <div className="bg-gray-100 rounded-lg p-3">
//               <div className="font-medium text-blue-600">Progress</div>
//               <div className="text-gray-500">Visual tracker</div>
//             </div>
//             <div className="bg-gray-100 rounded-lg p-3">
//               <div className="font-medium text-blue-600">Review</div>
//               <div className="text-gray-500">With explanations</div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default HomePage;


import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { quizData } from '../data/cprogramming/quizData';

const HomePage = () => {
  const navigate = useNavigate();
  const [selectedTopic, setSelectedTopic] = useState('all');

  const handleQuizStart = (subject, level, topic = 'all') => {
    navigate(`/quiz/${subject}/${level}`, { state: { topic } });
  };

  const basicTopics = quizData.cprogramming.basic.topics;

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 flex items-center justify-center p-4">
      <div className="bg-white rounded-2xl shadow-2xl p-8 max-w-4xl w-full">
        <h1 className="text-4xl font-bold text-center text-gray-800 mb-2">
          C Programming Quiz Master
        </h1>
        <p className="text-center text-gray-600 mb-8">
          Test your C Programming knowledge - Unit 1
        </p>
        
        <div className="bg-blue-50 rounded-lg p-6 mb-8">
          <h2 className="text-2xl font-semibold text-center text-blue-800 mb-6">
            Choose Your Quiz Level & Topic
          </h2>
          
          {/* Topic Selection */}
          <div className="mb-6">
            <label className="block text-sm font-medium text-gray-700 mb-3">
              Select Topic (Optional):
            </label>
            <select
              value={selectedTopic}
              onChange={(e) => setSelectedTopic(e.target.value)}
              className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            >
              <option value="all">All Topics (Mixed Quiz)</option>
              {basicTopics.map((topic, index) => (
                <option key={index} value={topic.topic}>
                  {topic.topic}
                </option>
              ))}
            </select>
          </div>
          
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-white rounded-xl shadow-lg p-6 border-2 border-green-200 hover:border-green-400 transition-all duration-300">
              <h3 className="text-xl font-bold text-green-800 mb-3">Unit 1 - Basics</h3>
              <p className="text-gray-600 mb-4">
                Perfect for beginners. Covers computer basics, algorithms, and program development.
              </p>
              <ul className="text-sm text-gray-500 mb-4 space-y-1">
                <li>✓ Computer System Basics</li>
                <li>✓ Software & Translators</li>
                <li>✓ Algorithms & Flowcharts</li>
                <li>✓ 50 Questions - 10 Minutes</li>
              </ul>
              <button
                onClick={() => handleQuizStart('cprogramming', 'basic', selectedTopic)}
                className="w-full bg-green-500 hover:bg-green-600 text-white font-semibold py-3 px-4 rounded-lg transition-colors duration-200"
              >
                Start Unit 1 Quiz
              </button>
            </div>

            <div className="bg-white rounded-xl shadow-lg p-6 border-2 border-purple-200 hover:border-purple-400 transition-all duration-300">
              <h3 className="text-xl font-bold text-purple-800 mb-3">Advanced Level</h3>
              <p className="text-gray-600 mb-4">
                For experienced learners. Tests advanced concepts and problem-solving skills.
              </p>
              <ul className="text-sm text-gray-500 mb-4 space-y-1">
                <li>✓ Complex Concepts</li>
                <li>✓ Advanced Programming</li>
                <li>✓ Problem Solving</li>
                <li>✓ 50 Questions - 10 Minutes</li>
              </ul>
              <button
                onClick={() => handleQuizStart('cprogramming', 'advanced', selectedTopic)}
                className="w-full bg-purple-500 hover:bg-purple-600 text-white font-semibold py-3 px-4 rounded-lg transition-colors duration-200"
              >
                Start Advanced Quiz
              </button>
            </div>
          </div>
        </div>

        {/* Available Topics Overview */}
        <div className="mb-8">
          <h3 className="text-lg font-semibold text-gray-800 mb-4">Available Topics:</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
            {basicTopics.map((topic, index) => (
              <div key={index} className="bg-gray-50 rounded-lg p-3 border border-gray-200">
                <h4 className="font-medium text-gray-700">{topic.topic}</h4>
                <p className="text-sm text-gray-500">{topic.questions.length} questions</p>
              </div>
            ))}
          </div>
        </div>

        <div className="text-center">
          <h3 className="font-semibold text-gray-700 mb-3">Quiz Features:</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 text-sm">
            <div className="bg-gray-100 rounded-lg p-3">
              <div className="font-medium text-blue-600">Timer</div>
              <div className="text-gray-500">10 minutes</div>
            </div>
            <div className="bg-gray-100 rounded-lg p-3">
              <div className="font-medium text-blue-600">Questions</div>
              <div className="text-gray-500">50 total</div>
            </div>
            <div className="bg-gray-100 rounded-lg p-3">
              <div className="font-medium text-blue-600">Progress</div>
              <div className="text-gray-500">Visual tracker</div>
            </div>
            <div className="bg-gray-100 rounded-lg p-3">
              <div className="font-medium text-blue-600">Review</div>
              <div className="text-gray-500">With explanations</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;