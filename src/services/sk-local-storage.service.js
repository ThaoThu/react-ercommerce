export class SKLocalStorageService {
  constructor() { }
   allStorage() {
    let values = {};
    let key, value;
    for (var i = 0; i <= localStorage.length - 1; i++) {
      key = localStorage.key(i);
      values[key] = localStorage.getItem(key);
    }
    return values;
  }
  clearLocalstorage() {
    let allStorage = this.allStorage();
    for (var keyItem in allStorage) {
      delete localStorage[keyItem];
    };
  }
  set(key, value ){
    try {
      localStorage[key] = value;
    } catch (e) {
      this.clearLocalstorage();
      localStorage[key] = value;
    }
  }
  get(key, defaultValue = null){
    return localStorage[key] || defaultValue;
  }
  setObject(key, value){
    try {
      localStorage[key] = JSON.stringify(value);
    } catch (e) {
      this.clearLocalstorage();
      localStorage[key] = JSON.stringify(value);
    }
  }
  getObject(key, defaultValue= null){
    let value = localStorage[key];
    if (typeof value != 'undefined' && value != 'undefined')
      return JSON.parse(value)
    else
      return defaultValue;
  }
  clearAllLocalstorage(){
    let allStorage = this.allStorage();
    for (var keyItem in allStorage) {
      delete localStorage[keyItem];
    };
  }
  removeItem(key) {
    delete localStorage[key];
  }
}
