const fastify = require('fastify')({ logger: true })

const HomeController = require('./controllers/home.controller');

fastify.register(require("point-of-view"), {
  engine: {
    ejs: require("ejs"),
  },
})

fastify.get("/", HomeController.index);

const start = async () => {
  try {
    await fastify.listen(3000)
  } catch (err) {
    fastify.log.error(err)
    process.exit(1)
  }
}
start()