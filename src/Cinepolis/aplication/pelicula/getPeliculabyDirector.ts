import { PeliculasRepository } from "../../domain/repository/PeliculasRepository";
import { Peliculas } from "../../domain/entities/Peliculas";

export class GetPeliculabyDirectorUseCase{
    constructor(readonly peliculaRepositorio:PeliculasRepository){}
    async run(director:string):Promise<Peliculas | null>{
        try {
            const pelicula = await this.peliculaRepositorio.getPeliculabyDirector(director);
            return pelicula;
        } catch (error) {
            console.error("Error en  GetPeliculabyDirectorUseCase",error);
            return null;
        }
    }
}