export default [{
    name: '',
    path: '/',
    component: require('../../components/Views/MainPage').default
  },
  {
    name: 'movies',
    path: '/movies',
    component: require('../../components/Views/MainPage').default,
  },
  {
    name: 'movie',
    path: '/movie/:id',
    component: require('../../components/Views/Movie/MovieDetail').default,
    routes: [
      {
        path: '/similar',
        component: require('../../components/Views/Movie/SimilarMovies').default
      }
    ]
  },
  {
    name: 'person',
    path: '/person/:id',
    component: require('../../components/Views/Person/PersonDetail').default,
    routes: [
      {
        path: '/movies',
        component: require('../../components/Views/Person/MovieCredits').default,
      },
      {
        path: '/tvshows',
        component: require('../../components/Views/Person/TVShowCredits').default
      }
    ]
  }
];