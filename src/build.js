const fs = require("fs");

// Loading data
const basicData = JSON.parse(fs.readFileSync("./data/basics.json").toString());
const navData = JSON.parse(fs.readFileSync("./data/nav.json").toString());
const postData = JSON.parse(fs.readFileSync("./data/posts.json").toString());

// Loading chunks for index page
let head = fs.readFileSync("./parts/head.pt").toString();
let nav = fs.readFileSync("./parts/nav.pt").toString();
let navItem = fs.readFileSync("./parts/navItem.pt").toString();
let footer = fs.readFileSync("./parts/footer.pt").toString();
let header = fs.readFileSync("./parts/index/header.pt").toString();
let singlePost = fs.readFileSync("./parts/index/single_post.pt").toString();
let post = fs.readFileSync("./parts/index/posts.pt").toString();

// Make the nav ready
let navItems = "";
for (const data of navData) {
  navItems += createTemplate(navItem, data);
}
nav = nav.replace(/{{ navItems }}/g, navItems);

// Make the posts ready
let posts = "";
for (const data of postData) {
  posts += createTemplate(singlePost, data);
}
post = post.replace(/{{ posts }}/g, posts);

// Building index page
let indexPage = head + nav + header + post + footer;

indexPage = createTemplate(indexPage, basicData);
fs.writeFileSync("../index.html", indexPage);

// Utils
function createTemplate(page, data) {
  for (const key in data) {
    if (data.hasOwnProperty(key)) {
      page = page.replace(new RegExp(`{{ ${key} }}`, "g"), data[key]);
    }
  }
  return page;
}
