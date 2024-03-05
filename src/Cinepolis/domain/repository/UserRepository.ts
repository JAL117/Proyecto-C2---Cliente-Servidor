import { Usuario } from "../entities/User";

export interface UserRepository {
  getUser(
    usuario: string,
    password: string
  ): Promise<[Usuario , string] | null>;


  getAllUser(): Promise<Usuario[] | null>;

  deleteUser(nombre: string):Promise<Usuario| null>;
  
  updateUserCorreo(correo: string): Promise <Usuario|null>;

  
  createUser(
    id : number,
    nombre: string,
    password: string,
    usuario: string,
    correo: string
  ): Promise<Usuario | null>;


}


async putCapitulopersonajePrin(id:number,personajePrin:string):Promise<Capitulo | null>{
  try {
      const putCApituloPersonajePrin = await CapituloModel.findByPk(id);
      if(putCApituloPersonajePrin){
          await putCApituloPersonajePrin.update({personajePrin});
          return putCApituloPersonajePrin;
      }else{
          return null;
      }
  } catch (error) {
      console.log("Error en sqlCapitulo.repositorio en putCapitulopersonajePrin", error);
      return null;
  }
}

