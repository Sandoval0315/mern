//mandar a llamar al archivo app.js
import app from "./app.js"
import "./database.js"
//base de datos
import { config } from "./src/config.js";

//creamos una funcion para ejecutar el servidor

async function main() {
    app.listen(config.server.port);
    console.log("servidor corriendo " + config.server.port);
}

//encendemos el servidor
main()