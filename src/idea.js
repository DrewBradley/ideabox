class Idea {
  constructor(title, body, id, star, comments){
    this.id = id;
    this.title = title;
    this.body = body;
    this.star = star || false;
    this.comments =  comments || [];
  }
  saveToStorage(){
    localStorage.setItem(JSON.stringify(this.id), JSON.stringify(this));
  }

  deleteFromStorage(){
    localStorage.removeItem(this.id);
  }

  updateIdea(){

  }
}
