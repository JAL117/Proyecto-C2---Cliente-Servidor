import { PeliculasRepository } from "../../domain/repository/PeliculasRepository";

export class DeletePeliculaUseCase{
    constructor(readonly peliculaRepository:PeliculasRepository){}

    async run(titulo:string):Promise<string | null>{
        try {
            const pelicula = await this.peliculaRepository.deletePelicula(titulo);
            if(pelicula){
                return "Pelicula eliminada";
            }else{
                return "Pelicula no se pudo eliminar"
            }
        } catch (error) {
            console.log("Error en DeleteUsuario",error);
            return null;
        }
    }
}