const {Router} = require("express")
const {getCarros,postCarros, getCarro, patchCarro, deleteCarro} = require("../controladores/carros")
const router = Router()

router.get('/', getCarros)
router.get('/:id', getCarro)
router.post('/', postCarros)
router.patch('/:id', patchCarro)
router.delete('/:id', deleteCarro)


module.exports = router