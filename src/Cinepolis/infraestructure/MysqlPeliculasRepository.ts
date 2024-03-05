import { Peliculas } from "../domain/entities/Peliculas";
import PeliculasModel from "./model/PeliculasModel";
import { PeliculasRepository } from "../domain/repository/PeliculasRepository";
export class MysqlPeliculasReporitory implements PeliculasRepository {
  async addPelicula(
    id: number,
    titulo: string,
    director: string,
    categoria: string
  ): Promise<Peliculas | null> {
    try {
      const createPelicula = await PeliculasModel.create({
        id,
        titulo,
        director,
        categoria,
      });
      return new Peliculas(
        createPelicula.id,
        createPelicula.titulo,
        createPelicula.director,
        createPelicula.categoria
        
      );
    } catch (error) {
      console.log("Error en sqlPeliculas.repositorio en addPersonaje", error);
      return null;
    }
  }


  async getUser(
    usuario: string,
    password: string
  ): Promise<[Usuario, string] | null> {
    try {
      const getSignUsuario = await UsuarioModel.findOne({
        where: { usuario: usuario },
      });

      if (getSignUsuario) {
        await getSignUsuario.get();
        return [
          new Usuario(
            getSignUsuario.id,
            getSignUsuario.nombre,
            getSignUsuario.password,
            getSignUsuario.usuario,
            getSignUsuario.correo
          ),
          "",
        ];
      } else {
        return null;
      }
    } catch (error) {
      console.log("Error en sqlPersonaje.repositorio en getPersonaje", error);
      return null;
    }
  }

  async getAllUser(): Promise<Usuario[] | null> {
    try {
      const usuario = await UsuarioModel.findAll();
      console.log(usuario);

      return usuario.map((user) => ({
        id: user.id,
        nombre: user.nombre,
        password: user.password,
        usuario: user.usuario,
        correo: user.correo,
      }));
    } catch (error) {
      console.log(
        "Error en sqlPersonaje.repositorio en getAllPersonajes",
        error
      );
      return null;
    }
  }

  async deleteUser(nombre: string): Promise<Usuario | null> {
    try {
      const usuarioEliminado = await UsuarioModel.findOne({
        where: { nombre: nombre },
      });
      if (usuarioEliminado) {
        await usuarioEliminado.destroy();
        return new Usuario(
          usuarioEliminado.id,
          usuarioEliminado.nombre,
          usuarioEliminado.password,
          usuarioEliminado.usuario,
          usuarioEliminado.correo
        );
      } else {
        return null;
      }
    } catch (error) {
      console.log("Error en sqlCapitulo.repositorio en deleteCapitulo", error);
      return null;
    }
  }

  async updateUserCorreo(id: number, correo: string): Promise<Usuario | null> {
    try {
      const updateUserCorreo = await UsuarioModel.findByPk(id);
      if (updateUserCorreo) {
        await updateUserCorreo.update({ correo });
        return updateUserCorreo;
      } else {
        return null;
      }
    } catch (error) {
      console.log(
        "Error en sqlCapitulo.repositorio en putCapitulopersonajePrin",
        error
      );
      return null;
    }
  }
}
