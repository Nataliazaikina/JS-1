1. С помощью цикла while вывести все простые числа в промежутке от 0 до 100.

var a = 100;
var i = 99;

while(a>10 && a<=100) {
	while(i > 1) {
		while((a % i == 0) && (a % 2 != 0) && (a % 11 != 0) && (a % 5 != 0) && (a % 7 != 0) && (a % 3 != 0)) {
			document.write(a);
			break;
		}
		i--;
	}	
	a--;
	i = a;
}
a = 11;
while(a>3 && a<=11) {
		while(a % 2 != 0) {
			while(a % 3 != 0) {
				document.write(a);
				break;
			}
		} 
	a--;
}
alert(a);



2. С этого урока начинаем работать с функционалом интернет-магазина. Предположим, есть сущность корзины. Нужно реализовать функционал подсчета стоимости корзины в зависимости от находящихся в ней товаров.
var totalPrice = 0;
var goods = [
	{
		title: "Товар 1",
		price: 100
	},
	{
		title: "Товар 2",
		price: 200
	},
	{
		title: "Товар 3",
		price: 300
	}
]
for(var good of goods) {
	totalPrice += +good.price;
}
alert(totalPrice);

3. Товары в корзине хранятся в массиве. Задачи:

a) Организовать такой массив для хранения товаров в корзине;

b) Организовать функцию countBasketPrice, которая будет считать стоимость корзины.

var products = [];
var n = +prompt("Введите количество товара ");
var sum;
for (var i = 0; i <= (n-1); i++) {
	var a = prompt("Введите товар ");
	var price = +prompt("Введите цену товара" + (i+1));
	products[a] = [];
	products[a].push(price);
	sum += +products[i][a]; // не знаю как вывести значение элемента
}
alert(sum);


4.*Вывести с помощью цикла for числа от 0 до 9, не используя тело цикла. Выглядеть это должно так:

for(…){// здесь пусто}

for(var i = 0; i < 10; i++) {
	console.log(i);
}

5. *Нарисовать пирамиду с помощью console.log, как показано на рисунке, только у вашей пирамиды должно быть 20 рядов, а не 5:

x
xx
xxx
xxxx
xxxxx

for (var i = 1; i <= 20; i++) {
	for (var count = i; (count <= i) && (count > 0); count--) {
 		console.log('x');
	}
	console.log('');
}
