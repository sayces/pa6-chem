(()=>{"use strict";const t=new class{title;date=new Date;constructor(t){this.title=t}toString(){return JSON.stringify({title:this.title,date:this.date.toJSON()})}}("title");console.log(t)})();