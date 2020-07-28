//题目：
//  用“20%“替换掉字符串中所有的空格

function replaceSpace(str){
    var regx = /\s/g;
    return str.replace(regx, "20%");
}

//测试
console.log(replaceSpace("Hello wrold, hello Js."));
console.log(replaceSpace("Hello   wrold, hello Js."));