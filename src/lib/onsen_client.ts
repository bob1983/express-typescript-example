import axios from 'axios'

const LIST_URL = 'http://www.onsen.ag/api/shownMovie/shownMovie.json'
const SHOW_URL = "http://www.onsen.ag/data/api/getMovieInfo";

const unwrapJsonp = (jsonp: string) : any => {
  const text = jsonp.slice(9, jsonp.length - 3)
  console.log(text)
  return JSON.parse(text)
}

export class OnsenClient {
  static async fetchShownMovie(): Promise<string[]> {
    const response = await axios.get(LIST_URL)
    return response.data.result
  }
}
