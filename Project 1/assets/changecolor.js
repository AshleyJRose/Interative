const mydiv=document.querySelector('body'); 
const mybutton=document.getElementById('mybutton');

function randmColor() {
  let color = "#";
for(let i = 0; i < 6; i++){
      color += Math.floor((Math.random() * 16)).toString(16);
}
  return color;

}



mybutton.addEventListener('click', () => {
  mydiv.style.backgroundColor=randmColor(); 

  });