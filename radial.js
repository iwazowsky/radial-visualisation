class Radial extends Drawer{
	x0 		  = canvas.width/2;
	y0 		  = canvas.height/2;
	r 		  = canvas.height/2 - 50;
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
		const x_angle = this.map(index % this.dots, 0, this.dots, 0,this.cos*Math.PI);
		const y_angle = this.map(index % this.dots, 0, this.dots, 0,this.sin*Math.PI);
		let x = this.x0 + this.r * Math.cos(x_angle );
		let y = this.y0 - this.r * Math.sin(y_angle );
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