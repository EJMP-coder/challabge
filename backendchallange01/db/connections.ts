import { Sequelize } from "sequelize";

const DB = new Sequelize( "BD_challange", "root", "",{
    host:"127.0.0.1",
    dialect:"mysql"
});
export default DB;