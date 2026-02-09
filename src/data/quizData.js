// export const quizData = {

//   dbms: {
//     basic: [
//       {
//         id: 1,
//         module: "Foundational Database Concepts",
//         question: "What is a Primary Key in a database?",
//         options: [
//           "A key that can have duplicate values",
//           "A key that uniquely identifies each record in a table",
//           "A key used for sorting data",
//           "A key that links to external files"
//         ],
//         correctAnswer: 1,
//         explanation: "A Primary Key is a unique identifier for each record in a table and cannot contain NULL values."
//       },
//       {
//         id: 2,
//         module: "Foundational Database Concepts",
//         question: "Which data type would you use to store a person's name?",
//         options: [
//           "INT",
//           "VARCHAR", 
//           "DATE",
//           "BOOLEAN"
//         ],
//         correctAnswer: 1,
//         explanation: "VARCHAR is used for variable-length character strings, suitable for storing names."
//       },
//       {
//         id: 3,
//         module: "Basic SQL Keywords & Commands",
//         question: "Which SQL keyword is used to retrieve data from a database?",
//         options: [
//           "GET",
//           "SELECT",
//           "RETRIEVE",
//           "FETCH"
//         ],
//         correctAnswer: 1,
//         explanation: "The SELECT statement is used to select data from a database."
//       },
//       {
//         id: 4,
//         module: "Basic SQL Keywords & Commands",
//         question: "What does the WHERE clause do in SQL?",
//         options: [
//           "Sorts the results",
//           "Groups the results",
//           "Filters records based on conditions",
//           "Joins tables together"
//         ],
//         correctAnswer: 2,
//         explanation: "The WHERE clause is used to filter records that meet specified conditions."
//       },
//       {
//         id: 5,
//         module: "Filtering & Conditions",
//         question: "Which operator is used to check for NULL values?",
//         options: [
//           "= NULL",
//           "IS NULL",
//           "== NULL",
//           "NULL"
//         ],
//         correctAnswer: 1,
//         explanation: "IS NULL is used to test for empty (NULL) values in SQL."
//       },
//       {
//         id: 6,
//         module: "Aggregate Functions",
//         question: "Which function returns the number of rows that match a specified criteria?",
//         options: [
//           "SUM()",
//           "COUNT()",
//           "TOTAL()",
//           "NUMBER()"
//         ],
//         correctAnswer: 1,
//         explanation: "COUNT() returns the number of rows that match the specified criteria."
//       },
//       {
//         id: 7,
//         module: "Data Manipulation Language",
//         question: "Which SQL statement is used to update existing records in a table?",
//         options: [
//           "MODIFY",
//           "UPDATE",
//           "ALTER",
//           "CHANGE"
//         ],
//         correctAnswer: 1,
//         explanation: "The UPDATE statement is used to modify existing records in a table."
//       },
//       {
//         id: 8,
//         module: "Data Definition Language",
//         question: "Which statement is used to create a new table in SQL?",
//         options: [
//           "CREATE TABLE",
//           "NEW TABLE",
//           "ADD TABLE",
//           "BUILD TABLE"
//         ],
//         correctAnswer: 0,
//         explanation: "CREATE TABLE is used to create a new table in the database."
//       },
//       {
//         id: 9,
//         module: "Important Concepts",
//         question: "What is Referential Integrity?",
//         options: [
//           "Ensuring data is accurate and consistent",
//           "Maintaining relationships between tables correctly",
//           "Keeping backup of database",
//           "Encrypting database content"
//         ],
//         correctAnswer: 1,
//         explanation: "Referential integrity ensures that relationships between tables remain consistent."
//       },
//       {
//         id: 10,
//         module: "Constraints",
//         question: "Which constraint ensures that a column cannot have NULL values?",
//         options: [
//           "UNIQUE",
//           "PRIMARY KEY",
//           "NOT NULL",
//           "CHECK"
//         ],
//         correctAnswer: 2,
//         explanation: "NOT NULL constraint prevents NULL values from being inserted into a column."
//       }
//     ],
//     advanced: [
//       {
//         id: 1,
//         module: "Foundational Database Concepts",
//         question: "What is the difference between a Primary Key and a Unique Key?",
//         options: [
//           "Primary Key allows NULL, Unique Key doesn't",
//           "Unique Key allows NULL, Primary Key doesn't",
//           "No difference, they are the same",
//           "Primary Key is for performance, Unique Key for integrity"
//         ],
//         correctAnswer: 1,
//         explanation: "A table can have only one Primary Key (no NULLs), but multiple Unique Keys (single NULL allowed)."
//       },
//       {
//         id: 2,
//         module: "Basic SQL Keywords & Commands",
//         question: "What is the difference between WHERE and HAVING clauses?",
//         options: [
//           "WHERE is for groups, HAVING for rows",
//           "HAVING is for groups, WHERE for rows",
//           "No functional difference",
//           "WHERE is faster than HAVING"
//         ],
//         correctAnswer: 1,
//         explanation: "WHERE filters rows before grouping, HAVING filters groups after grouping."
//       },
//       {
//         id: 3,
//         module: "Filtering & Conditions",
//         question: "Which wildcard character matches exactly one character in SQL?",
//         options: [
//           "%",
//           "*",
//           "_",
//           "?"
//         ],
//         correctAnswer: 2,
//         explanation: "The underscore (_) matches exactly one character, while percent (%) matches any sequence."
//       },
//       {
//         id: 4,
//         module: "Aggregate Functions",
//         question: "What will COUNT(column_name) return if the column contains NULL values?",
//         options: [
//           "Counts all rows including NULL",
//           "Counts only non-NULL values",
//           "Throws an error",
//           "Returns NULL"
//         ],
//         correctAnswer: 1,
//         explanation: "COUNT(column_name) counts only non-NULL values in that specific column."
//       },
//       {
//         id: 5,
//         module: "Data Relationships",
//         question: "In a Many-to-Many relationship, how is it typically implemented?",
//         options: [
//           "Using a single table",
//           "Using foreign keys in both tables",
//           "Using a junction table",
//           "Using triggers"
//         ],
//         correctAnswer: 2,
//         explanation: "Many-to-Many relationships require a junction table with foreign keys to both related tables."
//       },
//       {
//         id: 6,
//         module: "Constraints",
//         question: "What happens when you try to delete a record referenced by a foreign key?",
//         options: [
//           "It always deletes successfully",
//           "It throws an error by default",
//           "It automatically deletes referencing records",
//           "It sets foreign key to zero"
//         ],
//         correctAnswer: 1,
//         explanation: "By default, SQL prevents deletion of records referenced by foreign keys to maintain referential integrity."
//       },
//       {
//         id: 7,
//         module: "Data Definition Language",
//         question: "What is the difference between DROP TABLE and TRUNCATE TABLE?",
//         options: [
//           "DROP removes table structure, TRUNCATE keeps it",
//           "TRUNCATE is faster but can be rolled back",
//           "No difference",
//           "DROP can be rolled back, TRUNCATE cannot"
//         ],
//         correctAnswer: 0,
//         explanation: "DROP TABLE removes table completely, TRUNCATE TABLE removes all data but keeps structure."
//       },
//       {
//         id: 8,
//         module: "Important Concepts",
//         question: "What is a Subquery in SQL?",
//         options: [
//           "A query that runs after main query",
//           "A query nested inside another query",
//           "A backup query",
//           "A query for subtotals"
//         ],
//         correctAnswer: 1,
//         explanation: "A subquery is a query nested inside another query using parentheses."
//       },
//       {
//         id: 9,
//         module: "Other Essential Concepts",
//         question: "What does the CASE statement do in SQL?",
//         options: [
//           "Handles exceptions",
//           "Provides conditional logic",
//           "Creates case-sensitive comparisons",
//           "Defines new cases"
//         ],
//         correctAnswer: 1,
//         explanation: "CASE statement provides if-then-else type conditional logic in SQL queries."
//       },
//       {
//         id: 10,
//         module: "Data Relationships",
//         question: "What is the purpose of ON DELETE CASCADE in foreign key constraints?",
//         options: [
//           "Prevents deletion",
//           "Automatically deletes child records",
//           "Sets child records to NULL",
//           "Creates backup before deletion"
//         ],
//         correctAnswer: 1,
//         explanation: "ON DELETE CASCADE automatically deletes child records when parent record is deleted."
//       }
//     ]
//   }
// };



import { foundationalConcepts } from './foundationalConcepts';
import { basicSQL } from './basicSQL';
import { filteringConditions } from './filteringConditions';
import { aggregateFunctions } from './aggregateFunctions';
import { dataManipulation } from './dataManipulation';

export const quizTopics = {
  foundationalConcepts,
  basicSQL,
  filteringConditions,
  aggregateFunctions,
  dataManipulation
};

export const quizData = {
  dbms: {
    basic: {
      topics: [
        foundationalConcepts,
        basicSQL,
        filteringConditions,
        aggregateFunctions,
        dataManipulation
      ]
    },
    advanced: {
      topics: [
        // You can add advanced versions of topics here
        foundationalConcepts,
        basicSQL,
        filteringConditions,
        aggregateFunctions,
        dataManipulation
      ]
    }
  }
};

// Helper function to get all questions from a level
export const getAllQuestions = (subject, level) => {
  const levelData = quizData[subject]?.[level];
  if (!levelData) return [];
  
  return levelData.topics.flatMap(topic => 
    topic.questions.map(question => ({
      ...question,
      module: topic.topic
    }))
  );
};

// Helper function to get questions by specific topic
export const getQuestionsByTopic = (subject, level, topicName) => {
  const levelData = quizData[subject]?.[level];
  if (!levelData) return [];
  
  const topic = levelData.topics.find(t => t.topic === topicName);
  return topic ? topic.questions.map(q => ({ ...q, module: topic.topic })) : [];
};