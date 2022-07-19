const express = require('express')

const app = express()

app.use(express.json())

let notes = [
    {
        id: 1,
        content: 'Me tengo que subscribir a telecentro para tener 300 megas',
        date: 'El 4 de agosto de dos mil dos',
        important: true,
    },
    {
        id: 2,
        content: 'Tengo que estudiar porque sino voy a morir pobre',
        date: 'dos mil quince fue alto anio',
        important: false,
    },
    {
        id: 3,
        content: 'Repasar los retos de JS de midudev',
        date: 'dos mil quince fue alto anio',
        important: true,
    },
]

app.get('/', (request, response) => {
    response.send('<h1>ProbandoAaaanaashe</h1>')
})

app.get('/api/notes', (request, response) => {
    response.json(notes)
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
