import { Peliculas } from "../../domain/entities/Peliculas";
import { PeliculasRepository } from "../../domain/repository/PeliculasRepository";

export class addPeliculaUseCase {
  constructor(
    readonly peliculaRepository: PeliculasRepository,
  ) {}
  async run(
    id:number,
    titulo: string,
    director: string,
    categoria: string, 
      ): Promise<Peliculas | null> {
    try {
      const pelicula = await this.peliculaRepository.addPelicula(
       id,
       titulo,
       director,
       categoria
      );      
      return pelicula;
    } catch (error) {
      console.error(error);
      return null;
    }
  }
}
