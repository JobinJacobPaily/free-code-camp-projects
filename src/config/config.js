import  dotenv  from 'dotenv';
dotenv.config();

let envs = {
    databaseUrl:process.env.DATABASE_URL,
    port:process.env.PORT
}

export default envs;