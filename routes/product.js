const express = require('express');
const productContoller = require('./../contollers/productController.js');
const router = express.Router();

router.get("/", productContoller.getProducts);
router.post("/", productContoller.createProducts);
router.delete("/:id", productContoller.deleteProducts);
router.put("/:id", productContoller.updateProducts);

module.exports = router;