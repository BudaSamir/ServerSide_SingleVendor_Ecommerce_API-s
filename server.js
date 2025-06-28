const express = require("express");
const dotenv = require("dotenv");

dotenv.config({ path: 'config.env'});
const connectToDatabase = require("./config/database");


connectToDatabase();
const server = express();


server.get('/', (req, res) =>{
    res.send("Abdulrahman samir attia");
}  );



const PORT = process.env.PORT || 8000;
server.listen(
    PORT, () =>{
        console.log(`Server Running ON PORT ${PORT}.......`);
    }
);