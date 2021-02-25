function initCarousel() {
  
  let btnleft = document.querySelector(".carousel__arrow_left");
  let btnright = document.querySelector(".carousel__arrow_right");
  let crsl = document.querySelector(".carousel__inner");
  let a = crsl.offsetWidth;
  let c = 3*a; 
  let b = 0;
  if (b ==0){btnleft.style.display = 'none'}else{btnleft.style.display = ''};

  
  function setAtt() {
    b = b-a;
    if (b ==0){btnleft.style.display = 'none'}else if (b == -c){btnright.style.display = 'none'} else {btnleft.style.display = '';
    btnright.style.display = ''};
    crsl.style.transform = 'translateX(' + b + 'px)';
  }
  function setAtt2() {
    b = b+a;
    if (b ==0){btnleft.style.display = 'none'}else if (b == -c){btnright.style.display = 'none'} else {btnleft.style.display = '';
    btnright.style.display = ''};
    crsl.style.transform = 'translateX(' + b + 'px)';
  }

  btnleft.addEventListener( "click" , setAtt2);
  btnright.addEventListener( "click" , setAtt);

}
