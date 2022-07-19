require('dotenv').config()
require('./mongo.js')

const express = require('express')
const cors = require('cors')
const app = express()
const Note = require('./models/note.js')

app.use(cors())
app.use(express.json())

let notes = []

app.get('/', (request, response) => {
    response.send('<h1>ProbandoAaaanaashe</h1>')
})

app.get('/api/notes', (request, response) => {
    Note.find({}).then((note) => {
        response.json(notes)
    })
})

app.get('/api/notes/:id', (request, response) => {
    const id = Number(request.params.id)
    const note = notes.find((note) => note.id === id)

    if (note) {
        response.json(note)
    } else {
        response.status(404).end()
    }
})

app.delete('/api/notes/:id', (request, response) => {
    const id = Number(request.params.id)
    notes = notes.filter((note) => note.id === id)
    response.status(204).end()
})

app.post('/api/notes', (request, response) => {
    const note = request.body

    if (!note || !note.content) {
        return response.status(400).json({
            error: 'note.content is missing',
        })
    }

    const ids = notes.map((note) => note.id)
    const maxId = Math.max(...ids)

    const newNote = {
        id: maxId + 1,
        content: note.content,
        important: typeof note.important === 'undefined' ? note.important : false,
        date: new Date().toISOString(),
    }

    notes = [...notes, newNote]

    response.json(newNote)
})

const PORT = 3000
app.listen(PORT, () => {
    console.log(`server running on port ${PORT}`)
})
