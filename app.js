const express = require('express')

const app = express()

var usuarios = [
    {
        id: 1,
        name: 'Away'
    },
    {
        id: 2,
        name: 'Boça'
    }
]

app.use(express.json())

app.get('/usuarios', (req,res) => {
    res.send(usuarios)
})

app.post('/usuarios', (req, res) => {
    usuarios.push(req.body)
    res.send(usuarios)
})

app.put('/usuarios/:id', (req, res) => {
    let usuario = usuarios.find(us => us.id == req.params.id)
    usuario.name = req.body.name
    res.send(usuarios)
})    


app.delete('/usuarios/:id', (req, res, err) => {
    let usuario = usuarios.find(us => us.id == req.params.id)
    usuarios.splice(usuarios.indexOf(usuario),1)
    res.send(usuarios)
})
app.listen(3000, () =>
    console.log('Ta rodando')
)