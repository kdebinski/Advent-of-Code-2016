var fs = require("fs");
var rows;
var result = 0;
var number_and_checksum,number,checksum,letters;
fs.readFile('input.txt', 'utf8', function (err,data) {
  rows = data.split("\r\n");
  resolve(rows);
});
function resolve(rows){
	var splitted;
	for(var i=0;i<rows.length;i++){
		splitted = rows[i].split("-")
		letters = splitted.slice(0,splitted.length-1).join("");
		number_and_checksum = splitted[splitted.length-1];
		number = Number(number_and_checksum.slice(0,3));
		checksum = number_and_checksum.slice(4,9);
		checksum_letters = checksum.split("");

		var letter_counter = count_letters(letters);
		letter_counter.sort(sorter);

		found = 0;
		for(var l=0;l<checksum_letters.length;l++){
			if(checksum_letters[l]!=[letter_counter[l][0]]){
				break;
			}else{
				found++;
			}
		}
		if(found==5){
			result+=number;
		}


	}
	console.log("RESULT: "+result);
}

function sorter(a,b){
		if(b[1]==a[1]){
			return sorter2(a,b);
		}else{
			return b[1]-a[1];	
		}
}
function sorter2(a,b){
   if (a[0] < b[0]) return -1;
   if (a[0] > b[0]) return 1;
   return 0;

}
function count_letters(letters){
	var result = [];
	var letter_with_counter;
	single_letters = letters.split("");
	for(var i=0;i<single_letters.length;i++){
		var index = look_for_letter(single_letters[i],result); 
		if(index > -1){
			result[index][1]++;
		}else{
			result.push([single_letters[i],1])
		}
	}
	return result;
}
function look_for_letter(letter,result){
	if(result.length == 0){
		return -1;
	}else{
		for(var l=0;l<result.length;l++){
			if(result[l][0]==letter){
				return l;
			}
		}
		return -1;
	}
}

