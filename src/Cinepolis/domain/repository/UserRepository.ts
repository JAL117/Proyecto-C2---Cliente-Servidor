import { Usuario } from "../entities/User";

export interface UserRepository {
  getUser(usuario: string, password: string): Promise<[user:Usuario[], token:string] | null>;
  getAllUser(): Promise<Usuario[] | null>;
  createUser(
    nombre: string,
    password: string,
    usuario: string,
    correo: string
  ): Promise<Usuario | null>;
}
