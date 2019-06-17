module.exports = {
   up: (queryInterface, Sequelize) => {
      return queryInterface.createTable("orders", {
         id: {
            allowNull: false,
            autoIncrement: true,
            primaryKey: true,
            type: Sequelize.INTEGER
         },
         order: {
            allowNull: false,
            type: Sequelize.STRING
         },
         address: {
            allowNull: false,
            type: Sequelize.STRING
         },
         obs: {
            allowNull: false,
            type: Sequelize.STRING
         },
         total_price: {
            allowNull: false,
            type: Sequelize.FLOAT
         },
         id_user: {
            allowNull: false,
            type: Sequelize.INTEGER,
            references: { model: "users", key: "id" }
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
      /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.dropTable('users');
    */
   }
};
