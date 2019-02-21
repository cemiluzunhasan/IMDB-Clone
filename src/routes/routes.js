import MainPage from '../views/MainPage'
import MovieDetail from '../views/MovieDetail';
import CastDetail from '../views/CastDetail';

export default [
  {
    path: '/',
    component: MainPage
  },
  {
    path: '/movie/:id',
    component: MovieDetail
  },
  {
    path: '/cast/:id',
    component: CastDetail
  } 
];  