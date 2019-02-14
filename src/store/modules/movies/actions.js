import { MoviesProxy } from '../../../proxies'
import * as actions from './action-types';

export default {
  getTrending: (payload) => {
    return dispatch => new Promise((resolve, reject) => {
      new MoviesProxy({ api_key: '413c8042ab31652325d5a5a50a75fd47' }).getTrending(payload).then(response => {
        dispatch({ type: actions.GET_TRENDINGS, payload: response });
        resolve();
      }).catch(err => {
        reject();
      }); 
    })
  },

  getMovies: (payload) => {
    return dispatch => new Promise((resolve, reject) => {
      new MoviesProxy({ api_key: '413c8042ab31652325d5a5a50a75fd47' }).getMovies(payload.endpoint).then(response => {
        dispatch({ type: payload.type, payload: response });
        resolve()
      }).catch(err => {
        reject();
      })
    })
  }
};
