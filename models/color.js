module.exports = function (sequelize, DataTypes) {
    const Color = sequelize.define('Color', {
            name: {
                type: DataTypes.STRING,
                unique: true
            },
            hex: {
                type: DataTypes.STRING,
                unique: true
            }
        },
        {
            underscored: true,
            timestamp: false,
            timestamps: false
        }
    )

    return Color
}