import axios from "axios"
import { IUsers } from "../models/IUsers";
export class UsersService{
    private static URL:string="https://jsonplaceholder.typicode.com"

    public static getALlUsers(){
           let UserUrl:string=`${this.URL}/users`;
           return axios.get<IUsers[]>(UserUrl)
    }
}