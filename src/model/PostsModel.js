const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let postsSchema = new Schema({
    id: {
        type: String,
    },
    name: {
        type: String
    },
    email: {
        type: String
    },
    content: {
        type: Number
    }
}, {
    collection: 'Posts'
})

module.exports = mongoose.model('Posts', postsSchema)