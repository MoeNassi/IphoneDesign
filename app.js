var iphone_background = document.getElementById('iphone');
var btn = document.getElementById('button-4');
var line = document.getElementById('line');
var time = document.getElementById('time');
let index = 0;

btn.addEventListener("click", function() {
	index++;
	if (index % 2 == 0) {
		iphone_background.style.transition = ".5s";
		iphone_background.style.background = "rgba(0, 0, 0, 0.722)";
		line.style.display = "none";
		time.style.display = "none";
	}
	else {
		line.style.display = "block";
		time.style.display = "block";
		iphone_background.style.transition = ".5s";
		iphone_background.style.opacity = "1";
		iphone_background.style.background = "url('iphone.jpeg') center";
		iphone_background.style.backgroundSize = "cover"
	}
});