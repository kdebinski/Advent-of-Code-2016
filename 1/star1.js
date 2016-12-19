var fs = require("fs");
var moves;
var north_steps= 0,
south_steps = 0,
east_steps = 0,
west_steps  = 0;
const NORTH = 0, EAST = 1, SOUTH = 2, WEST = 3;
var current_direction = 0;
var vals, step_dir,step_val;

fs.readFile('input.txt', 'utf8', function (err,data) {
  moves = data.split(", ");
  count(moves);
});
function count(moves){
	for(var i=0;i<moves.length;i++){
		step_dir = moves[i].slice(0,1);
		step_val = parseInt(moves[i].slice(1,moves[i].length));
		current_direction = rotate(current_direction,step_dir);
		move(current_direction,step_val);
	}

	var result = north_steps>south_steps?(north_steps-south_steps):(south_steps-north_steps);
	result += east_steps>west_steps?(east_steps-west_steps):(west_steps-east_steps);

	console.log("Result: "+result);
}

function rotate(cur,dir){
	if(dir=="L"){
		if(cur == NORTH){
			return WEST;
		}else{
			return --cur;
		}
	}
	else{
		if(cur == WEST){
			return NORTH;
		}else{
			return ++cur;
		}		
	}
}

function move(cur,val){
	switch(cur){
		case NORTH:
		north_steps +=val;
		break;
		case EAST:
		east_steps +=val;
		break;
		case SOUTH:
		south_steps +=val;
		break;
		case WEST:
		west_steps +=val;
		break;
	}
}


