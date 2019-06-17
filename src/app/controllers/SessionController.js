const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const authConfig = require("../../config/auth");
const { User } = require("../models");

class SessionController {
   async store(req, res) {
      const { email, password } = req.body;

      const user = await User.findOne({ where: { email } });

      if (!user) {
         return res.status(400).json({ error: "Usuário não encontrado" });
      }

      // Compara a senha inserida pelo usuário com a do database
      // As funções abaixo também são declaradas no model User nas aulas (Módulos 2 e 3, respectivamente)
      // Consegui fazê-las funcionar aqui
      const checkPassword = async function(password) {
         return bcrypt.compare(password, user.password_hash);
      };

      if (!(await checkPassword(password)) === true) {
         return res.status(400).json({ error: "Senha incorreta" });
      }

      const generateToken = function({ id }) {
         return jwt.sign({ id }, authConfig.secret, {
            expiresIn: authConfig.ttl
         });
      };

      return res.json({
         user,
         token: generateToken(user)
      });
   }
}

module.exports = new SessionController();
