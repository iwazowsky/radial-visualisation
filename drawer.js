class Drawer{
    constructor(){
        this.canvas = document.getElementById("mandelbrot");
        this.ctx = this.canvas.getContext("2d");
		// this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height); 
               this.ctx.fillStyle = 'black';
		this.ctx.fillRect(0, 0, this.canvas.width, this.canvas.height);        
        this.colors = ['#ffffff'];
        // this.colors = ['#1a1083', '#ffffff',  '#79d24b',  '#a9049a',  '#000000'];
    }

    set line_width(w){
        this.ctx.lineWidth = w;        
    }
    
    draw_line(s_x,s_y,e_x,e_y){
        this.ctx.beginPath();
        this.ctx.moveTo(s_x,s_y);
        this.ctx.lineTo(e_x,e_y);
    }

    stroke(color = '#ffffff'){
        this.ctx.strokeStyle = color;
        this.ctx.stroke();
    }
}