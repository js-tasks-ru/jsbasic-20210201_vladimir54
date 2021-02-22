function toggleText() {
  let btn = document.querySelector(".toggle-text-button");
  let text = document.querySelector("#text");

  function setAtt() {
    if (text.hasAttribute('hidden') == true){
      text.hidden = false;
    }else{text.hidden = true;}
  }
  btn.addEventListener( "click" , setAtt);

}
