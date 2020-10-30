class Idea {
  constructor(title, body){
    this.id = Date.now();
    this.title = title;
    this.body = body;
    this.star = false;
  }
  saveToStorage(){
    localStorage.setItem(JSON.stringify(this.id), JSON.stringify(this));
  }

  deleteFromStorage(){

  }
  
  updateIdea(){
    
  }
}
