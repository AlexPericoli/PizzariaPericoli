module.exports = (sequelize, DataTypes) => {
   const ProductSize = sequelize.define("ProductSize", {
      description: DataTypes.STRING,
      price: DataTypes.FLOAT
   });

   ProductSize.associate = models => {
      ProductSize.belongsTo(models.ProductType, {
         foreignKey: "id_product_types"
      });
   };

   return ProductSize;
};
