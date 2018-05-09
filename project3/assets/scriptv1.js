// Detect Downward Scrolling
var position = $(window).scrollTop();
$( window ).scroll(function() {
	var scroll = $(window).scrollTop();
   if(position === 0 ) {
   	return;
   }
   if (scroll > position) { 
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
})

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
