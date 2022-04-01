/*
   1. Создайте функцию createButton(). Необходимо, чтобы эта функция осуществила вставку в body тег button с текстом: "Удали меня".
      При клике по button удалить этот button.
*/
export function createButton() {
    let button = document.createElement('button');
    button.textContent = 'Удали меня';
    document.body.appendChild(button);

    button.onclick = function () {
        button.remove();
    };
}

/*
   2. Создайте функцию createArrList(arr), в которую передается 1 параметр: arr - массив строк.
      Функция выводит этот массив в виде маркированного списка внутри тега body.
      При наведении курсора мыши на элемент списка у этого элемента создается атрибут title, в котором записан его текст.
*/
export function createArrList(arr) {
    let ul = document.createElement('ul');
    document.body.appendChild(ul);
    arr.forEach(function (item, i, arr) {
        let li = document.createElement('li');
        li.textContent = item;
        ul.append(li);
        li.addEventListener('mouseover', () => {
            li.title = item;
        });
    });
}

/*
   3. Создайте функцию createLink(), которая сгенерирует следующую разметку и вставит ее в body:

      <a href="https://tensor.ru/">tensor</a>

      При первом клике по ссылке в конец ее текста через пробел дописывается ее href.
      При следующем клике происходит действие по умолчанию (переход по ссылке в текущей вкладке).
*/
export function createLink() {
    let a = document.createElement('a');
    a.textContent = 'tensor';
    a.href = 'https://tensor.ru/';
    document.body.appendChild(a);
    a.addEventListener(
        'click',
        function (event) {
            a.textContent = a.textContent + ' https://tensor.ru/';
            event.preventDefault();
        },
        { passive: true },
    );
}

/*
   4. Создайте функцию createList(), которая сгенерирует следующую разметку и вставит ее в body:

      <ul>
         <li>Пункт</li>
      </ul>
      <button>Добавить пункт</button>

      При клике по элементу li ему в конец текста добавляется восклицательный знак.
      При клике по button в конец списка добавляется новый элемент li с текстом: "Пункт".
      Клик по новому li также добавляет восклицательный знак в конец текста.
*/
export function createList() {
    let ul = document.createElement('ul');
    document.body.appendChild(ul);
    let li = document.createElement('li');
    li.textContent = 'Пункт';
    li.onclick = function () {
        li.textContent = li.textContent + '!';
    };
    ul.append(li);

    let button = document.createElement('button');
    button.textContent = 'Добавить пункт';
    document.body.appendChild(button);

    button.onclick = function () {
        let lin = document.createElement('li');
        lin.textContent = 'Пункт';
        lin.onclick = function () {
            lin.textContent = lin.textContent + '!';
        };
        ul.append(lin);
    };
}
