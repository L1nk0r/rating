console.log('Page load!');

var style = '';

var raw = document.querySelector(".raw");
var mark = 0;

var card = document.querySelector(".rating_cart");

var st1 = document.querySelector("#star1");
st1.addEventListener("click", function(){ setMark(st1) });
st1.addEventListener("mouseenter", function(){ hoverMark(1) });
st1.addEventListener("mouseleave", function(){ removeHover(1) });

var st2 = document.querySelector("#star2");
st2.addEventListener("click", function(){ setMark(st2) });
st2.addEventListener("mouseenter", function(){ hoverMark(2) });
st2.addEventListener("mouseleave", function(){ removeHover(2) });

var st3 = document.querySelector("#star3");
st3.addEventListener("click", function(){ setMark(st3) });
st3.addEventListener("mouseenter", function(){ hoverMark(3) });
st3.addEventListener("mouseleave", function(){ removeHover(3) });

var st4 = document.querySelector("#star4");
st4.addEventListener("click", function(){ setMark(st4) });
st4.addEventListener("mouseenter", function(){ hoverMark(4) });
st4.addEventListener("mouseleave", function(){ removeHover(4) });

var st5 = document.querySelector("#star5");
st5.addEventListener("click", function(){ setMark(st5) });
st5.addEventListener("mouseenter", function(){ hoverMark(5) });
st5.addEventListener("mouseleave", function(){ removeHover(5) });

var sbmt = document.querySelector(".submit");
sbmt.addEventListener("click", submit);

function setMark(element){
   if (mark === 0){
      for (let i = 0; i < raw.children.length; i++) {
         raw.children[i].classList.remove('chosed');
         raw.children[i].classList.remove(style);
      }
      element.classList.add("chosed");
   }
   
}

function hoverMark(n){
   for (let i = 0; i < n; i++){
      if (!raw.children[i].classList.contains('chosed'))
         raw.children[i].classList.add(getStyle(n));
   }
}

function removeHover(n){
   for (let i = 0; i < n; i++){
      raw.children[i].classList.remove(getStyle(n));
   }
}

function getStyle(n){
   

   switch (n){
      case 1:
         style = 'red';
         break;
      case 2:
         style = 'orange';
         break;
      case 3:
         style = 'yellow';
         break;
      case 4:
         style = 'green';
         break;
      case 5:
         style = 'light_green';
         break;
   }

   return style;
}

function submit(){
   for (let i = 0; i < raw.children.length; i++) {
      if (raw.children[i].classList.contains('chosed')){
         mark = raw.children[i].textContent;
      }
   }

   if (mark === 0){
      console.log(0);
   } else {
      document.querySelector(".wrapper").innerHTML = `<div class="rating_result">
         <img src="./images/illustration-thank-you.svg" alt="" />
         <div class="text_field">You selected ` + mark + ` out of 5</div> 
         <h1 class="header">Thank you!</h1>
         <p>We appreciate you taking the time to
         give a rating. If you ever need more support, don’t hesitate to get in touch!</p>
         </div>`;
   }
}

