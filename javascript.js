// Countdown Code


// Date Variables
var now;
var formatNow;


// Create Countdown Variables.
var name;
var targetTime;
var targetDate;
var targetCountdown;
var date;


// Time Variables.
var distance;
var days;
var hours;
var minutes;
var seconds;
var distanceStored;
var daysStored;
var hoursStored;
var minutesStored;
var secondsStored;
var nameStored;
var dateStored;
var divStored;
var imageStored;
var nameContent;
var dateContent;

// Storage Variables.
var detailsNow;
var countdownStorage;
var countdownJSON;
var loop;
var loopTwo;
var loopThree;
var loopFour;
var loopFive;
var object;
var objectTwo;
var upcoming;
var upcomingID;
var used;
var choice;


window.onload = function() {
	window.location = "#pageone";
	choice = 0;
	
	// Format Time.
	now = new Date();
	formatNow = now.toString("HH:mm");
	document.getElementById("timeInput").value = formatNow;
	formatNow = now.toString("yyyy-MM-dd");
	document.getElementById("dateInput").value = formatNow;
	
	
	// Setting Arrays.
	object = [0];
	objectTwo = [0];
	countdownStorage = [0];
	distanceStored = [0];
	daysStored = [0];
	hoursStored = [0];
	minutesStored = [0];
	secondsStored = [0];
	nameStored = [0];
	dateStored = [0];
	nameContent = [0];
	dateContent = [0];
	imageStored = [0];
	divStored = [0];
	
	
	// Fill the Arrays.
	for(draw = 0; draw < 999; draw+=1) {
		
		object.push(0);
		objectTwo.push(0);
		countdownStorage.push(0);
		distanceStored.push(0);
		daysStored.push(0);
		hoursStored.push(0);
		minutesStored.push(0);
		secondsStored.push(0);
		nameStored.push(0);
		dateStored.push(0);
		nameContent.push(0);
		dateContent.push(0);
		imageStored.push(0);
		divStored.push(0);
		
	}
	
	
	// Creating Events
	document.addEventListener("deviceready", startCountdown, false);	
	Countdown();
	
}




function Process() {
	
	console.log("Process");
	
	name = nameInput.value;
	description = descriptionInput.value;
	targetTime = timeInput.value;
	targetDate = new Date(dateInput.value);
	targetCountdown = targetDate.toString("MM dd yyyy") + " " + targetTime.toString("HH:mm");
	targetDisplay = targetTime.toString("HH:mm") + " " + targetDate.toString("dddd MM MMMM yyyy") + " ";
	date = new Date(targetCountdown).getTime();
	
	found = false;
	for	(loop = 1; loop < countdownStorage.length + 1; loop+=1) {
	
		if (loop != countdownStorage[loop] && found == false) {	
			
			countdownStorage[loop] = loop;
			found = { "id":countdownStorage[loop], "name":name, "description":description, "target":targetDisplay, "date":date }
			countdownJSON = JSON.stringify(found);
			localStorage.setItem(loop, countdownJSON);
			text = localStorage.getItem(loop);
			object[loop] = JSON.parse(text);
			console.log(object[loop]);
			
		}
		
	}
		
		
	window.location = "#pagetwo";
	Countdown();
	
}


// ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

// ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

// startCountdown()

// ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

// ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------


function startCountdown() {
	
	console.log("startCountdown");
	
	// Get todays date and time.
	now = new Date().getTime();
	upcoming = [0];
	upcomingID = [0];
	for(draw = 1; draw < 6; draw+=1) {
		upcoming.push(0);
		upcomingID.push(0);			
	}
	
	
	for	(loopTwo = 1; loopTwo < 1000; loopTwo+=1) {
				
		text = localStorage.getItem(loopTwo);
		object[loopTwo] = JSON.parse(text);	
			
		if (loopTwo == object[loopTwo].id) {
			
			countdownStorage[loopTwo] = loopTwo;
			distanceStored[loopTwo] = object[loopTwo].date - now;
			daysStored[loopTwo] = Math.floor(distanceStored[loopTwo] / (1000 * 60 * 60 * 24));
			hoursStored[loopTwo] = Math.floor((distanceStored[loopTwo] % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
			minutesStored[loopTwo] = Math.floor((distanceStored[loopTwo] % (1000 * 60 * 60)) / (1000 * 60));
			secondsStored[loopTwo] = Math.floor((distanceStored[loopTwo] % (1000 * 60)) / 1000);
			
			// Output the Result.
			if (distanceStored[loopTwo] < 0) {
				// When the Countdown is Over.
				
				divStored[loopTwo] = document.createElement("div");
				divStored[loopTwo].className = "link";
				divStored[loopTwo].id = loopTwo;
				document.getElementById("stored").appendChild(divStored[loopTwo]);

				dateStored[loopTwo] = document.createElement("button");
				dateStored[loopTwo].className = " bottom-button";
				dateContent[loopTwo] = document.createTextNode("EXPIRED");
				dateStored[loopTwo].appendChild(dateContent[loopTwo]);
				document.getElementById(loopTwo).appendChild(dateStored[loopTwo]);
				document.getElementById(loopTwo).onclick = function() {
					choice = loopTwo;
					Unique();
				};		
				
				nameStored[loopTwo] = document.createElement("div");
				nameStored[loopTwo].className = " bottom-text";
				nameContent[loopTwo] = document.createTextNode(object[loopTwo].name + ":   " + object[loopTwo].target);
				nameStored[loopTwo].appendChild(nameContent[loopTwo]);
				document.getElementById(loopTwo).appendChild(nameStored[loopTwo]);
				
				imageStored[loopTwo] = document.createElement("img");
				imageStored[loopTwo].className = "bottom-background";
				imageStored[loopTwo].setAttribute('src', 'images/1_Croatia.jpg');
				document.getElementById(loopTwo).appendChild(imageStored[loopTwo]);
				
				localStorage.removeItem(loopTwo);
			}
			else {
				// Countdown is still going.
				
				divStored[loopTwo] = document.createElement("div");
				divStored[loopTwo].className = "link";
				divStored[loopTwo].id = loopTwo;
				document.getElementById("stored").appendChild(divStored[loopTwo]);
				
				dateStored[loopTwo] = document.createElement("button");
				dateStored[loopTwo].className = "bottom-button";
				dateContent[loopTwo] = document.createTextNode(daysStored[loopTwo] + " Days");
				dateStored[loopTwo].appendChild(dateContent[loopTwo]);
				document.getElementById(loopTwo).appendChild(dateStored[loopTwo]);
				document.getElementById(loopTwo).onclick = function() {
					choice = loopTwo;
					Unique();
				};					
				
				nameStored[loopTwo] = document.createElement("div");
				nameStored[loopTwo].className = "bottom-text";
				nameContent[loopTwo] = document.createTextNode(object[loopTwo].name + ":   " + object[loopTwo].target);
				nameStored[loopTwo].appendChild(nameContent[loopTwo]);
				document.getElementById(loopTwo).appendChild(nameStored[loopTwo]);
				
				imageStored[loopTwo] = document.createElement("img");
				imageStored[loopTwo].className = "bottom-background";
				imageStored[loopTwo].setAttribute('src', 'images/1_Croatia.jpg');
				document.getElementById(loopTwo).appendChild(imageStored[loopTwo]);
				
			}
			
			used = 0;
			for(draw = 1; draw < 6; draw+=1) {
					
				if ((upcoming[draw] == 0 || upcoming[draw] > object[loopTwo].date) && used != 1) {
						
					for(drawTwo = 5; drawTwo > draw; drawTwo-=1) {
							
						upcoming[drawTwo] = upcoming[drawTwo - 1];
						upcomingID[drawTwo] = upcomingID[drawTwo - 1];
						
					}
					upcoming[draw] = object[loopTwo].date;
					upcomingID[draw] = loopThree;
					used = 1;
						
				}
					
			}
				
		}
			
	}

	for(draw = 1; draw < 6; draw+=1) {
		if (upcoming[draw] != 0) {
			if (draw == 1) {
					
				document.getElementById("event").innerHTML = object[upcomingID[draw]].name + ":   " + object[upcomingID[draw]].target;
				document.getElementById("countdown").innerHTML = daysStored[upcomingID[draw]] + " days, " + hoursStored[upcomingID[draw]] + " hours, " + minutesStored[upcomingID[draw]] + " minutes, " + secondsStored[upcomingID[draw]] + " seconds " + " Until my Event!!!";
				document.getElementById("description").innerHTML = object[upcomingID[draw]].description;
					
			}
			else {
					
				if (distanceStored[upcomingID[draw]] < 0) {
					// When the Countdown is Over.
					console.log(upcomingID[draw]);
					
					divStored[upcomingID[draw]] = document.createElement("div");
					divStored[upcomingID[draw]].className = "link";
					divStored[upcomingID[draw]].id = Number(1000 + upcomingID[draw]);
					document.getElementById("upcoming").appendChild(divStored[upcomingID[draw]]);
					
					dateStored[upcomingID[draw]] = document.createElement("button");
					dateStored[upcomingID[draw]].className = "bottom-button";
					dateStored[upcomingID[draw]].id = upcomingID[draw] + 2000;
					dateContent[upcomingID[draw]] = document.createTextNode("EXPIRED");
					dateStored[upcomingID[draw]].appendChild(dateContent[upcomingID[draw]]);
					document.getElementById(Number(1000 + upcomingID[draw])).appendChild(dateStored[upcomingID[draw]]);
					document.getElementById(upcomingID[draw] + 2000).onclick = function() {
						Unique(this.id);
					};
					
					nameStored[upcomingID[draw]] = document.createElement("div");
					nameStored[upcomingID[draw]].className = "bottom-text";
					nameContent[upcomingID[draw]] = document.createTextNode(object[upcomingID[draw]].name + ":   " + object[upcomingID[draw]].target);
					nameStored[upcomingID[draw]].appendChild(nameContent[upcomingID[draw]]);
					document.getElementById(Number(1000 + upcomingID[draw])).appendChild(nameStored[upcomingID[draw]]);
						
					imageStored[upcomingID[draw]] = document.createElement("img");
					imageStored[upcomingID[draw]].className = "bottom-background";
					imageStored[upcomingID[draw]].setAttribute('src', 'images/1_Croatia.jpg');
					document.getElementById(Number(1000 + upcomingID[draw])).appendChild(imageStored[upcomingID[draw]]);
					
					localStorage.removeItem(upcomingID[draw]);
				}
				else {
					// Countdown is still going.
					console.log(upcomingID[draw]);
						
					divStored[upcomingID[draw]] = document.createElement("div");
					divStored[upcomingID[draw]].className = "link";
					divStored[upcomingID[draw]].id = Number(1000 + upcomingID[draw]);
					document.getElementById("upcoming").appendChild(divStored[upcomingID[draw]]);
					
					dateStored[upcomingID[draw]] = document.createElement("button");
					dateStored[upcomingID[draw]].className = "bottom-button";
					dateStored[upcomingID[draw]].id = upcomingID[draw] + 2000;
					dateContent[upcomingID[draw]] = document.createTextNode(daysStored[upcomingID[draw]] + " Days");
					dateStored[upcomingID[draw]].appendChild(dateContent[upcomingID[draw]]);
					document.getElementById(Number(1000 + upcomingID[draw])).appendChild(dateStored[upcomingID[draw]]);					
					document.getElementById(upcomingID[draw] + 2000).onclick = function() {
						Unique(this.id);
					};
					
					nameStored[upcomingID[draw]] = document.createElement("div");
					nameStored[upcomingID[draw]].className = "bottom-text";
					nameContent[upcomingID[draw]] = document.createTextNode(object[upcomingID[draw]].name + ":   " + object[upcomingID[draw]].target);
					nameStored[upcomingID[draw]].appendChild(nameContent[upcomingID[draw]]);
					document.getElementById(Number(1000 + upcomingID[draw])).appendChild(nameStored[upcomingID[draw]]);
				
					imageStored[upcomingID[draw]] = document.createElement("img");
					imageStored[upcomingID[draw]].className = "bottom-background";
					imageStored[upcomingID[draw]].setAttribute('src', 'images/1_Croatia.jpg');
					document.getElementById(Number(1000 + upcomingID[draw])).appendChild(imageStored[upcomingID[draw]]);	
				}
			}
		}
	}
	
}


// ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

// ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

// Countdown()

// ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

// ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------


function Countdown() {
	
    start = setInterval(function() {
		console.log("Countdown");	
		
		
		// Get todays date and time.
		now = new Date().getTime();
		
		upcoming = [0];
		upcomingID = [0];
		for(draw = 1; draw < 6; draw+=1) {
			upcoming.push(0);
			upcomingID.push(0);			
		}
		
		
		// Clears HTML Element.
		document.getElementById("stored").innerHTML = " ";
		document.getElementById("upcoming").innerHTML = " ";
		document.getElementById("event").innerHTML = " ";
		document.getElementById("countdown").innerHTML = " ";
		document.getElementById("description").innerHTML = " ";
					
		// Creates a loop.
		for(loopThree = 1; loopThree < 1000; loopThree+=1) {
			
			text = localStorage.getItem(loopThree);
			objectTwo[loopThree] = JSON.parse(text);	
			
			if (objectTwo[loopThree] != 0 && objectTwo[loopThree] != null) {
			
				// Get todays date and time.
				distanceStored[loopThree] = objectTwo[loopThree].date - now;
					
				// Time calculations for days, hours, minutes and seconds.
				daysStored[loopThree] = Math.floor(distanceStored[loopThree] / (1000 * 60 * 60 * 24));
				hoursStored[loopThree] = Math.floor((distanceStored[loopThree] % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
				minutesStored[loopThree] = Math.floor((distanceStored[loopThree] % (1000 * 60 * 60)) / (1000 * 60));
				secondsStored[loopThree] = Math.floor((distanceStored[loopThree] % (1000 * 60)) / 1000);
					
				// Output the Result.
				if (distanceStored[loopThree] < 0) {
					// When the Countdown is Over.
					
					divStored[loopThree] = document.createElement("div");
					divStored[loopThree].className = "link";
					divStored[loopThree].id = loopThree;
					document.getElementById("stored").appendChild(divStored[loopThree]);
					
					dateStored[loopThree] = document.createElement("button");
					dateStored[loopThree].className = "bottom-button";
					dateStored[loopThree].id = loopThree + 2000;
					dateContent[loopThree] = document.createTextNode("EXPIRED");
					dateStored[loopThree].appendChild(dateContent[loopThree]);
					document.getElementById(loopThree).appendChild(dateStored[loopThree]);
					document.getElementById(loopThree + 2000).onclick = function() {
						Unique(this.id);
					};
					
					nameStored[loopThree] = document.createElement("div");
					nameStored[loopThree].className = "bottom-text";
					nameContent[loopThree] = document.createTextNode(objectTwo[loopThree].name + ":   " + objectTwo[loopThree].target);
					nameStored[loopThree].appendChild(nameContent[loopThree]);
					document.getElementById(loopThree).appendChild(nameStored[loopThree]);
					
					imageStored[loopThree] = document.createElement("img");
					imageStored[loopThree].className = "bottom-background";
					imageStored[loopThree].setAttribute('src', 'images/1_Croatia.jpg');
					document.getElementById(loopThree).appendChild(imageStored[loopThree]);
					
					localStorage.removeItem(loopThree);
				}
				else {
					// Countdown is still going.

					divStored[loopThree] = document.createElement("div");
					divStored[loopThree].className = "link";
					divStored[loopThree].id = loopThree;
					document.getElementById("stored").appendChild(divStored[loopThree]);
					
					dateStored[loopThree] = document.createElement("button");
					dateStored[loopThree].className = "bottom-button";
					dateStored[loopThree].id = loopThree + 2000;
					dateContent[loopThree] = document.createTextNode(daysStored[loopThree] + " Days");
					dateStored[loopThree].appendChild(dateContent[loopThree]);
					document.getElementById(loopThree).appendChild(dateStored[loopThree]);				
					document.getElementById(loopThree + 2000).onclick = function() {
						Unique(this.id);
					};
					
					nameStored[loopThree] = document.createElement("div");
					nameStored[loopThree].className = "bottom-text";
					nameContent[loopThree] = document.createTextNode(objectTwo[loopThree].name + ":   " + objectTwo[loopThree].target);
					nameStored[loopThree].appendChild(nameContent[loopThree]);
					document.getElementById(loopThree).appendChild(nameStored[loopThree]);
					
					imageStored[loopThree] = document.createElement("img");
					imageStored[loopThree].className = "bottom-background";
					imageStored[loopThree].setAttribute('src', 'images/1_Croatia.jpg');
					document.getElementById(loopThree).appendChild(imageStored[loopThree]);
						
				}
				
				used = 0;
				for(draw = 1; draw < 6; draw+=1) {
					
					if ((upcoming[draw] == 0 || upcoming[draw] > objectTwo[loopThree].date) && used != 1) {
						
						for(drawTwo = 5; drawTwo > draw; drawTwo-=1) {
							
							upcoming[drawTwo] = upcoming[drawTwo - 1];
							upcomingID[drawTwo] = upcomingID[drawTwo - 1];
						
						}
						upcoming[draw] = objectTwo[loopThree].date;
						upcomingID[draw] = loopThree;
						used = 1;
						
					}
					
				}
				
			}
			
		}
		
		
		for(draw = 1; draw < 6; draw+=1) {
			if (upcoming[draw] != 0) {
				if (draw == 1) {
					
					document.getElementById("event").innerHTML = objectTwo[upcomingID[draw]].name + ":   " + objectTwo[upcomingID[draw]].target;
					document.getElementById("countdown").innerHTML = daysStored[upcomingID[draw]] + " days, " + hoursStored[upcomingID[draw]] + " hours, " + minutesStored[upcomingID[draw]] + " minutes, " + secondsStored[upcomingID[draw]] + " seconds " + " Until my Event!!!";
					document.getElementById("description").innerHTML = objectTwo[upcomingID[draw]].description;
					
				}
				else {
					
					if (distanceStored[upcomingID[draw]] < 0) {
						// When the Countdown is Over.
						
						divStored[upcomingID[draw]] = document.createElement("div");
						divStored[upcomingID[draw]].className = "link";
						divStored[upcomingID[draw]].id = Number(1000 + upcomingID[draw]);
						document.getElementById("upcoming").appendChild(divStored[upcomingID[draw]]);
						
						dateStored[upcomingID[draw]] = document.createElement("button");
						dateStored[upcomingID[draw]].className = "bottom-button";
						dateStored[upcomingID[draw]].id = upcomingID[draw] + 2000;
						dateContent[upcomingID[draw]] = document.createTextNode("EXPIRED");
						dateStored[upcomingID[draw]].appendChild(dateContent[upcomingID[draw]]);
						document.getElementById(Number(1000 + upcomingID[draw])).appendChild(dateStored[upcomingID[draw]]);
						document.getElementById(upcomingID[draw] + 2000).onclick = function() {
							Unique(this.id);
						};
						
						nameStored[upcomingID[draw]] = document.createElement("div");
						nameStored[upcomingID[draw]].className = "bottom-text";
						nameContent[upcomingID[draw]] = document.createTextNode(objectTwo[upcomingID[draw]].name + ":   " + objectTwo[upcomingID[draw]].target);
						nameStored[upcomingID[draw]].appendChild(nameContent[upcomingID[draw]]);
						document.getElementById(Number(1000 + upcomingID[draw])).appendChild(nameStored[upcomingID[draw]]);
						
						imageStored[upcomingID[draw]] = document.createElement("img");
						imageStored[upcomingID[draw]].className = "bottom-background";
						imageStored[upcomingID[draw]].setAttribute('src', 'images/1_Croatia.jpg');
						document.getElementById(Number(1000 + upcomingID[draw])).appendChild(imageStored[upcomingID[draw]]);
						
						localStorage.removeItem(upcomingID[draw]);
					}
					else {
						// Countdown is still going.
						console.log(upcomingID[draw]);
						
						divStored[upcomingID[draw]] = document.createElement("div");
						divStored[upcomingID[draw]].className = "link";
						divStored[upcomingID[draw]].id = Number(1000 + upcomingID[draw]);
						document.getElementById("upcoming").appendChild(divStored[upcomingID[draw]]);
						
						dateStored[upcomingID[draw]] = document.createElement("button");
						dateStored[upcomingID[draw]].className = "bottom-button";
						dateStored[upcomingID[draw]].id = upcomingID[draw] + 2000;
						dateContent[upcomingID[draw]] = document.createTextNode(daysStored[upcomingID[draw]] + " Days");
						dateStored[upcomingID[draw]].appendChild(dateContent[upcomingID[draw]]);
						document.getElementById(Number(1000 + upcomingID[draw])).appendChild(dateStored[upcomingID[draw]]);						
						document.getElementById(upcomingID[draw] + 2000).onclick = function() {
							Unique(this.id);
						};
						
						nameStored[upcomingID[draw]] = document.createElement("div");
						nameStored[upcomingID[draw]].className = "bottom-text";
						nameContent[upcomingID[draw]] = document.createTextNode(objectTwo[upcomingID[draw]].name + ":   " + objectTwo[upcomingID[draw]].target);
						nameStored[upcomingID[draw]].appendChild(nameContent[upcomingID[draw]]);
						document.getElementById(Number(1000 + upcomingID[draw])).appendChild(nameStored[upcomingID[draw]]);
						
						imageStored[upcomingID[draw]] = document.createElement("img");
						imageStored[upcomingID[draw]].className = "bottom-background";
						imageStored[upcomingID[draw]].setAttribute('src', 'images/1_Croatia.jpg');
						document.getElementById(Number(1000 + upcomingID[draw])).appendChild(imageStored[upcomingID[draw]]);	
					}
				}
			}
		}
		
	choice	
	}, 1000);

}


// ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

// ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

// Unique()

// ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

// ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------


function Unique(clicked_id) {
	window.location = "#pagefour";
	console.log("Unique");
	choice = Number(clicked_id - 2000)
	
	startTwo = setInterval(function() {
		
		if (objectTwo[choice] != 0 && objectTwo[choice] != null) {
			
			document.getElementById("eventUnique").innerHTML = objectTwo[choice].name + ":   " + objectTwo[choice].target;
			document.getElementById("countdownUnique").innerHTML = daysStored[choice] + " days, " + hoursStored[choice] + " hours, " + minutesStored[choice] + " minutes, " + secondsStored[choice] + " seconds Until my Event!!!";
			document.getElementById("descriptionUnique").innerHTML = objectTwo[choice].description;
			
		}
		
	}, 1000);
	
}