

function menuOne() {
    document.getElementById("menuOne").classList.toggle("show");
}


function menuTwo() {
    document.getElementById("menuTwo").classList.toggle("show");
}


function menuThree() {
    document.getElementById("menuThree").classList.toggle("show");
}

window.onclick = function(event) {
	if (!event.target.matches('.fa')) {

		var dropdowns = document.getElementsByClassName("dropdown-content");
		var i;
		for (i = 0; i < dropdowns.length; i++) {
			var openDropdown = dropdowns[i];
			if (openDropdown.classList.contains('show')) {
				openDropdown.classList.remove('show');
			}
		}
	}
	
	for(loopFour = 1; loopFour < 1000; loopFour+=1) {
		document.getElementById(loopFour).onclick = function() { 
			window.location = "#pageone";
		};
	}
	
}


