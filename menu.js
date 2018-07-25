

function menuOne() {
    document.getElementById("menuOne").classList.toggle("show");
}


function menuTwo() {
    document.getElementById("menuTwo").classList.toggle("show");
}


function menuThree() {
    document.getElementById("menuThree").classList.toggle("show");
}


function menuFour() {
    document.getElementById("menuFour").classList.toggle("show");
}


function settingFour() {
    document.getElementById("settingFour").classList.toggle("show");
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
	
}


