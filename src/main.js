// var Idea = require('./idea.js')
// import Idea from './idea.js';

// QUERY SELECTORS
var showStarredButton = document.querySelector(".show-favorite");
var titleInput = document.querySelector(".title-input");
var bodyInput = document.querySelector(".body-input");
var saveButton = document.querySelector(".save-button");
var searchInput = document.querySelector(".search-input");
var searchButton = document.querySelector(".search-button");
var starButton = document.querySelector(".like");
var deleteButton = document.querySelector(".delete");
var commentButton = document.querySelector(".comment-button");

var savedIdeas = [];

// EVENT LISTENERS
saveButton.addEventListener('click', saveIdea)

// FUNCTIONS
function saveIdea() {
  if (titleInput.value && bodyInput.value) {
    var idea = new Idea(titleInput.value, bodyInput.value);
    savedIdeas.push(idea);
  }
  console.log(savedIdeas)
}
