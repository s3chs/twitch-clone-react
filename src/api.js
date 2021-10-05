import axios from "axios";

let api = axios.create({
  headers: {
    "Client-ID": "mz6ho4xeg0hwd9i67wx5las4p7kphc",
    "Authorization": "Bearer sts9kqcnteptotsfxbapt3brvtlfe3",
  },
});

//
// REDIRECT = "http://localhost:3000/"
// LIEN AUTH = https://id.twitch.tv/oauth2/authorize?client_id=&redirect_uri={REDIRECT}&response_type=token
// LIEN REMPLI = https://id.twitch.tv/oauth2/authorize?client_id=mz6ho4xeg0hwd9i67wx5las4p7kphc&redirect_uri=http://localhost:3000/&response_type=token
//

export default api;
