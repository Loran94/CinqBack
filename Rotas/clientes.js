const {Router} = require("express")
const { postCarros } = require("../controladores/carros")
const {getCliente,postClientes, getClientes, patchCliente, deleteCliente} = require("../controladores/clientes")
const router = Router()

router.get('/', getClientes)
router.get('/:id', getCliente)
router.post('/', postClientes)
router.patch('/:id', patchCliente)
router.delete('/:id', deleteCliente)


module.exports = router