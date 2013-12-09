/*function timedCount()
{

 $('#tweets').tweets({
           tweets:4,
           username: "mirnayacout"
  });
setTimeout("timedCount()",500);
}

timedCount();*/
var i=0;

function timedCount()
{
i=i+1;
postMessage(i);
setTimeout("timedCount()",500);
}

timedCount();