export class Api {
  static HEADERS = {'Content-Type': 'application/json'};

  static async get(url) {
    try {
      return await request(url, 'GET');
    } catch (e) {}
  }

}

async function request(url, method = 'GET', data) {
  const config = {
    method,
    headers: Api.HEADERS,
  }
  const response = await fetch(url, config);
  return await response.json();
}