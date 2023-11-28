const express = require("express")
const rotaCarros = require("./Rotas/carros")
const rotaClientes = require("./Rotas/clientes")
const rotaAluguel = require("./Rotas/aluguel")

const app = express()


const port = 8000
app.use(express.json())
app.use('/carros', rotaCarros)
app.use('/clientes', rotaClientes)
app.use('/aluguel', rotaAluguel)
app.listen(port, () => {
    console.log(`escutando a porta ${port}`)
}) 