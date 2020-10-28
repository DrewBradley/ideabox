import Idea from './idea.js';

var showStarredButton = document.querySelector(".show-favorite");
var titleInput = document.querySelector(".title-input");
var bodyInput = document.querySelector(".body-input");
var saveButton = document.querySelector(".save-button");
var searchInput = document.querySelector(".search-input");
var searchButton = document.querySelector(".search-button");
var starButton = document.querySelector(".like");
var deleteButton = document.querySelector(".delete");
var commentButton = document.querySelector(".comment-button");
//idea list array
var savedIdeas = [];
