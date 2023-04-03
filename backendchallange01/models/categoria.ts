import { DataTypes } from "sequelize";
import DB from "../db/connections";

const Categoria = DB.define("categoria", {
        idcategoria:{
            type: DataTypes.BIGINT,
            autoIncrement: true,
            primaryKey: true,

        },
        nombre: {
            type: DataTypes.STRING,

        },
        descripcion:{
            type: DataTypes.STRING,
        },
        estado: {
            type: DataTypes.TINYINT,
        },
        ruta: {
            type: DataTypes.STRING
        }

       
},{
    tableName: "categoria"
})

export default Categoria;