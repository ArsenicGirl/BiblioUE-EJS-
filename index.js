//Importar la librería
const express = require("express");

//crear el objeto para llamar los metodos de express
const app = express();

//configurar el html para usar el ejs
app.set("view engine", "ejs");

app.get("/", function(req,res){
    res.render("index")
});

//configurar el puerto usado para el servidor local
app.listen(3000,function() {
    console.log("Servidor creado http://localhost:3000");
})

//Recordar, siempre que se quiera ver, despues de hacer cambios
//hay que ecribir en el terminar "node index.js" y luego
//copiar la ruta del localhost en el buscador google