import { Peliculas } from "../domain/entities/Peliculas";
import PeliculasModel from "./model/PeliculasModel";
import { PeliculasRepository } from "../domain/repository/PeliculasRepository";

export class MysqlPeliculasRepository implements PeliculasRepository {
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
      console.log("Error en MysqlPeliculasRepository en addPelicula", error);
      return null;
    }
  }

  async deletePelicula(titulo: string): Promise<Peliculas | null> {
    try {
      const peliculaEliminada = await PeliculasModel.findOne({
        where: { titulo: titulo },
      });
      if (peliculaEliminada) {
        await peliculaEliminada.destroy();
        return new Peliculas(
          peliculaEliminada.id,
          peliculaEliminada.titulo,
          peliculaEliminada.director,
          peliculaEliminada.categoria
        );
      } else {
        return null;
      }
    } catch (error) {
      console.log("Error en MysqlPeliculasRepository en deletePelicula", error);
      return null;
    }
  }

  async updatePeliculaCategoria(
    categoria: string
  ): Promise<Peliculas | null> {
    try {
      const peliculaActualizada = await PeliculasModel.findOne({
        where: { categoria: categoria },
      });
      if (peliculaActualizada) {
        await peliculaActualizada.update({ categoria });
        return new Peliculas(
          peliculaActualizada.id,
          peliculaActualizada.titulo,
          peliculaActualizada.director,
          peliculaActualizada.categoria
        );
      } else {
        return null;
      }
    } catch (error) {
      console.log(
        "Error en MysqlPeliculasRepository en updatePeliculaCategoria",
        error
      );
      return null;
    }
  }

  async getAllPeliculas(): Promise<Peliculas[] | null> {
    try {
      const peliculas = await PeliculasModel.findAll();
      return peliculas.map((pelicula) => ({
        id: pelicula.id,
        titulo: pelicula.titulo,
        director: pelicula.director,
        categoria: pelicula.categoria,
      }));
    } catch (error) {
      console.log(
        "Error en MysqlPeliculasRepository en getAllPeliculas",
        error
      );
      return null;
    }
  }

  async getPeliculabyTitulo(titulo: string): Promise<Peliculas | null> {
    try {
      const pelicula = await PeliculasModel.findOne({
        where: { titulo: titulo },
      });
      if (pelicula) {
        return new Peliculas(
          pelicula.id,
          pelicula.titulo,
          pelicula.director,
          pelicula.categoria
        );
      } else {
        return null;
      }
    } catch (error) {
      console.log(
        "Error en MysqlPeliculasRepository en getPeliculabyTitulo",
        error
      );
      return null;
    }
  }

  async getPeliculabyDirector(director: string): Promise<Peliculas | null> {
    try {
      const pelicula = await PeliculasModel.findOne({
        where: { director: director },
      });
      if (pelicula) {
        return new Peliculas(
          pelicula.id,
          pelicula.titulo,
          pelicula.director,
          pelicula.categoria
        );
      } else {
        return null;
      }
    } catch (error) {
      console.log(
        "Error en MysqlPeliculasRepository en getPeliculabyDirector",
        error
      );
      return null;
    }
  }

  async getPeliculabyCategoria(categoria: string): Promise<Peliculas | null> {
    try {
      const pelicula = await PeliculasModel.findOne({
        where: { categoria: categoria },
      });
      if (pelicula) {
        return new Peliculas(
          pelicula.id,
          pelicula.titulo,
          pelicula.director,
          pelicula.categoria
        );
      } else {
        return null;
      }
    } catch (error) {
      console.log(
        "Error en MysqlPeliculasRepository en getPeliculabyCategoria",
        error
      );
      return null;
    }
  }
}
