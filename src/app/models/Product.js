module.exports = (sequelize, DataTypes) => {
   const Product = sequelize.define("Product", {
      description: DataTypes.STRING,
      unitSize: DataTypes.STRING,
      image: DataTypes.STRING
   });

   return Product;
};
