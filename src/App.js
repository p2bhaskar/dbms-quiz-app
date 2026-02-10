// import React from 'react';
// import { HashRouter as Router, Routes, Route } from 'react-router-dom';
// import HomePage from './components/HomePage';
// import QuizPage from './components/QuizPage';
// import ResultsPage from './components/ResultsPage';
// import './index.css';

// function App() {
//   return (
//     <Router>
//       <div className="App min-h-screen bg-gray-50">
//         <Routes>
//           <Route path="/" element={<HomePage />} />
//           <Route path="/quiz/:subject/:level" element={<QuizPage />} />
//           <Route path="/results" element={<ResultsPage />} />
//         </Routes>
//       </div>
//     </Router>
//   );
// }

// export default App;

import React from "react";
import Quiz from "./Quiz";

export default function App() {
  return <Quiz/>;
}
