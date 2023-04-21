/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  let pronoun = ["the", "our"];
  let adj = ["great", "big"];
  let noun = ["jogger", "racoon"];

  document.getElementById("domain").innerHTML =
    pronoun[pickRand(pronoun)] +
    adj[pickRand(adj)] +
    noun[pickRand(noun)] +
    ".com";
};

const pickRand = arr => {
  return Math.floor(Math.random() * arr.length);
};
