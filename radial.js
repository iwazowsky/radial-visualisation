class Radial extends Drawer{
	x0 		  = 1000;
	y0 		  = 1000;
	r 		  = 922;
	// r 		  = 960;
	constructor(multiplier,dots,sin=2, cos=2,lineWidth=0.2){
		super();
		this.multiplier = multiplier;
		this.dots = dots;
		this.sin = sin
		this.cos = cos
		this.line_width = lineWidth;
		this.draw()
	}

	map(n, start1, stop1, start2, stop2){
		return ((n - start1) / (stop1 - start1) * (stop2 - start2) + start2)	
	}

	getPoint(index) {
		const angle = this.map(index % this.dots, 0, this.dots, 0,2*Math.PI);
		let x = this.x0 + this.r * Math.cos(angle + this.cos*Math.PI);
		let y = this.y0 - this.r * Math.sin(angle + this.sin*Math.PI);
		return {x,y}  
	}

	draw () {
		let color_index = 0;
		for(let i = 0; i < this.dots; i++)
		{	
			const start = this.getPoint(i)
			const end = this.getPoint(i*this.multiplier)
			// color_index = (color_index === colors.length) ? 0 
			this.draw_line(start.x,start.y,end.x,end.y);

			if(color_index === this.colors.length) color_index = 0;
			this.stroke(this.colors[color_index++]);		
		}

	}
}