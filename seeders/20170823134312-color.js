let randomColors = require('./../faker')

module.exports = {
    up: function (queryInterface, Sequelize) {
        return queryInterface.bulkInsert('colors', randomColors, {})
    },

    down: function (queryInterface, Sequelize) {
        /**
          Add reverting commands here.
          Return a promise to correctly handle asynchronicity.

          Example:
          return queryInterface.bulkDelete('Person', null, {})
        **/
    }
}