import { Quiz } from './quiz.model';

export interface Theme {
    id: string;
    name: string;
    img?: string;
    quizzes: Quiz[];
}
