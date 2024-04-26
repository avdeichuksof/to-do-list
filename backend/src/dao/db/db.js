import mongoose from 'mongoose'
import config from '../../config/config.js'
const url = config.mongo_url

export const connectMongo = async () => {
    try {
        await mongoose.connect(url)
        console.log('Connected to MongoDB')
    } catch (error) {
        console.error('Error connecting to DB: ', error)
    }
}

