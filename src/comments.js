class Comment {
  constructor(id, text) {
    this.id = id;
    this.text = text;
  }
  saveToStorage() {
    localStorage.setItem(this.id, JSON.stringify(this));
  }
  deleteFromStorage() {
    localStorage.removeItem(this.id);
  }
}
