
// var a=new Array(5);
// var b=new Array(5);
// var array=a;
// var variable=b;
// var i;
// for(i=0;i<5;i++){
// 	array[i]=Number(prompt("a ="));
// 	variable[i]=Number(prompt("b ="));
// }
// document.write("a=");
// for(i=0;i<5;i++){
// 	var x=(array[i]+" ");
// 	document.write(x);	
// }
//  document.write("<br/>b=");
// for(i=0;i<5;i++){
// 	var y=(variable[i]+" ");
// 	document.write(y);
// }
// document.write(" <br/><hr/>c=");
// var sum=new Array(5);
// for (i=0;i<5;i++){
// 	sum[i]=array[i]+variable[i];
// }
// for(i=0;i<5;i++){
// 	document.write(sum[i]+" ");
// }
// var totalSum=0;
// for(i=0;i<5;i++){
// 	totalSum+=(sum[i]);
// }

// document.write(" <br/><button class='btn btn-primary'> Total Sum = </button> <a href='#' class='btn btn-danger'>" + totalSum + "</a>");


// var newNumber=[1,2,8,9,62,96,4,67];
// newNumber.sort(function(a,b){
// 	return a-b;
// });
// document.write(newNumber+"<br>");
// newNumber.sort(function(a,b){
// 	return b-a;
// });
// document.write(newNumber+"<br>");

// var newNumber=["Anis1","Jewel","Faysal","Ariyan","Arish","Anis2"];
// newNumber.sort();
// document.write(newNumber+"<br>");



// var newNumber=["Anis1","Jewel","Faysal","Ariyan","Arish","Anis2"];
// newNumber.sort();
// newNumber.reverse();
// document.write(newNumber);





// 1D Diamentional
// function highestScore(score){
// 	var max =score[0];
// 	for(var i=0;i<score.length;i++){
// 		if(max<score[i]) {
// 			max=score[i];
// 		}
// 	}
// 	return max;
// };
// var a=[525,60,90,53,235,65];
//  var maxScore=highestScore(a);
//  document.write(maxScore);




// 2D Diamentional
// function diamentional(point){
// 	var highPointer=point[0][0];
// 	var highPoint=point[0][1];
// 	for(var i=0;i<point.length;i++){
// 		if(highPoint < array[i][1]){
// 			highPoint=array[i][1];
// 			highPointer=array[i][0];
// 		}
// 	}
// 	return highPointer;
// }
// var array=[
// 	["Sifat",60],
// 	["Jewel",85],
// 	["Faysal",86],
// 	["Rakib",91]
// ];
// var success=diamentional(array);
// document.write(success);


// var row,col;
// for(row=2;row<3;row--){
//     for(col=2;col<=row;col--){
//         document.write("*");
//     }
//     document.write("<br>");
// }
//  var a = Number(prompt());
//  var b = Number(prompt());
//  var c = Number(prompt());
//  var large = Math.max(a,b,c);
//  document.write("Large Number = "+large);

var yourNum = Number(prompt("Enter Number between 1-6: "));
var comNum = Math.floor(Math.random()*5+1);
if(yourNum == comNum)
document.write("You Won!!👏")
else
document.write("You failed😢 <br> Computer Number is "  + comNum);

