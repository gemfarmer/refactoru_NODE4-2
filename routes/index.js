
/*
 * GET home page.
 */

exports.index = function(req, res){
  res.render('index', { 
  	title: "Magellan's Voyage", 
  	next: "/location", 
  	blurb: "Magellan was an explorer!"
  });
};

exports.location = function(req, res){
	var data = [{ 
   	title: "Seville", 
   	next: "Canary Islands", 
   	blurb: "I hear a barber lives here." 
   },
   { 
  	title: "Canary Islands", 
  	next: "Cape Verde", 
  	blurb: "The canary islands have lots of birds."
  },
  { 
  	title: "Cape Verde", 
  	next: "Strait of Magellan", 
  	blurb: "Verde means green."
  },
  { 
  	title: "Strait of Magellan", 
  	next: "Guam", 
  	blurb: "It's named after some explorer guy."
  },
  { 
  	title: "Guam", 
  	next: "Phillipines", 
  	blurb: "Lots of places claim to be hotter than it is here."
  },
  { 
  	title: "Phillipines", 
  	next: "Magellan's Voyage", 
  	blurb: "Last stop."
  },
  { 
  	title: "Magellan's Voyage", 
  	next: "Seville", 
  	blurb: "Magellan was an explorer!"
  }];

	res.send("location", data)

};
