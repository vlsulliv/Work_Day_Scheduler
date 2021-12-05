moment().format();
console.log(moment().format('LT'));
const date = moment().format('MMM DD, YYYY');
const now = new Date();
let hour = moment().format('H')
document.getElementById('currentDay').innerHTML = date;

/*======== STORAGE ============*/

console.log('1')
document.getElementById("btn").addEventListener("click", function() {
    let text = document.getElementsByClassName('text');
    console.log('2')
    localStorage.setItem(hour, text)
})


function retrieve(){
    for (var i=0; i<Array.length; i+1){
        console.log(array[0])
    }
}

/*======== SCRIPT TO CHANGE HTML ============*/
var div_list = document.querySelectorAll('textarea')
var div_array=[...div_list];

let present = function() {
        console.log(change);
        change.classList.add("present");
}

let past = function() {
    console.log(change);
    change.classList.add("past");
}

let future = function() {
    console.log(change);
    change.classList.add("future");
}
