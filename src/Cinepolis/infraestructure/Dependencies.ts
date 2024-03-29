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
import { ServicesAuth } from "../aplication/services/ServicesAuth";

import { MysqlUserReporitory } from "./MysqlUserRepository";
import { MysqlPeliculasRepository } from "./MysqlPeliculasRepository";
import { MysqlWebhookRepository } from "./MysqlWebhook";

import { ServicesCreateWebhook } from "../aplication/services/ServiceWebhook";
import { ServicesSendWebhook } from "../aplication/services/ServicesSendWebhook";
import { ServicesSearchWebhook } from "../aplication/services/ServicesSearchWebhook";

const mysqlPeliculasRepository = new MysqlPeliculasRepository();
const mysqlUserRepository = new MysqlUserReporitory();
const mysqlWebhookRepository = new MysqlWebhookRepository()

const ecripty = new EncryptServices();
const serviceTokensR = new ServicesTokens();
const serviceAuth = new ServicesAuth(serviceTokensR);

const serviceTokens = new ServicesTokensUser(serviceTokensR);

const createUser = new CreateUserUseCase(mysqlUserRepository, ecripty);

const getAllUsers = new GetAllUserUseCase(mysqlUserRepository);

const getUser = new GetUserUseCase(mysqlUserRepository, serviceTokens, ecripty);

const deleteUser = new DeleteUserUseCase(mysqlUserRepository);

const updateUser = new UpdateUserCorreoUseCase(mysqlUserRepository);

const addPelicula = new addPeliculaUseCase(mysqlPeliculasRepository);

const deletePelicula = new DeletePeliculaUseCase(mysqlPeliculasRepository);

const getAllPeliculas = new GetAllPeliculaUseCase(mysqlPeliculasRepository);

const servicesCreateWebhook = new ServicesCreateWebhook(mysqlWebhookRepository)
const servicesSearchWebhook = new ServicesSearchWebhook(mysqlWebhookRepository);
const servicesSendWebhook = new ServicesSendWebhook(mysqlWebhookRepository)

const getPeliculabyCategoria = new GetPeliculabyCategoriaUseCase(
  mysqlPeliculasRepository
);

const getPeliculabyDirector = new GetPeliculabyDirectorUseCase(
  mysqlPeliculasRepository
);

const getPeliculabyTitulo = new GetPeliculabyTituloUseCase(
  mysqlPeliculasRepository
);

const updatePeliculaCategoria = new UpdatePeliculaCategoriaUseCase(
  mysqlPeliculasRepository
);

export const resolver = new Resolvers(
  createUser,
  deleteUser,
  getAllUsers,
  getUser,
  updateUser,
  getAllPeliculas,
  getPeliculabyCategoria,
  getPeliculabyDirector,
  getPeliculabyTitulo,
  updatePeliculaCategoria,
  addPelicula,
  deletePelicula,
  serviceAuth,
  servicesCreateWebhook,
  servicesSearchWebhook,
  servicesSendWebhook
);
