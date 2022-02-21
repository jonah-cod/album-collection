import axios from 'axios';
require('dotenv').config();

const baseUrl = 'https://ws.audioscrobbler.com/2.0';
let newUrl = new URL('/2.0/', baseUrl);
const method = 'album.getinfo'
const api_key = process.env.API_KEY || "95ba45e6767734ea7e17c4bb0f1ded85";
newUrl.searchParams.append('method', method)
newUrl.searchParams.append("api_key", api_key)

export default async function gettracks(params) {
    const format = "json"
    newUrl.searchParams.append('artist', params.artist);
    newUrl.searchParams.append('album', params.album);
    newUrl.searchParams.append('format', format)

    let api_url = newUrl.toString();

    return await axios.get(api_url)
}