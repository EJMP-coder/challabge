import { response, Router, Request, Response, request } from 'express';
import { getCategorias } from '../controllers/categorias';


const categoriasRouter = Router();

categoriasRouter.get("/",getCategorias);
categoriasRouter.get("/:id",getCategorias);

   
categoriasRouter.post("/", getCategorias);   
categoriasRouter.put("/", getCategorias);
categoriasRouter.delete("/:id", getCategorias);

export default categoriasRouter;