//Definimos una variable y buscarmos express con require dentro de node_module 
var express = require("express");

var app = express();
app.use(express.static('public'));

function inicio(req, res){
    res.render("index");
}

app.listen(3000, function(error) {
    if (error) return console.log('Hubo un error'), process.exit(1); 
    
    console.log('El servidor inicio correctamente. Página web: http://localhost:3000');
})
