// customer

module.exports = function (sequelize, DataTypes) {
    var Customer = sequelize.define('Customer', {
        name: {
            type: DataTypes.STRING,
            allowNull: false
        },
        orders: {
            type: DataTypes.STRING
        }
    }, {
            timestamps: false
        });
    return Customer;
}