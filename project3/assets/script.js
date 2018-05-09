// Detect Downward Scrolling
var position = $(window).scrollTop();
$( window ).scroll(function() {
	//print a thing
	//console.log("Position = " + position);
	var scroll = $(window).scrollTop();
	//console.log("Scroll = " + scroll);
   //if(position === 0 ) {
   	//return;
   //}
   if (scroll > position) { 
   	// is this thing ever true
   	//console.log("Scroll is larger than position");
   	grabNextPage();
   } else {
   	//console.log('up')
   }
   if(scroll > 10000) {
   	window.scrollTo(0,0);
   }
   position = scroll;
});

// Which Div to Show/Hide Logic onload
var nextPage = Number(localStorage.getItem('mc-page'));
if (!nextPage){
	nextPage = 0;
}
window.addEventListener('load', function(){
	showSlide(nextPage);
});

// Show/Hide Div Logic
var grabbingPage = false;
function grabNextPage() {
	if (grabbingPage) {
		return;
	} else {
		grabbingPage = true;
		setTimeout(function(){grabbingPage = false}, 1000);
		//get next page logic
		hideAllSlides();
		nextPage = nextPage + 1;
		showSlide(nextPage);
		background(nextPage);
		localStorage.setItem('mc-page', nextPage);
	}
}


//Iterate over children of the #slide-container, 
//add hide-slide class, 
//remove show-slide class
function hideAllSlides(){
	var slideContainer = document.getElementById('slide-container');
	for (var i = 0; i < slideContainer.children.length; i++){
		slideContainer.children[i].classList.remove('show-slide');
		slideContainer.children[i].classList.add('hide-slide');

	}
}

// add show slide and remove hide-slide for one slide at index
function showSlide(index) {
	var slideContainer = document.getElementById('slide-container');
	if (slideContainer.children.length > index){
		slideContainer.children[index].classList.add('show-slide');
	} else {
		slideContainer.children[slideContainer.children.length-1].classList.add('show-slide');
	}
}

function background(index){
	var bgArray= ["white", 

//Gray 10
		"#F8F8F8", "#F2F2F1", "#ECECEA", "#E5E6E3", "#DFDFDD", 
		"#D9D9D6", "#D2D3CF", "#CCCDC8", "#C6C7C2",  


//* purple*// 14

		"#F7E0FF", "#F6DCFE", "#F5D9FE", "#F5D6FE", "#F4D3FE", 
		"#F3D0FE", "#F3CDFE","#F2CAFE", "#F1C6FD", "#F1C3FD", 
		"#F0C0FD", "#EFBDFD", "#EFBAFD", "#EFBAFD", "#EFBAFD", 
//Gray 10
		"#C6C7C2", "#CBCCC8", "#D1D2CE", "#D7D7D4", "#DCDDDA",
		"#E2E3E0", "#E8E8E6", "#EDEEEC", "#F3F3F2", //"#F9F9F8",
//White
		"white", "white", "white", "white", 
		"white", "white", "white", "white", "white",
		"white",]
	var slideContainer = document.getElementById('slide-container');
	slideContainer.style.backgroundColor=bgArray[index];
	//for (var i = 0; i < slideContainer.children.length; i++){
	//	$(".container").css("background-color", bgArray[i]);
	//}
}



 
