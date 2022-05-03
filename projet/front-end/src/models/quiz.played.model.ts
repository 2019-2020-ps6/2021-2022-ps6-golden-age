export interface QuizPlayed {
  id: number;
  playerId: number;
  playerName: string;
  playedThemeName: string;
  playedQuizName: string;
  quizImg: string;
  score: number;
  questionLength: number;
}
