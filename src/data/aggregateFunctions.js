export const aggregateFunctions = {
  topic: "Aggregate Functions",
  questions: [
    {
      id: 1,
      question: "Which function returns the number of rows that match a specified criteria?",
      options: [
        "SUM()",
        "COUNT()",
        "TOTAL()",
        "NUMBER()"
      ],
      correctAnswer: 1,
      explanation: "COUNT() returns the number of rows that match the specified criteria."
    },
    {
      id: 2,
      question: "What does the GROUP BY clause do?",
      options: [
        "Groups similar rows together",
        "Filters groups of rows",
        "Sorts the result set",
        "Joins multiple tables"
      ],
      correctAnswer: 0,
      explanation: "GROUP BY groups rows that have the same values in specified columns."
    },
    {
      id: 3,
      question: "Which clause is used to filter groups?",
      options: [
        "WHERE",
        "HAVING",
        "FILTER",
        "GROUP BY"
      ],
      correctAnswer: 1,
      explanation: "HAVING is used to filter groups created by GROUP BY clause."
    },
    {
      id: 4,
      question: "What is the difference between WHERE and HAVING?",
      options: [
        "WHERE is for groups, HAVING for rows",
        "HAVING is for groups, WHERE for rows",
        "No functional difference",
        "WHERE is faster than HAVING"
      ],
      correctAnswer: 1,
      explanation: "WHERE filters rows before grouping, HAVING filters groups after grouping."
    },
    {
      id: 5,
      question: "Which function returns the average value of a numeric column?",
      options: [
        "MEAN()",
        "AVERAGE()",
        "AVG()",
        "MEDIAN()"
      ],
      correctAnswer: 2,
      explanation: "AVG() returns the average value of a numeric column."
    }
  ]
};