import axios from "axios";
const BASE_URL = 'http://localhost:5500/sample';
const BASE_URL1 = 'http://localhost:5500/count';
// export function saveSample(samples) {
//     return axios.post(BASE_URL, samples);

// }

// export function getAllSampleFormServer() {

//     return axios.get(BASE_URL);
// }

export function getVoterID() {
    return axios.get(BASE_URL);
}


export async function getAllVoterFromServer() {

    return axios.get(BASE_URL);
}

export function deleteVoterFromServer(VoterID) {
    return axios.delete(`${BASE_URL}/${VoterID}`);
}

export async function getAllVotesFromServer() {

    return axios.get(BASE_URL1);
}
