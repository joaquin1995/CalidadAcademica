const usuarios = require('../models').usuarios;
const jwt = require('../services/jwt');


function create(req,res){

    usuarios.create(req.body)
    .then(usuario => {
        res.status(200).send({usuario});
    })
    .catch(err => {
        res.status(500).send({messagge: 'no se pudo crear :',err});
    })
}


function login(req,res){

    usuarios.findOne({
        where:{
            usuario:req.body.usuario,
            password:req.body.password
        }
    })
    .then(usuario =>{
        if(usuario){
            if(req.body.token){
                res.status(200).send({
                    token:jwt.createToken(usuario)
                });
            }else{
                res.status(200).send({
                    usuario:usuario
                });
            }
        }else{
            res.status(500).send({messagge:'Acceso no autorizado'});
    
        }
        
    })
    .catch(err => {
        res.status(500).send({messagge:'Ocurrio un error al buscar al usuario.'});
    });
}


function getAll(req,res){
    usuarios.findAll()
    .then(usuario => {
        res.status(200).send({usuario});
    })
    .catch(err => {
        res.status(500).send({messagge:'Ocurrio un error al buscar al usuario.'});
    })


}


module.exports = {
    create,
    login,
    getAll
    

}