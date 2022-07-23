

// adding a class of book
class book {
    constructor(name, author, type) {
        this.name = name;
        this.author = author;
        this.type = type;
    }
}

// function to display the text
function display()
{
    

}


display.prototype.add=function(book){
    let text=`<tr>
    <th scope="row">#</th>
    <td>${book.name}</td>
    <td>${book.author}</td>
    <td>${book.type}</td>
  </tr>`;
  let tb=document.getElementById("tb");
  tb.innerHTML+=text;
}

display.prototype.clear=function(){
    let libraryform = document.getElementById("libraryForm");
    libraryform.reset();
}



display.prototype.showerror=function(message){
    let alert=document.getElementById("alert");
    let msg=`<div class="alert alert-success" role="alert">
    ${message}
  </div>`;
  alert.innerHTML+=msg;
  


  setTimeout(()=>{
   msg="";
   alert.innerHTML=msg;
  },2000);
}


let libraryform = document.getElementById("libraryForm");
libraryform.addEventListener('submit', formsubmit);

function formsubmit(event) {
    
    event.preventDefault();
    let bookname = document.getElementById("bookName").value;
    let author = document.getElementById("author").value;
    let type;
    let fiction = document.getElementById("Fiction");
    let romance = document.getElementById("romance");
    let cp = document.getElementById("ComputerProgramming");
   if(fiction.checked)
   type=fiction.value;
   else if(cp.checked)
   type=cp.value;
   else if(romance.checked)
   type=romance.value;

    let book1 = new book(bookname, author, type);
    let dis= new display();
    if(book1.author.length>1||book1.name.length>2){
    dis.add(book1);
     dis.showerror("successfully added the book");
}
    else 
       dis.showerror("invalid input");
    
    dis.clear();

    
}
