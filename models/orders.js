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
            through: "Customer_orders", timestamps: false
        })
    }
    return Order;
}