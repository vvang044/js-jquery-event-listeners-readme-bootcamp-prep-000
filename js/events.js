//define functions here
function getIt(){
  $('p').on('click', function(){
    alert("Hey!");
  })
}

function frameIt(){
  $('img').on('load', function(){
    $('img').addClass('tasty');
  })
}

function pressIt(){
  $('form').on('keydown', function(key){
    if(key.which === 71){
      alter("You pressed G")
    }
  })
}

$(document).ready(function(){

// call functions here
getIt();
frameIt();
pressIt();

});
