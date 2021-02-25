function hideSelf() {
  let btn = document.querySelector(".hide-self-button");
	
  function setAtt(){	
		btn.setAttribute('hidden', true);
	}

	btn.addEventListener( "click" , setAtt);
}
