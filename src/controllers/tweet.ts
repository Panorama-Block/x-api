import { RequestHandler } from "express"
import * as tweetService from '../services/tweet'

export const getAllTweets: RequestHandler = async (req, res) => {
  const tweets = await tweetService.getTweets()

  if (tweets) {
    res.status(200).json({ ok: tweets })
  }
  else {
    res.status(500).json({
      error: 'An error occurred in the request'
    })
  }
}