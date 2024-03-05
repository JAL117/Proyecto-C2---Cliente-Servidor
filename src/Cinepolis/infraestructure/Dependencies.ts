import { CreateUserUseCase } from "../aplication/usuario/CreateUserUseCase";
import { DeleteUserUseCase } from "../aplication/usuario/DeleteUserUseCase";
import { GetAllUserUseCase } from "../aplication/usuario/GetAllUserUseCase";
import { GetUserUseCase } from "../aplication/usuario/GetUserUseCase";
import { UpdateUserCorreoUseCase } from "../aplication/usuario/updateUserCorreoUseCase";

import { addPeliculaUseCase } from "../aplication/pelicula/addPeliculaUseCase";
import { DeletePeliculaUseCase } from "../aplication/pelicula/deletePeliculaUseCase";
import { GetAllPeliculaUseCase } from "../aplication/pelicula/getAllPeliculaUseCase";
import { GetPeliculabyCategoriaUseCase } from "../aplication/pelicula/getPeliculabyCategoria";
import { GetPeliculabyDirectorUseCase } from "../aplication/pelicula/getPeliculabyDirector";
import { GetPeliculabyTituloUseCase } from "../aplication/pelicula/getPeliculabyTituloUseCase";
import { UpdatePeliculaCategoriaUseCase } from "../aplication/pelicula/updatePeliculaCategoriaUseCase";

import { IEncryptServices } from "../aplication/services/IEncrypt";
import { ServicesTokensUser } from "../aplication/services/ServicesTokens";

import { EncryptServices } from "./helpers/EncriptServices";
import { ServicesTokens } from "./helpers/ServicesTokens";


import { Resolvers } from "./Graphql/Resolvers";


import { MysqlUserReporitory } from "./MysqlUserRepository";
import { MysqlPeliculasRepository } from "./MysqlPeliculasRepository";

const mysqlPeliculasRepository = new MysqlPeliculasRepository();
const mysqlUserRepository = new MysqlUserReporitory();
const ecripty = new  EncryptServices();
const serviceTokensR= new ServicesTokens();


const serviceTokens = new ServicesTokensUser(serviceTokensR);


const createUser = new CreateUserUseCase(
    mysqlUserRepository,
    ecripty
)

const getAllUsers = new GetAllUserUseCase(
    mysqlUserRepository
)

const getUser = new GetUserUseCase(
    mysqlUserRepository,
    serviceTokens,  
     ecripty
)

const deleteUser = new DeleteUserUseCase(
    mysqlUserRepository
)

const updateUser = new UpdateUserCorreoUseCase(
    mysqlUserRepository
)

const addPelicula = new addPeliculaUseCase(
    mysqlPeliculasRepository
)

const deletePelicula = new DeletePeliculaUseCase(
    mysqlPeliculasRepository
)

const getAllPeliculas = new GetAllPeliculaUseCase(
    mysqlPeliculasRepository
)

const getPeliculabyCategoria = new GetPeliculabyCategoriaUseCase(
    mysqlPeliculasRepository
)

const getPeliculabyDirector = new GetPeliculabyDirectorUseCase(
    mysqlPeliculasRepository
)

const getPeliculabyTitulo= new GetPeliculabyTituloUseCase(
    mysqlPeliculasRepository
)

const updatePeliculaCategoria = new UpdatePeliculaCategoriaUseCase(
    mysqlPeliculasRepository
)

export const resolver = new Resolvers(
    createUser , deleteUser , getAllUsers , getUser , updateUser , getAllPeliculas , getPeliculabyCategoria , getPeliculabyDirector ,getPeliculabyTitulo , updatePeliculaCategoria , addPelicula , deletePelicula
)

