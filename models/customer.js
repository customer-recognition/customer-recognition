module.exports = function (sequelize, DataTypes) {
    var Customer = sequelize.define("Customer", {
        customer_name: {
            type: DataTypes.STRING,
            // allowNull: false
        },
        customer_email: {
            type: DataTypes.STRING,
            unique: true,
            // allowNull: false
        }
    },{
        timestamps: false
    });

    Customer.associate = function (models) {
        Customer.belongsToMany(models.Order, {
            through: models.Customer_order, timestamps: false,
        });
    };
    return Customer;
}