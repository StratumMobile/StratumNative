import axios from 'axios';

const BASE_URL = 'http://192.168.1.74:3000/user';

class StratumService {
  getUsers = () => {
    return axios
      .get(`${BASE_URL}/all_users`)
      .then(response => {
        return response.data})
      .catch(err => console.log(err));
  };
}
export default StratumService;
