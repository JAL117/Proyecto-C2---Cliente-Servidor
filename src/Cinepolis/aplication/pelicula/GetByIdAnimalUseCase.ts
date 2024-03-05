import { Animals } from "../../domain/entities/Peliculas";
import { AnimalsRepository } from "../../domain/repository/PeliculasRepository";

export class GetByAnimalUseCase {
  constructor(readonly animalsRepository: AnimalsRepository) {}
  async run(id: number): Promise<Animals[] | null> {
    try {
      const animal = await this.animalsRepository.getById(id);
      return animal;
    } catch (err) {
      console.error(err);
      return null;
    }
  }
}
