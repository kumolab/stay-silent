// set config

// config.json file: import settings 
// .env file: export settings
import dotenv from "dotenv";
import { dev_other_setting, test_other_setting, prod_other_setting } from "../conf/setting";
import { dev_db_host, dev_db_name, dev_db_port, dev_db_pw, dev_db_user,
         test_db_host, test_db_name, test_db_port, test_db_pw, test_db_user,
         prod_db_host, prod_db_name, prod_db_port, prod_db_pw, prod_db_user } from "../conf/db_conf";


export const ENVI = process.env.NODE_ENV;

// const is_prod = (ENVI === "prod");

let db_host: string;
let db_port: number;
let db_name: string;
let db_user: string;
let db_pw: string;

let some_other_setting: string;

// allocate settings (from json file or .env file)
if (ENVI === "dev") {
    dotenv.config({ path: ".env.dev" })
    db_host = dev_db_host;
    db_port = dev_db_port;
    db_name = dev_db_name;
    db_user = dev_db_user;
    db_pw = dev_db_pw;
    some_other_setting = dev_other_setting;

} else if (ENVI === "test") {
    dotenv.config({ path: ".env.test" })
    db_host = test_db_host;
    db_port = test_db_port;
    db_name = test_db_name;
    db_user = test_db_user;
    db_pw = test_db_pw;
    some_other_setting = test_other_setting;

} else {
    dotenv.config({ path: ".env.prod" })
    db_host = prod_db_host;
    db_port = prod_db_port;
    db_name = prod_db_name;
    db_user = prod_db_user;
    db_pw = prod_db_pw;
    some_other_setting = prod_other_setting;

}

// export them
export const USE_DB_HOST = db_host;
export const USE_DB_PORT = db_port;
export const USE_DB_NAME = db_name;
export const USE_DB_USER = db_user;
export const USE_DB_PW = db_pw;
export const USE_OTHER_SETTING = some_other_setting;

export const SERVER_ENV_NAME = process.env.NAME
export const SERVER_HOST = process.env.HOST
export const SERVER_PORT = process.env.PORT