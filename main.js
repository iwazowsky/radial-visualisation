const mult_elm = document.querySelector("h3");
// const multiplier = document.getElementById('multiplier');
const quantity = document.getElementById('points');
let	m =199,q = 100,sin=2, cos= 2,lineWidth=0.2;
// multiplier.addEventListener('change',function(){
// 	m = this.value;
// })
quantity.addEventListener('change',function(){
	// q = this.value;
})
setInterval(()=>{
	// m+=1
	sin+=1
	cos+=2
	q+=10
	new Radial(m,q,sin,cos,lineWidth);
},1000/24)
	 

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