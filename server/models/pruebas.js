module.exports = (sequelize,DataTypes)=>{

    const pruebas = sequelize.define('pruebas',{

        idprueba:{
            autoIncrement:true,
            primaryKey:true,
            type:DataTypes.INTEGER
        },

        idtest:DataTypes.INTEGER,
        id:DataTypes.INTEGER
    });

    pruebas.associate = function(models) {
        pruebas.belongsTo(models.tests, {
          foreignKey: 'idtest',
          targetKey: 'idtest'
        });
        pruebas.belongsTo(models.usuarios, {
            foreignKey: 'id',
            targetKey: 'id'
          });
      };

    return pruebas;


}

