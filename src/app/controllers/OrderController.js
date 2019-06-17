const { Product } = require("../models");

class OrderController {
   async store(req, res) {
      // Preenche os itens do pedido
      const { prod_type, prod_size, price_unit, quantity } = req.body;

      // Tipo de Produto
      const productType = await ProductType.findOne({
         // include: [{ model: Product }],
         where: { id: prod_type }
      });

      // Descrição do Produto
      const idProduct = productType.id_product;
      const product = await Product.findOne({
         where: { id: idProduct }
      });

      // Tamanho do Produto
      const productSize = await ProductSize.findOne({
         where: { id: prod_size }
      });

      // Nome do Product
      // const prodName = req.query.desc;
      // const prodType = productType.ProductType.description;
      // const prodSize = `${productSize.description} ${req.query.unit}`;

      // const name = `${prodName} de ${prodType} de ${prodSize}`;

      // Item do Pedido
      const order = {
         product,
         productType,
         productSize
      };

      return res.status(200).json(order);
   }
}

module.exports = new OrderController();
