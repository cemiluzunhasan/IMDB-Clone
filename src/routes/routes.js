import MainPage from '../views/MainPage'
import MovieDetail from '../views/MovieDetail';

export default [
  {
    path: '/',
    component: MainPage
  },
  {
    path: '/movie/:id',
    component: MovieDetail
  } 
];  