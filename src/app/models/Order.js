module.exports = (sequelize, DataTypes) => {
   const Order = sequelize.define("Order", {
      product_type: DataTypes.INTEGER,
      product_size: DataTypes.INTEGER,
      quant: DataTypes.INTEGER,
      address: DataTypes.STRING,
      obs: DataTypes.STRING,
      total_price: DataTypes.FLOAT
   });

   Order.associate = models => {
      Order.belongsTo(models.User, { foreignKey: "id_user" });
   };

   return Order;
};
