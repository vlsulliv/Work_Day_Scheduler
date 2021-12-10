moment().format();
console.log(moment().format('LTS'));
const date = moment().format('MMM DD, YYYY');
const now = new Date();
// let hour = moment().format('H')
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

document.getElementById('')

/*======== SCRIPT TO CHANGE HTML ============*/
let logic = document.getElementsByClassName('block')

var btn = document.g
const ta = document.getElementById('task')
var divs = document.querySelectorAll('div'), i;
var button = document.getElementById('logic')
let hour = "9";

for (i = 0; i < divs.length; ++i) {
  divs[i].style.color = "green";
  console.log('btn')
//   button.classList.add('past')
//   if (btn == hour) {
//       ta.classList.add('present');
//   } else if (btn > hour) {
//     button.classList.remove('present');
//     button.classList.add('future');
//   } else {
//     button.classList.add('past');
//   }
}

// var div_list = document.querySelectorAll('textarea')
// var div_array=[...div_list];

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

