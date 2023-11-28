const { addCliente, getTodosClientes, getClientePorId, editaCliente, deletaClienteId } = require("../serviços/cliente")

function getClientes(req,res){
    try {
        const clientes = getTodosClientes()
        res.send(clientes)
    } catch (error) {
        res.status(500)
        res.send(error.message)
    }
}
function getCliente(req,res){
    try {
        const id = req.params.id
        if(id && Number(id)){
            const cliente = getClientePorId(id)
            res.send(cliente)
        }else{
            res.status(422)
            res.send ("ID inválido!!!")
        }
    } catch (error) {
        res.status(500)
        res.send(error.message)
    }
}

 function postClientes(req, res){
    try {
        const clienteNovo = req.body
        if (req.body.nome && req.body.id) {
            addCliente(clienteNovo)
        res.status(201)
        res.send("Cliente adicionado com sucesso")
        } else {
            res.status(422)
            res.send("Você precisa preencher todos os campos")
        }
        
    } catch (error) {
        res.status(500)
        res.status(error.message)
    }
}

function patchCliente(req, res){
    try {
        const id = req.params.id
        if(id && Number(id)){
            const body = req.body
            editaCliente(body, id)
            res.send("Cliente modificado com sucesso")
        }else{
            res.status(422)
            res.send ("ID inválido!!!")
        }
        
    } catch (error) {
        res.status(500)
        res.send(error.message)
    }
}

function deleteCliente(req, res){
    try {
        const id = req.params.id
        if(id && Number(id)){
            const body = req.body
            deletaClienteId(id)
            res.send("Cliente deletado com sucesso")
        }else{
            res.status(422)
            res.send ("ID inválido!!!")
        }
        
        
    } catch (error) {
        res.status(500)
        res.send(error.message)
    }

}


 module.exports ={
    getClientes,
    getCliente,
    postClientes,
    patchCliente,
    deleteCliente
    
 }