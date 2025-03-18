//importamos todo de la libreria de express

import express from "express";
import productsRoutes from "./src/router/products.js"
import clientsRoutes from "./src/router/clients.js"
import sucursalesRoutes from "./src/router/sucursales.js"
import empleadosRoutes from "./src/router/empleados.js"
import reviewRoutes from "./src/controllers/reviewsC.js"; 
import evaluationRoutes from "./src/controllers/evaluationC.js"

//creamos una constante a la libreria que importe y la ejecuto 
const app = express();
app.use(express.json())

// definir ruta
app.use ("/api/products", productsRoutes);
app.use ("/api/clients", clientsRoutes);
app.use ("/api/sucursales", sucursalesRoutes)
app.use ("/api/empleados", empleadosRoutes)
app.use ("./api/reviews", reviewRoutes)
app.use ("./api/evaluation", evaluationRoutes)

export default app; 