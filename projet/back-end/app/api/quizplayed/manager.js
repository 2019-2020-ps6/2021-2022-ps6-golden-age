const { QuizPlayed } = require('../../models')

/**
 * Function buildTheme
 * This function aggregates the questions and answers from the database to build a quizz with all the data needed by the clients.
 * @param playerName
 */
const buildQuizPlayed = (playerName) => {
  const quizzesPlayed = QuizPlayed.get()
  return quizzesPlayed.map((quizPlayed) => quizPlayed.playerName === playerName)
}

/**
 * Function buildThemes.
 * This function aggregates the questions and answers from the database to build entire themes.
 */
const buildQuizzesPlayed = () => QuizPlayed.get()

module.exports = {
  buildQuizPlayed,
  buildQuizzesPlayed,
}
