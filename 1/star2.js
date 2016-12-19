var fs = require("fs");
var x = 0;
var y = 0;
var visited = [];
var moves;
var north_steps= 0,
south_steps = 0,
east_steps = 0,
west_steps  = 0;
const NORTH = 0, EAST = 1, SOUTH = 2, WEST = 3;
var current_direction = 0;
var vals, step_dir,step_val;
var result_from_coords;

fs.readFile('input.txt', 'utf8', function (err,data) {
  moves = data.split(", ");
  count(moves);
});
function count(moves){
	var found=false;
	visited.push([0,0]);
	for(var i=0;i<moves.length;i++){
		step_dir = moves[i].slice(0,1);
		step_val = parseInt(moves[i].slice(1,moves[i].length));
		current_direction = rotate(current_direction,step_dir);
		move(current_direction,step_val);
		found = trace(current_direction,step_val);
		if(found){
			break;
		}
	}
	var result = north_steps>south_steps?(north_steps-south_steps):(south_steps-north_steps);
	result += east_steps>west_steps?(east_steps-west_steps):(west_steps-east_steps);

	console.log("result: "+result_from_coords);
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

function trace(cur,val){
	var bul = false;
	var arleady_visited;
	for(var j=0;j<val;j++){
		trace_step(cur);
		arleady_visited = check_if_visited(x,y);
		if(arleady_visited != null){
			result_from_coords = arleady_visited;
			bul = true;
			break;
		}else{
			visited.push([x,y]);
		}
	}
	return bul;
}
function trace_step(cur){
	switch(cur){
		case NORTH:
		y++;
		break;
		case SOUTH:
		y--;
		break;
		case EAST:
		x++;
		break;
		case WEST:
		x--;
		break;
	}

	var double = check_if_visited(x,y);

}
function check_if_visited(x,y){
	for(var i=0;i<visited.length;i++){
		if(visited[i][0]==x && visited[i][1]==y){
			return visited[i];
		}
	}
	return null;
}