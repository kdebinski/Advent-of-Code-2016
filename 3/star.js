var fs = require("fs");
var triangles;
var result = 0;

fs.readFile('input.txt', 'utf8', function (err,data) {
  triangles = data.split("\r\n");
  resolve(triangles);
});

function resolve(triangles){
	for(var i=0;i<triangles.length;i++){
		var a = Number(triangles[i].slice(2,5));
		var b = Number(triangles[i].slice(7,10));
		var c = Number(triangles[i].slice(12,15));
		if(isTriangle(a,b,c)){
			result++;
		}
	}
	console.log(result);
}

function isTriangle(a,b,c){
	var resultt = false;
	if(a>0 && b>0 && c>0){
		if(((a+b)>c) && ((a+c)>b) && ((c+b)>a)){
			resultt = true;
		}
	}
	return resultt;
}

