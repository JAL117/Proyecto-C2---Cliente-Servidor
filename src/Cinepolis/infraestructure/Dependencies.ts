import { CreateUserUseCase } from "../aplication/usuario/CreateUserUseCase";
import { GetUserUseCase } from "../aplication/usuario/GetUserUseCase";
import { ServicesTokensUser } from "../aplication/services/ServicesTokens";
import { MysqlUserRepository } from "./MysqlUserRepository";
import { EncryptServices } from "./helpers/EncriptServices";
import { ServicesTokens } from "./helpers/ServicesTokens";
import { CreateUserController } from "./controllers/CreateUserController";
import { GetUserController } from "./controllers/GetUserController";

const mysqlUsertRepository = new MysqlUserRepository();
const servicesEncrypt = new EncryptServices();
const webTokens = new ServicesTokens();

const servicesTokensUser = new ServicesTokensUser(webTokens);

const createUserUseCase = new CreateUserUseCase(
  mysqlUsertRepository,
  servicesEncrypt
);
const getUserUseCase = new GetUserUseCase(
  mysqlUsertRepository,
  servicesTokensUser,
  servicesEncrypt
);

export const getUserController = new GetUserController(getUserUseCase);
export const createUserController = new CreateUserController(createUserUseCase);
