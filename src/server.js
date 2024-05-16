/* eslint-disable import/no-unresolved */
const Hapi = require('@hapi/hapi');
const routes = require('./routes');

const startServer = async () => {
  try {
    const server = Hapi.server({
      port: 9000,
      host: process.env.NODE_ENV !== 'production' ? 'localhost' : '0.0.0.0',
      routes: {
        cors: {
          origin: ['*'],
        },
      },
    });

    server.route(routes);

    await server.start();
    console.log(`Server running at: ${server.info.uri}`);
  } catch (err) {
    console.error(err);
    process.exit(1);
  }
};

startServer();
