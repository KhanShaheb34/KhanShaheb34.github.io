"use-strict";

const fs = require("fs");

// Loading data
const dataString = fs.readFileSync("./data/basics.json");
const data = JSON.parse(dataString);

// Loading chunks for index page
const head = fs.readFileSync("./parts/head.pt");
const nav = fs.readFileSync("./parts/nav.pt");
const footer = fs.readFileSync("./parts/footer.pt");
const header = fs.readFileSync("./parts/index/header.pt");
const beforePost = fs.readFileSync("./parts/index/before_post.pt");
const afterPost = fs.readFileSync("./parts/index/after_post.pt");
const singlePost = fs.readFileSync("./parts/index/single_post.pt");

// Building index page
let indexPage =
  head +
  nav +
  header +
  beforePost +
  singlePost +
  singlePost +
  singlePost +
  singlePost +
  afterPost +
  footer;

indexPage = createTemplate(indexPage, data);
fs.writeFileSync("./index.html", indexPage);

// Utils
function createTemplate(page, data) {
  for (const key in data) {
    if (data.hasOwnProperty(key)) {
      page = page.replace(new RegExp(`{{ ${key} }}`, "g"), data[key]);
    }
  }
  return page;
}
