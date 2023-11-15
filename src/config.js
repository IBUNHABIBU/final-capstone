const config = {
  production: {
    urlBase: 'https://car.darlive.cyou',
  },
  development: {
    // urlBase: 'http://localhost:3000',
    urlBase: 'https://car.darlive.cyou',
  },
};

export default process.env.NODE_ENV === 'production' ? config.production : config.development;
