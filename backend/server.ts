import express from "express";
import config from "./Utils/Config";
import cors from "cors";
import ErrorHandler from "./Middleware/route-not-found";
import loginRouter from "./Routes/LoginRouter";
import fileUpload from "express-fileupload";
import userRouter from "./Routes/UserRouter";
import adminRouter from "./Routes/AdminRouter";

// create server

const server = express();

//cors = cross origin resource sharing...
server.use(cors());

//how we send the data back (JSON,XML,RAW,string)
server.use(express.json());

//this line tells you to locate photos folder(admin&user for admin-main)
server.use('/photos',express.static("photos"));

//enables fileUpload from server side
server.use(fileUpload({createParentPath: true}));

//using routes => localhost:5000/api/v1
server.use("/api/v1/login", loginRouter);
server.use("/api/v1/holidays",userRouter );
server.use("/api/v1/admin/holidays", adminRouter);

//handle errors(Route Not Found);
server.use("*", ErrorHandler);
// start the server

server.listen(config.webPort, () => {
  console.log(`listing on http://localhost:${config.webPort}`);
});
