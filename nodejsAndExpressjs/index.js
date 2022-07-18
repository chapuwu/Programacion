const express = require('express')

const app = express()

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

app.get('/', (req, res) => {
    res.send('<h1>ProbandoAaaanaashe</h1>')
})

app.get('api/notes', (req, res) => {
    res.json(notes)
})

app.get('/api/notes:id', (req, res) => {
    const id = req.params.id
    console.log({ id })
    const note = notes.find((note) => note.id === id)
    console.log({ note })
    res.json(note)
})
