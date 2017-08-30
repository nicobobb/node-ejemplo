Primeros pasos en Node.js

1) Instalar Node desde la página https://nodejs.org

Verificamos que la instalación se realizó correctamente. Buscamos “Node.js command prompt” y se nos abrirá una terminal con un entorno especializado para Node.

Luego usamos el comando “ node -v ” para saber que versión tenemos.

2) Instalamos Express con el comando “ npm install express -g ”

3) Creamos un archivo con nombre server.js

---------------------------------------
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

---------------------------------------


4) Estando en el directorio del archivo server.js usamos el comando node server.js
 En el caso de haber algun error, usamos el comando “npm install express” sobre el mismo directorio anterior.


5) Verificamos el funcionamiento desde la URL: 127,0,0,1:3000 y 127,0,0,1:3000/notas
