module.exports = function(sequelize, DataTypes){
    var Customer_order = sequelize.define("Customer_order", {
        quantity: {
            type: DataTypes.INTEGER,
            defaultValue: 1
        }
    }, {
        timestamps: false
    })
    return Customer_order;
}