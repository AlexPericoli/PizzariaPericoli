const { ProductSize } = require("../models");

class ProductSizeController {
   async index(req, res) {
      // Listagem dos tamanhos dos produtos
      const prod_size = req.params.id_product_type;

      const productSizes = await ProductSize.findAll({
         where: { id_product_types: prod_size }
      });

      return res.status(200).json(productSizes);
   }

   async listAll(req, res) {
      const { product, prod_type, prod_size } = req.body;

      // Dados completos dos Produtos (3 tabelas)
      const productSize = await ProductSize.findAll({
         include: [{ model: ProductType, include: [{ model: Product }] }],
         where: { id_product_types: prod_type }
      });

      return res.status(200).json(productSize);
   }

   async store(req, res) {
      const { description, id_product_types } = req.body;

      // Verifica se o tamanho do prodtuo já existe
      if (
         await ProductSize.findOne({ where: { description, id_product_types } })
      ) {
         return res
            .status(400)
            .json({ error: "Tamanho deste produto já existe" });
      }

      const productSize = await ProductSize.create(req.body);
      return res.json(productSize);
   }
}

module.exports = new ProductSizeController();
