export const foundationalConcepts = {
  topic: "Foundational Database Concepts",
  questions: [
    {
      id: 1,
      question: "What is a Primary Key in a database?",
      options: [
        "A key that can have duplicate values",
        "A key that uniquely identifies each record in a table",
        "A key used for sorting data",
        "A key that links to external files"
      ],
      correctAnswer: 1,
      explanation: "A Primary Key is a unique identifier for each record in a table and cannot contain NULL values."
    },
    {
      id: 2,
      question: "Which data type would you use to store a person's name?",
      options: [
        "INT",
        "VARCHAR", 
        "DATE",
        "BOOLEAN"
      ],
      correctAnswer: 1,
      explanation: "VARCHAR is used for variable-length character strings, suitable for storing names."
    },
    {
      id: 3,
      question: "What does NULL represent in a database?",
      options: [
        "A zero value",
        "An empty string",
        "Missing or unknown data",
        "A default value"
      ],
      correctAnswer: 2,
      explanation: "NULL represents the absence of a value or unknown data in database fields."
    },
    {
      id: 4,
      question: "What is a database schema?",
      options: [
        "The actual data stored in tables",
        "The logical structure of the database",
        "The backup of the database",
        "The user interface for the database"
      ],
      correctAnswer: 1,
      explanation: "A schema defines the logical structure of the database including tables, relationships, and constraints."
    },
    {
      id: 5,
      question: "Which of the following best describes an Entity?",
      options: [
        "A database operation",
        "A real-world object or concept",
        "A SQL query",
        "A database user"
      ],
      correctAnswer: 1,
      explanation: "An entity is a real-world object or concept that can have data stored about it in a database."
    }
  ]
};