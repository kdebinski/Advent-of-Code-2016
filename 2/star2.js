var fs = require("fs");
var moves;
var result = [];
var letters;
var x,y;
var buttons =[];
buttons.push(['x','x','x','x','x','x','x']);
buttons.push(['x','x','x', 1, 'x','x','x']);
buttons.push(['x','x', 2,  3,  4, 'x','x']);
buttons.push(['x', 5,  6,  7,  8,  9, 'x']);
buttons.push(['x','x','A','B','C','x','x']);
buttons.push(['x','x','x','D','x','x','x']);
buttons.push(['x','x','x','x','x','x','x']);

fs.readFile('input.txt', 'utf8', function (err,data) {
  moves = data.split("\r\n");
  resolve(moves);
});
//(	0	-1	-2)
//	1	2	3
//	4	5	6
//	7	8	9
//(	10	11	12)
function resolve(moves){
	for(var i=0;i<moves.length;i++){
		y=3;
		x=1;
		letters = moves[i].split("");
		for(var j=0;j<letters.length;j++){
			switch(letters[j]){
				case 'U':
				if(buttons[y-1][x]!='x'){
					y=y-1;
				}
				break;
				case 'D':
				if(buttons[y+1][x]!='x'){
					y=y+1;
				}
				break;
				case 'R':
				if(buttons[y][x+1]!='x'){
					x=x+1;
				}
				break;
				case 'L':
				if(buttons[y][x-1]!='x'){
					x=x-1;
				}
				break;
			}
		}
		result.push(buttons[y][x]);
	}
	console.log(result);

}