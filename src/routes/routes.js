const { Router } = require('express')
const { handleGetName, handleGetProducts, handleCreateProduct } = require('../controllers/index')


const router = Router()

router.get('/home', (req, res) => {
    res.send('Hola intro express')
})
 
router.get('/perfil',handleGetName)

router.get('/productos', handleGetProducts)

router.post('/productos', handleCreateProduct)


module.exports = router;