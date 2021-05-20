class Radial extends Drawer{
	x0 		  = 960;
	y0 		  = 540;
	r 		  = 1100;
	// r 		  = 960;
	coords	  = [];
	constructor(multiplier,dots,sin=2, cos=2,lineWidth=0.2){
		super();
		this.multiplier = multiplier;
		this.dots = dots;
		this.sin = sin
		this.cos = cos
		this.line_width = lineWidth;
		this.draw_points();
		this.draw_lines();
	}

	draw_points() {
		for(let i = 0; i < this.dots; i++) 
		{
		    let x = this.x0 + this.r * Math.cos(this.cos*Math.PI * i / this.dots);
		    let y = this.y0 - this.r * Math.sin(this.sin*Math.PI * i / this.dots);  
		    this.coords[i] = {x,y};
		}
	}

	draw_lines () {
		let color_index = 0;
		for(let i = 0; i < this.coords.length; i++)
		{	
			let draw_to = i*this.multiplier % this.coords.length;
			let x = this.coords[draw_to].x;
			let y = this.coords[draw_to].y;
			// color_index = (color_index === colors.length) ? 0 
			if(color_index === this.colors.length) color_index = 0;
			this.draw_line(this.coords[i].x,this.coords[i].y,x,y);
			this.stroke(this.colors[color_index++]);		
		}

	}
}