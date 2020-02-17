import { default as fs } from "fs";
import { createTemplate, createTemplateLoop } from "./utils.js";

// Loading data
const basicData = JSON.parse(fs.readFileSync("./data/basics.json").toString());
const navData = JSON.parse(fs.readFileSync("./data/nav.json").toString());
const postData = JSON.parse(fs.readFileSync("./data/posts.json").toString());

// Loading chunks for index page
let layout = fs.readFileSync("./parts/layout.pt").toString();
let nav = fs.readFileSync("./parts/nav.pt").toString();
let navItem = fs.readFileSync("./parts/navItem.pt").toString();
let header = fs.readFileSync("./parts/index/header.pt").toString();
let singlePost = fs.readFileSync("./parts/index/single_post.pt").toString();
let post = fs.readFileSync("./parts/index/posts.pt").toString();

// Make the nav ready
nav = createTemplateLoop(nav, navItem, "navItems", navData);

// Make the posts ready
post = createTemplateLoop(post, singlePost, "posts", postData);

// Using the layout
let indexPage = createTemplate(layout, {
  header: header,
  navbar: nav,
  mainContent: post,
  ...basicData
});

// Building index page
fs.writeFileSync("../index.html", indexPage);
