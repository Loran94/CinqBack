const { getTodosCarros, getCarroPorId,addCarro, editaCarro, deletaCarroId } = require("../serviços/carros")

function getCarros(req,res){
    try {
        const carros = getTodosCarros()
        res.send(carros)
    } catch (error) {
        res.status(500)
        res.send(error.message)
    }
}
function getCarro(req,res){
    try {
        const id = req.params.id
        if(id && Number(id)){
            const carro = getCarroPorId(id)
            res.send(carro)
        }else{
            res.status(422)
            res.send ("ID inválido!!!")
        }
    } catch (error) {
        res.status(500)
        res.send(error.message)
    }
}

 function postCarros(req, res){
    try {
        const carroNovo = req.body
        if (req.body.nome && req.body.id) {
            addCarro(carroNovo)
        res.status(201)
        res.send("Carros adicionado com sucesso")
        } else {
            res.status(422)
            res.send("Você precisa preencher todos os campos")
        }
        
    } catch (error) {
        res.status(500)
        res.status(error.message)
    }
}

function patchCarro(req, res){
    try {
        const id = req.params.id
        if(id && Number(id)){
            const body = req.body
            editaCarro(body, id)
            res.send("Carro modificado com sucesso")
        }else{
            res.status(422)
            res.send ("ID inválido!!!")
        }
        
    } catch (error) {
        res.status(500)
        res.send(error.message)
    }
}

function deleteCarro(req, res){
    try {
        const id = req.params.id
        if(id && Number(id)){
            const body = req.body
            deletaCarroId(id)
            res.send("Carro deletado com sucesso")
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
    getCarros,
    getCarro,
    postCarros,
    patchCarro,
    deleteCarro
    
 }