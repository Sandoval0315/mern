//mandar a llamar al archivo app.js
import app from "./app.js"
import "./database.js"

//creamos una funcion para ejecutar el servidor

async function main() {
    const port = 4000;
    app.listen(port);
    console.log("servidor corriendo");
}

//encendemos el servidor
main()