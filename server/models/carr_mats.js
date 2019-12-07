module.exports = (sequelize,DataTypes)=>{

    const carr_mats = sequelize.define('carr_mats',{

        id:{
            autoIncrement:true,
            primaryKey:true,
            type:DataTypes.INTEGER
        },
        idmat:DataTypes.INTEGER,
        pensum:DataTypes.INTEGER,
        idcarr:DataTypes.INTEGER
    })
    return carr_mats;

}





// create table carr_mat(
// 	id int GENERATED by DEFAULT as IDENTITY PRIMARY key,
// 	idmat int REFERENCES materias(id),
// 	pensum int not null,
// 	idcarr int REFERENCES carreras(id),
//   "createdAt" date,
//   "updatedAt" date
//  );