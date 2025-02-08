import express from 'express'
import cors from 'cors'
import https from 'https'
import * as fs from 'fs'

import 'dotenv/config'

const options = {
  key: fs.readFileSync("/etc/letsencrypt/live/x-api.panoramablock.com/privkey.pem"),
  cert: fs.readFileSync("/etc/letsencrypt/live/x-api.panoramablock.com/fullchain.pem"),
}

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