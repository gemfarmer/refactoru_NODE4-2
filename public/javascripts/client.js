
$(document).ready(function() { 
	var source = $("#search-results-template").html();
	var dataTemplate = Handlebars.compile(source);

	$location = $('.location')
	$title = $('#title')
	$blurb = $('#blurb')
	$location.attr("location","Seville")
	
	$location.on("click", function(){
		$.get('/location', function(data){
		console.log("click!");

		
		
		var currentLocation = $location.attr("location")
		var locationIndex = 6
		// console.log("currentLocation", currentLocation)
		for (var i = 0; i < data.length; i++) {
			// console.log("object",data[i])
			// console.log("title",data[i]["title"])
			if(data[i]["title"]===currentLocation){
				
				locationToAdd = data[i].next
				locationIndex = i
				
			}
		};
		// console.log("dfgs",currentLocObj)
		// console.log(locationToAdd)
		// console.log(locationIndex)

		// console.log("locationIndex",locationIndex)
		// console.log(typeof(classToAdd))
		// console.log(data[locationIndex-1])
		$location.attr("location",locationToAdd)
		if(locationIndex===0){
			$title.html(data[0].title)
			$blurb.html(data[0].blurb)
		}
		$title.html(data[locationIndex].title)
		$blurb.html(data[locationIndex].blurb)

	});

	})
	
});