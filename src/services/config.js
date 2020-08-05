const APP_CONFIG = [
  {
    id: 'staging',
    base_url: "https://nghean-api.campusjunior.vn",
    learning_url: "https://nghean-api.campusjunior.vn"
  },
  {
    id: 'develop',
    base_url: "http://35.240.161.209:3000",
    learning_url: "http://35.240.161.209:3000"
  }
];

export default class Config {
  server_id = '';
  base_url = '';
  learning_url = '';
  inited = false;
  constructor() {  
  }

  async initConfig() {
    if (this.inited === true) return;
    const serverId = await localStorage.getItem('@Config:serverId');
    await this.setConfig(serverId || 'staging');
    this.inited = true;
    console.log("Config service initialized!", this);
    return true;
  }

  async setConfig(serverId) {
    if (this.server_id === serverId) {
      return;
    }
    let configData = APP_CONFIG.filter(item => item.id === serverId);
    if (!configData || configData.length <= 0) {
      configData = [APP_CONFIG[0]];
    }
    this.server_id = configData[0].id;
    this.base_url = configData[0].base_url;
    this.learning_url = configData[0].learning_url
    localStorage.setItem('@Config:serverId', this.server_id);
  }

  getBaseURL() {
    return this.base_url;
  }

  getLearningEndpoint(){
    return this.learning_url;
  }

  static instance;
  static getInstance() {
    
    if (!this.instance) {
      this.instance = new Config();
    }
    console.log("Config -> getInstance -> getInstance",this.instance)
    return this.instance;
  }

}
