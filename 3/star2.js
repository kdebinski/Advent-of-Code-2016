var fs = require("fs");
var rows;
var result = 0;
var t1,t2,t3
fs.readFile('input.txt', 'utf8', function (err,data) {
  rows = data.split("\r\n");
  resolve(rows);
});
function resolve(moves){
	for(var i=2;i<rows.length;i+=3){
		t1 = [Number(rows[i].slice(2,5)),Number(rows[i-1].slice(2,5)),Number(rows[i-2].slice(2,5))];
		t2 = [Number(rows[i].slice(7,10)),Number(rows[i-1].slice(7,10)),Number(rows[i-2].slice(7,10))];
		t3 = [Number(rows[i].slice(12,15)),Number(rows[i-1].slice(12,15)),Number(rows[i-2].slice(12,15))];
		
		if(isTriangle(t1)){
			result++;
		}
		if(isTriangle(t2)){
			result++;
		}
		if(isTriangle(t3)){
			result++;
		}
	}
	console.log(result);

}
function isTriangle(triangle){
	var resultt = false;	
	var a = triangle[0];
	var b = triangle[1];
	var c = triangle[2];
	
	if(a>0 && b>0 && c>0){
		if(((a+b)>c) && ((a+c)>b) && ((c+b)>a)){
			resultt = true;
		}
	}
	return resultt;
}

