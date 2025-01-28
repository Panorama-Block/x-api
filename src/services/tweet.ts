import Tweet from "../model/tweet"

export const getTweets = async () => {
  try {
    const tweets = await Tweet.find().sort({ created_at_datetime: -1 })
    return tweets
  }
  catch (error) {
    return false
  }
}