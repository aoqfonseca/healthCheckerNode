var request = require('request');

var options = { 
  url: "http://www.google.com"
};

esta_funcionando = function(error, response, boby){
  return (!error && response.statusCode == 200)
}

imprime_log = function(error, response, body){  
  if(esta_funcionando(error, response, body)){
    console.log("Está funcionando tudinho");  
  }  
}

request.get(options, imprime_log);



