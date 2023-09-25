import express, { NextFunction, Request, Response } from "express";
import dal_mysql from "../Utils/dal_mysql";
import { getAllHolidays, getFollows, getNumFollowers, addFollow, removeFollow } from "../Logic/UserLogic";

const userRouter = express.Router();

userRouter.get(
    "/getAllHolidays",
    async (request:Request, response:Response, next:NextFunction)=>{
        const data = await getAllHolidays();
        return response.status(200).json(data);
    }
)


userRouter.get(
    "/getNumFollowers",
    async (request:Request, response:Response, next:NextFunction)=>{
      const data = await getNumFollowers();
      return response.status(200).json(data);  
    }
)

userRouter.get(
    "/getHolidaysFollowed/:userID",
    async (request:Request, response:Response, next:NextFunction)=>{
        const userID = request.params.userID;
        const data = await getFollows(userID);
        return response.status(200).json(data);  
    }
)

userRouter.post(
    "/addFollow",
    async (request:Request, response:Response, next:NextFunction)=>{
const info:{'userID':number, 'holidayID':number} = request.body
return response.status(201).json(await addFollow(info.userID, info.holidayID))
    }
)

userRouter.delete(
    "/removeFollow/:userID/:holidayID",
    async (request:Request, response:Response, next:NextFunction)=>{
const userID = request.params.userID;
const holidayID = request.params.holidayID;
return response.status(200).json(await removeFollow(userID, holidayID))
    }
)




export default userRouter;