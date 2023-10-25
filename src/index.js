//Write your code here
class API{
  constructor(url, method = 'GET'){
      this.url = url;  
      this.method = method;
      this.#secure = url.startswith("https");
  }
  isSecure(){
    return this.#secure
  }
  updateURl(url){
    this.url = url;
    this.#secure = url.startswith("https");
  }
}





//Do not remove this code
module.exports = { API }
