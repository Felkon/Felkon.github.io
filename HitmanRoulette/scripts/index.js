window.onload = function() {
	randomParis();
	randomSapienza();
	 randomMarrakesh();
	 randomBangkok();
	 randomColorado();
	 randomHokkaido();
	 console.log("images loaded");
	 clearScreen();
}

function clearScreen() {
	// document.getElementById('loading-blocker').className = "hidden";
	$("#loading-blocker").fadeOut();
	console.log("Run clearScreen");

}


function randomParis () {
	var randNum = Math.floor((Math.random() * 3) + 1);
	switch(randNum) {
		case 1:
			document.getElementById('episode-paris-image').style.backgroundImage="url(img/episode/paris/episodeCard1.png)";	
			break
		case 2:
			document.getElementById('episode-paris-image').style.backgroundImage="url(img/episode/paris/episodeCard2.png)";	
			break;
		case 3:
			document.getElementById('episode-paris-image').style.backgroundImage="url(img/episode/paris/episodeCard3.png)";
			break;					
	}
}

function randomSapienza () {
	var randNum = Math.floor((Math.random() * 4) + 1);
	switch(randNum) {
		case 1:
			document.getElementById('episode-sapienza-image').style.backgroundImage="url(img/episode/sapienza/episodeCard1.png)";	
			break
		case 2:
			document.getElementById('episode-sapienza-image').style.backgroundImage="url(img/episode/sapienza/episodeCard2.png)";	
			break;
		case 3:
			document.getElementById('episode-sapienza-image').style.backgroundImage="url(img/episode/sapienza/episodeCard3.png)";
			break;					
		case 4:
			document.getElementById('episode-sapienza-image').style.backgroundImage="url(img/episode/sapienza/episodeCard4.png)";
			break;	
		}
}

function randomMarrakesh () {
	var randNum = Math.floor((Math.random() * 4) + 1);
	switch(randNum) {
		case 1:
			document.getElementById('episode-marrakesh-image').style.backgroundImage="url(img/episode/marrakesh/episodeCard1.png)";	
			break
		case 2:
			document.getElementById('episode-marrakesh-image').style.backgroundImage="url(img/episode/marrakesh/episodeCard2.png)";	
			break;
		case 3:
			document.getElementById('episode-marrakesh-image').style.backgroundImage="url(img/episode/marrakesh/episodeCard3.png)";
			break;					
		case 3:
			document.getElementById('episode-marrakesh-image').style.backgroundImage="url(img/episode/marrakesh/episodeCard3.png)";
			break;		
		case 4:
			document.getElementById('episode-marrakesh-image').style.backgroundImage="url(img/episode/marrakesh/episodeCard4.png)";
			break;	
		}
}

function randomBangkok () {
	var randNum = Math.floor((Math.random() * 5) + 1);
	switch(randNum) {
		case 1:
			document.getElementById('episode-bangkok-image').style.backgroundImage="url(img/episode/bangkok/episodeCard1.png)";	
			break
		case 2:
			document.getElementById('episode-bangkok-image').style.backgroundImage="url(img/episode/bangkok/episodeCard2.png)";	
			break;
		case 3:
			document.getElementById('episode-bangkok-image').style.backgroundImage="url(img/episode/bangkok/episodeCard3.png)";
			break;					
		case 4:
			document.getElementById('episode-bangkok-image').style.backgroundImage="url(img/episode/bangkok/episodeCard4.png)";
			break;	
		case 5:
			document.getElementById('episode-bangkok-image').style.backgroundImage="url(img/episode/bangkok/episodeCard5.png)";
			break;	
		case 6:
			document.getElementById('episode-bangkok-image').style.backgroundImage="url(img/episode/bangkok/episodeCard6.png)";
			break;	
	}
}

function randomColorado () {
	var randNum = Math.floor((Math.random() * 5) + 1);
	switch(randNum) {
		case 1:
			document.getElementById('episode-colorado-image').style.backgroundImage="url(img/episode/colorado/episodeCard1.png)";	
			break
		case 2:
			document.getElementById('episode-colorado-image').style.backgroundImage="url(img/episode/colorado/episodeCard2.png)";	
			break;
		case 3:
			document.getElementById('episode-colorado-image').style.backgroundImage="url(img/episode/colorado/episodeCard3.png)";
			break;					
		case 4:
			document.getElementById('episode-colorado-image').style.backgroundImage="url(img/episode/colorado/episodeCard4.png)";	
			break;
		case 5:
			document.getElementById('episode-colorado-image').style.backgroundImage="url(img/episode/colorado/episodeCard5.png)";
			break;		
	}
}

function randomHokkaido () {
	var randNum = Math.floor((Math.random() * 4) + 1);
	switch(randNum) {
		case 1:
			document.getElementById('episode-hokkaido-image').style.backgroundImage="url(img/episode/hokkaido/episodeCard1.png)";	
			break
		case 2:
			document.getElementById('episode-hokkaido-image').style.backgroundImage="url(img/episode/hokkaido/episodeCard2.png)";	
			break;
		case 3:
			document.getElementById('episode-hokkaido-image').style.backgroundImage="url(img/episode/hokkaido/episodeCard3.png)";
			break;					
		case 4:
			document.getElementById('episode-hokkaido-image').style.backgroundImage="url(img/episode/hokkaido/episodeCard4.png)";
			break;	
	}
}

