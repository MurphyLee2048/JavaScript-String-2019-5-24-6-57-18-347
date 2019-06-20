// 阅读以上推荐链接，了解所有的JavaScript字符串方法。


// 完成下面程序，将`name`变量中的字母全部转为为大写，输出：`'HELLO'`。
var name = 'hello';
// TODO write your code here...
name = name.toLocaleUpperCase();
console.log(name);  // 调试用

// 完成下面程序，将sentence变量中的所有单词首字母变为大写，输出：'Good Afternoon, Mr Mike.'。
var sentence = 'good afternoon, mr mike.';
//TODO write your code here...
sentence = sentence.substring(0,1).toLocaleUpperCase() + sentence.substring(1,16) + sentence.substring(16,17).toLocaleUpperCase() + sentence.substring(17);
console.log(sentence);
console.log(sentence.replace(/(\s|^)[a-z]/g, c => c.toUpperCase()));

// 完成下面程序，将money变量中的金额提取出来，输出：20。
var money = '￥20';
//TODO write your code here...
console.log(money.substring(1));
