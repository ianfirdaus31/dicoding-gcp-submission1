exports.index = (req, reply) => {
  reply.view("../html/index.ejs", { text: "text" })
}