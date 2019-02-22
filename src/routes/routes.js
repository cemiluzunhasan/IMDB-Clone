import MainPage from '../views/MainPage'
import MovieDetail from '../views/Movie/MovieDetail';
import PersonDetail from '../views/Person/PersonDetail';
import TVShowCredits from '../views/Person/TVShowCredits';
import MovieCredits from '../views/Person/MovieCredits';

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
    path: '/person/:id',
    component: PersonDetail,
    routes: [
      {
        path: '/movies',
        component: MovieCredits,
      },
      {
        path: '/tvshows',
        component: TVShowCredits
      }
    ]
  }, 
];  