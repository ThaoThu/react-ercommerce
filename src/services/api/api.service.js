import Config from '../config';
import Authen from './authen';
import { history } from "../../utils/history";

export class API {
  config;
  serviceName;
  authen;
  constructor(serviceName) {
    this.config = Config.getInstance();
    this.serviceName = serviceName
    this.authen = Authen.getInstance();
  }

  getBaseUrl(){
    switch (this.serviceName) {
      case 'LEARNING':
        return this.config.learning_url
      default:
        return this.config.base_url
    }
  }
  async raw(url, params, options , download = false , filename = '') {
    try {
      let paramsWithAuthen = this.buildParamsHeaderAuthen(params);
      let res = {}
      if (download){
        res = await (fetch(url, paramsWithAuthen).then(async response => response.blob()).then(blob =>{
          let file = new File([blob] , filename , { type: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet' })
          return file
        }));
      }else{
        res = await (fetch(url, paramsWithAuthen).then(async response => {
          return response.clone().json();
        }));
      }
      if(url.indexOf('/user/login') > 0) {
        await this.saveAuthenObject(res);
      }
      if (download){
          return [null , res]
      }else{
        if( res && res.status === 200){
          return [null, res];
        } else {
          if(res && res.status === 401){
            this.authen.clearAuthenObject();
            history.push("/login");
          }
          return [res?.message || "", null];
        }
      }
    }
    catch (err) {
      console.warn(url, params, err);
      history.push("/login");
      return [err, null];
    }
  }

  post(endpoint, params) {

    return this.raw(this.getBaseUrl() + endpoint, {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json; charset=utf-8'
      },
      body: JSON.stringify(params),
    });

  }

  delete(endpoint ,params){
    let url = this.getBaseUrl() + endpoint + '?' + this.serializeData(params);
    return this.raw(url, {
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json; charset=utf-8'
      },
      method: 'DELETE'
    });
  }

  put(endpoint, params) {
    return this.raw(this.getBaseUrl() + endpoint, {
      method: 'PUT',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json; charset=utf-8'
      },
      body: JSON.stringify(params),
    });
  }
  patch(endpoint, params) {
    return this.raw(this.getBaseUrl() + endpoint, {
      method: 'PATCH',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json; charset=utf-8'
      },
      body: JSON.stringify(params),
    });
  }

  get(endpoint, params) {
    let url = this.getBaseUrl() + endpoint + '?' + this.serializeData(params);
    return this.raw(url, {
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json; charset=utf-8'
      },
      method: 'GET'
    });
  }
  download(endpoint, filename) {
    let url = this.getBaseUrl() + endpoint;
    return this.raw(url, {
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json; charset=utf-8'
      },
      method: 'GET'
    } , null , true , filename);
  }
  async saveAuthenObject(response) {
    const authen = Authen.getInstance();
    if(response.status === 200) {
      await authen.saveAuthenObject(response.data);
    }
  }

  buildParamsHeaderAuthen(params) {
    const authen = Authen.getInstance();
    if(authen.isLogined && authen.authenObject) {
      let newParams = params;
      newParams.headers['Authorization'] = "Bearer " + authen.authenObject['accessToken'];
      return newParams;
    } else {
      return params;
    }
  }

  serializeData(data) {
    // If this is not an object, defer to native stringification.
    if (!this.isObject(data)) {
      return ((data == null) ? "" : data.toString());
    }
    let buffer = [];
    // Serialize each key in the object.
    for (let name in data) {
      if (!data.hasOwnProperty(name)) {
        continue;
      }
      let value = data[name];
      if (Array.isArray(value)) {
        for (let i = 0; i < value.length; i++) {
          buffer.push(
            encodeURIComponent(name) + "=" + encodeURIComponent((value[i] == null) ? "" : value[i])
          );
        }
      } else {
       buffer.push(
        encodeURIComponent(name) + "=" + encodeURIComponent((value == null) ? "" : value)
       );
      }
    }
    // Serialize the buffer and clean it up for transportation.
    let source = buffer.join("&").replace(/%20/g, "+");
    return (source);
  }

  isObject(x) {
    return x != null && typeof x === 'object';
  }
}
