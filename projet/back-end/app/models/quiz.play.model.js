const Joi = require('joi')
const BaseModel = require('../utils/base-model.js')

module.exports = new BaseModel('QuizPlayed', {
  id: Joi.number().required,
  playerName: Joi.string().required(),
  playedThemeName: Joi.string().required(),
  playedQuizName: Joi.string().required(),
  score: Joi.number().required(),
  questionLength: Joi.number().required(),
  quizImg: Joi.string(),
})
