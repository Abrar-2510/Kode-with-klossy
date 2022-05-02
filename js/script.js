$('button').on('click', function(){
    // $('button').removeClass('active_button');
    $(this).toggleClass('active_button');
});

//Home button active on page load
$(document).ready(function(){
    $('#Home').addClass('active_button');
});

var button = $('.submit-btn');
button.on('click', updateResult);

var questionCount = 0;
var resultScore = 0;

var katieBouman = 0;
var adaLovelace = 0;
var reshmaSaujani = 0;
var katherineJohnson = 0;

var q1a1 = document.getElementById("q1a1");
var q1a2 = document.getElementById("q1a2");
var q1a3 = document.getElementById("q1a3");
var q1a4 = document.getElementById("q1a4");

var q2a1 = document.getElementById("q2a1");
var q2a2 = document.getElementById("q2a2");
var q2a3 = document.getElementById("q2a3");
var q2a4 = document.getElementById("q2a4");

var q3a1 = document.getElementById("q3a1");
var q3a2 = document.getElementById("q3a2");
var q3a3 = document.getElementById("q3a3");
var q3a4 = document.getElementById("q3a4");


var q4a1 = document.getElementById("q4a1");
var q4a2 = document.getElementById("q4a2");
var q4a3 = document.getElementById("q4a3");
var q4a4 = document.getElementById("q4a4");

q1a1.addEventListener("click", katieBoumanResult);
q1a2.addEventListener("click", adaLovelaceResult);
q1a3.addEventListener("click", reshmaSaujaniResult);
q1a4.addEventListener("click", katherineJohnsonResult);

q2a1.addEventListener("click", katieBoumanResult);
q2a2.addEventListener("click", reshmaSaujaniResult);
q2a3.addEventListener("click", katherineJohnsonResult);
q2a4.addEventListener("click", adaLovelaceResult);

q3a1.addEventListener("click", katherineJohnsonResult);
q3a2.addEventListener("click", adaLovelaceResult);
q3a3.addEventListener("click", katieBoumanResult);
q3a4.addEventListener("click", reshmaSaujaniResult);

q4a1.addEventListener("click", adaLovelaceResult);
q4a2.addEventListener("click", katherineJohnsonResult);
q4a3.addEventListener("click", katieBoumanResult);
q4a4.addEventListener("click", reshmaSaujaniResult);


function katieBoumanResult() {
  katieBouman = katieBouman + 1;
  questionCount = questionCount + 1;
  // if (questionCount >= 4) {
  //   updateResult();
  // }
}

function adaLovelaceResult() {
  adaLovelace = adaLovelace + 1;
  questionCount = questionCount + 1;
  // if (questionCount >= 4) {
  //   updateResult();
  // }
}

function reshmaSaujaniResult() {
  reshmaSaujani = reshmaSaujani + 1;
  questionCount = questionCount + 1;
  // if (questionCount >= 4) {
  //   updateResult();

  // }
}

function katherineJohnsonResult() {
  katherineJohnson = katherineJohnson + 1;
  questionCount = questionCount + 1;
  // if (questionCount >= 4) {
  //   updateResult();
  // }
}



var result = document.getElementById("result");
var image = document.getElementById("image");

function updateResult() {
  if (reshmaSaujani >= 2) {
    result.innerHTML = "You should look into Reshma Saujani! <br> <br>  <img src='https://th.bing.com/th/id/Rad32298d92e837649e42abf893d9fb42?rik=0yQrFTn9YFLKkw&riu=http%3a%2f%2fignite.globalfundforwomen.org%2fsites%2fdefault%2ffiles%2fReshma-Saujani-Kinloch-6132-head_0_2.jpg&ehk=sp8VU1xJKJ17PYZ%2f3ZzIcdRn%2bztfjnjdWpkJZleQzo8%3d&risl=&pid=ImgRaw'width='400'> <br> <br> <button onclick=location=URL>Redo Quiz</button> "; 

  }
  else if (katieBouman >= 2) {
    result.innerHTML = "You should look into Katie Bouman! <br> <br>  <img src='https://th.bing.com/th/id/OIP.SUB2FXhxoZaAId41AAJ1mQHaJX?pid=ImgDet&rs=1' width='400'> <br> <br> <button onclick=location=URL>Redo Quiz</button>  ";
  }
  else if (katherineJohnson >= 2) {
    result.innerHTML = "You should look into Katherine Johnson! <br> <br>  <img src='https://th.bing.com/th/id/OIP.BegbjUlhggot3sN6FSk-7wHaHa?pid=ImgDet&rs=1'width='400'> <br> <br> <button onclick=location=URL>Redo Quiz</button> ";
  }
  else if (adaLovelace >= 2) {
    result.innerHTML = "You should look into Sabiha Gökçen! <br> <br>  <img src='https://i2.wp.com/rayhaber.com/wp-content/uploads/2020/05/sabiha-gokcen-kimdir.jpg?resize=678%2C381&ssl=1'> <br> <br> <button onclick=location=URL>Redo Quiz</button>  ";
  }


  else {
    result.innerHTML = "You should look into Dr Annie Marie Imafidon! <br> <br>  <img src='https://logicface.co.uk/wp-content/uploads/2020/10/Anne-Marie-Imafidon.jpg'width='400'> <br> <br> <button onclick=location=URL>Redo Quiz</button>  ";
  }

}