import { computerBasics } from './unit1/computerBasics';
import { softwareBasics } from './unit1/softwareBasics';
import { algorithms } from './unit1/algorithms';
import { programDevelopment } from './unit1/programDevelopment';
import { programmingFundamentals } from './unit1/programmingFundamentals';

export const quizTopics = {
  computerBasics,
  softwareBasics,
  algorithms,
  programDevelopment,
  programmingFundamentals
};

export const quizData = {
  cprogramming: {
    basic: {
      topics: [
        computerBasics,
        softwareBasics,
        algorithms,
        programDevelopment,
        programmingFundamentals
      ]
    },
    advanced: {
      topics: [
        // You can add Unit 2, 3, 4, 5 questions here later
        computerBasics,
        softwareBasics,
        algorithms,
        programDevelopment,
        programmingFundamentals
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