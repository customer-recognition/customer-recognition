// customer

module.exports = function (sequelize, DataTypes) {
    var Order = sequelize.define('Order', {
        name: {
            type: DataTypes.STRING,
            allowNull: false
        },
        price: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        customer: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
    }, {
            timestamps: false
        });
    return Order;
}