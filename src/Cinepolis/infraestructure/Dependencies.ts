import { CreateUserUseCase } from "../aplication/usuario/CreateUserUseCase";
import { DeleteUserUseCase } from "../aplication/usuario/DeleteUserUseCase";
import { GetAllUserUseCase } from "../aplication/usuario/GetAllUserUseCase";
import { GetUserUseCase } from "../aplication/usuario/GetUserUseCase";
import { UpdateUserCorreoUseCase } from "../aplication/usuario/updateUserCorreoUseCase";

import { IEncryptServices } from "../aplication/services/IEncrypt";
import { ServicesTokensUser } from "../aplication/services/ServicesTokens";

import { EncryptServices } from "./helpers/EncriptServices";
import { ServicesTokens } from "./helpers/ServicesTokens";


import { Resolvers } from "./Graphql/Resolvers";


import { MysqlUserReporitory } from "./MysqlUserRepository";

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

export const resolver = new Resolvers(
    createUser , deleteUser , getAllUsers , getUser , updateUser
)

