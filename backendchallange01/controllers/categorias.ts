 import {Request, Response} from "express";
 import Categoria from '../models/categoria';

export const getCategorias = async ( req:Request, resp:Response ) => {
    const categorias = await Categoria.findAll()
    resp.json({
        categorias
    })


};