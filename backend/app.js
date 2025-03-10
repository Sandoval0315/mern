//importamos todo de la libreria de express

import express from "express";
import productsRoutes from "./src/router/products.js"

//creamos una constante a la libreria que importe y la ejecuto 
const app = express();
app.use(express.json())

// definir ruta
app.use ("/api/products", productsRoutes);

export default app; 