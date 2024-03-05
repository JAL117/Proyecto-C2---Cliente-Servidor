import { Peliculas } from "../../domain/entities/Peliculas";
import { PeliculasRepository } from "../../domain/repository/PeliculasRepository";
export class UpdateUserCorreoUseCase{
    constructor(readonly peliculaRepository:PeliculasRepository){}
    async run(categoria:string):Promise <Peliculas | null>{
        try {
            const usuario = await this.peliculaRepository.updatePeliculaCategoria(
                categoria            );
            return usuario;
        } catch (error) {
            console.error("Error en UpdateUserCorreoUseCase",error);
            return null;
        }
    }
}