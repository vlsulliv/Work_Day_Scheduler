/*=============================================
=            SCRIPT TO CHANGE HTML           =
=============================================*/
moment().format();
let day = moment().format('MMM DD, YYYY');
console.log(moment().format('LT'));

let date = document.getElementById('currentDay');
date.innerHTML = day

document.getElementById('9am').style.color = "lightblue";



// ! DISPLAY CURRENT DATE 
let m = moment();
// let day = moment().format('MMMM Do YYYY'); 

const timeBlock = document.getElementById("currentDay");
timeBlock.innerHTML = day;

let time = m.format('LT'); // H:M AM|PM
console.log(time);


// ! USE DOM APIs TO REFERENCE ELEMENTS
// ! DECLARE VARIABLES/ INITIALIZE WITH ELEMENTS
let table = document.getElementById('table');
// let formData = document.querySelector('textarea');
let store = hour => { localStorage.setItem(hour) };

// ! FUNCTINON TO ADD QUERY ADD QUERY SELECTOR TO ALL BUTTONS
// ! stop default behavior and call another function
document.querySelectorAll('.saveBtn').forEach(item =>{
    item.addEventListener('click', event => {
    event.preventDefault()
        let formData = document.getAttributeById.previousSibling.value
        let myKey = document.getAttributeById("9AM")
        localStorage.setItem(myKey, formData );
    })
})
let retrieve = getHour => { localStorage.getItem(form)}








        // ! ADD EVENT LISTENER TO ALL BUTTONS 
/*
  *  -----------------------------------------------------------------
  *  const clickHandle
  *      let elmnt = event.target.getElementbyClass('saveBtn');
  *          addListeners.setAttribute("mybtn");
  *          if (event.target.mathces('button')) {
  *          count++;
  *          event.target.setAttribute('saveBtn', count);
  *          event.target.textContent = `Clicks: ${count}`;
  *      }
  *  let saveBtn = event.target.getAttribute('mybtn');
  *  
  *  -----------------------------------------------------------------
  *  saveBtn.querySelectorAll(`button[class^=saveBtn]`);
  *  btns.forEach(btn => {
  *      btn.addEventListener('click', () => {
  *          console.log(target.id);
  *      }
  *  )
  *  -----------------------------------------------------------------
  *  
  *  let pt = function print(x) {
  *      if (x || typeof(String)){
  *          console.log(x)
  *      } 
  *  }
  *  -----------------------------------------------------------------
  * for( i = 0; i < time.lengeth; i++) {
  *  time[i].addEventListener('click', clickHandler)
  * 
  *  let blockHour = document.getElementsByClassName('block-hour');
  *  let ptag = document.getElementsByClassName('col-1');
  *  let form = document.getElement('textarea');
  * 
  */
 