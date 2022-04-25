export interface Answer {
    value: string;
    isCorrect: boolean;
}

export interface Question {
    id: number;
    label: string;
    number: number;
    answers: Answer[];
    img: string;
    description: string;
}

