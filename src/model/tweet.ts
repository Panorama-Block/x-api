import { Schema, model, connection, Model } from "mongoose"

export type TweetType = {
    _id: string,
    tweet_id: string,
    username: string,
    user_image: string,
    created_at: number,
    created_at_datetime: number,
    favorite_count: string,
    text: string | null,
    media: string | null
}

const schema = new Schema<TweetType>({
    _id: { type: String, required: true },
    tweet_id: { type: String, required: true },
    username: { type: String, required: true },
    user_image: { type: String, required: true },
    created_at: { type: Number, required: true },
    created_at_datetime: { type: Number, required: true },
    favorite_count: { type: String, required: true },
    text: { type: String, default: null },
    media: { type: String, default: null }
})

const modelName: string = 'Tweet'

export default (connection && connection.models[modelName]) ? connection.models[modelName] as Model<TweetType> : model<TweetType>(modelName, schema)