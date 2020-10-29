
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
saveButton.addEventListener('click', saveIdea);
bodyInput.addEventListener('keyup', enableSaveButton);

// FUNCTIONS
function saveIdea() {
  if (titleInput.value && bodyInput.value) {
    var idea = new Idea(titleInput.value, bodyInput.value);
    savedIdeas.push(idea);
  }
  titleInput.value = "";
  bodyInput.value = "";
  saveButton.disabled = true;
  console.log('hot damn')
}

function enableSaveButton() {
  if (titleInput.value.length > 0 && bodyInput.value.length > 0){
    saveButton.disabled = false;
  }else{
    saveButton.disabled = true;
  }
}