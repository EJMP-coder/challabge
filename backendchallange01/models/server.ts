import  express , { Application }  from "express";
import DB from '../db/connections';
import categoriasRouter from "../routes/categorias";
import cors from "cors";
class Server {
    private app: Application;
    private port: string;
    private apiPath= {
        categorias:"/api/categorias"
    }
    constructor() {
        this.app = express();
        this.port = process.env.PORT || "8080"
        this.dbConnection();
        this.middlewares();
        this.routes();
       
    }    
    async dbConnection() {
        try {
            await DB.authenticate()

        } catch (error){
            console.log("error" + error)
        }
    }
    middlewares(){
        this.app.use(express.json())
        this.app.use(cors())
    }
    routes(){
        this.app.use(this.apiPath.categorias, categoriasRouter);
        
    }
    listen() {
        this.app.listen(this.port , ()=>{
            console.log("servidor puerto " + this.port)
        }  )
    }
}

export default Server;