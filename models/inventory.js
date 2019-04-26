// inventory of what the store has

module.exports = function (sequelize, DataTypes) {
    var Inventory = sequelize.define('Inventory', {
        item: {
            type: DataTypes.STRING,
            allowNull: false
        },
        price: {
            type: DataTypes.DECIMAL(10, 2),
            allowNull: false
        }
    }, {
            timestamps: false
        });
    return Inventory;
}