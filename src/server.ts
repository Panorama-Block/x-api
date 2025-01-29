import express from 'express'
import cors from 'cors'

import 'dotenv/config'

import { mainRouter } from './routes/main'
import helmet from 'helmet'
import { mongoConnect } from './database/mongo'

mongoConnect()

const server = express()
server.use(helmet())
server.use(cors())
server.use(express.json())
server.use(express.urlencoded({ extended: true }));

server.use(mainRouter)

const port = process.env.PORT || 8000
server.listen(port, () => {
    console.log(`🚀 Servidor rodando em http://localhost:${port}`)
})