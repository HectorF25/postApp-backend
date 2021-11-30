const postController = {}
const mongoose = require('mongoose');

let postsSchema = require('../model/PostsModel');


postController.obtener = (req, res) => {
    postsSchema.find((error, data) => {
        if (error) {
            return next(error)
        } else {
            res.json(data)
        }
    })
    res.send('funcionado')
}
postController.crear = (req, res, next) => {
    postsSchema.create(req.body, (error, data) => {
        if (error) {
            return next(error)
        } else {
            console.log(data)
            res.json(data)
        }
    })
    res.send('funcionado crear')
}
postController.actualizar = (req, res) => {
    res.send('funcionado actualizar')
}
postController.eliminar = (req, res) => {
    res.send('funcionado eliminar')
}
module.exports = postController;