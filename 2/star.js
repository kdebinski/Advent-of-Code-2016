var fs = require("fs");
var moves;
var result = [];
var letters;
var current_number;

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
		current_number  = 5;
		letters = moves[i].split("");
		for(var j=0;j<letters.length;j++){
			switch(letters[j]){
				case 'U':
				if(!isInTopBorder(current_number)){
					current_number -=3;
				}
				break;
				case 'D':
				if(!isInBottomBorder(current_number)){
					current_number +=3;
				}
				break;
				case 'R':
				if(isInRightBorder(current_number)){
					current_number +=1;
				}
				break;
				case 'L':
				if(!isInLeftBorder(current_number)){
					current_number -=1;
				}
				break;
			}
		}
		result.push(current_number);
	}
	console.log(result);

}

function isInTopBorder(number){
	if(number - 3<=0){
		return true;
	}else{
		return false;
	}
}
function isInBottomBorder(number){
	if(number + 3>=10){
		return true;
	}else{
		return false;
	}
}
function isInLeftBorder(number){
	if(number%3==1){
		return true;
	}else{
		return false;
	}
}
function isInRightBorder(number){
	if(number%3==0){
		return true;
	}else{
		return false;
	}
}
