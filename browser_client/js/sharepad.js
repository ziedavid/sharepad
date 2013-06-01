

var stageWidth = 640;
var stageHeight = 480;
var stage;
var update = true;
var shape1, shape2, shape3;


// global variables for drawing:
var mouse = new Boolean(0);  // indicates whether mouse is pressed
var mode = 1;	// 1=drawing, 2=erasing, 3=navigating
var prevX = 0;
var prevY = 0;
var preprevX = 0;
var preprevY = 0;
var nSkip = 1;  // for drawing: sets a point only every nSkip mousemoves (and connects the points by lines)
var skip = nSkip;

function mouseMove(e){
	if(mouse==1){
		switch(mode){	
			case 1:
				if(skip > 0){
					skip--;
				} 
				else{
					skip = nSkip;
					// DRAWING
					// prepare canvas
					var canvas = document.getElementById('canvas');
					var ctx = canvas.getContext('2d');

					// draw
					x = e.clientX;
					y = e.clientY;
					ctx.strokeStyle = '#333';
					ctx.lineWidth = 3;
					ctx.beginPath();
					ctx.lineJoin="round";
					ctx.moveTo(preprevX, preprevY);
					ctx.lineTo(prevX, prevY);


					ctx.lineTo(x,y)
					ctx.stroke();

					preprevX = prevX;
					preprevY = prevY;
					prevX = x;
					prevY = y;				
				}
				break;
			case 2:
			
				// ERASING

				// prepare canvas
				var canvas = document.getElementById('canvas');
				var ctx = canvas.getContext('2d');

				// draw
				x = e.clientX;
				y = e.clientY;
				ctx.strokeStyle = '#FFF';
				ctx.lineWidth = 30;
				ctx.beginPath();
				ctx.lineJoin="round";
				ctx.moveTo(preprevX, preprevY);
				ctx.lineTo(prevX, prevY);


				ctx.lineTo(x,y)
				ctx.stroke();

				preprevX = prevX;
				preprevY = prevY;
				prevX = x;
				prevY = y;
				break;

			case 3:
				// NAVIGATING
				break;
		}
	}
		
}

function startDrawing(event){

}

function startErasing(event){

}

function startMouse(event){
	mouse = 1;
	event.preventDefault();

	//	var canvas = document.getElementById('canvas');
	//	var ctx = canvas.getContext('2d');
	//	ctx.canvas.width = window.innerWidth;
	//	ctx.canvas.heigth = window.innerHeight;

	prevX = event.clientX;
	prevY = event.clientY;
	preprevX = prevX;
	preprevY = prevY;
}

function stopMouse(){
	mouse = 0;
}

function keyPress(event){
	switch(event.keyCode){
		case 120:  // Drawing-mode
			mode = 1;
			break;
		case 99: // Erasing-mode
			mode = 2;
			break;
		case 118: // Navigating-mode
			mode = 3;
			break;
		case 61: 
		case 43: // both: zoom +
			var canvas = document.getElementById('canvas');
			var ctx = canvas.getContext('2d');

			// draw
			ctx.strokeStyle = '#333';
			ctx.scale(1.1,1.1);
			ctx.translate(-35,-35);
			ctx.stroke;
			break;
	}
	
}
*/
