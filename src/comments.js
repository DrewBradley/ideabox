class Comment {
  constructor(id, parentId, text) {
    this.id = id;
    this.parentId = parentId;
    this.text = text;
  }
  saveToStorage() {
    localStorage.setItem(this.id, JSON.stringify(this));
  }
  deleteFromStorage() {
    localStorage.removeItem(this.id);
  }
}
