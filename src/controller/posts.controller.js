const postController = {}
postController.obtener = (req, res) => {
    res.send('funcionado')
}
postController.crear = (req, res) => {
    res.send('funcionado crear')
}
postController.actualizar = (req, res) => {
    res.send('funcionado actualizar')
}
postController.eliminar = (req, res) => {
    res.send('funcionado eliminar')
}
module.exports = postController;