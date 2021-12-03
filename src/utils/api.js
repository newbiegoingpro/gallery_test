export class Api {
    constructor(options) {
      this.headers = options.headers;
    }
  
    getCards() {
      return fetch(`https://api.thecatapi.com/v1/images/search?limit=20`, {
        method: 'GET',
        headers: this.headers
      })
        .then((res) => {
          if (res.ok) {
            return res.json()
          }
          return Promise.reject(`err : ${res.status}`)
        })
    }
}
const api = new Api({
    headers: {
      "Content-Type": "application/json",
      "x-api-key": `61aeba76-afbe-478d-87a9-f86dc865d7a0`,
    }
  });
  
  export default api;
  