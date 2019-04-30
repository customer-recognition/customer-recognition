module.exports = function(sequelize, DataTypes){
    var Customer_order = sequelize.define("Customer_order", {

    }, {
        timestamps: false
    })
    return Customer_order;
}