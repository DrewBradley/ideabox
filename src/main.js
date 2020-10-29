
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
var ideaGrid = document.querySelector(".idea-grid")

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
  showIdeas();
  console.log('hot damn')
}

function enableSaveButton() {
  if (titleInput.value.length > 0 && bodyInput.value.length > 0){
    saveButton.disabled = false;
  }else{
    saveButton.disabled = true;
  }
}

function showIdeas() {
  ideaGrid.innerHTML = "";
  for (var i = 0; i < savedIdeas.length; i++){
    ideaGrid.innerHTML += `
      <article class="idea-container" id=${savedIdeas[i].id}>
        <span class="favorite-delete">
          <img src="assets/star.svg" class="like" alt="Like this idea!">
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
  }
}
ideaGrid.addEventListener("click", checkEventTarget);

function checkEventTarget(event){
  if(event.target.classList.contains("delete")){
    deleteIdea(event);
  } else if (event.target.className === "like"){
    favoriteIdea(event);
  }
};

function deleteIdea(event){
  var id = parseInt(event.target.parentNode.parentNode.id);
  for(var i = 0; i < savedIdeas.length; i++){
    if(savedIdeas[i].id === id){
      savedIdeas.splice(i, 1)
    }
  showIdeas();
  }
};
