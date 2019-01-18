var canvas = document.getElementById("mandelbrot");
var ctx = canvas.getContext("2d");
ctx.arc(1000,1000,1000,0,2*Math.PI);
ctx.strokeStyle = "#FF0000";
ctx.stroke();
function Drawer (multiplier,dots)
{

	var self      = this
	var x0 		  = 1000
	var y0 		  = 1000
	var r 		  = 1000
	this.multiplier = multiplier;
	this.dots = dots;

	this.draw_points = function()
	{
		let points = [];
		for(let i = 0; i < self.dots; i++) 
		{
		    let x = x0 + r * Math.cos(2*Math.PI * i / self.dots);
		    let y = y0 + r * Math.sin(2*Math.PI * i / self.dots);  
		    points.push({x,y})
		}
		return points

	}

	this.draw_lines = function() 
	{
		let points = self.draw_points();
		for(let i = 0; i < points.length; i++)
		{	
			let draw_to_point
			let start = String(i*self.multiplier)
			console.log(start,i)
			draw_to_point = start
			if(start>=points.length)
			{	
				draw_to_point =  parseInt(start.split('').pop()) 

			}
			// console.log(draw_to_point)
			let x = points[draw_to_point].x
			let y = points[draw_to_point].y
			ctx.lineWidth=1;	
			ctx.beginPath();
			ctx.moveTo(points[i].x,points[i].y);
			ctx.lineTo(x,y);
			ctx.stroke();
		}

	}
}
var drawer = new Drawer(2,11)
drawer.draw_lines()
// window.open(canvas.toDataURL("image/png"));
// var c=document.getElementById("mandelbrot");
// var d=c.toDataURL("image/png");
// var w=window.open('about:blank','image from canvas');
// w.document.write("<img src='"+d+"' alt='from canvas'/>");