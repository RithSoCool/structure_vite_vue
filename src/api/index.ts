import axios from 'axios';

const BASE_URL = ''
class BaseService {
  private url: string;
  private api: any;

  constructor(baseurl?: string) {
    this.url = baseurl || BASE_URL;
    this.api = axios.create({
      baseURL: this.url,
      timeout: 60 * 5 * 1000,  /** 5 Mins */
      validateStatus: (status: number) => {
        return status >= 200 && status <= 600;
      }
    });
    this.api.interceptors.request.use(config => {
      return new Promise((resolve) => resolve(config));
    });
    this.api.interceptors.response.use(response => {
      return Promise.resolve(response);
    }, error => {
      return Promise.reject(error);
    });
  }

  getJSON(endPoint: string, configs = {}): Promise<any> {
    return new Promise((resolve, reject) => {
      this.api.get(endPoint, configs)
        .then(res => {
          resolve(res);
        }, err => {
          reject(err);
        });
    });
  }

  postJSON(endPoint: string, params: any, configs = {}): Promise<any> {
    return new Promise((resolve, reject) => {
      this.api.post(endPoint, params, configs)
        .then(res => {
          resolve(res);
        }, err => {
          reject(err);
        });
    });
  }
}
