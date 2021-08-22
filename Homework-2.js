// 1.

var a = 1, b = 1, c, d;
c = ++a; alert(c);           // 2   - ++ означает увеличение числа с шагом 1, соответственно 1+1=2
d = b++; alert(d);           // 1   - то же самое, но поскольку здесь постфиксная форма, 
                             //то сначала происходит возвращение числа, а потом инкрементирование
c = (2+ ++a); alert(c);      // 5   - в предыдущем примере к а была прибавлена единица, 
                            // теперь прибавляем еще единицу, затем прибавляем два
d = (2+ b++); alert(d);      // 4   - поскольку в пошлом примере была возвращена единица, 
                            // без прибавления чисел, то сейчас к ней также добавляем сначала единицу, потом двойку
alert(a);                    // 3   - была прибавлена единица в примере 1 и примере 3
alert(b);                   // 3   - была прибавлена единица в примере 2 и примере 4



// 2.

var a = 2;
var x = 1 + (a *= 2);

// x = 5, т.к. (a *= 2) аналогично (a = a * 2). 
// Поскольку в нашем случае результат в скобках равен 4, то после прибавления к нему единицы, 
// общий результат формулы равен пяти.



// 3.

let a = 6;
let b = 3;

if ((a % 2 === 0) && (b % 2 === 0)) {
    console.log(a-b)
} else if ((a % 2 !== 0) && (b % 2 !== 0)) {
    console.log(a*b)
} else {
    console.log(a+b)
};