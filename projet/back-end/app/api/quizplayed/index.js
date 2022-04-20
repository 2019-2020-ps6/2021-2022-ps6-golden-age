const { Router } = require('express')

const { QuizPlayed } = require('../../models')
const manageAllErrors = require('../../utils/routes/error-management')
const { buildQuizPlayed, buildQuizzesPlayed } = require('./manager')

const router = new Router()

router.get('/', (req, res) => {
  try {
    const quizzesPlayed = buildQuizzesPlayed()
    res.status(200).json(quizzesPlayed)
  } catch (err) {
    manageAllErrors(res, err)
  }
})

router.get('/:playerName', (req, res) => {
  try {
    const quizPlayed = buildQuizPlayed(req.params.playerName)
    res.status(200).json(quizPlayed)
  } catch (err) {
    manageAllErrors(res, err)
  }
})

router.post('/', (req, res) => {
  try {
    console.log(req.body)
    const quizPlayed = QuizPlayed.create({ ...req.body })
    console.log(quizPlayed)
    res.status(201).json(quizPlayed)
  } catch (err) {
    manageAllErrors(res, err)
  }
})

module.exports = router
