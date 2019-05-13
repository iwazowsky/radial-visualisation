class Radial extends Drawer{
	x0 		  = 1000;
	y0 		  = 1000;
	r 		  = 1000;
	coords	  = [];
	constructor(multiplier,dots){
		super();
		this.multiplier = multiplier;
		this.dots = dots;
		this.line_width = 5;
		this.draw_points();
		this.draw_lines();
	}

	draw_points() {
		for(let i = 0; i < this.dots; i++) 
		{
		    let x = this.x0 + this.r * Math.cos(4*Math.PI * i / this.dots);
		    let y = this.y0 - this.r * Math.sin(4*Math.PI * i / this.dots);  
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