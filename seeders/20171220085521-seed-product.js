'use strict';

module.exports = {
	up: function(queryInterface, Sequelize) {
		/*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkInsert('Person', [{
        name: 'John Doe',
        isBetaMember: false
      }], {});
    */

		return queryInterface.bulkInsert(
			'Products',
			[
				{
					Name: '10.000',
					Description: 'pulsa telkomsel 10.000',
					Price: '12.000',
					BidPrice: '500',
					createdAt: new Date(),
					updatedAt: new Date()
				}
			],
			{}
		);
	},

	down: function(queryInterface, Sequelize) {
		/*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkDelete('Person', null, {});
    */
	}
};
