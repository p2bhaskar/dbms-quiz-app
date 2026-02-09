export const filteringConditions = {
  topic: "Filtering & Conditions",
  questions: [
    {
      id: 1,
      question: "Which operator is used to check for NULL values?",
      options: [
        "= NULL",
        "IS NULL",
        "== NULL",
        "NULL"
      ],
      correctAnswer: 1,
      explanation: "IS NULL is used to test for empty (NULL) values in SQL."
    },
    {
      id: 2,
      question: "Which wildcard character matches any sequence of characters?",
      options: [
        "_",
        "%",
        "*",
        "?"
      ],
      correctAnswer: 1,
      explanation: "The % wildcard matches any sequence of characters in SQL LIKE operations."
    },
    {
      id: 3,
      question: "What does the BETWEEN operator do?",
      options: [
        "Compares two values",
        "Selects values within a range",
        "Checks for pattern matching",
        "Joins two tables"
      ],
      correctAnswer: 1,
      explanation: "BETWEEN selects values within a given range (inclusive)."
    },
    {
      id: 4,
      question: "Which operator would you use to check if a value matches any value in a list?",
      options: [
        "ANY",
        "SOME",
        "IN",
        "CONTAINS"
      ],
      correctAnswer: 2,
      explanation: "The IN operator allows you to specify multiple values in a WHERE clause."
    },
    {
      id: 5,
      question: "What is the purpose of the LIKE operator?",
      options: [
        "To compare numerical values",
        "To search for a specified pattern",
        "To join tables",
        "To sort results"
      ],
      correctAnswer: 1,
      explanation: "LIKE is used in a WHERE clause to search for a specified pattern in a column."
    }
  ]
};