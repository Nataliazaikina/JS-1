//После игры необходимо спросить номер вопроса. 
//По номеру вопроса нужно вывести текст вопроса и текст выбранного ответа

var event, ok;

var answers = [];

toDo(works.a00, works.a0, works.a1, works.a2);

switch (event) {
    case 1: // Первое действие  - если в первом окне ввели 1 то открываем серию окон - окно 2
        toDo(works.b00, works.b0, works.b1, works.b2);
        switch (event) {
            case 1: // Второе действие, если во 2 окне ввели 1 то переходим на 4 окно
                toDo2(works.d00, works.d0, works.d1, works.d2);
                break;
            case 2: // Второе действие   Если ввели 2 то также переходим на 4 окно
                toDo2(works.d00, works.d0, works.d1, works.d2);

                break;
            case -1: // Второе действие
                break;
            default:
                alert('Ошибка');
        }
        break;
    case 2: // Первое действие    Если в 1 окне ввели 2 то переходим к 3 окну
        toDo(works.c00, works.c0, works.c1, works.c2);
        switch (event) {
            case 1: // Второе действие
                toDo2(works.d00, works.d0, works.d1, works.d2);
                break;
            case 2: // Второе действие
                toDo2(works.d00, works.d0, works.d1, works.d2);
                break;
            case -1: // Второе действие
                break;
            default:
                alert('Ошибка');
        }
        break;
    case -1: // Первое действие
        break;
    default:
        alert('Ошибка');
}
alert("Ваши ответы: \n" + answers);
alert('Спасибо за игру');

//------------------------------------------
function isAnswer(q, event) {
    if (isNaN(event) || !isFinite(event)) {
        alert('Вы ввели недопустимый символ');
        return false;
    }
    else if (event < 1 || event > q) {
        alert('Ваше число выходит из допустимого диапозона');
        return false;
    }
	return true;
    
}

function toDo(quest, quantity, ans1, ans2) {
    do {//Выводим первый вопрос
        ok = false;
        event = +prompt(quest + ans1 + ans2 + '-1 - Выход из игры');
       
        if (event == -1) {
            break;
        }
        else {
            ok = isAnswer(quantity, event);
            switch (event) {
                case 1:
                    answers.push([quest, ans1]);
                    break;
                case 2:
                    answers.push([quest, ans2]);
            }
            
        }
    } while (!ok);
}
function toDo2(quest, quantity, ans1, ans2) {
    do {//Выводим первый вопрос
        ok = false;
        event = +prompt(quest + ans1 + ans2 + '-1 - Выход из игры');
       
        if (event == -1) {
            break;
        }
        else {
            ok = isAnswer(quantity, event); 
        }
    } while (!ok);
}