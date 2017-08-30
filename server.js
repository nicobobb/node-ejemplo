var express = require("express");
var app = express();

app.get("/", home);
app.get("/notas", notas);

function home(req, res){
    res.send("Hola Mundo");
}

function notas(req, res){
    res.send("La nota es: 10");
}

app.listen(3000);
