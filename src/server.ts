import express from 'express'
import cors from 'cors'

import 'dotenv/config'

import { mainRouter } from './routes/main'
import helmet from 'helmet'
import { mongoConnect } from './database/mongo'

mongoConnect()

const server = express()
server.use(helmet({
    crossOriginResourcePolicy: { policy: "cross-origin" },
    crossOriginOpenerPolicy: { policy: "unsafe-none" }
}))
server.use(cors({
    origin: '*',
    methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
    allowedHeaders: ['Content-Type', 'Authorization', 'Accept'],
    credentials: true
}))
server.use(express.json())
server.use(express.urlencoded({ extended: true }));

server.use(mainRouter)

const port = process.env.PORT || 8000
server.listen(port, () => {
    console.log(`🚀 Servidor rodando em http://localhost:${port}`)
})