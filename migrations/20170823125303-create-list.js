'use strict'
module.exports = {
    up: function (queryInterface, Sequelize) {
        return queryInterface.createTable('list', {
            id: {
                allowNull: false,
                autoIncrement: true,
                primaryKey: true,
                type: Sequelize.INTEGER(5).UNSIGNED
            },
            color_id: {
                allowNull: false,
                unique: true,
                type: Sequelize.INTEGER(5).UNSIGNED
            }
        })
    },
    down: function (queryInterface, Sequelize) {
        return queryInterface.dropTable('list')
    }
}