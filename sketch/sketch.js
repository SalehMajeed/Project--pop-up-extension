console.log('outer');

const s = (sketch) => {
	let x = 100;
	let y = 100;

	sketch.setup = () => {
		document.body.style['user-select'] = 'none';
		let h = document.body.clientHeight;
		let c = sketch.createCanvas(sketch.windowWidth, h);
		c.position(0, 0);
		c.style('pointer-events', 'none');
		sketch.clear();
	};

	sketch.draw = () => {
		sketch.stroke(0);
		sketch.strokeWeight(4);
		if (sketch.mouseIsPressed) sketch.line(sketch.mouseX, sketch.mouseY, sketch.pmouseX, sketch.pmouseY);
	};
};

let myp5 = new p5(s);
