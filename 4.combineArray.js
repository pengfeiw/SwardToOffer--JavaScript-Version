//题目：
//  合并两个有序整数数组，合并后的数组还是有序的

function combineArray(arr1, arr2){
    var resArr = [];
    for(var i = 0, j = 0; i < arr1.length && j < arr2.length;){
        if (arr1[i] < arr2[j]){
            resArr.push(arr1[i]);
            i++;
        }
        else {
            resArr.push(arr2[j]);
            j++;
        }
    }

    if (i < arr1.length){
        resArr.push(...arr1.slice(i));
    }
    if (j < arr2.length){
        resArr.push(...arr2.slice(j));
    }

    return resArr;
}

console.log(combineArray([1, 3, 5, 7, 9], [2, 4, 6, 8, 10]));
console.log(combineArray([1, 3, 5, 7, 9], [2, 2, 6, 8, 10, 12, 13]));
console.log(combineArray([1, 9], [2, 4, 6, 8, 10]));