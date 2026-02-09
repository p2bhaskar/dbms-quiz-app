export const dataManipulation = {
  topic: "Data Manipulation Language",
  questions: [
    {
      id: 1,
      question: "Which SQL statement is used to update existing records in a table?",
      options: [
        "MODIFY",
        "UPDATE",
        "ALTER",
        "CHANGE"
      ],
      correctAnswer: 1,
      explanation: "The UPDATE statement is used to modify existing records in a table."
    },
    {
      id: 2,
      question: "Which statement is used to insert new data into a table?",
      options: [
        "ADD RECORD",
        "INSERT INTO",
        "CREATE RECORD",
        "NEW ROW"
      ],
      correctAnswer: 1,
      explanation: "INSERT INTO is used to insert new records in a table."
    },
    {
      id: 3,
      question: "What does the DELETE statement do?",
      options: [
        "Deletes the entire table",
        "Deletes specified records from a table",
        "Deletes the database",
        "Deletes table structure"
      ],
      correctAnswer: 1,
      explanation: "DELETE removes existing records from a table based on specified conditions."
    },
    {
      id: 4,
      question: "Which keyword is used with INSERT to specify the values to be inserted?",
      options: [
        "SET",
        "VALUES",
        "DATA",
        "WITH"
      ],
      correctAnswer: 1,
      explanation: "VALUES is used with INSERT to specify the actual data to be inserted."
    },
    {
      id: 5,
      question: "What happens if you omit the WHERE clause in an UPDATE statement?",
      options: [
        "Only the first record is updated",
        "No records are updated",
        "All records in the table are updated",
        "An error occurs"
      ],
      correctAnswer: 2,
      explanation: "Without WHERE clause, UPDATE affects all records in the table."
    }
  ]
};