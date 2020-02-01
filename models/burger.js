module.exports = (sequelize, Datatypes) => {
    
    const Model = sequelize.define('burgers', {
        burger_name : Datatypes.STRING,
        devoured : Datatypes.BOOLEAN
    });

    return Model;
};