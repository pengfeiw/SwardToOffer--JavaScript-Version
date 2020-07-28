//题目：
//      题目： 在一个二维数组 中，每一行都按照从左到右递增的顺序排序，每一列都按照从上到下递增的顺序排序。 
// 请 完成一个 函数， 输入这样的一个二维数组和一个整数，判断数组中是否含有该整数。

//算法思路：
//      从数组右上角开始循环，每次判断右上角的数字是否等于要查找的值，如果等于则返回true，如果大于，则该列可以直接从要查找的范围中删除，因为该列都大于要查找的值。
//如果右上角的数字小于要查找的值，则该行可以直接从要查找的范围中删除，因为该行都小于要查找的值。用这样的方法每次缩小查找范围。
//      也可以从左下角开始判断。

function searchValue(twoDimensionArray, value){
	// var row = 0;
	var col = Math.max(...twoDimensionArray.map(arr => arr.length - 1));

	for (let curRow = 0; curRow < twoDimensionArray.length; curRow++){
		for(let curCol = Math.min(twoDimensionArray[curRow].length - 1, col); curCol >= 0; curCol--){
			let curValue = twoDimensionArray[curRow][curCol];
			if (curValue === value){
				return true;
			}
			else if(curValue > value){
				col = curCol - 1;
			}
			else {
				// row++;
				break;
			}
		}
	}

	return false;
}

//测试
var twoDimensionArray = [
	[1, 2, 8, 9],
	[2, 4, 9, 12],
	[4, 7, 10, 13],
	[6, 8, 11, 15]
];

console.log(searchValue(twoDimensionArray, 7))	//true
console.log(searchValue(twoDimensionArray, 10))	//true
console.log(searchValue(twoDimensionArray, 3))	//false
console.log(searchValue(twoDimensionArray, 13))	//true
console.log(searchValue(twoDimensionArray, 5))	//false

console.log("----------------------")

twoDimensionArray = [
	[1, 2, 8, 9],
	[2, 4, 9, 12],
	[4, 7, 10],
	[5, 6, 8, 11, 15,]
];

console.log(searchValue(twoDimensionArray, 7))	//true
console.log(searchValue(twoDimensionArray, 10))	//true
console.log(searchValue(twoDimensionArray, 3))	//false
console.log(searchValue(twoDimensionArray, 13))	//false
console.log(searchValue(twoDimensionArray, 5))	//true
console.log(searchValue(twoDimensionArray, 0))	//true