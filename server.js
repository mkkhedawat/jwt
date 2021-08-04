const express = require("express");
const enforce = require("express-sslify");

const app = express();

app.set("view engine", "pug");
app.set("views", __dirname + "/views/website");

if (process.env.NODE_ENV === "production") {
  console.log("Redirecting to TLS endpoint.");
  app.use(
    enforce.HTTPS({
      // Required for proper use under a reverse proxy (Heroku, etc.).
      trustProtoHeader: true,
    })
  );
}

app.use(express.static("dist/website"));
app.get("/", function (req, res) {
  res.render("index");
});

app.get("/introduction", function (req, res) {
  res.render("introduction");
});

app.listen(process.env.PORT || 3000, function () {
  console.log("Started.");
});
