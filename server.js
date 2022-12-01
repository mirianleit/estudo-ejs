const express = require("express");
const app = express();

app.set("view engine", "ejs");

app.get("/", function (req, res) {
  const items = [
    {
      title: "D",
      mensagem: "Desenvolver aplicações/serviços de forma facil.",
    },
    {
      title: "E",
      mensagem: "EJS",
    },
    {
      title: "M",
      mensagem: "Muito facil de usar",
    },
    {
      title: "A",
      mensagem: "Amorzinho",
    },
  ];
  const subtitle =
    "Uma linguagem de modelagem para criaçao de páginas HTML utilizando Javascript.";
  res.render("pages/index", {
    qualitys: items,
    subtitle: subtitle,
  });
});

app.get("/sobre", function (req, res) {
  res.render("pages/about");
});

app.listen(8080);
console.log("rodando");
