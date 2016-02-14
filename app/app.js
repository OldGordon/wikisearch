$("document").ready(function(){
	console.log("hi there");

	var send = document.querySelector('#go');//get buttom #go

	send.addEventListener('click', function(e){ //event waiting for click

       if ($(".resultSearch").length){
           $(".resultSearch").remove();
       }
        if($("#box").val() !== ""){
	   	var tema = $("#box").val();
	   	var url = "http://en.wikipedia.org/w/api.php?"
	   			+ "format=json&action=query&generator=search&gsrnamespace=0"
	   			+  "&gsrlimit=10&prop=pageimages|extracts&pilimit="
	   			+ "max&exintro&explaintext&exsentences=1&exlimit=max&gsrsearch="
	   			+ tema;
        getUrl(url);
        }else{
            alert("Insert your search in the box, please");
        }
	});

    var getUrl = function(url){

        $.getJSON(url, function(result){
            console.log(result);
	        var data = {};
	    	var _result = result.query.pages;

	   			for( var k in _result){
	   				if(_result.hasOwnProperty(k)){
	   					data.pageid = _result[k].pageid;
	   					data.title = _result[k].title;
	   					data.extract = _result[k].extract;

                            if (_result[k].thumbnail === undefined){
                                data.img = "thum.jpg";
                            }else {
                                data.img = _result[k].thumbnail.source;
                            }

                            drawResults(data);

	   				};
    			};
	    });
	};
    var drawResults = function(dt){
        var dataTitle = "<h2>" + dt.title + "</h2>";
        var dataImg = "<img class='thumbnail' src='" + dt.img + "'/>";
        var dataDiv = "<a href='https://en.wikipedia.org/?curid="
                       + dt.pageid + "'><div class='resultSearch'>"
                       + dataImg + dataTitle + "</br>"
                       + dt.extract + "</div></a>";
        $("#container").append(dataDiv);

   }

});
