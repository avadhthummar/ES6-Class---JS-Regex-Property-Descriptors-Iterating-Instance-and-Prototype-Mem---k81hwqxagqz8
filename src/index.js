//Write your code here
class API {
  constructor(url, method = 'GET') {
    this.url = url;
    this.method = method;
    this.#secure = url.startsWith('https');
  }

  isSecure() {
    return this.#secure;
  }

  updateUrl(newUrl) {
    this.url = newUrl;
    this.#secure = newUrl.startsWith('https');
  }
}

// Export the API class
module.exports = {API};
