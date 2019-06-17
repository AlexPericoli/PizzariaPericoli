module.exports = (sequelize, DataTypes) => {
   const ProductType = sequelize.define("ProductType", {
      description: DataTypes.STRING
   });

   ProductType.associate = models => {
      ProductType.belongsTo(models.Product, { foreignKey: "id_product" });
   };

   return ProductType;
};
