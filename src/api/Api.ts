import { API_BASE_URL, ACCESS_TOKEN } from '../consts';

type LoginRequest = {
  username: string,
  password: string
}

type SingupRequest = {
    nome: string,
    email: string,
    senha: string,
    ativado: true
}

const request = (options:any) => {
  const headers = new Headers({
      'Content-Type': 'application/json',
  })
  
  if(localStorage.getItem(ACCESS_TOKEN)) {
      headers.append('Authorization', localStorage.getItem(ACCESS_TOKEN) || "")
  }

  const defaults = {headers: headers};
  options = Object.assign({}, defaults, options);

  return fetch(options.url, options)
  .then(response => 
      response.json().then(json => {
          if(!response.ok) {
              return Promise.reject(json);
          }
          return json;
      })
  );
};

export function login(loginRequest : LoginRequest) {
    return request({
        url: API_BASE_URL + "/login",
        method: 'POST',
        body: JSON.stringify(loginRequest)
    });
}

export function signup(signupRequest: SingupRequest) {
    return request({
        url: API_BASE_URL + "/cadastro",
        method: 'POST',
        body: JSON.stringify(signupRequest)
    });
}



// export function getAllPolls(page, size) {
//   page = page || 0;
//   size = size || POLL_LIST_SIZE;

//   return request({
//       url: API_BASE_URL + "/polls?page=" + page + "&size=" + size,
//       method: 'GET'
//   });
// }

// export function createPoll(pollData) {
//   return request({
//       url: API_BASE_URL + "/polls",
//       method: 'POST',
//       body: JSON.stringify(pollData)         
//   });
// }