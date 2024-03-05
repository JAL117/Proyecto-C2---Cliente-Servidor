import { Peliculas } from "../entities/Peliculas";

export interface PeliculasRepository {
 addPelicula(id:number , titulo: string , director:string , categoria : string):Promise<Peliculas|null>
 deletePelicula(titulo:string):Promise<Peliculas|null>
 updatePeliculaCategoria(categoria : string):Promise < Peliculas| null>

 getAllPeliculas():Promise<Peliculas[]|null>
 getPeliculabyTitulo(titulo:string): Promise<Peliculas|null>
 getPeliculabyDirector(director:string) : Promise < Peliculas | null>
 getPeliculabyCategoria(categoria:string): Promise < Peliculas|null>

}

