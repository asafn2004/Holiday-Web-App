import { OkPacket } from "mysql";
import dal_mysql from "../Utils/dal_mysql";
import User from "../Models/User";



const register = async(newUser:User)=>{
    const SQLcmd= `INSERT INTO users (firstName, lastName, email, password)
    VALUES ('${newUser.firstName}', '${newUser.lastName}', '${newUser.email}','${newUser.password}')
    `;
    const result:OkPacket = await dal_mysql.execute(SQLcmd);
    return result.insertId;
}

const checkLogin = async(userLogin:User)=>{
    const SQLcmd = `SELECT users.role, users.userID, CONCAT(users.firstName,' ',users.lastName) as fullName FROM users WHERE email='${userLogin.email}' AND password='${userLogin.password}'`;
    const result = await dal_mysql.execute(SQLcmd);

    if (result.length<1){
        return false
    }
    return result;
}

const isEmailAvailable =async (email:string) => {
    const SQLcmd = `SELECT users.email FROM users WHERE email='${email}'`;
    const result = await dal_mysql.execute(SQLcmd);
    return result==0     //true is the result an empty array | false if result contains array of the email that exist already
}


export {register, checkLogin, isEmailAvailable};