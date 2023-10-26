//Write your code here
class API {
  #secure
  constructor(url, method = 'GET') {
    this.url = url;
    this.method = method;
    this.#secure = url.startsWith("https");
  }

  isSecure() {
    return this.#secure;
  }

  updateUrl(url) {
    this.url = Url;
    this.#secure = url.startsWith("https");
  }
}

// Export the API class
module.exports = {API};
