

/*const para=document.getElementById("height")
const para2=document.getElementById("width")

para.innerText=window.innerHeight.toString();
para2.innerText=window.innerWidth.toString();*/

//? modifier les liens de a

/*const btnBack=document.getElementById("page2")
const btnBack3=document.getElementById("page3")
const btnBack1=document.getElementById("page")*/


//redige vers la page suis
/*
btnBack1.addEventListener("click",(e)=>{
    window.history.forward();
})
//retourner a la page de depart
btnBack.addEventListener("click",(e)=>{
    window.history.back();
})
btnBack3.addEventListener("click",(e)=>{
    window.history.back();
})
*/

/*const links=document.querySelectorAll("a")

links.forEach((link) => {

    link.addEventListener("click",(e)=>{
        window.history.forward();
    })
})*/
/*
btnBack1.addEventListener("click",(e)=>{
   console.log(window.navigator.onLine)
})*/

//execute a un temps donner

/*const time=setTimeout(()=>{
   document.querySelector("h1").innerText="Bonjour les gens"
},10000)
//pour arreter le setTimeout
clearTimeout(time)*/

/*
const time=setInterval(()=>{
   document.querySelector("h1").innerText="Bonjour les gens"
},2000)

clearInterval(time)*/
/*
console.log("avant promise")
let myPromise=new Promise((resolve,reject)=>{
   let  x=2;

   if (x===0){
      resolve("Promise succes")
   }else {
      reject("Promise error ")
   }
})
console.log("just avant promise")
myPromise.then(value=>{
   console.log(value)
}).catch(error=>console.log(error))
console.log("apres promise")*/



/*function getFile(myCallback){
   let req=new XMLHttpRequest();
   req.open("GET","index2.html")
   req.onload=function () {
      if(req.status ===200){
         myCallback(req.responseText);
      }else {
         myCallback("Error lors du chargement du fichier html",req.status)
      }
   }
   req.send()
}
getFile(afficheDansLeDom)*/
/*
console.log("avant promise")
async  function myFunction() {
  await  "Hello world"
}
console.log("just avant promise")

myFunction().then((value)=>console.log(value))
    .catch(error=>console.log(error))
console.log("just apres promise")*/



/*//creer une cokie
document.cookie = "username=John Doe; expires=We, 10 mai 2023 14:20:00 UTC;path=/";
//modifier un cokie
document.cookie = "username=William; expires=We, 10 mai 2023 14:20:00 UTC;path=/";
//sumprimer une cokie
document.cookie = "username=William; expires=We, 01 Jan 1970 00:00:00 UTC;path=/";
document.cookie = "username=John Doe; expires=We,01 Jan 1970 00:00:00 UTC;path=/;path=/";

//recuperer les cokies
let mes_cokies=document.cookie
console.log(mes_cokies)*/

// storage
//ajouter username dans le localStorage
localStorage.setItem("username","John Doe");
sessionStorage.setItem("username","John Doe");
//recuperer les donnes depuis le localStorage
const currentUser=localStorage.getItem("username")
const currentUser2=sessionStorage.getItem("username")
//sumprimer donner depusi le localStorage ou sessionStorage
/*localStorage.removeItem("username")
sessionStorage.removeItem("username")*/
/*localStorage.clear()
sessionStorage.clear()
console.log(currentUser)*/

//fetch
//! CRUD
//! create read update delete
/*const factory=(balise,text) =>{
   const li=document.createElement(balise)
   li.innerText=text;
   return li
}

let usersList=[];
function afficheDansLeDom(data) {
   usersList=data;
   const ul=document.querySelector("ul")
   usersList.forEach((element=>{
      const li=factory("li",element.name + "" + element.username)

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

async  function fetchUsers() {
   let response= await fetch("https://jsonplaceholder.typicode.com/users")
   if(response.ok){
      return response.json();
   }else {
      return response.errors
   }
}
fetchUsers()
    .then(data=>afficheDansLeDom(data))
    .catch(error=>console.log(error))

//Create

const input=document.getElementById("todo");
const form=document.querySelector("form");

//recupere value input
/!*input.addEventListener("change",(e)=>{
   console.log(input.value)
})*!/
form.addEventListener("submit",(e)=>{
   e.preventDefault();
   const user={
      "id": 1,
       "name": input.value,
       "username": input.value,
       "email": "Sincere@april.biz",
       "address": {
      "street": "Kulas Light",
          "suite": "Apt. 556",
          "city": "Gwenborough",
          "zipcode": "92998-3874",
          "geo": {
             "lat": "-37.3159",
             "lng": "81.1496"
          }
   }
   }
   fetch("https://jsonplaceholder.typicode.com/users", {
      method: "POST",
      body: user,
      headers: {
         'Content-Type': 'application/json'
      }
   }).then( r =>console.log(r) )
   .catch( e =>console.log(e) );
})*/


