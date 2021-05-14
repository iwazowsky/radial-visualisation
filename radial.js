class Radial extends Drawer{
	x0 		  = 300;
	y0 		  = 300;
	r 		  = 300;
	coords	  = {};
	constructor(multiplier,dots,sin=2, cos=2,lineWidth = 0.2){
		super();
		this.multiplier = multiplier;
		// this.point_multiplier = parseInt(this.multiplier) === this.multiplier ? 1 : fixed(1 + this.multiplier - parseInt(this.multiplier))
		this.point_multiplier = parseInt(this.multiplier) === this.multiplier ? 1 : this.multiplier
		this.dots = dots;
		this.sin = sin
		this.cos = cos
		this.line_width = lineWidth;
		this.draw_points();
		console.log(this.coords)
		this.draw_lines();
	}

	draw_points() {
		for(let i = 0; i < parseInt(this.dots*this.point_multiplier); i++) 
		{
		    let x = this.x0 + this.r * Math.cos(this.cos*Math.PI * i / this.dots);
		    let y = this.y0 - this.r * Math.sin(this.sin*Math.PI * i / this.dots);  
		    this.coords[fixed(i*this.point_multiplier)] = {x,y};
		}
	}

	draw_lines () {
		let color_index = 0;
		for(let i = 0; i < Object.keys(this.coords).length; i++)
		{	
			let draw_to = fixed(i*this.multiplier % Object.keys(this.coords).length);
			let x = this.coords[draw_to].x;
			let y = this.coords[draw_to].y;
			// color_index = (color_index === colors.length) ? 0 
			if(color_index === this.colors.length) color_index = 0;
			this.draw_line(this.coords[fixed(i*this.point_multiplier)].x,this.coords[fixed(i*this.point_multiplier)].y,x,y);
			this.stroke(this.colors[color_index++]);		
		}

	}
}