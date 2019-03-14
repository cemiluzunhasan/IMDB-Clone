export default [
  {
    name: '',
    path: '/',
    exact: true,
    component: require('../../components/Views/MainPage').default,
  },
  {
    name: 'movie',
    path: '/movie/:id',
    component: require('../../components/Views/Movie').default,
    routes: [
      {
        path: '/details',
        component: require('../../components/Views/Movie/MovieDetail').default
      },
      {
        path: '/cast',
        component: require('../../components/Views/Movie/CastList').default
      },
      {
        path: '/similar',
        component: require('../../components/Views/Movie/SimilarMovies').default
      }
    ]
  },
  {
    name: 'person',
    path: '/person/:id',
    component: require('../../components/Views/Person').default,
    routes: [
      {
        path: '/details',
        component: require('../../components/Views/Person/PersonDetail').default
      },
      {
        path: '/movies',
        component: require('../../components/Views/Person/MovieCredits').default
      },
    ]
  },
  { 
    name: 'search',
    path: '/search',
    component: require('../../components/Views/SearchResults').default
  }
];