var moment = require('moment');
export default class Authen {
  inited = false;
  isLogined = false;
  accessToken= null;
  email = null;
  roles = [];
  semester = null;
  yearTimeWork = null;
  authenObject;
  noicongtac = null;
  bachoc = null;
  userId = null;
  truonghoc = null;
  lophoc = null;
  userSetting = null;

  constructor() { }

  static instance;
  static getInstance() {
    if (!this.instance) {
      this.instance = new Authen();
    }
    return this.instance;
  }

  initAuthen() {
    if(this.inited) return;
    let authenJson = localStorage.getItem('CJuser');
    if (authenJson) {
      let authenObj = JSON.parse(authenJson);
      this.saveAuthenObject(authenObj);
      this.inited = true;
    } else {
      this.inited = true;
    }
    console.log("Authen service initialized!");
  }

   saveAuthenObject(data) {
    let semester = data['semester'] ? data['semester'] : (moment().month() < 3 || moment().month() > 7 ? "1" : "2");
    let yearNow = moment().year();
    let yearTimeWork = data['yearTimeWork'] ? data['yearTimeWork'] : ( moment().month() > 7 ? (yearNow +'-'+ (yearNow + 1)) : ((yearNow-1)+'-'+yearNow));
    let authenObject = {
      ...data,
      'semester' : semester,
      'yearTimeWork' : yearTimeWork,
    };
    this.accessToken = data['accessToken'];
    this.isLogined = true;
    this.email = data?.email;
    this.roles = data?.roles;
    this.noicongtac = data?.donviCongtac;
    this.noicongtac = {...this.noicongtac,...{ tinhId: 41}};
    this.level = data?.level;
    this.userId = data?.id;
    this.semester = semester;
    this.yearTimeWork = yearTimeWork;
    this.authenObject = authenObject;
    this.userSetting = data?.userSetting
    switch(this.level){
      case 1:{ //Phong giao duc
        this.phonggiaoduc = data?.donviCongtac;
        break;
      }

      case 2: {//Truong hoc
        this.truonghoc = data?.donviCongtac;
        this.bachoc = data?.donviCongtac?.bachocId;
        this.lophoc = data?.donviCongtac?.lophoc;
        break;
      }
    }
    localStorage.setItem('CJuser', JSON.stringify(authenObject));
  }

  updateSettingTimeWork(data){
    let authenJson = localStorage.getItem('CJuser');
    if(authenJson){
      let authenObj = JSON.parse(authenJson);
      authenObj['semester'] = data['semester'];
      authenObj['yearTimeWork'] = data['yearTimeWork'];
      authenObj['userSetting'] = data;
      this.semester = data['semester'];
      this.yearTimeWork = data['yearTimeWork'];
      this.userSetting = data
      localStorage.setItem('CJuser', JSON.stringify(authenObj));
      return true
    }
    return false
  }

  async clearAuthenObject() {
   delete localStorage['CJuser'];
   this.isLogined = false;
   this.accessToken= null;
   this.email = null;
   this.semester = null;
   this.yearTimeWork = null;
   this.noicongtac = null;
   this.roles = [];
   this.bachoc = null;
   this.userSetting = null;
  }
}
