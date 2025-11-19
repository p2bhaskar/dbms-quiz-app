import React from 'react';
import { useNavigate } from 'react-router-dom';

const HomePage = () => {
  const navigate = useNavigate();

  const handleQuizStart = (subject, level) => {
    navigate(`/quiz/${subject}/${level}`);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 flex items-center justify-center p-4">
      <div className="bg-white rounded-2xl shadow-2xl p-8 max-w-2xl w-full">
        <h1 className="text-4xl font-bold text-center text-gray-800 mb-2">
          DBMS Quiz Master
        </h1>
        <p className="text-center text-gray-600 mb-8">
          Test your Database Management System knowledge
        </p>
        
        <div className="bg-blue-50 rounded-lg p-6 mb-8">
          <h2 className="text-2xl font-semibold text-center text-blue-800 mb-4">
            Choose Your Quiz Level
          </h2>
          
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-white rounded-xl shadow-lg p-6 border-2 border-green-200 hover:border-green-400 transition-all duration-300">
              <h3 className="text-xl font-bold text-green-800 mb-3">Basic Level</h3>
              <p className="text-gray-600 mb-4">
                Perfect for beginners. Covers fundamental concepts and basic SQL commands.
              </p>
              <ul className="text-sm text-gray-500 mb-4 space-y-1">
                <li>✓ Foundational Concepts</li>
                <li>✓ Basic SQL Syntax</li>
                <li>✓ Simple Queries</li>
                <li>✓ 25 Questions - 5 Minutes</li>
              </ul>
              <button
                onClick={() => handleQuizStart('dbms', 'basic')}
                className="w-full bg-green-500 hover:bg-green-600 text-white font-semibold py-3 px-4 rounded-lg transition-colors duration-200"
              >
                Start Basic Quiz
              </button>
            </div>

            <div className="bg-white rounded-xl shadow-lg p-6 border-2 border-purple-200 hover:border-purple-400 transition-all duration-300">
              <h3 className="text-xl font-bold text-purple-800 mb-3">Advanced Level</h3>
              <p className="text-gray-600 mb-4">
                For experienced learners. Tests advanced concepts and complex queries.
              </p>
              <ul className="text-sm text-gray-500 mb-4 space-y-1">
                <li>✓ Complex Relationships</li>
                <li>✓ Advanced SQL Features</li>
                <li>✓ Optimization Concepts</li>
                <li>✓ 25 Questions - 5 Minutes</li>
              </ul>
              <button
                onClick={() => handleQuizStart('dbms', 'advanced')}
                className="w-full bg-purple-500 hover:bg-purple-600 text-white font-semibold py-3 px-4 rounded-lg transition-colors duration-200"
              >
                Start Advanced Quiz
              </button>
            </div>
          </div>
        </div>

        <div className="text-center">
          <h3 className="font-semibold text-gray-700 mb-3">Quiz Features:</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 text-sm">
            <div className="bg-gray-100 rounded-lg p-3">
              <div className="font-medium text-blue-600">Timer</div>
              <div className="text-gray-500">5 minutes</div>
            </div>
            <div className="bg-gray-100 rounded-lg p-3">
              <div className="font-medium text-blue-600">Questions</div>
              <div className="text-gray-500">25 total</div>
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