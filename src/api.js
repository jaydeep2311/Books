const http = require("http");
const PORT = 8001;
const book = require("./book");

http.createServer(book).listen(PORT, () => {
  console.log(`listening to ${PORT}`);
});
