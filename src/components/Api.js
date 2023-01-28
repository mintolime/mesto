export default class Api {
  constructor({url,headers}){
    this.url = url;
    this.headers = headers;
  }

getAllCards(){
  return fetch(`${this.url}/cards`,{
    headers:this.headers
  })
  .then((res) =>{
    if(res.ok){
      return res.json()
    }
  })
}
}