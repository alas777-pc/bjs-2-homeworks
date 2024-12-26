function Student(name, gender, age) {
    this.name = name;
    this.gender = gender;
    this.age = age;
    this.marks = [];
}

// Метод установки предмета
Student.prototype.setSubject = function(subjectName) {
    this.subject = subjectName;
};

// Метод добавления нескольких оценок
Student.prototype.addMarks = function(...marksToAdd) {
    if (!this.marks || this.excluded) {
        console.error("Студент отчислен или отсутствует массив оценок.");
        return;
    }
    
    for (const mark of marksToAdd) {
        this.marks.push(mark);
    }
};

// Метод вычисления среднего балла
Student.prototype.getAverage = function() {
    if (!this.marks || !this.marks.length) {
        return 0;
    }
    
    const sum = this.marks.reduce((acc, mark) => acc + mark, 0);
    return sum / this.marks.length;
};

// Метод отчисления студента
Student.prototype.exclude = function(reason) {
    delete this.subject;
    delete this.marks;
    this.excluded = reason;
};