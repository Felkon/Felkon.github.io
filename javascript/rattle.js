/*
Shake image script (onMouseover)- 
(c) Dynamic Drive (www.dynamicdrive.com)
For full source code, usage terms, and 100's more DHTML scripts, visit http://	dynamicdrive.com
*/

//configure shake degree (where larger # equals greater shake)
var rector=5

///////DONE EDITTING///////////
var stopit=0 
var a=1

var rattle=50
var imgSwitch=0
var fireOpacity=0.0
var rainOpacity=0.0
var fireVar=0
var fireVideo
var rainVideo
var rainVar=0

var horiz=0, vert=0
var moveHoriz=0, moveVert=0

var images = []
images[0] = "images/LIKEADAMNFIDDLE/FIDDLE.jpg" 
images[1] = "images/LIKEADAMNFIDDLE/shake1.jpg" 
images[2] = "images/LIKEADAMNFIDDLE/shake2.jpg" 

function init(which){
	stopit=0
	shake=which
	shake.style.left=0
	shake.style.top=0
}

function mainRattle() {
	setTimeout("startRain()", 2000)
	setTimeout("rattleimage()", 10000)
	setTimeout("startFire()", 10000)
}


function startFire() {
	fireVar = setInterval("fadeInFire()", 200)
}

function startRain() {
	rainVar = setInterval("fadeInRain()", 200)
}

function fadeInRain() {
	rainVideo = document.getElementById('bgVideoSnow')
	rainOpacity+=0.05
	rainVideo.style.opacity = String(rainOpacity)

	if (rainOpacity>=1) {
		clearInterval(rainVar)
	}
}
function fadeInFire() {
	fireVideo = document.getElementById('bgVideoFire')
	fireOpacity+=0.01
	fireVideo.style.opacity = String(fireOpacity)

	if (fireOpacity>=0.5) {
		clearInterval(fireVar)
	}	
}

function rattleimage() {
	if ((!document.all&&!document.getElementById)||stopit==1){	
		shake.style.top=0+"px"
		shake.style.left=0+"px"
		return
	}

	// if (a==1) {
	// 	if (horiz!=10){
	// 		moveHoriz=rector
	// 		horiz+=1
	// 	}
	// }
	// else if (a==2) {
	// 	if (horiz!=-5) {
	// 		horiz=0-rector
	// 		horiz-=1
	// 	}
	// }
	// else if (a==3) {
	// 	if (vert!=10){
	// 		moveVert=rector
	// 		vert+=1
	// 	}
	// }
	// else {
	// 	if (vert!=-10){
	// 		moveVert=0-rector
	// 		vert-=1
	// 	}
	// }	

	// shake.style.top=parseInt(shake.style.top)+vert+"px"
	// shake.style.left=parseInt(shake.style.left)+horiz+"px"


	if (a==1) { 
		if (vert!=5){
			shake.style.top=parseInt(shake.style.top)+rector+"px"
			vert+=1
		}
		else {
			shake.style.top=parseInt(shake.style.top)-rector+"px"
			vert-=1
		}
	}
	else if (a==2) {
		if(horiz!=5){
			shake.style.left=parseInt(shake.style.left)+rector+"px"
			horiz+=10
		}
		else {
			shake.style.left=parseInt(shake.style.left)-rector+"px"
			horiz-=10
		}
	}
	else if (a==3){
		if (vert!=-5){
			shake.style.top=parseInt(shake.style.top)-rector+"px"
			vert-=1
		}
		else {
			shake.style.top=parseInt(shake.style.top)+rector+"px"				
			vert+=1
		}
	}
	else{
		if(horiz!=-5){
			shake.style.left=parseInt(shake.style.left)-rector+"px"
			horiz-=1
		}
		else {
			shake.style.left=parseInt(shake.style.left)+rector+"px"				
			horiz+=1
		}
	}

	a = Math.floor((Math.random() * 4) + 1)

	if (rattle>15){
		rattle=rattle-5		
	}

	setTimeout("rattleimage()", rattle)
}
	
function stoprattle(which){
	stopit=1
	which.style.left=0
	which.style.top=0
}