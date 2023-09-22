var iphone_background = document.getElementById('iphone');
var btn = document.getElementById('button-4');
var line = document.getElementById('line');
var time = document.getElementById('time');
var cursor = document.getElementById('cursor');
var date = document.getElementById('date');
var lineup = document.getElementById('line_up');
var btn_1 = document.getElementById('button-1');
var btn_2 = document.getElementById('button-2');
var btn_3 = document.getElementById('button-3');
var baff = document.getElementById('baff');

let index = 0;

var orange = document.getElementById('circle-1');
var white = document.getElementById('circle-2');
var gray = document.getElementById('circle-3');
var red = document.getElementById('circle-4');

orange.addEventListener("click", function() {
	iphone_background.style.border = "3px solid rgb(255, 136, 0)";
	btn.style.background = "rgb(255, 136, 0, 0.5)";
	btn_1.style.background = "rgb(255, 136, 0, 0.5)";
	btn_2.style.background = "rgb(255, 136, 0, 0.5)";
	btn_3.style.background = "rgb(255, 136, 0, 0.5)";
	lineup.style.background = "rgb(255, 136, 0)";
	baff.style.background = "white";
	orange.style.scale = "1.2";
	gray.style.scale = "1";
	red.style.scale = "1";
	white.style.scale = "1";
});
white.addEventListener("click", function() {
	iphone_background.style.border = "3px solid #ffffff";
	btn.style.backgroundColor = "rgb(255, 255, 255, 0.5)";
	btn_1.style.backgroundColor = "rgb(255, 255, 255, 0.5)";
	btn_2.style.backgroundColor = "rgb(255, 255, 255, 0.5)";
	btn_3.style.backgroundColor = "rgb(255, 255, 255, 0.5)";
	lineup.style.background = "rgb(255, 255, 255)";
	baff.style.background = "black";
	white.style.scale = "1.2";
	orange.style.scale = "1";
	gray.style.scale = "1";
	red.style.scale = "1";
});
gray.addEventListener("click", function() {
	iphone_background.style.border = "3px solid rgb(0, 0, 0)";
	btn.style.background = "rgba(0, 0, 0, 0.7)";
	btn_1.style.background = "rgba(0, 0, 0, 0.7)";
	btn_2.style.background = "rgba(0, 0, 0, 0.7)";
	btn_3.style.background = "rgba(0, 0, 0, 0.7)";
	lineup.style.background = "rgba(0, 0, 0)";
	baff.style.background = "white";
	gray.style.scale = "1.2";
	white.style.scale = "1";
	orange.style.scale = "1";
	red.style.scale = "1";
});
red.addEventListener("click", function() {
	iphone_background.style.border = "3px solid rgb(255,0,0)";
	btn.style.background = "rgba(255, 0, 0, 0.5)";
	btn_1.style.background = "rgba(255, 0, 0, 0.5)";
	btn_2.style.background = "rgba(255, 0, 0, 0.5)";
	btn_3.style.background = "rgba(255, 0, 0, 0.5)";
	lineup.style.background = "rgba(255, 0, 0)";
	baff.style.background = "white";
	red.style.scale = "1.2";
	white.style.scale = "1";
	orange.style.scale = "1";
	gray.style.scale = "1";
});
btn.addEventListener("click", function() {
	index++;
	if (index % 2 == 0) {
		iphone_background.style.transition = ".5s";
		iphone_background.style.background = "rgba(0, 0, 0, 0.722)";
		line.style.display = "none";
		time.style.display = "none";
		date.style.display = "none";
	}
	else {
		line.style.display = "block";
		time.style.display = "block";
		iphone_background.style.transition = ".5s";
		iphone_background.style.opacity = "1";
		iphone_background.style.background = "url('iphone.jpeg') center";
		iphone_background.style.backgroundSize = "cover"
		date.style.display = "block";
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
});
