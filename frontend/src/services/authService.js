// AuthService.js
import axios from 'axios';
import { NotificationManager } from 'react-notifications';

let isLoggedIn = false;
let userData = null;

export const login = async (userCredentials) => {
    
    const serviceUrl = "http://localhost:8080/user/login";
    try {
        let response = await axios.post(serviceUrl, userCredentials)
        userData = response.data;
        isLoggedIn = true;
        const storedInfo = {    "isLoggedIn": isLoggedIn, 
                                "username": userData.name, 
                                "type": "user"
                            };
        localStorage.setItem("userInfo", JSON.stringify(storedInfo));
        NotificationManager.success("Success", "Inicio sesion exitosamente");
        return  Promise.resolve(true);
    } catch (error) {
        NotificationManager.error("Error", "Error al iniciar sesion");
        console.log(error);
        }

}

export function logout() {
    console.log("logout");
    isLoggedIn = false;
    localStorage.removeItem("userInfo");
    userData = null;
}

export function isLoggedInUser(){
    console.log("isLoggedInUser");
    const userInfo = JSON.parse(localStorage.getItem("userInfo"));
    if(userInfo != null && userInfo.type){
        return userInfo.type === "user";
    }
    return false;
}

export function isLoggedInAdmin(){
    const userInfo = JSON.parse(localStorage.getItem("userInfo"));
    if(userInfo != null && userInfo.type){
        return userInfo.type === "admin";
    }
    return false;
}