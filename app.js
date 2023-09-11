var iphone_background = document.getElementById('iphone');
var btn = document.getElementById('button-4');
var line = document.getElementById('line');
var time = document.getElementById('time');
var cursor = document.getElementById('cursor');
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
document.addEventListener("mousemove", function(e) {
	var x = e.clientX - 10;
	var y = e.clientY - 10;
	cursor.style.left = x + "px";
	cursor.style.top = y + "px";
});
line.addEventListener("mouseenter", function() {
	iphone_background.style.background = "url('n.jpg') center";
	iphone_background.style.backgroundSize = "cover";
	time.style.display = "none";
	line.style.display = "none";
})