function password() {
	var input1 = document.getElementById("input1").value;
	var input2 = document.getElementById("input2").value;
	var result = document.getElementById("output");
	result.textContent = "";

	if (input1.length < 8) {
		result.textContent = "Password must be at least 8 characters long.";
		return;
	}

	if (input1 !== input2) {
		result.textContent = "Passwords do not match.";
		return;
	}
	result.textContent = "Passwords matched and successfully created.";
	return;

}
