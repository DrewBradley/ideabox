class Comments {
  constructor(title, body) {
    this.id = Date.now();
    this.title = title;
    this.body = body;
  }
  saveToStorage() {
    localStorage.setItem(JSON.stringify(this.id), JSON.stringify(this));
  }
  deleteFromStorage() {
    localStorage.removeItem(this.id);
  }
}
