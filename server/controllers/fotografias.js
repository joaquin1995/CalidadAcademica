const fotografias = require('../models').fotografias;
const fs = require('fs');
const thumb = require('node-thumbnail').thumb;
const path = require('path');

function create(req,res){
    fotografias.create(req.body)
    .then(fotografia => {
        res.status(200).send({fotografia});
    })
    .catch(err => {
        res.status(500).send({messagge:'Ocurrio un error al guardar la fotografia',err});
    })

}

function update(req,res){
    fotografias.findByPk(req.params.id)
    .then(fotografia => {
        fotografia.update(req.body)
        .then(() => {
            res.status(200).send({fotografia})
        })
        .catch(err => {
            res.status(500).send({messagge:'ocurrio un error al actualizar la fotografia'});

        })
    })  
    .catch(err => {
        res.status(500).send({messagge:'ocurrio un error al buscar la fotografia'});
    });
}

function uploadFotografia(req,res){
    let id = req.params.id;
    
    if(req.files){
        let file_path = req.files.foto.path;
        let file_split = file_path.split('/');
        let file_name = file_split[3];
        let ext_split = file_name.split('.');
        let file_ext = ext_split[1];
        
        if(file_ext === 'png' || file_ext === 'jpg'){
            let foto = {};
                foto.imagen = file_name;

                fotografias.findByPk(id)
                .then(fotografia => {
                    fotografia.update(foto)
                    .then(()=>{
                        let newPath = './server/uploads/fotografias/' + file_name;
                        let thumbPath =  './server/uploads/fotografias/thumbs';
                        
                        thumb({
                            source:path.resolve(newPath),
                            destination: path.resolve(thumbPath),
                            width:200,
                            suffix:''
                        }).then(() => {
                            res.status(200).send({fotografia});
                        }).catch(err => {
                            res.status(500).send({messagge:'ocurrio un erro al crear el thumbnail'});
                        });
                    })
                    .catch(err => {
                        fs.unlink(file_path,(err) => {
                            if(err){
                                res.status(500).send({messagge:'ocurrio un error al elimnar un archivo'});
                            }   
                        })
                        res.status(500).send({messagge:'Ocurrio un erro al actualizar la fotografia:',err});  
                    });                   
                })
                .catch(err => {
                    fs.unlink(file_path,(err) => {
                        if(err){
                            res.status(500).send({messagge:'ocurrio un error al elimnar un archivo'});
                        }   
                    })

                    res.status(500).send({messagge:'Ocurrio un error al buscar la fotografia:',err});  
                })
        }else{
            fs.unlink(file_path,(err) => {
                if(err){
                    res.status(500).send({messagge:'ocurrio un error al elimnar un archivo'});
                }   
            })
            res.status(500).send({messagge:'Extencion no valida'});  
        }

    }else{
        res.status(400).send({messagge:'Debe seleccionar una fotografia'});
    }
}


function getFotografia(req,res){
    let fotografia = req.params.fotografia;
    let thumb = req.params.thumb;
    let path_foto= ''
    if(!thumb)
         path_foto = './server/uploads/fotografias/' + fotografia;
    else
         path_foto = './server/uploads/fotografias/thumbs/' + fotografia;
    

    fs.exists(path_foto,(exists) => {
        if(exists){
            res.sendFile(path.resolve(path_foto));
        }else{
            res.status(400).send({messagge:'No se encuentra la fotografia'});
        }
    })
}


function getAll(req,res){
    fotografias.findAll({
        where:{
            activo:true
        },
        order:[
            ['numero','ASC']
        ]
    })
    .then(fotografia => {
        res.status(200).send({fotografia});
    })
    .catch(err => {
        res.status(500).send({messagge:'Ocurrio un erro al buscar las fotografias'});
    })
}


function getAllAdmin(req,res){
    fotografias.findAll({
        order:[
            ['numero','ASC']
        ]
    })
    .then(fotografia => {
        res.status(200).send({fotografia});
    })
    .catch(err => {
        res.status(500).send({messagge:'Ocurrio un erro al buscar las fotografias'});
    })

}




module.exports = {
    create,
    update,
    uploadFotografia,
    getFotografia,
    getAll,
    getAllAdmin
}