
// QUERY SELECTORS
var showStarredButton = document.querySelector(".show-favorite");
var titleInput = document.querySelector(".title-input");
var bodyInput = document.querySelector(".body-input");
var saveButton = document.querySelector(".save-button");
var searchInput = document.querySelector(".search-input");
var searchButton = document.querySelector(".search-button");
var ideaGrid = document.querySelector(".idea-grid");

// var retrievedObject = JSON.parse(localStorage.getItem("localIdeas"));
var savedIdeas = [];

// EVENT LISTENERS
saveButton.addEventListener('click', saveIdea);
bodyInput.addEventListener('keyup', enableSaveButton);
ideaGrid.addEventListener("click", checkEventTarget);
window.addEventListener('load', pageLoad);

// FUNCTIONS
function saveIdea() {
  if (titleInput.value && bodyInput.value) {
    var idea = new Idea(titleInput.value, bodyInput.value);
    savedIdeas.push(idea);
  };
  titleInput.value = "";
  bodyInput.value = "";
  saveButton.disabled = true;
  showIdeas();
  idea.saveToStorage();
};

function enableSaveButton() {
  if (titleInput.value.length > 0 && bodyInput.value.length > 0) {
    saveButton.disabled = false;
  } else {
    saveButton.disabled = true;
  };
};

function showIdeas() {
  ideaGrid.innerHTML = "";
  for (var i = 0; i < savedIdeas.length; i++) {
    if (savedIdeas[i].star === false) {
      var star = "assets/star.svg";
    } else if (savedIdeas[i].star === true) {
      var star = "assets/star-active.svg";
    };
    ideaGrid.innerHTML += `
      <article class="idea-container" id=${savedIdeas[i].id}>
        <span class="favorite-delete">
          <img src=${star} class="like" alt="Like this idea!">
          <img src="assets/delete.svg" class="delete" alt="Delete this idea!">
        </span>
        <p class="idea-title">${savedIdeas[i].title}</p>
        <p class="idea-body">${savedIdeas[i].body}</p>
        <span class="comment">
          <img src="assets/comment.svg" class="comment-button" alt="comment button">
          <label for="comment-button">Comment</label>
        </span>
      </article>
    `
  };
};

function checkEventTarget(event) {
  var eventTarget = event.target;
  if (eventTarget.classList.contains("delete")) {
    deleteIdea(eventTarget);
  } else if (eventTarget.classList.contains("like")) {
    favoriteIdea(eventTarget);
  };
};

function deleteIdea(target) {
  var id = parseInt(target.parentNode.parentNode.id);
    for (var i = 0; i < savedIdeas.length; i++) {
      if (savedIdeas[i].id === id) {
        savedIdeas.splice(i, 1);
      };
    };
    showIdeas();
};

function favoriteIdea(target) {
  var id = parseInt(target.parentNode.parentNode.id);
    for (var i = 0; i < savedIdeas.length; i++) {
      if (savedIdeas[i].id === id) {
        savedIdeas[i].star = !savedIdeas[i].star;
      };
    };
    showIdeas()
};

function pageLoad() {
  if (localStorage){
    for (var i = 0; i < localStorage.length; i++){
      var key = localStorage.key(i);
      var idea = localStorage.getItem(key);
      savedIdeas.push(JSON.parse(idea));
    }
    showIdeas();
  }
}