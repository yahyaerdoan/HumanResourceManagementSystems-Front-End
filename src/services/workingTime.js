import axios from "axios";

export default class WorkingTime {
  getWorkingTimes() {
    return axios.get("http://localhost:8080/api/workingtimes/getAll");
  }
}
