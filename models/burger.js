module.exports = (sequelize, Datatypes) => {
    
    const Model = sequelize.define('burger', {
        burger_name : Datatypes.STRING,
        devoured : Datatypes.BOOLEAN,
    });

    return Model;
};