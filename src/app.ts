import express from 'express'
import routes from './routes/routes'
import path from 'path'
import bodyParse from 'body-parser'
import cors from 'cors'

const app = express()
app.use(cors())
app.use(bodyParse.json())
app.use(routes)
app.use('/uploads', express.static(path.resolve(__dirname, '..', 'uploads')))

app.listen(3333, () => {
    console.log('Rodando na porta: 3333')
})