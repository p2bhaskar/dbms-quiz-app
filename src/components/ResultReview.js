// import React,{useEffect} from "react";

// export default function ResultReview({questions,answers,score}){

// // auto close after 60 sec
// useEffect(()=>{
//  setTimeout(()=>{
//    window.close();
//  },60000);
// },[]);


// return(
// <div style={{padding:30}}>

// <h2>
// Score : {score} / 50
// </h2>

// <hr/>

// {questions.map((q,i)=>{

//  const correct = q.answer;
//  const chosen = answers[i];

//  return(
//  <div key={i} style={{marginBottom:20}}>

//  <b>Q{i+1}. {q.question}</b>

//  <div>
//  Your Answer:
//  {q.options[chosen-1] || "Not Answered"}
//  </div>

//  <div>
//  Correct Answer:
//  {q.options[correct-1]}
//  </div>

//  <div style={{color:"green"}}>
//  Explanation:
//  {q.explanation}
//  </div>

//  <hr/>

//  </div>
//  );

// })}

// </div>
// );
// }

import React, { useEffect, useState } from "react";

export default function ResultReview({ questions, answers, score, name, prn }) {
  const [showDetails, setShowDetails] = useState(false);

  // Auto close after 60 seconds
  useEffect(() => {
    const timer = setTimeout(() => {
      window.close();
    }, 60000);

    return () => clearTimeout(timer);
  }, []);

  const percentage = ((score / questions.length) * 100).toFixed(1);
  const correctAnswers = score;
  const incorrectAnswers = questions.filter((q, i) => answers[i] !== q.answer && answers[i]).length;
  const unanswered = questions.filter((q, i) => !answers[i]).length;

  // Determine grade and color
  const getGradeInfo = () => {
    if (percentage >= 90) return { grade: "A+", color: "#4caf50", message: "Outstanding!" };
    if (percentage >= 80) return { grade: "A", color: "#66bb6a", message: "Excellent!" };
    if (percentage >= 70) return { grade: "B", color: "#ffa726", message: "Good Job!" };
    if (percentage >= 60) return { grade: "C", color: "#ff9800", message: "Fair" };
    if (percentage >= 50) return { grade: "D", color: "#ff7043", message: "Needs Improvement" };
    return { grade: "F", color: "#f44336", message: "Failed" };
  };

  const gradeInfo = getGradeInfo();

  return (
    <div
      style={{
        minHeight: "100vh",
        background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
        padding: 20,
      }}
    >
      <div
        style={{
          maxWidth: 900,
          margin: "0 auto",
          backgroundColor: "white",
          borderRadius: 20,
          boxShadow: "0 20px 60px rgba(0,0,0,0.3)",
          overflow: "hidden",
        }}
      >
        {/* Header */}
        <div
          style={{
            background: `linear-gradient(135deg, ${gradeInfo.color} 0%, ${gradeInfo.color}dd 100%)`,
            padding: 40,
            textAlign: "center",
            color: "white",
          }}
        >
          <div style={{ fontSize: 72, marginBottom: 10 }}>
            {percentage >= 50 ? "🎉" : "📚"}
          </div>
          <h1 style={{ margin: 0, fontSize: 36, fontWeight: "bold" }}>
            {gradeInfo.message}
          </h1>
          <p style={{ margin: "10px 0 0 0", fontSize: 18, opacity: 0.9 }}>
            You scored {score} out of {questions.length}
          </p>
        </div>

        {/* Student Info */}
        <div
          style={{
            padding: "20px 40px",
            backgroundColor: "#f5f7fa",
            borderBottom: "1px solid #e0e0e0",
          }}
        >
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              flexWrap: "wrap",
              gap: 15,
            }}
          >
            <div>
              <div style={{ fontSize: 14, color: "#666", marginBottom: 5 }}>
                Student Name
              </div>
              <div style={{ fontSize: 18, fontWeight: "600", color: "#333" }}>
                {name}
              </div>
            </div>
            <div>
              <div style={{ fontSize: 14, color: "#666", marginBottom: 5 }}>
                PRN Number
              </div>
              <div style={{ fontSize: 18, fontWeight: "600", color: "#333" }}>
                {prn}
              </div>
            </div>
            <div>
              <div style={{ fontSize: 14, color: "#666", marginBottom: 5 }}>
                Grade
              </div>
              <div
                style={{
                  fontSize: 24,
                  fontWeight: "bold",
                  color: gradeInfo.color,
                }}
              >
                {gradeInfo.grade}
              </div>
            </div>
          </div>
        </div>

        {/* Score Details */}
        <div style={{ padding: 40 }}>
          {/* Score Circle */}
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              marginBottom: 40,
            }}
          >
            <div
              style={{
                width: 200,
                height: 200,
                borderRadius: "50%",
                background: `conic-gradient(${gradeInfo.color} ${percentage * 3.6}deg, #e0e0e0 0deg)`,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                position: "relative",
              }}
            >
              <div
                style={{
                  width: 160,
                  height: 160,
                  borderRadius: "50%",
                  backgroundColor: "white",
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <div
                  style={{
                    fontSize: 48,
                    fontWeight: "bold",
                    color: gradeInfo.color,
                  }}
                >
                  {percentage}%
                </div>
                <div style={{ fontSize: 14, color: "#666" }}>Score</div>
              </div>
            </div>
          </div>

          {/* Statistics Grid */}
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
              gap: 20,
              marginBottom: 30,
            }}
          >
            <div
              style={{
                backgroundColor: "#e8f5e9",
                padding: 20,
                borderRadius: 12,
                textAlign: "center",
              }}
            >
              <div style={{ fontSize: 36, fontWeight: "bold", color: "#4caf50" }}>
                {correctAnswers}
              </div>
              <div style={{ fontSize: 14, color: "#666", marginTop: 5 }}>
                Correct Answers
              </div>
            </div>

            <div
              style={{
                backgroundColor: "#ffebee",
                padding: 20,
                borderRadius: 12,
                textAlign: "center",
              }}
            >
              <div style={{ fontSize: 36, fontWeight: "bold", color: "#f44336" }}>
                {incorrectAnswers}
              </div>
              <div style={{ fontSize: 14, color: "#666", marginTop: 5 }}>
                Incorrect Answers
              </div>
            </div>

            <div
              style={{
                backgroundColor: "#fff3e0",
                padding: 20,
                borderRadius: 12,
                textAlign: "center",
              }}
            >
              <div style={{ fontSize: 36, fontWeight: "bold", color: "#ff9800" }}>
                {unanswered}
              </div>
              <div style={{ fontSize: 14, color: "#666", marginTop: 5 }}>
                Not Attempted
              </div>
            </div>
          </div>

          {/* Toggle Details Button */}
          <div style={{ textAlign: "center", marginBottom: 20 }}>
            <button
              onClick={() => setShowDetails(!showDetails)}
              style={{
                padding: "12px 32px",
                fontSize: 16,
                fontWeight: "600",
                background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
                color: "white",
                border: "none",
                borderRadius: 10,
                cursor: "pointer",
                boxShadow: "0 4px 15px rgba(102, 126, 234, 0.4)",
                transition: "transform 0.2s",
              }}
              onMouseEnter={(e) => {
                e.target.style.transform = "translateY(-2px)";
              }}
              onMouseLeave={(e) => {
                e.target.style.transform = "translateY(0)";
              }}
            >
              {showDetails ? "Hide" : "View"} Detailed Review
            </button>
          </div>

          {/* Detailed Question Review */}
          {showDetails && (
            <div
              style={{
                marginTop: 30,
                maxHeight: "600px",
                overflowY: "auto",
                border: "1px solid #e0e0e0",
                borderRadius: 12,
                padding: 20,
              }}
            >
              <h3
                style={{
                  marginTop: 0,
                  marginBottom: 20,
                  color: "#333",
                  fontSize: 20,
                }}
              >
                Question-by-Question Review
              </h3>

              {questions.map((q, i) => {
                const chosen = answers[i];
                const correct = q.answer;
                const isCorrect = chosen === correct;
                const wasAnswered = chosen !== undefined;

                return (
                  <div
                    key={i}
                    style={{
                      marginBottom: 20,
                      padding: 20,
                      backgroundColor: isCorrect
                        ? "#e8f5e9"
                        : wasAnswered
                        ? "#ffebee"
                        : "#fff3e0",
                      borderRadius: 12,
                      borderLeft: `4px solid ${
                        isCorrect ? "#4caf50" : wasAnswered ? "#f44336" : "#ff9800"
                      }`,
                    }}
                  >
                    <div
                      style={{
                        display: "flex",
                        alignItems: "center",
                        marginBottom: 10,
                      }}
                    >
                      <div
                        style={{
                          fontSize: 24,
                          marginRight: 10,
                        }}
                      >
                        {isCorrect ? "✅" : wasAnswered ? "❌" : "⚠️"}
                      </div>
                      <h4 style={{ margin: 0, color: "#333", flex: 1 }}>
                        Question {i + 1}
                      </h4>
                      <div
                        style={{
                          fontSize: 12,
                          fontWeight: "600",
                          padding: "4px 12px",
                          borderRadius: 12,
                          backgroundColor: isCorrect
                            ? "#4caf50"
                            : wasAnswered
                            ? "#f44336"
                            : "#ff9800",
                          color: "white",
                        }}
                      >
                        {isCorrect ? "Correct" : wasAnswered ? "Wrong" : "Skipped"}
                      </div>
                    </div>

                    <p style={{ color: "#333", fontSize: 16, marginBottom: 15 }}>
                      {q.question}
                    </p>

                    <div style={{ marginBottom: 10 }}>
                      <strong style={{ color: "#666", fontSize: 14 }}>
                        Your Answer:
                      </strong>
                      <div
                        style={{
                          marginTop: 5,
                          padding: 10,
                          backgroundColor: "white",
                          borderRadius: 8,
                          color: wasAnswered ? "#333" : "#999",
                        }}
                      >
                        {wasAnswered ? q.options[chosen - 1] : "Not Answered"}
                      </div>
                    </div>

                    <div style={{ marginBottom: 10 }}>
                      <strong style={{ color: "#666", fontSize: 14 }}>
                        Correct Answer:
                      </strong>
                      <div
                        style={{
                          marginTop: 5,
                          padding: 10,
                          backgroundColor: "white",
                          borderRadius: 8,
                          color: "#4caf50",
                          fontWeight: "600",
                        }}
                      >
                        {q.options[correct - 1]}
                      </div>
                    </div>

                    {q.explanation && (
                      <div
                        style={{
                          marginTop: 10,
                          padding: 12,
                          backgroundColor: "rgba(255,255,255,0.5)",
                          borderRadius: 8,
                          borderLeft: "3px solid #2196f3",
                        }}
                      >
                        <strong
                          style={{
                            color: "#2196f3",
                            fontSize: 14,
                            display: "block",
                            marginBottom: 5,
                          }}
                        >
                          💡 Explanation:
                        </strong>
                        <div style={{ color: "#555", fontSize: 14 }}>
                          {q.explanation}
                        </div>
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          )}

          {/* Footer Note */}
          <div
            style={{
              marginTop: 30,
              padding: 20,
              backgroundColor: "#f5f7fa",
              borderRadius: 12,
              textAlign: "center",
            }}
          >
            <p style={{ margin: 0, color: "#666", fontSize: 14 }}>
              📋 Your result has been recorded. This window will automatically close
              in 60 seconds.
            </p>
            <p style={{ margin: "10px 0 0 0", color: "#999", fontSize: 12 }}>
              Thank you for taking the quiz!
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}