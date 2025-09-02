import { Router } from 'express'
import * as tweetController from '../controllers/tweet'

export const mainRouter = Router()

mainRouter.get('/tweets/', tweetController.getAllTweets)
mainRouter.get('/tweets/zico', tweetController.getAllZicoTweets)
mainRouter.get('/tweets/avax', tweetController.getAllAvaxTweets)
mainRouter.get('/tweets/hedera', tweetController.getAllHederaTweets)