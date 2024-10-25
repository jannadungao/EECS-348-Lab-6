<html>
<body>
	Multiplication Table of size: <?php echo $_GET["number"];?>
	<?php
	$rows = $_GET["number"];
	$cols = $rows;

	echo "<table border='1'>";
	echo "<td>";
	for ($colindex = 1; $colindex <=$cols; $colindex++){
		echo "<td>" . $colindex . "</td>";
	}

	echo "</td>";
	for ($i = 1; $i <= $rows; $i++) {
		echo "<tr>";
		echo "<td>". $i . "</td>";
		for ($j = 1; $j <= $cols; $j++) {
			echo "<td>" . $i * $j . "</td>";
		}
		echo "</tr>";
	}

	echo "</table border>";
	?>
</body>
</html>
