var http = require('http');

var opcoes = {
    hostname: 'localhost',
    port: 80,
    path: '/',
    headers: {
        'Accept': 'application/json'
    }
}
var buffer = [];

http.get(opcoes, function(res){
    res.on('data', function(pedaco){ /*pedaco é um buffer*/
        buffer.push(pedaco);
    });

    res.on('end', function(){
        var corpo = Buffer.concat(buffer).toString();
        console.log(corpo);
    });

    /*res.on('error', function(){

    });*/
});