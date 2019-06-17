module.exports = {
   up: (queryInterface, Sequelize) => {
      return queryInterface.createTable("products", {
         id: {
            allowNull: false,
            autoIncrement: true,
            primaryKey: true,
            type: Sequelize.INTEGER
         },
         description: {
            allowNull: false,
            type: Sequelize.STRING
         },
         unit_size: {
            allowNull: false,
            type: Sequelize.STRING
         },
         image: {
            allowNull: true,
            type: Sequelize.STRING
         },
         created_at: {
            allowNull: false,
            type: Sequelize.DATE
         },
         updated_at: {
            allowNull: false,
            type: Sequelize.DATE
         }
      });
   },

   down: (queryInterface, Sequelize) => {
      return queryInterface.dropTable("products");
   }
};
