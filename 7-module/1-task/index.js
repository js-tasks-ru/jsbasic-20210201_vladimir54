import createElement from '../../assets/lib/create-element.js';

export default class RibbonMenu {
  constructor(categories) {
    this.categories = categories;
    this.render();

  }

  render() {
    let DIV = document.createElement('DIV');
    this.elem = DIV;
    DIV.classList.add("ribbon");
    DIV.insertAdjacentHTML('beforeEnd',`<div class="ribbon__arrow ribbon__arrow_left">
    <img src="/assets/images/icons/angle-icon.svg" alt="icon"></div>`);
    
    DIV.insertAdjacentHTML('beforeEnd',`<nav class="ribbon__inner"></nav>`);

    DIV.insertAdjacentHTML('beforeEnd',`<div class="ribbon__arrow ribbon__arrow_right ribbon__arrow_visible">
    <img src="/assets/images/icons/angle-icon.svg" alt="icon"></div>`);
    
    for (let categoriesItem of this.categories) {
      DIV.children[1].insertAdjacentHTML('beforeEnd', `<a href="#" class="ribbon__item" data-id="${categoriesItem.id}">${categoriesItem.name}</a>`);
    }

    DIV.addEventListener('click', this.onClick.bind(this));

    return DIV;

  }

  onClick(event) {

    let inner = this.elem.querySelector('.ribbon__inner');
    let target = event.target;
    let parent = target.parentElement;
    

    if (event.target.className === 'ribbon__arrow ribbon__arrow_right ribbon__arrow_visible' || 
    parent.className === 'ribbon__arrow ribbon__arrow_right ribbon__arrow_visible') {
      inner.scrollBy(350, 0);
    }

    if (event.target.className === 'ribbon__arrow ribbon__arrow_left ribbon__arrow_visible' ||
     parent.className === 'ribbon__arrow ribbon__arrow_left ribbon__arrow_visible') {
      inner.scrollBy(-350, 0);
    }

    inner.addEventListener('scroll', this.onScroll.bind(this));

    if (event.target.className === 'ribbon__item') {
      let id = event.target.closest('[data-id]').dataset.id;
    const ev = new CustomEvent("ribbon-select", {
      detail: id, // Уникальный идентификатора товара из объекта слайда
      bubbles: true // это событие всплывает - это понадобится в дальнейшем
    })
    this.elem.dispatchEvent(ev);
  }

  }

  onScroll(event){

    let arrLeft = this.elem.querySelector('.ribbon__arrow_left');
    let arrRight = this.elem.querySelector('.ribbon__arrow_right');
    if (event.target.scrollLeft> 0) {
      arrLeft.classList.add('ribbon__arrow_visible');
    } else {
      arrLeft.classList.remove('ribbon__arrow_visible');
    }
    let scrollRight = event.target.scrollWidth - (event.target.scrollLeft + event.target.clientWidth);
    scrollRight = scrollRight <= 1 ? 0 : scrollRight; // Это нужно для ситуации, когда скролл произошел с погрешностью
    if (scrollRight > 0) {
        arrRight.classList.add('ribbon__arrow_visible');
    } else {
      arrRight.classList.remove('ribbon__arrow_visible');
    }

  }

}
