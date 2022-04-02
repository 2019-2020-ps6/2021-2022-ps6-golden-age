import { Quiz } from '../models/quiz.model';
import { Question } from '../models/question.model';

export const QUESTION_MONUMENT: Question = {
    id: '1',
    label: 'Où se situe ce pont?',
    number: 1,
    answers: [
        {
            value: 'Chicago',
            isCorrect: true,
        },
        {
            value: 'New York',
            isCorrect: false,
        },
        {
          value: 'San Francisco',
          isCorrect: false,
        },
        {
          value: 'Londres',
          isCorrect: false,
        }
    ],
  img : 'assets/images/a.png',
  quizId: '1648536265818',
};

export const QUESTION_LIST: Question[] = [QUESTION_MONUMENT];

export const QUIZ_LIST: Quiz[] = [
    {
        id: 1648536265818,
        name: 'Les Etats Unis',
        themeId: 1648537673166,
        img : 'assets/images/a.png',
        questions: [QUESTION_MONUMENT],
    }
];
