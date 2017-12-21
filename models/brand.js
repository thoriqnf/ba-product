module.exports = (sequelize, DataTypes) => {
	const Brand = sequelize.define('Brand', {
		name: {
			type: DataTypes.STRING,
			allowNull: false
		}
	});

	Brand.associate = models => {
		Brand.hasMany(models.Brand, {
			foreignKey: 'modelId',
			as: 'product'
		});
	};

	return Brand;
};
