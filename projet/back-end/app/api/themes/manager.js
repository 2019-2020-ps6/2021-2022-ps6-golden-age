const { Theme } = require('../../models')
// const { filterQuizFromTheme } = require('./quizzes/manager')
// const { filterQuestionsFromQuiz } = require('./quizzes/questions/manager')
// const { filterAnswersFromQuizzes } = require('./quizzes/questions/answers/manager')

/**
 * Function buildTheme
 * This function aggregates the questions and answers from the database to build a quizz with all the data needed by the clients.
 * @param themeId
 */
const buildTheme = (themeId) => {
  const theme = Theme.getById(themeId)
  return { ...theme }
}

/**
 * Function buildThemes.
 * This function aggregates the questions and answers from the database to build entire themes.
 */
const buildThemes = () => {
  const themes = Theme.get()
  return themes.map((theme) => buildTheme(theme.id))
}

module.exports = {
  buildTheme,
  buildThemes,
}
