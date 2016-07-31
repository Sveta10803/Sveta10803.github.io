var element = document.createElement('div');
element.classList.add('head');
element.innerHTML = 'Тест по программированию';
document.body.appendChild(element);


var element = document.createElement('p');
element.classList.add('header');
element.innerHTML = '<p>1.Вопрос №1</p>';
document.body.appendChild(element);


var test = document.createElement('ul');
test.classList.add('test');
test.innerHTML = '<ul><li><input type="checkbox" />Вариант ответа №1</li><li><input type="checkbox" />Вариант ответа №2</li><li><input type="checkbox" />Вариант ответа №3</li></ul>';
document.body.appendChild(test);

var element = document.createElement('p');
element.classList.add('header');
element.innerHTML = '<p>2.Вопрос №2</p>';
document.body.appendChild(element);

var test = document.createElement('ul');
test.classList.add('test');
test.innerHTML = '<ul><li><input type="checkbox" />Вариант ответа №1</li><li><input type="checkbox" />Вариант ответа №2</li><li><input type="checkbox" />Вариант ответа №3</li></ul>';
document.body.appendChild(test);


var element = document.createElement('p');
element.classList.add('header');
element.innerHTML = '<p>3.Вопрос №3</p>';
document.body.appendChild(element);

var test = document.createElement('ul');
test.classList.add('test');
test.innerHTML = '<ul><li><input type="checkbox" />Вариант ответа №1</li><li><input type="checkbox" />Вариант ответа №2</li><li><input type="checkbox" />Вариант ответа №3</li></ul>';
document.body.appendChild(test);


var element = document.createElement('button');
element.classList.add('button');
element.innerHTML = 'Проверить мои результаты';
document.body.appendChild(element);
