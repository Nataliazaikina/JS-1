1. Дан код:

var a = 1, b = 1, c, d;
c = ++a; alert(c);           // 2 при префиксной форме, переменной а сначала добавляется 1, то есть а становится равной 2
d = b++; alert(d);           // 1 при постфиксной форме сначала переменной d присваивается значение переменной b, равной 1, а уже потом переменная b увеличивается на 1
c = (2+ ++a); alert(c);      // 5 после первого действия, а=2; теперь снова увеличиваем а на 1. Следовательно а=3. с=2+3=5
d = (2+ b++); alert(d);      // 4 после второго действия b=2. Этим действием b=3, но так как форма постфиксная сначала происходит сложение. d=2+2=4
alert(a);                    // 3 а из третьего действия =3
alert(b);                    // 3 b из четвертого действия =3
Почему код даёт именно такие результаты?

2. Чему будет равен x в примере ниже?

var a = 2;
var x = 1 + (a *= 2); // x = 1+2*2 = 1+4

3. Объявить две целочисленные переменные a и b и задать им произвольные начальные значения. Затем написать скрипт, который работает по следующему принципу:

если a и b положительные, вывести их разность;
если а и b отрицательные, вывести их произведение;
если а и b разных знаков, вывести их сумму; ноль можно считать положительным числом.

var a = parseInt(Math.random() * (1000+1000)-1000);
var b = parseInt(Math.random() * (1000+1000)-1000);
alert("a = " + a +", b = " + b);
alert((a >= 0 && b >= 0) ? (a-b) : (a*b));


4. Присвоить переменной а значение в промежутке [0..15]. С помощью оператора switch организовать вывод чисел от a до 15.

var a = parseInt(Math.random() * (15-0) + 0);
alert("a = " + a);
switch(a){
	case 0:
		alert(0);
	case 1:
		alert(1);
	case 2:
		alert(2);
	case 3:
		alert(3);
	case 4:
		alert(4);		
	case 5:
		alert(5);	
	case 6:
		alert(6);	
	case 7:
		alert(7);	
	case 8:
		alert(8);
	case 9:
		alert(9);	
	case 10:
		alert(10);
	case 11:
		alert(11);
	case 12:
		alert(12);
	case 13:
		alert(13);
	case 14:
		alert(14);	
	case 15:
		alert(15);						
}

5. Реализовать основные 4 арифметические операции в виде функций с двумя параметрами. Обязательно использовать оператор return.

var a = 13;
var b = 89;

function sum(a, b) {
	a = a + b;
	return(a);
}
alert(sum(a, b));
alert("сумма = " + a);

function minus(a, b) {
	a = a - b;
	return(a);
}
minus(a, b);
alert("разность = " + a);

function multiplication(a, b) {
	a = a * b;
	return(a);
}
multiplication(a, b);
alert("умножение = " + a);

function division(a, b) {
	a = a / b;
	return(a);
}
division(a, b);
alert("деление = " + a);


6. Реализовать функцию с тремя параметрами: function mathOperation(arg1, arg2, operation), где arg1, arg2 – значения аргументов, operation – строка с названием операции. В зависимости от переданного значения операции выполнить одну из арифметических операций (использовать функции из пункта 3) и вернуть полученное значение (использовать switch).

var a = 0;
var b = 0;

function sum(a, b) {
	a = a + b;
	return(a);
}
function minus(a, b) {
	a = a - b;
	return(a);
}
function multiplication(a, b) {
	a = a * b;
	return(a);
}
function division(a, b) {
	a = a / b;
	return(a);
}

var arg1 = 10, arg2 = 15;
var operation = prompt("Введите действие, которое необходимо произвести: + , - , * , / ");
function mathOperation(arg1, arg2, operation) {
	switch(operation) {
		case "+":
			alert(sum(arg1, arg2));
			break;
		case "-":
			alert(minus(arg1, arg2));
			break;
		case "*":
			alert(multiplication(arg1, arg2));
			break;
		case "/":
			alert(division(arg1, arg2));
			break;			
	}
}
mathOperation(arg1, arg2, operation);


7. *Сравнить null и 0. Попробуйте объяснить результат.



 8. *С помощью рекурсии организовать функцию возведения числа в степень. Формат: function power(val, pow), где val – заданное число, pow – степень.

var val = +prompt("Введите число");
var pow = +prompt("Введите степень числа");
var result = 1;
function power(val, pow) {
	if (pow >= 1) {
		result *= val;
		pow--;
		power(val, pow);
	} else {
		alert(result);	
	}
}
power(val, pow);





