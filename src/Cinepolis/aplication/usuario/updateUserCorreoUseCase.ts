import {Usuario} from '../../domain/entities/User'
import { UserRepository } from '../../domain/repository/UserRepository';

export class PutCapituloCasoUso{
    constructor(readonly userRepository:UserRepository){}
    async run(correo:string):Promise <Usuario | null>{
        try {
            const usuario = await this.userRepository.updateUserCorreo(
              correo
            );
            return usuario;
        } catch (error) {
            console.error("Error en PutCapituloCasoUso",error);
            return null;
        }
    }
}