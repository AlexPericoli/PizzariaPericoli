module.exports = {
   up: (queryInterface, Sequelize) => {
      return queryInterface.createTable("product_types", {
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
         id_product: {
            allowNull: false,
            type: Sequelize.INTEGER,
            references: { model: "products", key: "id" }
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
      return queryInterface.dropTable("product_types");
   }
};
