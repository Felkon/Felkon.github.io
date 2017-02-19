var musicPlaying=false
var backgroundAudio
function initMusic() {
	backgroundAudio=document.getElementById("bgAudio")
	backgroundAudio.volume=0.2
	backgroundAudio.muted = false
	backgroundAudio.play()
}

function stopMusic() {
	var str = document.getElementById("mute").innerHTML;
	if (str=="MUTE"){
		var res = str.replace("MUTE", "UNMUTE");
		backgroundAudio.muted = true;
	}
	else {
		var res = str.replace("UNMUTE", "MUTE");
		backgroundAudio.muted = false;
	}
	document.getElementById("mute").innerHTML = res;
}