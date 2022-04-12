import "reflect-metadata"
import { DataSource } from "typeorm"
import { Lancamento } from "./entity/Lancamento"
import { Usuario } from "./entity/Usuario"

export const AppDataSource = new DataSource({
    type: "postgres",
    host: "localhost",
    port: 5432,
    username: "postgres",
    password: "postgres",
    database: "teste",
    synchronize: true,
    logging: false,
    entities: [Usuario, Lancamento],
    migrations: [],
    subscribers: [],
})
