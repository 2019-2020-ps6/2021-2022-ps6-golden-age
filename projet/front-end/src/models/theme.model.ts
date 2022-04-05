import { Quiz } from './quiz.model';

export interface Theme {
    id: number;
    name: string;
    image?: string;
    quizzes: Quiz[];
}
