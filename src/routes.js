const express = require("express");

const routes = express.Router();

// Autenticação JWT
const authMiddleware = require("./app/middlewares/auth");

const UserController = require("./app/controllers/UserController");
const SessionController = require("./app/controllers/SessionController");
const ProductController = require("./app/controllers/ProductController");
const ProductTypeController = require("./app/controllers/ProductTypeController");
const ProductSizeController = require("./app/controllers/ProductSizeController");
const OrderController = require("./app/controllers/OrderController");
const ShoppingCartController = require("./app/controllers/ShoppingCartController");

// Listagens dos produtos
routes.get("/products/list", ProductController.index);
routes.get("/products_types/list/:id_product", ProductTypeController.index);
routes.get(
   "/products_sizes/list/:id_product_type",
   ProductSizeController.index
);

routes.post("/users", UserController.store);
routes.post("/sessions", SessionController.store);

routes.get("/teste", authMiddleware, (req, res) =>
   res.json({
      message: "Usuário autenticado com sucesso"
   })
);

// Carrinho de compras
routes.get("/shopping_cart/:id_product_size", ShoppingCartController.update);

// Orders
// Ex.: Pizza de Calabresa 30 cm
// routes.post("/orders", OrderController.store);

// Products Controller
// routes.get("/products/:id", ProductController.show);
// routes.post("/products", ProductController.store);
// routes.put("/products/:id", ProductController.update);
// routes.delete("/products/:id", ProductController.destroy);

routes.post("/products/types", ProductTypeController.store);
routes.post("/products/sizes", ProductSizeController.store);

module.exports = routes;
