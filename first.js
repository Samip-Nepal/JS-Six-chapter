//window.console.log("I am Samip Neapl");
//alert("I am back");
//console.log(window);
//console.dir(document.body);
//console.log(document.body);
//console.dir(document.head);
/*let heading=document.getElementById("Samip")
console.log(heading);//for print of html 
console.dir(heading);
let headings=document.getElementsByClassName("class")
console.log(headings);//for print of html 
console.dir(headings);
let pra=document.getElementsByTagName("p")
console.log(pra);//for print of html 
console.dir(pra);*/
let element=document.querySelector(".class")
console.dir(element);
let elements=document.querySelectorAll("p")
console.dir(elements);
let ele=document.querySelector("#Samip")
console.dir(ele);
console.log(element.tagName);
let elementss=document.querySelector("#Samit")
console.dir(elementss);
console.log(elementss.innerText);
console.log(elementss.innerHTML);
console.log(ele.innerText="Abcd");//chaning the value of inner text.
console.log(elementss.innerHTML="<i>Samit</i>");//Chaning the inner code.
let id=document.querySelector("p")
console.log(id.textContent);