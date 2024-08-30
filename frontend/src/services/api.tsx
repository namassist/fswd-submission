//import axios
import axios from "axios";

const Api = axios.create({
  //set default endpoint API
  baseURL: "https://api-hub.ilcs.co.id/test/v2",
});

export default Api;
