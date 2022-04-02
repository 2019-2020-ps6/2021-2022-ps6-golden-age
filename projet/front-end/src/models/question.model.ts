export interface Answer {
    value: string;
    isCorrect: boolean;
}

export interface Question {
    id: string;
    label: string;
    number: number;
    quizId: string;
    answers: Answer[];
    img: string;
}

// Créer un modèle dans le backend pour stocker les réponses données
