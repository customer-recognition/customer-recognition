module.exports = function (sequelize, DataTypes) {
    var Order = sequelize.define("Order", {
        order_name: DataTypes.STRING
    });

    Order.associate = function(models){
        Order.belongsToMany(models.Customer, {
            through: "Customer_orders"
        })
    }
    return Order;
}