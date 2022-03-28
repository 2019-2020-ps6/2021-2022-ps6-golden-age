import { Quiz } from './quiz.model';

export interface Theme {
    id: string;
    name: string;
    image?: string;
    quizzes: Quiz[];
}
