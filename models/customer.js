module.exports = function (sequelize, DataTypes) {
    var Customer = sequelize.define("Customer", {
        customer_name: DataTypes.STRING,
    });

    Customer.associate = function(models){
        Customer.belongsToMany(models.Order, {
            through: "Customer_orders"
        });
    };
    return Customer;
}