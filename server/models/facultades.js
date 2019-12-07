module.exports = (sequelize, DataTypes) => {

    const facultades = sequelize.define('facultades', {

        id: {
            // autoIncrement:true,
            primaryKey: true,
            type: DataTypes.INTEGER
        },

        descripcion: DataTypes.TEXT
    });


    facultades.associate = function (models) {
        facultades.hasMany(models.carreras, {
            foreignKey: 'idfac',
            sourceKey: 'id'
        });
    
    };


    return facultades;

}

// CREATE TABLE facultades(
//     id int PRIMARY key,
//     descripcion text not null,
//     "createdAt" date,
//    "updatedAt" date
//     );