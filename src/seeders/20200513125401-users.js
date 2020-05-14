'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {

    return queryInterface.bulkInsert('user', [{
      username: 'John',
      password: "pass123",
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      username: 'Jane',
      password: "passw1234",
      createdAt: new Date(),
      updatedAt: new Date()
    }], {});

  },

  down: (queryInterface, Sequelize) => {

    return queryInterface.bulkDelete('user', null, {});
  }
};
