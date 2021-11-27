/*========== ADD DATE/TIME ============*/

moment().format();
console.log(moment().format('LT'));
// let date = moment().format('MMM DD, YYYY');
document.getElementById('currentDay').innerHTML = moment().format('MMM DD, YYYY');

/*======== GLOBALS ============*/

let time = moment().format('H');
let table = document.getElementById('table');
let hour = document.getElementsByClassName('hour')
console.log(EventTarget.)
let past, present, future;

/*== ADD QUERY SELECTOR TO ALL BUTTONS ==*/
window.onload = (event) => {
    document.querySelectorAll('button').forEach(item =>{ 
        item.addEventListener('click', event => {
            event.preventDefault()

        })
    })
}

// function setBtnAction() {
//     document.querySelectorAll('button').forEach(item =>{
//     item.addEventListener('click', event => {event.preventDefault()
//     console.log('clicked')});
//     // let key = document.getElementsByClassName('hour').innerHTML()
//     })
// }

/*======== TABLE COLOR ============*/

function storeText() {
    let key = document.getElementsByClassName('hour').previousSibling.value
}

document.querySelector("textarea")

/*======== SCRIPT TO CHANGE HTML ============*/

function timeTracker() {
    hour.forEach

}
// let retrieve = getHour => { localStorage.getItem(form)}
// let myKey = document.getAttributeById("9AM")


/*=====  SCRIPT TO CHANGE HTML ========*/