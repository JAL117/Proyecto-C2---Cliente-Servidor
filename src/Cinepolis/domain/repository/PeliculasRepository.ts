import { Animals } from "../entities/Peliculas";

export interface AnimalsRepository {
  getAll(): Promise<Animals[] | null>;
  getById(id:number,): Promise<Animals[] | null>;
  getEspecie(especie: string): Promise<Animals[] | null>;
  putAnimalEdad(nombre: string, edad: number): Promise<Animals[] | null>;
  createAnimal(animal: Animals): Promise<Animals[] | null>;
  putAnimalCategory(
    id: number,
    categoria: string
  ): Promise<Animals[] | null>;
  deleteAnimal(id: number): Promise<string | null>
}