
var message = document.getElementById("myMessage");
var input = document.getElementById("myInput");
function show() {
    
    if( input.value === '' ){
        alert('Please put some text');
      } else { message.innerHTML = input.value; 
    };
}

function reset () {
    message.innerHTML = "";
    input.value = "";
  }






    