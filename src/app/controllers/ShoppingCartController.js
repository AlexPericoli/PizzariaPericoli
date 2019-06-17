const { ProductSize } = require("../models");

class ShoppingCartController {
   /*
   Exemplo de Pedido:
   1- Pizza Calabresa 30cm (id 7)
   2- Coca-Cola 1500ml (id 5)

   Shopping Cart:

   [
      { id: 1, id_prod_size: 7, quant: 2 },
      { id: 2, id_prod_size: 5, quant: 1 }
   ]

   */
   async update(req, res) {
      const idProdSize = req.params.id_product_size;

      // Retorna o preço unitário do item adicionado
      const { price: unitPrice } = await ProductSize.findOne({
         where: { id: idProdSize }
      });

      // Cria uma variável na requisição
      const shoppingCart = [];

      // Teste para o carrinho de compras
      req.shoppingCart = { id_prod_size: 7, quant: 2 };
      shoppingCart.push(req.shoppingCart);

      req.shoppingCart = { id_prod_size: 5, quant: 1 };
      shoppingCart.push(req.shoppingCart);

      console.log("shoppingCart", shoppingCart);

      return res.status(200).json(unitPrice);
   }
}

module.exports = new ShoppingCartController();
