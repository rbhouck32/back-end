require("dotenv").config();
const server = require("./api/server.js");

const port = process.env.PORT || 5001;

server.listen(port, () => {
  console.log(`\n** Server Running on port ${port}**\n`);
});
