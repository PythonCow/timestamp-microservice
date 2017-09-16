var express = require("express");

var app = express();

function numifyIfPossible(str){
  return isNaN(str)?str:parseInt(str);
}

app.get("/:date", function(request, response){
  var date = new Date(numifyIfPossible(request.params.date));
  var jsonToSend = {
    unix: date.getTime(),
    natural: date.toDateString()
  };
  response.send(jsonToSend);
});

app.listen(8000, function(err){
  if(err) throw err;
});