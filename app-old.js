const http = require('http');

http.createServer((req, res) => {
        res.writeHead(200, { 'content-Type': 'appliation/json' });
        let salida = {
            nombre: 'cristian',
            edad: 32,
            url: req.url
        }
        res.write(JSON.stringify(salida));
        res.end();
    })
    .listen(9090);

console.log('escuchando el puerto 9090');