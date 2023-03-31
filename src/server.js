/* eslint-disable no-trailing-spaces */
/* eslint-disable eol-last */
// eslint-disable-next-line import/no-extraneous-dependencies
const Hapi = require('@hapi/hapi');
const routes = require('./routes');

const init = async () => {
  const server = Hapi.server({
    port: 5001,
    host: 'localhost',
    routes: {
      cors: {
        origin: ['*'],
      },
    },
    
  });

  server.route(routes);

  await server.start();
  // eslint-disable-next-line no-console
  console.log(`Server berjalan pada ${server.info.uri}`);
};

init();
