//importamos todo de la libreria de express

import express from "express";
import productsRoutes from "./src/router/products.js"
import clientsRoutes from "./src/router/clients.js"

//creamos una constante a la libreria que importe y la ejecuto 
const app = express();
app.use(express.json())

// definir ruta
app.use ("/api/products", productsRoutes);
app.use ("/api/clients", clientsRoutes);

export default app; 