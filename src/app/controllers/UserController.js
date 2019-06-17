const { User } = require("../models");
const bcrypt = require("bcryptjs");

class UserController {
   async store(req, res) {
      const { email } = req.body;

      const user = User.findOne({ where: { email } });
      // A linha abaixo retorna erro: user.soma is not a function
      // console.log("Soma", user.soma(10, 20));

      // Verifica se o email já existe
      if (await User.findOne({ where: { email } })) {
         return res.status(400).json({ error: "Usuário já existe " });
      }

      const user = await User.create(req.body);
      return res.json(user);
   }
}

module.exports = new UserController();
