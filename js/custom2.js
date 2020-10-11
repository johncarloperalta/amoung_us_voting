var vote_count = {
	red : 0,
	yellow : 0,
	green : 0,
	orange : 0,
	cyan : 0,
	magenta : 0,
	blue : 0,
	black : 0,
	violet : 0,
	pink : 0,
};

$(document).ready(
	function(){
		$("#div1").click(
			function(){
				vote_count.red++;
				$("#p1vote").html("("+vote_count.red+")");
			}
		);
	$("#div2").click(
			function(){
				vote_count.yellow++;
				$("#p2vote").html("("+vote_count.yellow+")");
			}
		);
		$("#div3").click(
			function(){
				vote_count.green++;
				$("#p3vote").html("("+vote_count.green+")");
			}
		);
		$("#div4").click(
			function(){
				vote_count.orange++;
				$("#p4vote").html("("+vote_count.orange+")");
			}
		);
		$("#div5").click(
			function(){
				vote_count.cyan++;
				$("#p5vote").html("("+vote_count.cyan+")");
			}
		);
		$("#div6").click(
			function(){
				vote_count.magenta++;
				$("#p6vote").html("("+vote_count.magenta+")");
			}
		);
		$("#div7").click(
			function(){
				vote_count.blue++;
				$("#p7vote").html("("+vote_count.blue+")");
			}
		);
		$("#div8").click(
			function(){
				vote_count.black++;
				$("#p8vote").html("("+vote_count.black+")");
			}
		);
		$("#div9").click(
			function(){
				vote_count.violet++;
				$("#p9vote").html("("+vote_count.violet+")");
			}
		);
		$("#div10").click(
			function(){
				vote_count.pink++;
				$("#p10vote").html("("+vote_count.pink+")");
			}
		);
	}
);