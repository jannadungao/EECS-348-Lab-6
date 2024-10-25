function input() {
	var fontR = document.getElementById("fontR").value;
	var fontG = document.getElementById("fontG").value;
	var fontB = document.getElementById("fontB").value;
	var color = `rgb(${fontR}, ${fontG}, ${fontB})`;
	var borderWidth = document.getElementById("borderwidth").value;
	var body = document.getElementById("body");


	paragraph.style.color = color;
	paragraph.style.borderColor = color;
	body.style.borderWidth = `${borderWidth}px`;
	body.style.borderStyle = "solid";
}
