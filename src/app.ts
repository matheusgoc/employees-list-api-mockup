import dotenv from 'dotenv'
import express from 'express'
import path from 'path'
import indexRoute from './routes/index'
import employeeRoute from './routes/employee'

dotenv.config()
const port = process.env.SERVER_PORT || 3000
const app = express()

app.use(express.json())
app.use(express.urlencoded({ extended: false }))
app.use(express.static(path.join(__dirname, 'public')))

// routes
app.use('/', indexRoute)
app.use('/api/employee', employeeRoute)

app.listen( port, () => {
  console.log( `server started at http://localhost:${ port }` )
})
