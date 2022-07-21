require('dotenv').config()
require('./mongo.js')

const express = require('express')
const cors = require('cors')
const app = express()
const Note = require('./models/note.js')
const notFound = require('./notFound.js')
const handleErrors = require('./handleErrors.js')

app.use(cors())
app.use(express.json())

app.get('/', (request, response) => {
    response.send('<h1>ProbandoAaaanaashe</h1>')
})

app.get('/api/notes', (request, response) => {
    Note.find({}).then((note) => {
        response.json(notes)
    })
})

app.get('/api/notes/:id', (request, response) => {
    const { id } = request.params

    Note.findByAndRemove(id)
        .then((result) => {
            response.status(204)
        })
        .catch((error) => next(error))

    response.status(204).end()
})

app.put('/api/notes/:id', (request, response) => {
    const { id } = request.params
    const note = request.body

    const newNoteInfo = {
        content: note.content,
        important: note.important,
    }

    Note.findByIdAndUpdate(id, newNoteInfo, { new: true }).then((result) => {
        response.json(result)
    })
})

app.delete('/api/notes/:id', (request, response) => {
    const { id } = request.params

    Note.findByIdAndDelete(id)
        .then(() => {
            response.status(204).end()
        })
        .catch((error) => next(error))
})

app.post('/api/notes', (request, response) => {
    const note = request.body

    if (!note.content) {
        return response.status(400).json({
            error: 'required "content" field is missing',
        })
    }

    const newNote = new Note({
        content: note.content,
        date: new Date(),
        important: note.importart || false,
    })

    note.save().then((savedNote) => {
        response.json(savedNote)
    })
})

app.use(notFound)
app.use(handleErrors)

const PORT = 3000
app.listen(PORT, () => {
    console.log(`server running on port ${PORT}`)
})
