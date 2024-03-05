import { PeliculasRepository } from "../../domain/repository/PeliculasRepository";
import { Peliculas } from "../../domain/entities/Peliculas";

export class GetPeliculabyCategoriaUseCase{
    constructor(readonly peliculaRepositorio:PeliculasRepository){}
    async run(categoria:string):Promise<Peliculas | null>{
        try {
            const pelicula = await this.peliculaRepositorio.getPeliculabyCategoria(categoria);
            return pelicula;
        } catch (error) {
            console.error("Error en GetPeliculabyCategoriaUseCase",error);
            return null;
        }
    }
}