// Задание 1. Запросить имя и вывести его в окнах.

alert("Hello");

function nameRequest() {
    let name= prompt("Как вас зовут?");
    return name;
}

function nameAlert(name) {
    alert(`Здравствуйте, ${name}`);
}

let greet = nameRequest();
nameAlert(greet);

// Задание 2. Использовать конструкция  switch-case.

let age = parseInt(prompt("Сколько Вам лет?"));

switch (age) {
    case 18:
        alert("Вы совершеннолетний, все можно!");
        break;
    case 10:
        alert("Вам надо учить уроки!");
        break;    
    case 30:
        alert("Ложитесь спать, завтра на работу");
        break;
    default:
        alert("Мы не ведаем, что вам делать");    
}

// Дополнительное задание 1. Сделать кнопку, меняющую цвет и текст элемента <p>

function changeTextAndColor() {
    let p = document.getElementsByTagName("p")
    // console.log(p)
    for (var i = 0; i < p.length; i++) {
        p[i].classList.add("active")
    }
}


let buTTon = document.getElementById('btn');
// console.log(buTTon);
buTTon.addEventListener("click", changeTextAndColor)

// Дополнительное задание 2. Сделать кнопку, чтобы менялся цвет элементов <ul>, <li>.

function changeColorOfList() {
    let lst = document.getElementsByTagName("li")
    for (var i = 0; i < lst.length; i++) {
        lst[i].classList.add("active")
    }

    let lst2 = document.getElementsByTagName("ul")
    for (var i = 0; i < lst2.length; i++) {
        lst2[i].classList.add("active")
    }
}

let buTTon2 = document.getElementById('btn2');
// console.log(buTTon);
buTTon2.addEventListener("click", changeColorOfList)

