import express from 'express'
import path from 'path'
import projectsRoute from './routes/projectsRoute'
import elementsRoute from './routes/elementsRoute'

const server = express()

server.use(express.json())
server.use(express.static(path.join(__dirname, 'public')))

// Routes
// server.use('/api/v1/projects', projectsRoute)
// server.use('/api/v1/elements', elementsRoute)

// Wildcard route
server.get('*', (req, res) => {
  res.sendFile(path.resolve('server/public/index.html'))
})

export default server
