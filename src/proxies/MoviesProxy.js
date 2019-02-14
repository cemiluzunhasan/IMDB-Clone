import Proxy from './Proxy'

export default class MoviesProxy extends Proxy {
  constructor(parameters) {
    super('https://api.themoviedb.org/3', parameters);
  }

  getTrending(payload) {
    return this.submit('get', `/trending/${payload.mediaType}/${payload.timeWindow}`);
  }

  getMovies(type) {
    return this.submit('get', `/movie/${type}`);
  }
}

