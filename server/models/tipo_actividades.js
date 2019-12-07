module.exports = (sequelize,DataTypes)=>{

    const tipo_actividades = sequelize.define('tipo_actividades',{

        id:{
            autoIncrement:true,
            primaryKey:true,
            type:DataTypes.INTEGER
        },

        nombre:DataTypes.TEXT,
        estado:DataTypes.CHAR(1)
    })
    return tipo_actividades;

}

// create table tipo_actividades(
//     id int GENERATED by DEFAULT as IDENTITY PRIMARY key,
//    nombre text not null,
//    estado char(1),
//     "createdAt" date,
//    "updatedAt" date
//     );