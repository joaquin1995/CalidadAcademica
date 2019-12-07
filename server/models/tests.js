module.exports = (sequelize,DataTypes)=>{

    const tests = sequelize.define('tests',{

        idtest:{
            autoIncrement:true,
            primaryKey:true,
            type:DataTypes.INTEGER
        },
        id:DataTypes.INTEGER
    })
    return tests;

}

