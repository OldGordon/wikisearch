$("document").ready(function(){
	console.log("hi there");

	var send = document.querySelector('#go');//get buttom #go
	send.addEventListener('click', function(e){ //event waiting for click
        var drawResults = function(obj){
    	//aquí creamos los divs que contendran los wiki articles
    	//pensar en borrar los anteriores antes de poner los nuevos
    	//divs
    }
	   	var tema = $("#box").val();
	   	var url = "http://en.wikipedia.org/w/api.php?"
	   			+ "format=json&action=query&generator=search&gsrnamespace=0"
	   			+  "&gsrlimit=3&prop=pageimages|extracts&pilimit="
	   			+ "max&exintro&explaintext&exsentences=1&exlimit=max&gsrsearch="
	   			+ tema;

	    $.get(url, function(result){

	    	//console.log(result);
	        var data = {};
	    	var _result = result.query.pages;
	   			for( var k in _result){
	   				if(_result.hasOwnProperty(k)){
	   					//console.log(_result[k].title);
	   					data.title = _result[k].title;
	   					data.extract = _result[k].extract;
	   					if (_result[k].thumbnail === undefined){
	   						data.img = "";
	   					}else {
	   						data.img = _result[k].thumbnail.source;
	   					}

	   				    console.log(data.img);
	   				}
    			}
	    	drawResults(data);

	    });

	});

    var drawResults = function(dt){

  }

});
