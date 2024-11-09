const Product = require('./../models/product.model.js');

exports.getProducts = async (req, res) => {
  try {
    const product = await Product.findOne({ _id: "672d256298a1dd327afc68a0" });
    res.status(200).json(product);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
}

exports.getProducts = async (req, res) => {
    try {
      const product = await Product.findOne({ _id: "672d256298a1dd327afc68a0" });
      res.status(200).json(product);
    } catch (err) {
      res.status(500).json({ message: err.message });
    }
}


exports.createProducts = async (req, res) => {
    try {
        const product = await Product.create(req.body);
        res.status(200).json(product);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
}

exports.deleteProducts = async (req, res) => {
    try {
        const { id } = req.params;
        const product = await Product.findByIdAndDelete(id);
        if (!product) return res.status(404).json({ message: "Product not found" });
        res.status(200).json("dats deleted successfully");
      } catch (err) {
        res.status(500).json({ message: err.message });
    }
}

exports.updateProducts = async (req, res) => {
    try {
        const { id } = req.params;
        const pro = await Product.findByIdAndUpdate(id, req.body);
        const updatedProduct = await Product.findOne({ _id: id });
        res.status(200).json(updatedProduct);
      } catch (err) {
        res.status(500).json({ message: err.message });
    }
}
