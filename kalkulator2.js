let N0 = document.getElementById("n0"); //
let N1 = document.getElementById("n1"); //
let N2 = document.getElementById("n2"); //
let N3 = document.getElementById("n3"); //
let N4 = document.getElementById("n4"); //
let N5 = document.getElementById("n5"); //
let N6 = document.getElementById("n6"); //
let N7 = document.getElementById("n7"); //
let N8 = document.getElementById("n8"); //
let N9 = document.getElementById("n9"); //
let Nequal = document.getElementById("nequal"); 
let Ndiv = document.getElementById("ndiv"); 
let Nmult = document.getElementById("nmult");
let Nmns = document.getElementById("nmns");
let Npls = document.getElementById("npls"); // working
let Ndot = document.getElementById("ndot"); //
let NCE = document.getElementById("nCE"); //
let display = document.getElementById("display"); //
///////////////////////////////////////////////////////
///////////////GETTING THE ELEMENTS////////////////////
///////////////////////////////////////////////////////
N0.addEventListener("click",mehanika0);
N1.addEventListener("click",mehanika1);
N2.addEventListener("click",mehanika2);
N3.addEventListener("click",mehanika3);
N4.addEventListener("click",mehanika4);
N5.addEventListener("click",mehanika5);
N6.addEventListener("click",mehanika6);
N7.addEventListener("click",mehanika7);
N8.addEventListener("click",mehanika8);
N9.addEventListener("click",mehanika9);
NCE.addEventListener("click",mehanikaCE);
Ndot.addEventListener("click",mehanikaDOT);





var keyContent = 0;
var arrayNumbers = [];


function mehanika0 () {
	
	 keyContent = 0;
	 display.textContent = keyContent;
	 dodavanje()
}

function mehanika1 () {
	
	 keyContent = 1;
	 display.textContent = keyContent;
	 dodavanje()
}

function mehanika2 () {
	
	 keyContent = 2;
	 display.textContent = keyContent;
	 dodavanje()
}

function mehanika3 () {
	 keyContent = 3;
	 display.textContent = keyContent;
	 dodavanje()
}

function mehanika4 () {
	 keyContent = 4;
	 display.textContent = keyContent;
	 dodavanje()
}

function mehanika5 () {
	 keyContent = 5;
	 display.textContent = keyContent;
	 dodavanje()
}

function mehanika6 () {
	 keyContent = 6;
	 display.textContent = keyContent;
	 dodavanje()
}

function mehanika7 () {
	 keyContent = 7;
	 display.textContent = keyContent;
	 dodavanje()
}

function mehanika8 () {
	 keyContent = 8;
	 display.textContent = keyContent;
	 dodavanje()
}

function mehanika9 () {
     keyContent = 9;
	 display.textContent = keyContent;
	 dodavanje()
}
///////////////////////////////////////////// 1.nedoumica/broj nula ostaje iza brojeva ,
 // poslije svake trece cifre razmak!!! // uljepsati cifre , mozda u kurzivu i dodati ogranicenje
function mehanikaCE () {
	display.textContent = 0;
	arrayNumbers = [];
	
}

function mehanikaDOT () {
	
	 if( mehanikaDOT.fired ) return;
     mehanikaDOT.fired = true;
     
     arrayNumbers = arrayNumbers.concat(".");
	 display.textContent = arrayNumbers.join("");

}
    


function dodavanje() {



if (keyContent === 0) {

function zeroAtTheBeginning() {

	 

	 if( zeroAtTheBeginning.fired ) return;
     zeroAtTheBeginning.fired = true;

     
	display.textContent = keyContent
}

} else {



arrayNumbers = arrayNumbers.concat(keyContent);
		display.textContent = arrayNumbers.join("");




}



}


//BUGBUGBUGBUGBUGBUGBUG!!!
	//} else {
	//	arrayNumbers = arrayNumbers.concat(keyContent);
	//	display.textContent = arrayNumbers.join("");
	//}
	//arrayNumbers = arrayNumbers.concat(keyContent);
	//display.textContent = arrayNumbers.join("");



