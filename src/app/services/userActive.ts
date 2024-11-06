// import User from "@/app/types/user";
import axios from "axios";

export const getUsers = async () => {
  try {
    const response = await axios.get("https://dummyjson.com/users", {
        headers:{
           "Cache-Control": "no-cache" 
        }
    });
    return response.data.users;
  } catch (error) {
    console.error("Error fetching users:", error);
  }
};

export const getUser = async (newpostid: string) => {
  try {
    const response = await axios.get(`https://dummyjson.com/users/${newpostid}`);
    const data = await response.data;
    console.log("ggggg", data);

    return data;
  } catch (error) {
    console.error("Error fetching users:", error);
  }
};

export const postapi=async()=>{

  const response = await fetch(`http://localhost:3000/api/post`);
  const data =await response.json();
  return data;
};

export const queryapi = async()=>{
  const response = await fetch(`http://localhost:3000/api/query`);
  const data =await response.json();
  if(!response.ok) throw new Error('Network response was not ok');
  return data;
}