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
     id:Int
     titulo: String
     director : String
     categoria : String
}
type Query{
    user(usuario:String, password:String): Usuario
    users:[Usuario]
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
    updateUserCorreo(usuario:usuarioInput):Usuario
    createUser(usuario:usuarioInput):Usuario

 
}
`;
