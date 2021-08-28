const { Router } = require('express');
const routes = new Router();
const postController = require('../controller/posts.controller');
// Add routes
routes.get('/', postController.obtener);
routes.post('/', postController.crear);
routes.put('/', postController.actualizar);
routes.delete('/', postController.eliminar);

module.exports = routes;