import {gql} from "apollo-server-express";

export const typeDefs = gql`
type Usuario{
    id:ID
    nombre: String
    password: String
    usuario:String
    correo:String
    urlhook:String
}
type Peliculas{
     id:number
     titulo: string
     director : string
     categoria : string
}
type Query{
    user(usuario:String, password:String): Usuario
    users: [Usuario]
    peliculas:[Peliculas]
    peliculaByTitulo(titulo:String):Peliculas
    peliculaByDirector(director:String):Peliculas
    peliculaByCategoria(categoria:String):Peliculas    
}
type peliculaInput {
    id:number
    titulo: string
    director : string
    categoria : string
}
type userInput {
    nombre: String
    password: String
    usuario: String
    correo: String
}

type Mutation{
  
   
}
`;
