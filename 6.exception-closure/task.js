// Задача 1

function parseCount(value) {
    const result = Number.parseFloat(value);
    
    if (Number.isNaN(result)) {
        throw new Error("Невалидное значение"); // Генерация ошибки, если результат NaN
    }
    
    return result; // Возвращаем результат парсинга
}

function validateCount(value) {
    try {
        return parseCount(value); // Пытаемся распарсить значение
    } catch (error) {
        return error; // Возвращаем ошибку, если парсинг не удался
    }
}

// Задача 2

class Triangle {
    constructor(a, b, c) {
      if (a + b <= c || a + c <= b || b + c <= a) {
        throw new Error('Треугольник с такими сторонами не существует');
      }
      this.a = a;
      this.b = b;
      this.c = c;
    }
  
    get perimeter() {
      return this.a + this.b + this.c;
    }
  
    get area() {
      const p = this.perimeter / 2;
      const area = Math.sqrt(p * (p - this.a) * (p - this.b) * (p - this.c));
      return parseFloat(area.toFixed(3)); // Округляем до трёх знаков
    }
  }
  
  function getTriangle(a, b, c) {
    try {
      return new Triangle(a, b, c);
    } catch (e) {
      return {
        get perimeter() {
          return 'Ошибка! Треугольник не существует';
        },
        get area() {
          return 'Ошибка! Треугольник не существует';
        }
      };
    }
  }