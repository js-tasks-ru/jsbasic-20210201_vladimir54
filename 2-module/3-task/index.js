let calculator = {
  num1: 0,
	num2: 0,
	s: 0,
	m: 0,
  read(a, b)  {
  	this.num1 = +a;
 	this.num2 = +b;
  },
  sum() {
  	this.s = this.num1+this.num2;
  	return this.s;
  },
  mul() {
  	this.m = this.num1*this.num2;
  	return this.m;
  },
};

// НЕ УДАЛЯТЬ СТРОКУ, НУЖНА ДЛЯ ПРОВЕРКИ
window.calculator = calculator; // делает ваш калькулятор доступным глобально
