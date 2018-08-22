

function show() {
    var message = document.getElementById("myMessage");
    var input = document.getElementById("myInput").value;
    if( input === '' ){
        alert('Please put some text');
      } else { message.innerHTML = input; 
    };
}

function reset () {
    document.getElementById("myMessage").innerHTML = "";
    document.getElementById('myInput').value = "";
  }


/*var input, message;
input = document.getElementById("myInput").value;
message = document.getElementById("myMessage");


function show() {
    input = document.getElementById("myInput").value;
    message = document.getElementById("myMessage");
    if( input === '' ){
        alert('Please put some text');
      } else { message.innerHTML = input; 
    };*/





    