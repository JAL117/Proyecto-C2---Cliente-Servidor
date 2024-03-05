import express from "express";
import morgan from "morgan";
import signale, { Signale } from "signale";
import * as dotenv from "dotenv";
import helmet from "helmet";
import { ApolloServer } from "@apollo/server";
import { startStandaloneServer } from "@apollo/server/standalone";

import { iniciarBaseDeDatos } from "./database/mysql";
import { Resolvers } from "./Cinepolis/infraestructure/Graphql/Resolvers";
import { typeDefs } from "./Cinepolis/infraestructure/Graphql/Schemas";

const app = express();
app.use(helmet.hidePoweredBy());
dotenv.config();
app.use(morgan("dev"));
app.use(express.json());


const options = {
  secrets: ["([0-9]{4}-?)+"],
};

const logger = new Signale(options);


let resolvers = Resolvers.prototype.resolvers;
const server = new ApolloServer({
  typeDefs,
  resolvers,
});




(async ()=>{
  try {
    await iniciarBaseDeDatos();
    const {url} = await startStandaloneServer(server,{
      listen:{port:4000},
    });
    signale.success(`serviodr en linea ${url}`);
  } catch (error) {
    signale.error("Error en servidor" , error );    
  }
})



//(async () => {
//  const { url } = await startStandaloneServer(server, {
 //   listen: { port: 4000 },
 // });
 // console.log(`servidor corriendo en ${url}`);
//})();
