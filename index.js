// index.js
const Hapi = require('@hapi/hapi');
const rideRoute = require('./rideRoute');

const init = async () => {
  const server = Hapi.server({
    port: 3000,
    host: 'localhost'
  });

  // Define your routes and handlers here
  server.route(rideRoute);

  await server.start();
  console.log('Server running on %s', server.info.uri);
};

process.on('unhandledRejection', (err) => {
  console.log(err);
  process.exit(1);
});

init();
