import createElement from '../../assets/lib/create-element.js';

export default class ProductCard {
  constructor(product) {
    this.product = product;
    this.render();
  }
  render() {
    let DIV = document.createElement('DIV');
    this.elem = DIV;
    DIV.classList.add("card");
      DIV.insertAdjacentHTML('beforeEnd', `<div class="card__top"><img src="/assets/images/products/${this.product.image}" class="card__image" alt="product">
        <span class="card__price">€${this.product.price.toFixed(2)}</span>
    </div>
    <div class="card__body">
        <div class="card__title">${this.product.name}</div>
        <button type="button" class="card__button">
            <img src="/assets/images/icons/plus-icon.svg" alt="icon">
        </button>
    </div>`);

    DIV.addEventListener('click', this.onClick.bind(this));
    return DIV;
  }

  onClick(event) {


    if (event.target.tagName === 'BUTTON') {
        const ev = new CustomEvent("product-add", {
          detail: this.product.id, // Уникальный идентификатора товара из объекта товара
          bubbles: true // это событие всплывает - это понадобится в дальнейшем
        })

        this.elem.dispatchEvent(ev);
  }

}

}
