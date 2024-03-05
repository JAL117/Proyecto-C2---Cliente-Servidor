import { CreateUserUseCase } from "../../aplication/usuario/CreateUserUseCase";
import { DeleteUserUseCase } from "../../aplication/usuario/DeleteUserUseCase";
import { GetAllUserUseCase } from "../../aplication/usuario/GetAllUserUseCase";
import { GetUserUseCase } from "../../aplication/usuario/GetUserUseCase";
import { UpdateUserCorreoUseCase } from "../../aplication/usuario/updateUserCorreoUseCase";

import { addPeliculaUseCase } from "../../aplication/pelicula/addPeliculaUseCase";
import { DeletePeliculaUseCase } from "../../aplication/pelicula/deletePeliculaUseCase";
import { GetAllPeliculaUseCase } from "../../aplication/pelicula/getAllPeliculaUseCase";
import { GetPeliculabyCategoriaUseCase } from "../../aplication/pelicula/getPeliculabyCategoria";
import { GetPeliculabyDirectorUseCase } from "../../aplication/pelicula/getPeliculabyDirector";
import { GetPeliculabyTituloUseCase } from "../../aplication/pelicula/getPeliculabyTituloUseCase";
import { UpdatePeliculaCategoriaUseCase } from "../../aplication/pelicula/updatePeliculaCategoriaUseCase";

import { ServicesAuth } from "../../aplication/services/ServicesAuth";
import { GraphQLError } from "graphql";

export class Resolvers {
  constructor(
    //Usuario
    readonly createUserUseCase: CreateUserUseCase,
    readonly deleteUserUseCase: DeleteUserUseCase,
    readonly getAllUserUseCase: GetAllUserUseCase,
    readonly getUserUseCase: GetUserUseCase,
    readonly updateUserCorreoUseCase: UpdateUserCorreoUseCase,
    //Peliculas

    readonly getAllPeliculaUseCase: GetAllPeliculaUseCase,
    readonly getPeliculabyCategoriaUseCase: GetPeliculabyCategoriaUseCase,
    readonly getPeliculabyDirectorUseCase: GetPeliculabyDirectorUseCase,
    readonly getPeliculabyTituloUseCase: GetPeliculabyTituloUseCase,
    readonly updapePeliculaCategoriaUseCase: UpdatePeliculaCategoriaUseCase,
    readonly addPeliculaUseCase: addPeliculaUseCase,
    readonly deletePeliculaUseCase: DeletePeliculaUseCase,

    readonly servicesAuth: ServicesAuth
  ) {}
  
  resolvers: any = {
    Query: {
      usuario: async (_: void, args: any) => {
      
        console.log("mamaste");
        
    
          const Usuario: any = await this.getUserUseCase.run(
            args.usuario,
            args.password
          ) 
          console.log(Usuario[0], Usuario[1]);

          return {user:Usuario[0],token:Usuario[1]};
        
      },
      usuarios: async (_: void, args: any, context: any) => {
        let key = await this.servicesAuth.run(context.authScope);

        if (key) {
          const usuarios: any = await this.getAllUserUseCase.run();
          console.log(usuarios);
          return usuarios;
        } else {
          throw (
            (new GraphQLError("Acceso denegado"),
            {
              extensions: { code: "UNAUTHENTICATE" },
            })
          );
        }
      },
      peliculaByCategoria: async (_: void, args: any, context: any) => {
        let key = await this.servicesAuth.run(context.authScope);

        if (key) {
          const pelicula: any = this.getPeliculabyCategoriaUseCase.run(
            args.categoria
          );
          console.log(pelicula);
          return pelicula
        } else {
          throw (
            (new GraphQLError("Acceso denegado"),
            {
              extensions: { code: "UNAUTHENTICATE" },
            })
          );
        }
      },
      peliculas: async (_: void, args: any, context: any) => {
        let key = await this.servicesAuth.run(context.authScope);

        if (key) {
          const peliculas: any = await this.getAllPeliculaUseCase.run();
          console.log(peliculas);
          return peliculas;
        } else {
          throw (
            (new GraphQLError("Acceso denegado"),
            {
              extensions: { code: "UNAUTHENTICATE" },
            })
          );
        }
      },
      peliculaByDirector: async (_: void, args: any, context: any) => {
        let key = await this.servicesAuth.run(context.authScope);

        if (key) {
          const pelicula: any = this.getPeliculabyDirectorUseCase.run(
            args.director
          );
          console.log(pelicula);
          return pelicula
        } else {
          throw (
            (new GraphQLError("Acceso denegado"),
            {
              extensions: { code: "UNAUTHENTICATE" },
            })
          );
        }
      },
      peliculaByTitulo: async (_: void, args: any, context: any) => {
        let key = await this.servicesAuth.run(context.authScope);

        if (key) {
          const pelicula: any = this.getPeliculabyTituloUseCase.run(
            args.titulo
          );
          console.log(pelicula);
          return pelicula
        } else {
          throw (
            (new GraphQLError("Acceso denegado"),
            {
              extensions: { code: "UNAUTHENTICATE" },
            })
          );
        }
      },
    },
    Mutation: {
      createUser: async (_: void, args: any) => {
        console.log(args);
        
        const usuario = await this.createUserUseCase.run(
          args.usuario.nombre,
          args.usuario.password,
          args.usuario.usuario,
          args.usuario.correo
        );
        console.log(usuario);
        return usuario;
      },
      deleteUser: async (_: void, args: any, context: any) => {
        let key = await this.servicesAuth.run(context.authScope);

        if (key) {
          const usuario = await this.deleteUserUseCase.run(args.usuario.nombre);
          console.log(usuario);
          return (usuario);
        } else {
          throw (
            (new GraphQLError("Acceso denegado"),
            {
              extensions: { code: "UNAUTHENTICATE" },
            })
          );
        }
      },
      updateUser: async (_: void, args: any, context: any) => {
        let key = await this.servicesAuth.run(context.authScope);

        if (key) {
          const usuario = await this.updateUserCorreoUseCase.run(
            args.usuario.id,
            args.usuario.correo
          );
          console.log(usuario);
          return usuario;
        } else {
          throw (
            (new GraphQLError("Acceso denegado"),
            {
              extensions: { code: "UNAUTHENTICATE" },
            })
          );
        }
      },
      addPelicula: async (_: void, args: any, context: any) => {
        let key = await this.servicesAuth.run(context.authScope);
        if (key) {
          const pelicula = await this.addPeliculaUseCase.run(
            args.pelicula.id,
            args.pelicula.titulo,
            args.pelicula.director,
            args.pelicula.categoria
          );
          console.log(pelicula);
          return pelicula
        } else {
          throw (
            (new GraphQLError("Acceso denegado"),
            {
              extensions: { code: "UNAUTHENTICATE" },
            })
          );
        }
      },
      deletePelicula: async (_: void, args: any, context: any) => {
        let key = await this.servicesAuth.run(context);

        if (key) {
          const pelicula = await this.deletePeliculaUseCase.run(args.titulo);
          console.log(pelicula);
        } else {
          throw (
            (new GraphQLError("Acceso denegado"),
            {
              extensions: { code: "UNAUTHENTICATE" },
            })
          );
        }
      },
      updatePeliculaCategoria: async (_: void, args: any, context: any) => {
        let key = await this.servicesAuth.run(context);

        if (key) {
          const pelicula = await this.updapePeliculaCategoriaUseCase.run(
            args.categoria
          );
          console.log(pelicula);
        } else {
          throw (
            (new GraphQLError("Acceso denegado"),
            {
              extensions: { code: "UNAUTHENTICATE" },
            })
          );
        }
      },
    },
  };
}