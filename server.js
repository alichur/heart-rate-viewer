//most minimal server I could make

var express = require('express');

app = express();
app.use(express.static('public'));
app.listen(8080);
console.log('server running on port 8080');
