import {gql} from "apollo-server-express";

export const typeDefs = gql`
type Usuario{
    id:Int
    nombre: String
    password: String
    usuario:String
    correo:String
    urlhook:String
}
type Login{
    user:Usuario
    token:String
}
type Peliculas{
     id:Int
     titulo: String
     director : String
     categoria : String
}
type Query{
    usuario(usuario:String, password:String):Login
    usuarios:[Usuario]
    peliculas:[Peliculas]
    peliculaByTitulo(titulo:String):Peliculas
    peliculaByDirector(director:String):Peliculas
    peliculaByCategoria(categoria:String):Peliculas    
}
input peliculaInput {
    id:Int
    titulo: String
    director : String
    categoria : String
}
input usuarioInput {
    id:Int
    nombre: String
    password: String
    usuario: String
    correo: String
}


type Mutation{
    addPelicula(pelicula:peliculaInput):Peliculas
    deletePelicula(pelicula:peliculaInput):Peliculas
    updatePeliculaCategoria(pelicula:peliculaInput):Peliculas
    
    deleteUser(usuario: usuarioInput):Usuario
    updateUser(usuario:usuarioInput):Usuario
    createUser(usuario:usuarioInput):Usuario
    createWebhook(url:String, events:String):String

 
}
`;
