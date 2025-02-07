import express from 'express'
import cors from 'cors'
import https from 'https'
import * as fs from 'fs'

const options = {
  key: fs.readFileSync("server.key"),
  cert: fs.readFileSync("server.cert"),
}


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
server.use(express.urlencoded({ extended: true }))

server.use(mainRouter)

const port = process.env.PORT || 443
https.createServer(options, server).listen(port, () => {
    console.log(`Servidor rodando em HTTPS na porta ${port}`)
})