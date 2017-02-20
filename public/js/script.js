//ONLOAD
window.onload = function() {
	//draw canvas icons
	icons.draw();
	//initiate work events
	works.addListener();
};



//ICONS
var icons = {
	//global settings
	line_width: 2,
	stroke_style: "rgba(34, 34, 34, 1)",
	stroke_style_1: "rgba(255,255,255,1)",

	//draw icons
	draw: function() {
		icons.mouse();
		icons.gear();
		icons.plane();
		icons.computer();
		icons.printer();
		icons.paint_brush();
		icons.camera();
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
	},

	//offers printer icon
	printer: function() {
		//hook
		const canvas = document.getElementById("printer-icon").getElementsByTagName("canvas");
		//draw
		for(let i=0;i<3;i++) {
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
			ctx.strokeStyle = icons.stroke_style_1;
			ctx.stroke();
		}
		//draw
		for(let i=3;i<6;i++) {
			const ctx_lines = canvas[i].getContext("2d");
			ctx_lines.beginPath();
			ctx_lines.moveTo(0,0);
			ctx_lines.lineTo(5,0);
			ctx_lines.lineWidth = icons.line_width;
			ctx_lines.strokeStyle = icons.stroke_style_1;
			ctx_lines.stroke();
		}
	},

	//offers paint brush icon
	paint_brush: function() {
		//hook
		const canvas = document.getElementById("paint-brush-icon").getElementsByTagName("canvas");
		//draw
		const ctx_0 = canvas[0].getContext("2d");
		ctx_0.beginPath();
		ctx_0.moveTo(20,0);
		ctx_0.bezierCurveTo(10,30,30,30,20,0);
		ctx_0.lineWidth = icons.line_width;
		ctx_0.strokeStyle = icons.stroke_style_1;
		ctx_0.stroke();
		//draw
		const ctx_1 = canvas[1].getContext("2d");
		ctx_1.beginPath();
		ctx_1.moveTo(20,20);
		ctx_1.bezierCurveTo(30,35,5,35,10,20);
		ctx_1.quadraticCurveTo(13,11,23,10);
		ctx_1.quadraticCurveTo(17,16,20,20);
		ctx_1.lineWidth = icons.line_width;
		ctx_1.strokeStyle = icons.stroke_style_1;
		ctx_1.stroke();
	},

	//offers camera icon
	camera: function() {
		//hook
		const canvas = document.getElementById("camera-icon").getElementsByTagName("canvas");
		//draw
		const ctx_0 = canvas[0].getContext("2d");
		ctx_0.beginPath();
		ctx_0.moveTo(2,7);
		ctx_0.quadraticCurveTo(2,2,7,2);
		ctx_0.lineTo(33,2);
		ctx_0.quadraticCurveTo(38,2,38,7);
		ctx_0.lineTo(38,23);
		ctx_0.quadraticCurveTo(38,28,33,28);
		ctx_0.lineTo(7,28);
		ctx_0.quadraticCurveTo(2,28,2,23);
		ctx_0.lineTo(2,7);
		ctx_0.lineWidth = icons.line_width;
		ctx_0.strokeStyle = icons.stroke_style_1;
		ctx_0.stroke();
		//draw
		const ctx_1 = canvas[1].getContext("2d");
		ctx_1.beginPath();
		ctx_1.moveTo(0,0);
		ctx_1.lineTo(5,0);
		ctx_1.lineWidth = icons.line_width;
		ctx_1.strokeStyle = icons.stroke_style_1;
		ctx_1.stroke();
		//draw
		const ctx_2 = canvas[2].getContext("2d");
		ctx_2.beginPath();
		ctx_2.moveTo(0,0);
		ctx_2.lineTo(5,0);
		ctx_2.lineWidth = icons.line_width;
		ctx_2.strokeStyle = icons.stroke_style;
		ctx_2.stroke();
		//draw
		for(let i=3;i<6;i++) {
			const ctx_cir = canvas[i].getContext("2d");
			ctx_cir.beginPath();
			ctx_cir.arc(20,20,5,0,2*Math.PI);
			ctx_cir.lineWidth = icons.line_width;
			ctx_cir.strokeStyle = icons.stroke_style_1;
			ctx_cir.stroke();
		}
	}
};




//WORKS
var works = {
	//hooks
	img_div: document.getElementsByClassName("works-img-slide")[0].getElementsByTagName("div"),
	sub_img: document.getElementsByClassName("works-img-slide")[0].getElementsByTagName("img"),
	copy: document.getElementById("works").getElementsByTagName("article")[0].getElementsByTagName("div"),
	main_img: document.getElementById("works").getElementsByClassName("img-container")[0].getElementsByTagName("img")[0],
	index_0: document.getElementById("works").getElementsByTagName("figcaption")[0].getElementsByTagName("p")[0],
	index_1: document.getElementById("works").getElementsByTagName("figcaption")[0].getElementsByTagName("p")[1],

	//add event listener 
	addListener: function() {
		//shorthand
		const div = works.img_div;
		//add listener to each img
		for(let i=0;i<div.length;i++) {
			//add listener
			div[i].addEventListener("click", works.adjust, false);
			//add class name
			div[i].className = "js-works__div-hook-" + i;
		}
		//initialize content
		works.adjust("init");
	},
	//adjust selection
	adjust: function(value) {
		//shorthands
		const div = works.img_div;
		const copy = works.copy;
		const img = works.main_img;
		const sub_img = works.sub_img;
		const index = [works.index_0, works.index_1];

		//initialize content
		if(value === "init") {
			//set main img src
			img.src = sub_img[0].src;
			//set display
			copy[1].style.display = "initial";
			//set opacity
			div[0].style.opacity = 1;
			//set index
			index[0].innerHTML = 1;
			index[1].innerHTML = "/ " + div.length;
		}
		//check for user input
		if(value.type === "click") {
			//target identifier
			const target = Number(value.target.className[19]);
			//reset
			for(let i=0;i<div.length;i++) {
				//set display
				copy[i+1].style.display = "none";
				//set opacity
				div[i].style.opacity = 0;
			}
			//set main img src
			img.src = sub_img[target].src;
			//set display
			copy[target+1].style.display = "initial";
			//set opacity
			div[target].style.opacity = 1;
			//set index
			index[0].innerHTML = target + 1;
		}
	}
};












































