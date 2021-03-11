import createElement from '../../assets/lib/create-element.js';

export default class Modal {
  constructor() {
    this.render();
  }
  render() {
  
    let DIV = document.createElement('DIV');
    this.elem = DIV;
    DIV.classList.add("modal");
    DIV.insertAdjacentHTML('beforeEnd',` <div class="modal__overlay"></div><div class="modal__inner"><div class="modal__header">
        <button type="button" class="modal__close"><img src="/assets/images/icons/cross-icon.svg" alt="close-icon" />
        </button><h3 class="modal__title"></h3></div><div class="modal__body"></div></div>`);

        DIV.addEventListener('click', this.onClick.bind(this));
        document.addEventListener('keydown', this.onKey.bind(this));

    return DIV;

  }

  setTitle(str){
    let title = this.elem.querySelector('.modal__title');
    title.insertAdjacentHTML('beforeEnd',`${str}`);
  }

  setBody(modalBody){
    let modbody = this.elem.querySelector('.modal__body');
    modbody.insertAdjacentHTML('beforeEnd',`${modalBody.outerHTML}`);
  }

  open(){
    let body = document.querySelector('body');
    body.classList.add('is-modal-open');
    let modal = document.querySelector('.modal');
    if(modal == null){ 
      let container = document.querySelector('.container');
      container.append(this.elem);}else{modal.style.display = "block";}

  }

  close(){
      this.elem.style.display = "none";
      body.classList.remove('is-modal-open');
  }

  onClick(event) {

    let body = document.querySelector('body');
    let target = event.target;
    let parent = target.parentElement;

    if (event.target.className === "modal__close" || parent.className === "modal__close") {
      this.elem.style.display = "none";
      body.classList.remove('is-modal-open');}

  }

  onKey(event){

    let body = document.querySelector('body');

    if (event.code === 'Escape') {
      this.elem.style.display = "none";
      body.classList.remove('is-modal-open');}

  }

}
