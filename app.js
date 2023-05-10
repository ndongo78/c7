
class Book {
    #page=1;
    constructor(title,pages){
        this.title =title;
        this.pages=pages;
    }

    page(){
        return this.#page;
    }

    pageSuivant(){
        if(this.#page < this.pages){
            return    this.#page ++;
        }
    }

    fermer(){
        this.#page =1;
    }
}
// const petitFrance=new Book("petit france",10)
// //premier page
// console.log(petitFrance.page())
// //page suivant
// console.log("page suivant",petitFrance.pageSuivant())
// //fermer le livre
// console.log("page close",petitFrance.fermer())

//?   Ensuite on créera une class Library pour organiser nos livres.

//?  1 addBook(), permet de rajouter un livre à la bibliothèque

//?  2  addBooks([]) ,permet de rajouter plusieurs livres d'un coup (on lui passera un tableau)

//?  3  findBooksByLetter('b'), permet de lister tous les livres qui ont un titre qui commence par la lettre indiquée



class Library extends Book{
    #bibliothèque=[];

    get getAllBooks(){
        return this.#bibliothèque
    }
    addBook(book){
        this.#bibliothèque.push(book);
    }

    addBooks(books){
        books.forEach(this.addBook,this);
    }
    findBooksByLetter(letter){
        return this.#bibliothèque.filter(book=>book.title[0].toLowerCase() === letter.toLowerCase());
        console.log("newArray",newArray)
    }

    sumprimerUnLiver(letter){
        return this.#bibliothèque.filter(book=>book.title[0].toLowerCase() != letter.toLowerCase());
    }
}

const petitFrance=new Book("petit france",10);
const library=new Library();


//ajouter un livre
library.addBook(petitFrance)
//ajouter plusieur livres
library.addBooks(
    [
        new Book("Seigneur de anneaux",100),
        new Book("World trading",200),
        new Book("Seigneur de anneaux",100),
        new Book("Les masters js",150),
    ]
)
const factory=(balise,text) =>{
   const li=document.createElement(balise)
   li.innerText=text;
   return li
}

let usersBooks=[];
function afficheDansLeDom(data) {
    usersBooks=library.getAllBooks;
   const ul=document.querySelector("ul")
    usersBooks.forEach((element=>{
      const li=factory("li",element.title)

      const spnaContainer=factory('span',"")
      spnaContainer.setAttribute("class","spnaContainer")
      const spanEdit=factory("i","")
      const spanDelete=factory("i","")

      spanEdit.setAttribute("class","bi bi-pen text-primary")
      spanDelete.setAttribute("class","bi bi-trash3 text-danger")

      spnaContainer.append(spanEdit)
      spnaContainer.append(spanDelete)

      li.append(spnaContainer)
      ul.prepend(li);
   }))
}



const input=document.getElementById("todo");
const input1=document.getElementById("todo1");
const form=document.querySelector("form");

form.addEventListener("submit",(e)=>{
    e.preventDefault();
     library.addBook({title:input.value,pages: input1.value});
     usersBooks=library.getAllBooks;
    console.log("allBooks",usersBooks)
})


afficheDansLeDom(usersBooks)

