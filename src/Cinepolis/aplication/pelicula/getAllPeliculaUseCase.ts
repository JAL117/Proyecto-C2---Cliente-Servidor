import { Peliculas } from "../../domain/entities/Peliculas";
import { PeliculasRepository } from "../../domain/repository/PeliculasRepository";

export class GetAllPeliculaUseCase {
  constructor(readonly peliculasRepository: PeliculasRepository) {}
  async run(): Promise<Peliculas[]| null> {
    try {
      const peliculas = await this.peliculasRepository.getAllPeliculas();
      return peliculas;
    } catch (error) {
      console.error(error);
      return null;
    }
  }
}
