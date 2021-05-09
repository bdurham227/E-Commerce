const router = require('express').Router();
// const { getAllProducts, getProduct, createProduct, updateProduct, deleteProduct } = require('../../controllers/productController')
const productController = require('../../controllers/productController');
// The `/api/products` endpoint

//mounting routers
router
.get('/', productController.getAllProducts)
.post('/', productController.createProduct)

router
.get('/:id', productController.getProduct)
.put('/:id', productController.updateProduct)
.delete('/:id', productController.deleteProduct)




module.exports = router;
