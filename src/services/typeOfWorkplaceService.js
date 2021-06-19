import axios from "axios";

export default class TypeOfWorkplace {
  getTypeOfWorkplaces() {
    return axios.get("http://localhost:8080/api/typeofworkplaces/getall");
  }
}