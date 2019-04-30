module.exports = function (sequelize, DataTypes) {
    var Order = sequelize.define("Order", {
        order_name: {
            type: DataTypes.STRING,
            allowNull: false,
        }
    },{
        timestamps: false
    });

    Order.associate = function (models) {
        Order.belongsToMany(models.Customer, {
            through: models.Customer_order, timestamps: false
        })
    }
    return Order;
}