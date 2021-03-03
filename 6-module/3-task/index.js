import createElement from '../../assets/lib/create-element.js';

export default class Carousel {
  constructor(slides) {
    this.slides = slides;
    this.render();
    this.b = 0;
    this.num = 0;
    //this.slides = document.querySelector(".carousel__slide");
    //this.attr = this.slides.getAttribute("data-id");
  }

  render() {
    let DIV = document.createElement('DIV');
    this.elem = DIV;
    DIV.classList.add("carousel");
    DIV.insertAdjacentHTML('beforeEnd',`<div class="carousel__arrow carousel__arrow_right">
    <img src="/assets/images/icons/angle-icon.svg" alt="icon">
  </div><div class="carousel__arrow carousel__arrow_left" style = "display: none;">
  <img src="/assets/images/icons/angle-left-icon.svg" alt="icon">
</div>`);
    DIV.insertAdjacentHTML('beforeEnd', `<div class="carousel__inner"></div>`);
    
    for (let slidesItem of this.slides) {
      DIV.children[2].insertAdjacentHTML('beforeEnd', `<div class="carousel__slide" data-id="${slidesItem.id}">
      <img src="/assets/images/carousel/${slidesItem.image}"class="carousel__img" alt="slide">
      <div class="carousel__caption">
        <span class="carousel__price">€${slidesItem.price.toFixed(2)}</span>
        <div class="carousel__title">${slidesItem.name}</div>
        <button type="button" class="carousel__button">
          <img src="/assets/images/icons/plus-icon.svg" alt="icon">
        </button>
      </div>
      </div>`);
    }

    DIV.addEventListener('click', this.onClick.bind(this));

    return DIV;
  }
  onClick(event) {

    
    let aaa = document.querySelector(".carousel");
    let target = event.target;
    let parent = target.parentElement;
    let slides = aaa.getElementsByClassName("carousel__slide");
    let attr;

    let btnleft = document.querySelector(".carousel__arrow_left");
    let btnright = document.querySelector(".carousel__arrow_right");
    let crsl = document.querySelector(".carousel__inner");
    let a = crsl.offsetWidth;
    let c = (this.slides.length-1)*a; 
    let b = this.b;


    if (event.target.className === 'carousel__button' || parent.className === 'carousel__button' ) {


      for(let i=0; i<=slides.length-1; i++){
        attr = slides[this.num].dataset.id;
      }

      const ev = new CustomEvent("product-add", {
        detail: attr, // Уникальный идентификатора товара из объекта слайда
        bubbles: true // это событие всплывает - это понадобится в дальнейшем
      })
      this.elem.dispatchEvent(ev);
    }
    
    if (event.target.className === 'carousel__arrow carousel__arrow_right' || parent.className === 'carousel__arrow carousel__arrow_right') {
      b = b-a;
      this.b = b;
      if (b ==0){btnleft.style.display = 'none'}else if (b == -c){btnright.style.display = 'none'} else {btnleft.style.display = '';
      btnright.style.display = ''};
      crsl.style.transform = 'translateX(' + b + 'px)';
      this.num++;
    }

    if (event.target.className === 'carousel__arrow carousel__arrow_left' || parent.className === 'carousel__arrow carousel__arrow_left') {
      b = b+a;
      this.b = b;
      if (b ==0){btnleft.style.display = 'none'}else if (b == -c){btnright.style.display = 'none'} else {btnleft.style.display = '';
      btnright.style.display = ''};
      crsl.style.transform = 'translateX(' + b + 'px)';
      this.num--;
    }
    
    
  }
}
