import mongoose from "mongoose";
import envs from "../config/config.js";


export default () => {

   mongoose.connect(
      envs.databaseUrl,
       {
          useNewUrlParser:true,
       }
  );
  
  const db = mongoose.connection;
  db.on("error" , console.error.bind(console, "Connection error : "));
  db.once("open" , () => console.log("connection successfull"));
}