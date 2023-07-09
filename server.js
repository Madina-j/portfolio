const express = require("express"); // For create-react-app

const app = express();
app.use(express.static("build")); // "build" for create-react-app

app.listen(5000, () => {
  console.log("server serves static files");
});
