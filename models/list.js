module.exports = function(sequelize, DataTypes) {
    let list = sequelize.define('list', {
            id: {
                allowNull: false,
                autoIncrement: true,
                primaryKey: true,
                type: DataTypes.INTEGER(5).UNSIGNED
            },
            color_id: {
                allowNull: false,
                unique: true,
                type: DataTypes.INTEGER(5).UNSIGNED
            },
        },
        {
            underscored: true,
            timestamp: false,
            timestamps: false
        },
        {
            classMethods: {
                associate: function(models) {
                }
            }
        })

    return list
}