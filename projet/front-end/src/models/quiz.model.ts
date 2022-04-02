import { Question } from './question.model';

export interface Quiz {
    id: number;
    name: string;
    themeId: number;
    img?: string;
    questions: Question[];
}
