import axios from "axios";
import Globais from "../Config/Globais";

axios.interceptors.request.use(
    config => {
        return config;
    },
    error => {            
        return Promise.reject(error)
    }
) 

export const calculaDivisoresApi = async (numero: number)=>{
   
    const response = await axios.get(`${Globais.urlAPI}Calculo/divisores/${numero}`);

    return  response.data  
    
}