var num;
$(document).ready(function(){
     looper( setSize(Prompt()) );    
    $( "div" ).hover(function() {
      $( this ).addClass( "active" );
      });
});
function Prompt() {
    num = prompt("give me a number", "2");
     return(num);
   }

function setSize(num){
    $( "#container" ).height(num*100);
     $( "#container" ).width(num*100);
    return (num);
}

function looper(containerSize){

for (var counter = 0; counter < num*num; counter++) {
	  writeDiv();
}
}
function writeDiv(){
$("<div></div>").appendTo("#container");
}
