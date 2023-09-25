import dal_mysql from "../Utils/dal_mysql";
import { OkPacket } from "mysql";
// import { Books } from "../../frontend/src/Components/Modals/Books";

const getAllHolidays = async () => {
  const SQLcmd = `SELECT holidayID,destination,description,price,img,
  DATE_FORMAT(startDate, '%Y-%m-%d') AS startDate,
  DATE_FORMAT(endDate, '%Y-%m-%d') AS endDate  
  FROM holidays`;
  const allHolidays = await dal_mysql.execute(SQLcmd);
  return allHolidays;
};

const getNumFollowers = async () =>{
  const SQLcmd = `SELECT holidayID, count(userID) as followers
  FROM followers
  group by holidayID`;
  const allFollowers = await dal_mysql.execute(SQLcmd);
  return allFollowers;
}

const getFollows = async (userID:any)=>{
  const SQLcmd = `SELECT holidayID FROM followers WHERE userID=${userID}`;
const holidays = await dal_mysql.execute(SQLcmd);
return holidays
}

const addFollow = async(userID:any, holidayID:any)=>{
const SQLcmd = `INSERT INTO followers (userID, holidayID) VALUES(${userID},${holidayID})`;
const result:OkPacket = await dal_mysql.execute(SQLcmd);
return (result.affectedRows == 1);
}

const removeFollow = async(userID:any, holidayID:any)=>{
const SQLcmd = `DELETE FROM followers WHERE holidayID=${holidayID} and userID=${userID}`;
const result:OkPacket =  await dal_mysql.execute(SQLcmd);
return (result.affectedRows == 1);
}


export { getAllHolidays, getNumFollowers, getFollows, addFollow, removeFollow};
