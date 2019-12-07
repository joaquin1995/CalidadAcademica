const archivos = require('../models').archivos;
const fs = require('fs');
const path = require('path');
console.log(archivos);

const get = (req, res) => {
    archivos.findAll()
        .then(archivo => {
            res.status(200).send({
                archivo
            });
        })
        .catch(err => {
            res.status(500).send({
                message: 'error al buscar las archivos:',
                err
            });
        });

};

const getId = (req, res) => {
    archivos.findAll({
            where: {
                idact: req.params.id
            }
        })
        .then(archivo => {
            res.status(200).send({
                archivo
            });
        })
        .catch(err => {
            res.status(500).send({
                message: 'error al buscar las archivos:',
                err
            });
        });

};

const post = (req, res) => {
    archivos.create(req.body)
        .then(archivo => {
            res.status(200).send({
                archivo
            })
        })
        .catch(err => {
            res.status(500).send({
                message: 'error al insertar un archivo'
            });

        });
};

const put = (req, res) => {
    archivos.findByPk(req.params.id)
        .then(archivo => {
            archivo.update(req.body)
                .then(() => {
                    res.status(200).send({
                        archivo
                    });
                })
                .catch(err => {
                    res.status(500).send({
                        message: 'no se puedo actualizar'
                    });
                })
        })
        .catch(err => {
            res.status(500).send({
                message: 'no se pudo encontrar'
            });
        })
};


const postFile = (req, res) => {
    if (req.files) {
        let file_path = req.files.file.path;
        let file_split = file_path.split('/');
        let file_name = file_split[3];
        let ext_split = file_name.split('.');
        let file_ext = ext_split[1];

        archivos.create({
                nombre: file_name,
                estado: 'T',
                idact: req.body.idact
            })
            .then(archivo => {
                res.status(200).send({
                    archivo
                })
            })
            .catch(err => {
                fs.unlink(file_path, (err) => {
                    if (err) {
                        res.status(500).send({
                            messagge: 'ocurrio un error al elimnar un archivo'
                        });
                    }
                })
                res.status(500).send({
                    message: 'error al insertar un archivo',
                    err
                });
            });
    }
};


const getFile = (req, res) => {
    let file = req.params.file;
    let path_foto = ''
    path_foto = `./server/uploads/fotografias/${file}`;
    console.log('patch', path_foto);
    fs.exists(path_foto, (exists) => {
        if (exists) {
            // res.sendFile(path.resolve(path_foto));
            console.log('si');
            res.sendFile(path.resolve(path_foto));

        } else {
            res.status(400).send({
                messagge: 'No se encuentra el archivo'
            });
        }
    })
}



module.exports = {
    get,
    post,
    put,
    postFile,
    getFile,
    getId
};


// if (req.files) {
//     let file_path = req.files.file.path;
//     let file_split = file_path.split('/');
//     let file_name = file_split[3];
//     let ext_split = file_name.split('.');
//     let file_ext = ext_split[1];

//     if (file_ext === 'png' || file_ext === 'jpg') {

//         inmuebles.create({
//             foto: file_name,
//             descripcion:req.body.descripcion,
//             idcas:req.body.idcas
//         })
//         .then(inmueble => {
//             res.status(200).send({
//                 inmueble
//             })
//         })
//         .catch(err => {
//             fs.unlink(file_path,(err) => {
//                 if(err){
//                     res.status(500).send({messagge:'ocurrio un error al elimnar un archivo'});
//                 }   
//             })
//             res.status(500).send({
//                 message: 'error al insertar un archivo',err
//             });

//         });

//     } else {
//         res.status(500).send({messagge:'Extencion no valida'});  
//     }
// } else {
//     res.status(400).send({
//         messagge: 'Debe seleccionar una fotografia'
//     });
// }