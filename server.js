var fs = require('fs'),
    https = require('https'),
    express = require('express'),
    app = express();

    https.createServer({
      key: fs.readFileSync('key.pem'),
      cert: fs.readFileSync('cert.pem')
    }, app).listen(8008);
    console.log("Server Started at: https://127.0.0.1:8008");

    app.get('/', function (req, res) {
      res.header('Content-type', 'text/html');
      return res.end('<script src="/script"></script>');
    });

    app.get('/script', function (req, res) {
      res.header('Content-type', 'application/javascript');
      return res.end(fs.readFileSync('script.js'));
    });
