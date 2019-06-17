const { Product } = require("../models");

class ProductController {
   // Listagem dos produtos
   async index(req, res) {
      const products = await Product.findAll({});

      return res.status(200).json(products);
   }

   async store(req, res) {
      const { description } = req.body;

      // Verifica se o prodtuo já existe
      if (await Product.findOne({ where: { description } })) {
         return res.status(400).json({ error: "Produto já existe" });
      }

      const product = await Product.create(req.body);
      return res.json(product);
   }
}

module.exports = new ProductController();
