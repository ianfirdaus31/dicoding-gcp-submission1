// Require the framework and instantiate it
const fastify = require('fastify')({ logger: true })

fastify.register(require("point-of-view"), {
  engine: {
    ejs: require("ejs"),
  },
})

fastify.get("/", (req, reply) => {
  reply.view("/html/index.ejs", { text: "text" })
});

// Run the server!
const start = async () => {
  try {
    await fastify.listen(3000)
  } catch (err) {
    fastify.log.error(err)
    process.exit(1)
  }
}
start()