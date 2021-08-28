const mongoose = require('mongoose');
uri = 'mongodb://127.0.0.1/postapp';
mongoose.connect(uri, { useNewUrlParser: true })
    .then(db => console.log("Successfully Connected to the database"))
    .catch(error => console.log(error));
module.exports.mongoose;