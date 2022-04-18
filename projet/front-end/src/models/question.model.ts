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
}

// Créer un modèle dans le backend pour stocker les réponses données
