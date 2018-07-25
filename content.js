// JavaScript Document

alert("Watch Something!");
console.log("Watch something."); 
var vid = document.getElementsByTagName("video");
	if(vid.length>0) {
    	for (var i=0; i<vid.length; i++){
			vid[i].addEventListener("onplay", function startAlert() {
				"use strict";
				console.log(vid.currentTime); //Nothing happens here
			});
			
        	vid[i].addEventListener("playing", function vidAlert()
				{	
					"use strict";
					console.log("The video is playing");
	
				});
									
			vid[i].addEventListener("pause", function pauseAlert()
				{
					"use strict";
					console.log("The video is paused");
				
				}
			
			);
			
			vid[i].addEventListener("seeking", function seekAlert()
				{
					"use strict";
					console.log("The video is seeking");
					
				}
			
			);
			
			vid[i].addEventListener("ended", function endAlert()
				{
					"use strict";
					alert("The video is over");
					console.log(vid.currentTime); //This obviously prints undefined
					
				}
			
			);
			
			
		}
	
	}
	
//var points=(j*0.8)/60;	 

/*If the maximum number of points/month is 600 (based on the prototype), then evenly distributing that between 30 days is 20 points a day, and if the average TV show is ~25-30 minutes (not counting hour long shows) every minute should be 0.8 points if you watch an episode a day or just watch trailers/youtube.*/


		  

