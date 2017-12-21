module.exports = (sequelize, DataTypes) => {
	const Product = sequelize.define('Product', {
		Name: {
			type: DataTypes.STRING,
			allowNull: false
		},
		Description: {
			type: DataTypes.STRING,
			allowNull: false
		},
		Price: {
			type: DataTypes.INTEGER,
			allowNull: false
		},
		BidPrice: {
			type: DataTypes.INTEGER,
			allowNull: false
		}
	});

	Product.associate = models => {
		product.belongsTo(models.category, {
			foreignKey: 'categoryId'
		}),
			product.belongsTo(models.brand, {
				foreignKey: 'brandId'
			});
	};

	return Product;
};
