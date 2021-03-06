const fastify = require('fastify')();

const HomeController = require('./home.controller');

fastify.register(require("point-of-view"), {
  engine: {
    ejs: require("ejs"),
  },
});

fastify.get("/", HomeController.index);

const start = async () => {
  try {
    await fastify.listen(8080, '0.0.0.0');
  } catch (err) {
    fastify.log.error(err)
    process.exit(1)
  }
}
start();