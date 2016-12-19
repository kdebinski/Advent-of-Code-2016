var fs = require("fs");
var rows;
var result = 0;
var number_and_checksum,number,checksum,letters;
var toEncrypt =[];
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
			toEncrypt.push([splitted.slice(0,splitted.length-1).join("-").replace(/-/g, ' '),number]);
		}
	}

	var result = encrypt(toEncrypt);
	console.log(result.filter(northpole));

}

function northpole(element, index, array) {
  var patt = new RegExp("pole");
  return patt.test(element[0]);
}

function encrypt(toEncrypt){
	var result = [];
	for(var c=0;c<toEncrypt.length;c++){
		result.push([Caesar(toEncrypt[c][0],toEncrypt[c][1]),toEncrypt[c][1]]);
	}
	return result;
}


// Got this function from 
// https://gist.github.com/EvanHahn/2587465

function Caesar(str, amount) {
	// Wrap the amount
	if (amount < 0)
		return Caesar(str, amount + 26);

	// Make an output variable
	var output = '';

	// Go through each character
	for (var i = 0; i < str.length; i ++) {
		// Get the character we'll be appending
		var c = str[i];
		// If it's a letter...
		if (c.match(/[a-z]/i)) {
			// Get its code
			var code = str.charCodeAt(i);
			// Uppercase letters
			if ((code >= 65) && (code <= 90))
				c = String.fromCharCode(((code - 65 + amount) % 26) + 65);
			// Lowercase letters
			else if ((code >= 97) && (code <= 122))
				c = String.fromCharCode(((code - 97 + amount) % 26) + 97);
		}
		// Append
		output += c;
	}
	// All done!
	return output;
};


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

