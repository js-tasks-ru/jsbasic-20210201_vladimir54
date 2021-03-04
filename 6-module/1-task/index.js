/**
 * Компонент, который реализует таблицу
 * с возможностью удаления строк
 *
 * Пример одного элемента, описывающего строку таблицы
 *
 *      {
 *          name: 'Ilia',
 *          age: 25,
 *          salary: '1000',
 *          city: 'Petrozavodsk'
 *      }
 *
 */
export default class UserTable {
  constructor(rows) {
    this.rows = rows;
    this.render();
  }
  render() {
    let TABLE = document.createElement('TABLE');
    this.elem = TABLE;
    let mybody = TABLE.createTBody();
    let myhead = TABLE.createTHead();
    myhead.insertAdjacentHTML('beforeEnd', `<tr><th>Имя</th><th>Возраст</th>
    <th>Зарплата</th><th>Город</th><th></th></tr>`);
    for (let rowsItem of this.rows) {
      mybody.insertAdjacentHTML('beforeEnd', `<tr><td>${rowsItem.name}</td><td>${rowsItem.age}</td>
      <td>${rowsItem.salary}</td><td>${rowsItem.city}</td><td><button>X</button></td></tr>`);
    }
    TABLE.addEventListener('click', this.onClick.bind(this));
    return TABLE;
  }
  onClick(event) {
        if (event.target.tagName === 'BUTTON') {
          let tr = event.target.closest('tr');
          tr.remove();
        }
  }
}