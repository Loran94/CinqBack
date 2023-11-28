const {Router} = require("express")
const {getAlugueis,postAluguel, getAluguel, patchAluguel, deleteAluguel} = require("../controladores/alugueis")
const router = Router()

router.get('/', getAlugueis)
router.get('/:id', getAluguel)
router.post('/', postAluguel)
router.patch('/:id', patchAluguel)
router.delete('/:id', deleteAluguel)


module.exports = router