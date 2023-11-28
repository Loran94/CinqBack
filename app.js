const express = require("express")
const rotaCarros = require("./Rotas/carros")
const rotaClientes = require("./Rotas/clientes")
const rotaAlugueis = require("./Rotas/alugueis")

const app = express()


const port = 8000
app.use(express.json())
app.use('/carros', rotaCarros)
app.use('/clientes', rotaClientes)
app.use('/alugueis', rotaAlugueis)
app.listen(port, () => {
    console.log(`escutando a porta ${port}`)
}) 
