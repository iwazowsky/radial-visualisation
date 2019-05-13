const mult_elm = document.querySelector("h3");
const multiplier = document.getElementById('multiplier');
const quantity = document.getElementById('points');
let	m,q;
multiplier.addEventListener('change',function(){
	m = this.value;
})
quantity.addEventListener('change',function(){
	q = this.value;
})
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
	new Radial(multiplier.value,quantity.value); 
}