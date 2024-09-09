let countOfPeople = +prompt('Количество человек: ');
let bill = +prompt('Сумма счета: ');
let cash = +prompt('Чаевые в процентах: ');


let result = (bill / countOfPeople) * (cash/100);
alert(`Сумма чаевых с каждого составит: ${result}`);