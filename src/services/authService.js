import axios from "axios";

export default class AuthService{
    registerEmployerAdd(values){
        return axios.post("http://localhost:8080/api/auth/registerEmployer?confirmPassword=" + confirmPassword, values)
    }
}