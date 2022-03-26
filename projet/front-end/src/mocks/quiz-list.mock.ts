import { Quiz } from '../models/quiz.model';
import { Question } from '../models/question.model';

export const QUESTION_ACTOR: Question = {
    id: '1',
    label: 'Où se situe ce pont?',
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
    ]
};

export const QUIZ_LIST: Quiz[] = [
    {
        id: 'Les-Etats-Unis',
        name: 'Les Etats Unis',
        theme: 'Geographie',
        questions: [],
    }
];
