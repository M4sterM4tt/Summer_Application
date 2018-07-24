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
var object;
var objectTwo;
var collection;




window.onload = function() {
	window.location = "#pagetwo";
	
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
	
	// Setting Switches.
	collection = true;
	empty = true;
	
	
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
	targetCountdown = targetDate.toString("MMMM dd yyyy") + " " + targetTime.toString("HH:mm");
	targetDisplay = targetTime.toString("HH:mm") + " " + targetDate.toString("dddd MMMM yyyy") + " ";
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
			console.log(object[loop])
		}
		
	}
		
		
	window.location = "#pagetwo";
	Countdown();
	
}




function startCountdown() {
	
	console.log("startCountdown");
	
	// Get todays date and time.
	now = new Date().getTime();
	
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
				
				nameStored[loopTwo] = document.createElement("div");
				nameStored[loopTwo].className += " bottom-text";
				nameContent[loopTwo] = document.createTextNode(object[loopTwo].name + ":   " + object[loopTwo].target);
				nameStored[loopTwo].appendChild(nameContent[loopTwo]);
				document.getElementById("stored").appendChild(nameStored[loopTwo]);

				dateStored[loopTwo] = document.createElement("button");
				dateStored[loopTwo].className += " bottom-button";
				dateContent[loopTwo] = document.createTextNode("EXPIRED");
				dateStored[loopTwo].appendChild(dateContent[loopTwo]);
				document.getElementById("stored").appendChild(dateStored[loopTwo]);
				
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
				
				nameStored[loopTwo] = document.createElement("div");
				nameStored[loopTwo].className = "bottom-text";
				nameContent[loopTwo] = document.createTextNode(objectTwo[loopTwo].name + ":   " + objectTwo[loopTwo].target);
				nameStored[loopTwo].appendChild(nameContent[loopTwo]);
				document.getElementById(loopTwo).appendChild(nameStored[loopTwo]);
				
				imageStored[loopTwo] = document.createElement("img");
				imageStored[loopTwo].className = "bottom-background";
				imageStored[loopTwo].setAttribute('src', 'images/1_Croatia.jpg');
				document.getElementById(loopTwo).appendChild(imageStored[loopTwo]);
				
			}
				
		}
			
	}			
	
}




function Countdown() {
	
    start = setInterval(function() {
	console.log("Countdown");	
		
		// Get todays date and time.
		now = new Date().getTime();

		
		// Clears HTML Element.
		document.getElementById("stored").innerHTML = "";
		
		// Creates a loop.
		for(loopThree = 1; loopThree < 1000; loopThree+=1) {
			
			text = localStorage.getItem(loopThree);
			objectTwo[loopThree] = JSON.parse(text);	
			
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
				dateStored[loopThree].className += " bottom-button";
				dateContent[loopThree] = document.createTextNode(daysStored[loopThree] + " Days");
				dateStored[loopThree].appendChild(dateContent[loopThree]);
				document.getElementById("stored").appendChild(dateStored[loopThree]);
				
				nameStored[loopThree] = document.createElement("div");
				nameStored[loopThree].className += " bottom-text";
				nameContent[loopThree] = document.createTextNode("EXPIRED");
				nameStored[loopThree].appendChild(nameContent[loopThree]);
				document.getElementById("stored").appendChild(nameStored[loopThree]);
				
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
				dateContent[loopThree] = document.createTextNode(daysStored[loopThree] + " Days");
				dateStored[loopThree].appendChild(dateContent[loopThree]);
				document.getElementById(loopThree).appendChild(dateStored[loopThree]);				
				
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
				
		}	
		
	}, 1000);

}

