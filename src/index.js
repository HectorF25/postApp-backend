const express = require('express');
const app = express();
const morgan = require('morgan');
const cors = require('cors');
const bodyParser = require('body-parser');
require('./databaseConection')

app.set('port', 4000)
app.use(morgan('dev'));
//app.use(bodyParser.urlencoded({ extended: true }));
//app.use(bodyParser.json());
//start server
app.use('/api/', require('./routes/posts.routes'))
app.listen(app.get('port'), () => {
    console.log('Server listening on port ', app.get('port'));
})