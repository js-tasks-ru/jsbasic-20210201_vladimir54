function highlight(table) {

  for (let i = 1; i < table.rows.length; i++) {
          let sss = table.rows[i];
          let sss2 = sss.cells[3];
          if(sss2.getAttribute('data-available') == 'true'){
              sss.classList.add('available');
          }
          else if(sss2.getAttribute('data-available') == 'false'){sss.classList.add('unavailable');}
          else {sss.setAttribute('hidden', true);}

          let ss = table.rows[i];
          let ss2 = ss.cells[2];
         if(ss2.innerHTML == 'm'){
           ss.classList.add('male');
         } else{ss.classList.add('female');}

          let age = table.rows[i];
          let age2 = age.cells[1];
        if(+age2.innerHTML < 18){
           age.style="text-decoration: line-through"
         } 

    }
}
