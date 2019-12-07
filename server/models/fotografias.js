module.exports = (sequelize,DataTypes)=>{

    const fotografias = sequelize.define('fotografias',{

        id:{
            autoIncrement:true,
            primaryKey:true,
            type:DataTypes.INTEGER
        },

        fotografia:DataTypes.TEXT,
        descripcion:DataTypes.TEXT,
        imagen:DataTypes.TEXT,
        numero:DataTypes.INTEGER,
        autor:DataTypes.TEXT,
        activo:DataTypes.BOOLEAN,
        usuario_creacion:DataTypes.TEXT
    })
    return fotografias;

}

