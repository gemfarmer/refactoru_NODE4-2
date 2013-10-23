
$(document).ready(function() { 
	var source = $("#search-results-template").html();
	var dataTemplate = Handlebars.compile(source);

	$location = $('.location')
	$repo = $('#repo')
	$button = $('#button')
	$location.attr("location","Seville")

	$repo.on("click", ".location", function(){
		
		//set button to this
		$location = $(this)
		$.get('/location', function(data){
			console.log("click!");

			var currentLocation = $location.attr("location")

			for (var i = 0; i < data.length; i++) {

				if(data[i]["title"]===currentLocation){	
					locationIndex = i;
				}
			};

			var output = data[locationIndex];

			$repo.html(dataTemplate(output));
			$('#loc').attr("location",output.next)
		});
	})
});