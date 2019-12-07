module.exports = (sequelize,DataTypes)=>{

    const materias = sequelize.define('materias',{

        id:{
            // autoIncrement:true,
            primaryKey:true,
            type:DataTypes.INTEGER
        },

        siglas:DataTypes.TEXT,
        nombre:DataTypes.TEXT,
    })
    return materias;

};

// create table materias(
//     id int PRIMARY key,
// 	siglas TEXT,
// nombre text not null,
//  "createdAt" date,
// "updatedAt" date
//     );
    