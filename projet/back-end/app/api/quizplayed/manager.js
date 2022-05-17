const { QuizPlayed } = require('../../models')


const buildQuizPlayed = (playerId) => {
  const quizzesPlayed = QuizPlayed.get()
  return quizzesPlayed.filter((quizPlayed) => quizPlayed.playerId === parseInt(playerId, 10))
}


const buildQuizzesPlayed = () => QuizPlayed.get()

module.exports = {
  buildQuizPlayed,
  buildQuizzesPlayed,
}
