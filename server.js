var express = require('express');

app = express();
app.use(express.static('public'));

// Always return the main index.html so react-router urls are still served.
app.get('*',function (req, res) {
        res.redirect('/');
    });
    
app.listen(8080);
console.log('server running on port 8080');
