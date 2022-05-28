console.log('Page load!');

var raw = document.querySelector(".raw");
var mark = 0;

var card = document.querySelector(".rating_cart");

var st1 = document.querySelector("#star1");
st1.addEventListener("click", function(){ setMark(st1) });

var st2 = document.querySelector("#star2");
st2.addEventListener("click", function(){ setMark(st2) });

var st3 = document.querySelector("#star3");
st3.addEventListener("click", function(){ setMark(st3) });

var st4 = document.querySelector("#star4");
st4.addEventListener("click", function(){ setMark(st4) });

var st5 = document.querySelector("#star5");
st5.addEventListener("click", function(){ setMark(st5) });

var sbmt = document.querySelector(".submit");
sbmt.addEventListener("click", submit);

function setMark(element){
   if (mark === 0){
      for (let i = 0; i < raw.children.length; i++) {
         raw.children[i].classList.remove('chosed');
      }
      element.classList.add("chosed");
   }
   
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
      console.log(mark);
   }

   document.querySelector(".wrapper").innerHTML = `<div class="rating_result">
      <img src="./images/illustration-thank-you.svg" alt="" />
      <div class="text_field">You selected ` + mark + ` out of 5</div> 
      <h1 class="header">Thank you!</h1>
      <p>We appreciate you taking the time to
      give a rating. If you ever need more support, don’t hesitate to get in touch!</p>
      </div>`;
}

