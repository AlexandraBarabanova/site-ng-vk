//Install express server
const express = require('express');
const path = require('path');

const app = express();

// Serve only the static files form the dist directory
app.use(express.static(__dirname + '/dist'));

app.get('/*', function(req, res) {
    console.log(req.path);
    if (req.path.length > 1 && ['css', 'js', 'jpg'].indexOf(req.path.split('.').pop()) !== -1) {
        res.sendFile(path.join(__dirname + `/dist/site-angular-vk-oauth${req.path}`));
    } else {
        res.sendFile(path.join(__dirname + '/dist/site-angular-vk-oauth/index.html'));
    }
});

// Start the app by listening on the default Heroku port
app.listen(process.env.PORT || 8080);
