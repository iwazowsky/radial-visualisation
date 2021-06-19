const mult_elm = document.querySelector("h3");
const quantity = document.getElementById('points');
// const multiplier = document.getElementById('multiplier');
// multiplier.addEventListener('change',function(){
	// 	m = this.value;
	// })
// quantity.addEventListener('change',function(){
	// q = this.value;
// })
let	m = 299	, q = 300,sin=2, cos= 2,lineWidth=0.5,m_acc = 0,cos_acc = 0,sin_acc = cos_acc
let visual = new Radial(m,q,sin,cos,lineWidth);

setInterval(()=>{
	m += m_acc
	// q+=0.021
	
	cos += cos_acc
	sin += sin_acc
	visual = new Radial(m,q,sin,cos,lineWidth);
},1000/24)

document.onkeydown = checkKey;
function checkKey(e) {

    e = e || window.event;

    if (e.keyCode == '38') {
		e.preventDefault();
		m_acc +=  0.00001
    }
	
    else if (e.keyCode == '40') {
		e.preventDefault();
		m_acc -=  0.00001
		
	}
	else if (e.keyCode == '37') {
	   // left arrow
		e.preventDefault();
		sin_acc -= 0.0005
		cos_acc -= 0.0005
	   
    }
    else if (e.keyCode == '39') {
	   // right arrow
		e.preventDefault();
		sin_acc += 0.0005
		cos_acc += 0.0005
		
    }
	// new Radial(multiplier.value,quantity.value); 
}
var midi = null;  // global MIDIAccess object
function onMIDISuccess( midiAccess ) {
  console.log( "MIDI ready!" );
  midi = midiAccess;  // store in the global (in real usage, would probably keep in an object instance)
  startLoggingMIDIInput(midiAccess)
}

function onMIDIFailure(msg) {
  console.log( "Failed to get MIDI access - " + msg );
}

navigator.requestMIDIAccess().then( onMIDISuccess, onMIDIFailure );
const map = (n, start1, stop1, start2, stop2)=>{
	return ((n - start1) / (stop1 - start1) * (stop2 - start2) + start2)	
}
function onMIDIMessage( event ) {
  var str = "MIDI message received at timestamp " + event.timestamp + "[" + event.data.length + " bytes]: ";
  for (var i=0; i<event.data.length; i++) {
    str += "0x" + event.data[i].toString(16) + " ";
  }
  console.log(str)
  if(event.data[0]===154){
  console.log(event.data[1])

	switch (event.data[1]){
		case 8:
			cos = 2
			sin = 2
			cos_acc = 0.0005
			sin_acc = 0.0005
			break;
		case 9:
			m=2
			m_acc=0
			break;
		case 10:
			m=5
			m_acc=0
			break;
		case 11:
			m=199
			m_acc=0
			break;
		case 12:
			m=200
			m_acc=0
			break;
		case 13:
			m=201
			m_acc=0
			break;
		case 14:
			m=9999
			m_acc=0
			break;
		case 15:
			m = 1.5
			m_acc=0
			break;
		case 16:
			m
		default:
			break;
	}

  }
  if(event.data[0] === 186){
	  switch (event.data[1]) {
			case 1:
				m = map(event.data[2],0,127,0,1000)
				break;
			case 2:
			  	m_acc = map(event.data[2],0,127,-0.1,0.1)
				break;
			case 3: 
				sin_acc = map(event.data[2],0,127,-0.01,0.01)
				break;
			case 4: 
				cos_acc = map(event.data[2],0,127,-0.01,0.01)
				break;
			case 5: 
				sin = map(event.data[2],0,127,0,2)
				break;
			case 6:
				cos = map(event.data[2],0,127,0,2)
				break;
			case 7:
				q = map(event.data[2],0,127,1,1000)
			break;
			case 9:
				lineWidth = map(event.data[2],0,127,0.1,4)
			default:
				break;
	  }
  }
}

function startLoggingMIDIInput( midiAccess, indexOfPort ) {
  midiAccess.inputs.forEach( function(entry) {entry.onmidimessage = onMIDIMessage;});
}
//   async function playNote() {
//     port = JZZ().openMidiIn('Akai MPD26');
	
// }
// playNote()