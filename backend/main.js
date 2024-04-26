// ---- dependencies
import cors from 'cors'
import http from 'http'
import path from 'path'
import express from 'express'
import { fileURLToPath } from 'url'
import bodyParser from 'body-parser'
import session from 'express-session'
import MongoStore from 'connect-mongo'

import config from './src/config/config.js'
import { connectMongo } from './src/dao/db/db.js'

// routers
import taskRouter from './src/routers/router-task.js'
import categoryRouter from './src/routers/router-category.js'

// server
const app = express()
const PORT = config.port

// http
const server = http.createServer(app)

// cors
app.use(cors({
    origin: 'http://localhost:3000',
    credentials: true
}))

// JSON settings
app.use(express.json())
app.use(express.urlencoded({extended: true}))
app.use(bodyParser.json())

// mongoStore

const expire = 1000 * 60 * 60 * 2
app.use(session({
    store: MongoStore.create({
        mongoUrl: config.mongo_url
    }),
    secret: config.secret,
    resave: false,
    saveUninitialized: false,
    cookie: {
        maxAge: expire
    }
}))


// routers
app.use('/api/task', taskRouter)
app.use('/api/category', categoryRouter)

// static
const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)
// static react files
app.use(express.static(path.join(__dirname, '/public')))
const frontendBuildPath = path.join(__dirname, '..', 'frontend', 'dist')
app.use(express.static(path.join(frontendBuildPath)))

// catch-all
app.get('*', (req, res) => {
    res.sendfile(path.join(frontendBuildPath, 'index.html'))
})

// server listen
server.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`)
    connectMongo()
})