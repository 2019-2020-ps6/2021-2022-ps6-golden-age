import { Quiz } from './quiz.model';

export interface Theme {
    id: number;
    name: string;
    img?: string;
    quizzes: Quiz[];
}
