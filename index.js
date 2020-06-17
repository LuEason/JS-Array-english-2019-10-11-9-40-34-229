// The writer determines whether the following variables are of type array.
var a = '[a, b, c, d]';
var b = [1, 2, 3, 4];
//TODO
console.log(typeof a);
console.log(typeof b);


// Write a program that multiplies each entry in the following array by 2。
var a = [1, 2, 3, 4, 5];
// TODO should output [2,4,6,8,10]
for(let i = 0; i < a.length; i++) {
	a[i] *= 2;
}
console.log(a);

// Write the program, according to the following requirements output results.
var colors = ["Red", "Green", "White", "Black"];
//TODO case 1 output: 'Red Green White Black'
// case 2 output: 'Red+Green+White+Black'
// case 3 output: 'Red,Green,White,Black'
function add(delimiter) {
	var tmp = '';
	for(let i = 0; i < colors.length; i++) {
		tmp += colors[i];
		if (i !== colors.length - 1) {
			tmp += delimiter;
		}
	}
	return tmp;
}
console.log(add(' '));
console.log(add('+'));
console.log(add(','));

// Write a program to sort the Numbers in the following array from largest to smallest.
var a = [5, 1, 8, 10, 4];
//TODO should output: [10,8,5,4,1]
for (let i = 1; i < a.length; i++) {
	for (let j = 0; j < i; j++) {
		if (a[i] > a[j]) {
			var temp = a[j]
			a[j] = a[i]
			a[i] = temp
		}
	}
}
console.log(a)


// Program to find the most frequent element in the following array.
var a = [3, 'a', 'a', 'a', 2, 3, 'a', 3, 'a', 2, 4, 9, 3];
//TODO should output: 'a'
var chars = [];
var time = [];
for(let i = 0; i < a.length; i++) {
	let index = chars.indexOf(a[i]);
	if(index !== -1) {
		time[index]++;
	} else {
		chars.push(a[i]);
		time.push(1);
	}
}
let max = 0;
for(let i = 1; i < time.length; i++) {
	if(time[i] > time[max]) {
		max = i;
	}
}
console.log(chars[max]);
