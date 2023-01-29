import axios from "axios"



const instance = axios.create({
    baseURL: 'https://school-hacks.onrender.com/'});
  

export default instance