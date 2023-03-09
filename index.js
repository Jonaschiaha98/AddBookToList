class Booklist{
  constructor(title, author, isbn){
    this.title = title;
  this.author = author;
  this.isbn = isbn;
  }
// prototypes
addBookToLis(book){
  let row = document.createElement("tr")
  row.innerHTML = `
  <td>${book.title}</td>
  <td>${book.author}</td>
  <td>${book.isbn}</td>
  <td><a href="#" class="delete-Me" id="delete-btn">X</td>`
  document.querySelector("tbody").appendChild(row)
}
clearInput(book){
  document.getElementById("title").value = ""
  document.getElementById("author").value = ""
  document.getElementById("isbn").value = ""
}
alertMe(message, classes) {
  const div = document.createElement("Div");
  div.className = `alart ${classes}`
  div.appendChild(document.createTextNode(message));
  const container = document.querySelector("#container");
  const form = document.getElementById("form");
  container.insertBefore(div, form)
}
}

document.getElementById("form").addEventListener("submit", function (e) {
  const title = document.getElementById("title").value;
  const author = document.getElementById("author").value;
  const isbn = document.getElementById("isbn").value;
  let book = new Booklist(title, author, isbn)

  // const ui = new UI()
  if (title === "" || author === "" || isbn === "") {
    book.clearInput(book);
    book.alertMe("Failed to add Book.", "error");
    setTimeout(function(){
      document.querySelector(".alart").remove();
    }, 2000);
  }else{
    book.addBookToList(book);
    book.clearInput(book);
    book.alertMe("A book got Added.", "success");
    setTimeout(function(){
      document.querySelector(".alart").remove();
    }, 2000);
  }
  
 

  // var deleteBtn = document.getElementById("delete-btn")

  
  e.preventDefault();
});