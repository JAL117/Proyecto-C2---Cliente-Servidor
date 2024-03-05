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
    readonly deletePeliculaUseCase: DeletePeliculaUseCase
  ) {}

  resolvers: any = {
    Query: {
      usuario: async (_: void, args: any) => {
        const Usuario: any = await this.getUserUseCase.run(
          args.usuario,
          args.password
        );
        console.log(Usuario[0], Usuario[1]);

        return Usuario[0];
      },
      usuarios: async (_: void, args: any) => {
        const usuarios: any = await this.getAllUserUseCase.run();
        console.log(usuarios);

        return usuarios;
      },
    },
    Mutation: {
      createUser: async (_: void, args: any) => {
        const usuario = await this.createUserUseCase.run(
          args.id,
          args.nombre,
          args.password,
          args.usuario,
          args.correo
        );
        console.log(usuario);
        return usuario;
      },
      deleteUser: async (_: void, args: any) => {
        const usuario = await this.deleteUserUseCase.run(args.nombre);
        console.log(usuario);
        return usuario;
      },
      updateUser: async (_: void, args: any) => {
        const usuario = await this.updateUserCorreoUseCase.run(
          args.id,
          args.nombre
        );
        console.log(usuario);
        return usuario;
      },
    },
  };
}
