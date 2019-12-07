module.exports = (sequelize, DataTypes) => {

    const carreras = sequelize.define('carreras', {

        id: {
            // autoIncrement:true,
            primaryKey: true,
            type: DataTypes.INTEGER
        },

        carrera: DataTypes.TEXT,
        idfac: DataTypes.INTEGER
    });


    carreras.associate = function (models) {
        carreras.hasMany(models.actividades, {
            foreignKey: 'idcarrera',
            sourceKey: 'id'
        });
        carreras.belongsTo(models.facultades, {
            foreignKey: 'idfac',
            targetKey: 'id'
        });
    };





    return carreras;

}

// create table carreras(
//     id int PRIMARY key,
//    carrera text not null,
//    pensum int NULL, 
//    idfac int REFERENCES facultades(id),
//    "createdAt" date,
//   "updatedAt" date
//    );