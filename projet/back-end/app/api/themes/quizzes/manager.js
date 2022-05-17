const { Quiz } = require('../../../models')


const buildQuizz = (quizId) => {
  const quiz = Quiz.getById(quizId)
  return { ...quiz }
}


const buildQuizzes = () => {
  const quizzes = Quiz.get()
  return quizzes.map((quiz) => buildQuizz(quiz.id))
}

module.exports = {
  buildQuizz,
  buildQuizzes,
}
