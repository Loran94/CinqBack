const { getTodosCarros, getCarroPorId,addCarro, editaCarro, deletaCarroId } = require("../serviços/alugueis")

function getAlugueis(req,res){
    try {
        const alugueis = getTodosAlugueis()
        res.send(alugueis)
    } catch (error) {
        res.status(500)
        res.send(error.message)
    }
}
function getAluguel(req,res){
    try {
        const id = req.params.id
        if(id && Number(id)){
            const aluguel = getAluguelPorId(id)
            res.send(aluguel)
        }else{
            res.status(422)
            res.send ("ID inválido!!!")
        }
    } catch (error) {
        res.status(500)
        res.send(error.message)
    }
}

 function postAluguel(req, res){
    try {
        const AluguelNovo = req.body
        if (req.body.nome && req.body.id) {
            addAluguel(AluguelNovo)
        res.status(201)
        res.send("Aluguel adicionado com sucesso")
        } else {
            res.status(422)
            res.send("Você precisa preencher todos os campos")
        }
        
    } catch (error) {
        res.status(500)
        res.status(error.message)
    }
}

function patchAluguel(req, res){
    try {
        const id = req.params.id
        if(id && Number(id)){
            const body = req.body
            editaAluguel(body, id)
            res.send("Contrato de Aluguel modificado com sucesso")
        }else{
            res.status(422)
            res.send ("ID inválido!!!")
        }
        
    } catch (error) {
        res.status(500)
        res.send(error.message)
    }
}

function deleteAluguel(req, res){
    try {
        const id = req.params.id
        if(id && Number(id)){
            const body = req.body
            deletaCarroId(id)
            res.send("Contrato de Aluguel deletado com sucesso")
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
    getAlugueis,
    getAluguel,
    postAluguel,
    patchAluguel,
    deleteAluguel
    
 }