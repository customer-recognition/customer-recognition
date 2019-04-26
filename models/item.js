// items that the customer orders

module.exports = function (sequelize, DataTypes) {
    var Items = sequelize.define('Items', {
        item: {
            type: DataTypes.STRING,
            allowNull: false
        },
        price: {
            type: DataTypes.INTEGER,
            allowNull: false
        }
    }, {
            timestamps: false
        });
    return Items;
}