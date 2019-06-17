const bcrypt = require("bcryptjs");
const authConfig = require("../../config/auth");

module.exports = (sequelize, DataTypes) => {
   // VIRTUAL significa que o campo só existe no código e não no database
   const User = sequelize.define(
      "User",
      {
         name: DataTypes.STRING,
         email: DataTypes.STRING,
         password: DataTypes.VIRTUAL,
         password_hash: DataTypes.STRING,
         profile: DataTypes.INTEGER
      },
      {
         hooks: {
            beforeSave: async user => {
               if (user.password) {
                  user.password_hash = await bcrypt.hash(user.password, 8);
               }
            }
         }
      }
   );

   // Esta é uma function de exemplo para testar
   User.prototype.soma = function(n1, n2) {
      return n1 + n2;
   };

   // Esta função me baseei no Módulo 3 de Nodejs (Autenticação JWT)
   // Funcionou só quando eu a coloquei no próprio SessionController
   /*
   User.prototype.generateToken = function({ id }) {
      return jwt.sign({ id }, authConfig.secret, {
         expiresIn: authConfig.ttl
      });
   };
   */

   return User;
};
