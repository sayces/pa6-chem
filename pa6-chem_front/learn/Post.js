
export default class Post {
  title;
  date = new Date();
  constructor (title) { 
    this.title = title;    
        
  }

  toString() {
    return JSON.stringify({
      title: this.title, 
      date: this.date.toJSON(),
    })
  }
}

