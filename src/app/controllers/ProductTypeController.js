const { ProductType } = require("../models");

class ProductTypeController {
   // Listagem dos tipos de produtos
   async index(req, res) {
      const idProd = req.params.id_product;

      const productTypes = await ProductType.findAll({
         where: { id_product: idProd }
      });

      return res.status(200).json(productTypes);
   }

   async store(req, res) {
      const { description } = req.body;

      // Verifica se o tipo de produto já existe
      if (await ProductType.findOne({ where: { description } })) {
         return res.status(400).json({ error: "Tipo de produto já existe" });
      }

      const productType = await ProductType.create(req.body);
      return res.json(productType);
   }
}

module.exports = new ProductTypeController();
