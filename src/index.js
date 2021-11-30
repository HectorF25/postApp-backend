const express = require('express');
const app = express();
const morgan = require('morgan');
const cors = require('cors');
const bodyParser = require('body-parser');
require('./databaseConection')

app.set('port', 4000)
app.use(morgan('dev'));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
//start server
app.use('/api/', require('./routes/posts.routes'))
app.listen(app.get('port'), () => {
    console.log('Server listening on port ', app.get('port'));
});

app.use((req, res, next) => {
    next(createError(404));
});

app.use(function(err, req, res, next) {
    console.error(err.message);
    if (!err.statusCode) err.statusCode = 500;
    res.status(err.statusCode).send(err.message);
});