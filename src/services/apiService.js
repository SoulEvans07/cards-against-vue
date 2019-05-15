import axios from 'axios'
import vars from '../vars'

class ApiService {
  constructor() {
    this._axios = axios.create({baseURL: vars.baseurl});
  }

  setAuthToken() {
    let user = localStorage.getItem('user');
    if (user) {
      try {
        user = JSON.parse(user);
        this._axios.defaults.headers.common['Authorization'] = user.token;
      } catch (e) {
        console.error('Can not parse localstorage', e);
      }
    } else {
      this._axios.defaults.headers.common['Authorization'] = null;
    }
  }

  get(url, data) {
    this.setAuthToken();
    return this._axios({
      method: 'get',
      url: url,
      data: data
    });
  }

  post(url, data) {
    this.setAuthToken();
    return this._axios({
      method: 'post',
      url: url,
      data: data
    });
  }

  update(url, data) {
    this.setAuthToken();
    return this._axios({
      method: 'post',
      url: url,
      data: data
    });
  }

  delete(url) {
    this.setAuthToken();
    return this._axios({
      method: 'delete',
      url: url,
    });
  }
}

export default new ApiService();
