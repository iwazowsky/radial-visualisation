const mult_elm = document.querySelector("h3");
const quantity = document.getElementById('points');
// const multiplier = document.getElementById('multiplier');
// multiplier.addEventListener('change',function(){
	// 	m = this.value;
	// })
// quantity.addEventListener('change',function(){
	// q = this.value;
// })
let	m = 421, q = 3000,sin=88, cos= 88,lineWidth=0.4;
let skip = 	false;
setInterval(()=>{
	// m+=9
	// q+=1
	// if(skip){
	// 	m+=1
	// 	skip = false
	// }else{
	// 	skip = true
	// }
		
	sin+=0.004
	cos+=0.004
	// q+=2
	new Radial(m,q,sin,cos,lineWidth);
},1000/24)
const canvas = document.getElementById('mandelbrot')
document.onkeydown = checkKey;
function checkKey(e) {

    e = e || window.event;

    if (e.keyCode == '38') {
		e.preventDefault();
		multiplier.value++
    }
	
    else if (e.keyCode == '40') {
		e.preventDefault();
		if(multiplier.value != 0)
		multiplier.value--
	}
	else if (e.keyCode == '37') {
	   // left arrow
		e.preventDefault();
		quantity.value--
	   
    }
    else if (e.keyCode == '39') {
	   // right arrow
		e.preventDefault();
		quantity.value++
	   
    }
	// new Radial(multiplier.value,quantity.value); 
}