import MainPage from '../../views/MainPage'
import MovieDetail from '../../views/Movie/MovieDetail';
import PersonDetail from '../../views/Person/PersonDetail';
import Person from '../../views/Person'
import TVShowCredits from '../../views/Person/TVShowCredits';
import MovieCredits from '../../views/Person/MovieCredits';

export default [
  {
    name: '',
    path: '/',
    component: MainPage
  },
  {
    name: 'movie',
    path: '/movie/:id',
    component: MovieDetail
  },
  {
    name: 'person',
    path: '/person',
    component: Person,
    routes: [
      {
        path: 'person/:id',
        component: PersonDetail
      },
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