exports.index = (req, reply) => {
  reply.view("./index.ejs", { text: "text" })
}