import { PeliculasRepository } from "../../domain/repository/PeliculasRepository";
import { Peliculas } from "../../domain/entities/Peliculas";

export class GetPeliculabyTituloUseCase{
    constructor(readonly peliculaRepositorio:PeliculasRepository){}
    async run(titulo:string):Promise<Peliculas | null>{
        try {
            const pelicula = await this.peliculaRepositorio.getPeliculabyTitulo(titulo);
            return pelicula;
        } catch (error) {
            console.error("Error en GetPeliculabyTituloUseCase",error);
            return null;
        }
    }
}