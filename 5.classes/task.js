// Задача 1

class PrintEditionItem {
    constructor(name, releaseDate, pagesCount) {
        this.name = name;
        this.releaseDate = releaseDate;
        this.pagesCount = pagesCount;
        this._state = 100; 
        this.type = null; 
    }

    
    fix() {
        this._state *= 1.5; 
        if (this._state > 100) {
            this._state = 100; 
        }
    }

    
    set state(value) {
        if (value < 0) {
            this._state = 0; 
        } else if (value > 100) {
            this._state = 100; 
        } else {
            this._state = value;
        }
    }

    
    get state() {
        return this._state;
    }
}


class Magazine extends PrintEditionItem {
    constructor(name, releaseDate, pagesCount) {
        super(name, releaseDate, pagesCount);
        this.type = "magazine"; 
    }
}


class Book extends PrintEditionItem {
    constructor(author, name, releaseDate, pagesCount) {
        super(name, releaseDate, pagesCount);
        this.author = author; 
        this.type = "book"; 
    }
}


class NovelBook extends Book {
    constructor(author, name, releaseDate, pagesCount) {
        super(author, name, releaseDate, pagesCount);
        this.type = "novel"; 
    }
}


class FantasticBook extends Book {
    constructor(author, name, releaseDate, pagesCount) {
        super(author, name, releaseDate, pagesCount);
        this.type = "fantastic"; 
    }
}


class DetectiveBook extends Book {
    constructor(author, name, releaseDate, pagesCount) {
        super(author, name, releaseDate, pagesCount);
        this.type = "detective"; 
    }
}


// Задача 2

class Library {
    constructor(name) {
        this.name = name; 
        this.books = []; 
    }

    
    addBook(book) {
        if (book.state > 30) {
            this.books.push(book); 
        }
    }

    
    findBookBy(type, value) {
        for (let book of this.books) {
            if (book[type] === value) {
                return book; 
            }
        }
        return null; 
    }

    
    giveBookByName(bookName) {
        const bookIndex = this.books.findIndex(book => book.name === bookName);
        if (bookIndex !== -1) {
            return this.books.splice(bookIndex, 1)[0]; 
        }
        return null; 
    }
}

// Пример использования

const library = new Library("Библиотека имени Ленина");

library.addBook(
    new DetectiveBook(
        "Артур Конан Дойл",
        "Полное собрание повестей и рассказов о Шерлоке Холмсе в одном томе",
        2019,
        1008
    )
);
library.addBook(
    new FantasticBook(
        "Аркадий и Борис Стругацкие",
        "Пикник на обочине",
        1972,
        168
    )
);
library.addBook(new NovelBook("Герберт Уэллс", "Машина времени", 1895, 138));
library.addBook(new Magazine("Мурзилка", 1924, 60));

// Пробуем найти книгу, не существующую в библиотеке
console.log(library.findBookBy("name", "Властелин колец")); //null
// Пробуем найти книгу, существующую в библиотеке
console.log(library.findBookBy("releaseDate", 1924).name); //"Мурзилка"

console.log("Количество книг до выдачи: " + library.books.length); //Количество книг до выдачи: 4
library.giveBookByName("Машина времени");
console.log("Количество книг после выдачи: " + library.books.length); //Количество книг после выдачи: 3

// Тестирование восстановления и повреждения книги
const timeMachineBook = library.giveBookByName("Машина времени");
console.log(timeMachineBook.state); // Проверяем состояние книги, должно быть 100
timeMachineBook.state = 20; // Повреждаем книгу
console.log(timeMachineBook.state); // Проверяем состояние книги, должно быть 20

// Восстанавливаем книгу
timeMachineBook.fix();
console.log(timeMachineBook.state); // Проверяем состояние книги, должно быть 30

// Пытаемся добавить восстановленную книгу обратно в библиотеку
library.addBook(timeMachineBook);
console.log("Количество книг после возврата восстановленной книги: " + library.books.length); // Количество книг должна остаться 3