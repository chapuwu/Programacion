const express = require('express')
const cors = require('cors')

let todoList = []

const app = express()
app.use(cors())
app.use(express.json())

app.get('/notes', (request, response) => {
    response.json(todoList)
})

app.put('/notes', (request, response) => {
    const data = request.body
    todoList = data
})

const PORT = 3001
app.listen(PORT)
