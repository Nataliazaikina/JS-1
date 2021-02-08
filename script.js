// 1. Написать функцию, преобразующую число в объект. Передавая на вход число от 0 до 999, 
// мы должны получить на выходе объект, в котором в соответствующих свойствах описаны единицы, десятки и сотни. 
// Например, для числа 245 мы должны получить следующий объект: {‘единицы’: 5, ‘десятки’: 4, ‘сотни’: 2}. 
// Если число превышает 999, необходимо выдать соответствующее сообщение с помощью console.log и вернуть пустой объект.

// var x = (Math.random()* (999-1)+1).toFixed(0);
// var obj = {};

// obj.ed = x % 10;
// obj.des = +Math.trunc(x % 100 / 10);
// obj.sot = +Math.trunc(x % 1000 / 100);

// console.log(x);
// console.log(obj);


var mas = {
	question1: {
		quest: "Игра 'Кто хочет стать миллионером'. \nВопрос 1; Откуда сотрудники офисов наливают в чашки воду?",
		ans1: "\n1: из принтера",
		ans2: "\n2: из сканера",
		ans3: "\n3: из степлера",
		ans4: "\n4: из кулера",
		correct: 4,
	},
	question2: {
		quest: "Игра 'Кто хочет стать миллионером'. \nВопрос 2; Что построил Джек в стихотворении, переведенным с английского Маршаком?",
		ans1: "\n1: маршрут",
		ans2: "\n2: график",
		ans3: "\n3: дом",
		ans4: "\n4: коммунизм",
		correct: 3,
	},	
	question3: {
		quest: "Игра 'Кто хочет стать миллионером'. \nВопрос 3; Что такое каршеринг?",
		ans1: "\n1: секонд-хенд",
		ans2: "\n2: напольный светильник",
		ans3: "\n3: брачный танец вороны",
		ans4: "\n4: аренда автомобиля",
		correct: 4,
	}
};

	var answer = +prompt(mas.question1.quest + "Варианты ответа" + mas.question1.ans1 + mas.question1.ans2 + mas.question1.ans3 + mas.question1.ans4 + "\n Для выхода из игры введите 0");
	if (answer == 0) {
		alert("Конец игры");
	} else if (answer == mas.question1.correct) {
		alert("Вы выбрали правильный ответ");
			answer = +prompt(mas.question2.quest + "Варианты ответа" + mas.question2.ans1 + mas.question2.ans2 + mas.question2.ans3 + mas.question2.ans4 + "\n Для выхода из игры введите 0");
			if (answer == 0) {
				alert("Конец игры");
			} else if (answer == mas.question2.correct) {
				alert("Вы выбрали правильный ответ");
					answer = +prompt(mas.question3.quest + "Варианты ответа" + mas.question3.ans1 + mas.question3.ans2 + mas.question3.ans3 + mas.question3.ans4 + "\n Для выхода из игры введите 0");
					if (answer == 0) {
						alert("Конец игры");
					} else if (answer == mas.question3.correct) {
						alert("Вы выбрали правильный ответ");
						alert("Вы победили!");
						var win = 1;
						alert("Конец игры");
					} else {
						alert("Вы проиграли.");
					}
			} else {
				if (win ==1) {
					alert("Конец игры");
				} else {
					alert("Вы проиграли.");					
				};
			};
	} else {
		if (win == 1) {
			alert("Конец игры");
		} else  {
			alert("Вы проиграли.");		
		};
	}





