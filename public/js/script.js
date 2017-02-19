//ICONS
var icons = {
	//global settings
	line_width: 2,
	stroke_style: "rgba(34, 34, 34, 1)",
	//draw icons
	draw: function() {
		icons.mouse();
		icons.gear();
		icons.plane();
		icons.computer();
	},
	//home mouse icon
	mouse: function() {
		//hook
		const canvas = document.getElementById("mouse-icon").getElementsByTagName("canvas");
		//draw
		const ctx_0 = canvas[0].getContext("2d");
		ctx_0.beginPath();
		ctx_0.moveTo(20,2);
		ctx_0.quadraticCurveTo(5,5,5,15);
		ctx_0.lineTo(5,25);
		ctx_0.quadraticCurveTo(5,35,20,38);
		ctx_0.quadraticCurveTo(35,35,35,25);
		ctx_0.lineTo(35,15);
		ctx_0.quadraticCurveTo(35,5,20,2);
		ctx_0.lineWidth = 3;
		ctx_0.strokeStyle = "rgba(255, 255, 255, 1)";
		ctx_0.stroke();
		//draw
		const ctx_1 = canvas[1].getContext("2d");
		ctx_1.beginPath();
		ctx_1.moveTo(20,2);
		ctx_1.quadraticCurveTo(5,5,5,15);
		ctx_1.lineTo(5,25);
		ctx_1.quadraticCurveTo(5,35,20,38);
		ctx_1.quadraticCurveTo(35,35,35,25);
		ctx_1.lineTo(35,15);
		ctx_1.quadraticCurveTo(35,5,20,2);
		ctx_1.lineWidth = 10;
		ctx_1.strokeStyle = "rgba(255, 255, 255, 1)";
		ctx_1.stroke();
	},
	//about gear icon
	gear: function() {
		//hook
		const canvas = document.getElementById("gear-icon").getElementsByTagName("canvas");
		//draw
		const ctx_0 = canvas[0].getContext("2d");
		ctx_0.beginPath();
		ctx_0.arc(20,20,5,0,2*Math.PI);
		ctx_0.lineWidth = icons.line_width;
		ctx_0.strokeStyle = icons.stroke_style;
		ctx_0.stroke();
		//draw
		for(let i=1;i<canvas.length;i++) {
			const ctx = canvas[i].getContext("2d");
			ctx.beginPath();
			ctx.moveTo(15,10);
			ctx.bezierCurveTo(20,10,14,2,20,2);
			ctx.bezierCurveTo(26,2,20,10,25,10);
			ctx.lineWidth = icons.line_width;
			ctx.strokeStyle = icons.stroke_style;
			ctx.stroke();
		}
	},
	//about plane icon
	plane: function() {
		//hook
		const canvas = document.getElementById("plane-icon").getElementsByTagName("canvas");
		//draw
		const ctx = canvas[0].getContext("2d");
		ctx.beginPath();
		ctx.moveTo(17,6);
		ctx.bezierCurveTo(17,0,23,0,23,6);
		ctx.lineTo(23,12);
		ctx.lineTo(38,20);
		ctx.lineTo(38,25);
		ctx.lineTo(23,23);
		ctx.lineTo(23,30);
		ctx.lineTo(32,34);
		ctx.lineTo(32,38);
		ctx.lineTo(20,35);
		ctx.lineTo(8,38);
		ctx.lineTo(8,34);
		ctx.lineTo(17,30);
		ctx.lineTo(17,23);
		ctx.lineTo(2,25);
		ctx.lineTo(2,20);
		ctx.lineTo(17,12);
		ctx.lineTo(17,6);
		ctx.lineWidth = icons.line_width;
		ctx.strokeStyle = icons.stroke_style;
		ctx.stroke();
	},
	//about computer icon
	computer: function() {
		//hook
		const canvas = document.getElementById("computer-icon").getElementsByTagName("canvas");
		//draw
		for(let i=0;i<2;i++) {
			const ctx = canvas[i].getContext("2d");
			ctx.beginPath();
			ctx.moveTo(2,7);
			ctx.quadraticCurveTo(2,2,7,2);
			ctx.lineTo(33,2);
			ctx.quadraticCurveTo(38,2,38,7);
			ctx.lineTo(38,23);
			ctx.quadraticCurveTo(38,28,33,28);
			ctx.lineTo(7,28);
			ctx.quadraticCurveTo(2,28,2,23);
			ctx.lineTo(2,7);
			ctx.lineWidth = icons.line_width;
			ctx.strokeStyle = icons.stroke_style;
			ctx.stroke();
		}
		//draw
		const ctx_2 = canvas[2].getContext("2d");
		ctx_2.beginPath();
		ctx_2.moveTo(14,28);
		ctx_2.quadraticCurveTo(14,32,8,32);
		ctx_2.quadraticCurveTo(4,35,8,38);
		ctx_2.lineTo(32,38);
		ctx_2.quadraticCurveTo(36,35,32,32);
		ctx_2.quadraticCurveTo(26,32,26,28);
		ctx_2.lineWidth = icons.line_width;
		ctx_2.strokeStyle = icons.stroke_style;
		ctx_2.stroke();
	}
};

//DRAW ICONS CALL
icons.draw();

















