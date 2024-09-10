let countOfPeople = +prompt('Количество человек: ');
let bill = +prompt('Сумма счета: ');
let tip = +prompt('Чаевые в процентах: ');

Number.isNaN(countOfPeople)
 || Number.isNaN(bill) 
 || Number.isNaN(tip)
 || countOfPeople <= 0
 || bill <= 0 
 ? console.log('Error') 
 : console.log(`Сумма счета с чаевыми составит: 
    ${(bill * (tip/100)) + bill} \nСумма чаевых с каждого составит: ${bill * (tip/100)}`);