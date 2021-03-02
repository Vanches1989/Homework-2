	//  Задание второе

		//  Задание 2/1
		//  Переменная содержит в себе строку. Вывести строку в обратном порядке.

	let string = "0123456789";

	let stringcontrary = "";

	for (let i = string.length-1; i >= 0; i--){

	stringcontrary += string[i];

	}

		console.log(stringcontrary);

		//  Задание 2/2
		//  Переменная содержит в себе число. Написать скрипт который посчитает факториал этого числа.

	let number = 10;

	let factorial = 1;

	for (let i = number; i > 1; i--){

	factorial *= i;

	}

		console.log(factorial);

		//  Задание 2/3
		//  Дано число - вывести первые N делителей этого числа нацело.

	let a = 30;

	let i = 0;

	for(let i = 0; i <= a; i++){

	if(a % i == 0){

	console.log(i);

	}

	}

		//  Задание 2/4
		//  Найти сумму цифр числа которые кратны двум

	let b = 20;

	let sum = 0;

	for(let i = 0; i <= b; i++){

	if(i % 2 == 0){

	sum += i;

	}

	}

	console.log(sum);

		//  Задание 2/5
		//  Найти минимальное число которое больше 300 и нацело делиться на 17

	let numb = 300;

	while (true){

	if(numb % 17 == 0){

	console.log(numb);

	break;

	}

		numb++;

	}

		//  Задание 2/6
		//  Заданы две переменные для двух целых чисел, найти максимальное общее значение которое нацело делит два заданных числа.

		let first  = 90;

		let second = 75;
		
		let result = first;
		
		while (true){

		if((first % result == 0 && second % result == 0)){

		console.log(result);

		break;

	}

		result--;

	}