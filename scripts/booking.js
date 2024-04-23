/********* create variables *********/
// useful variables might be: the cost per day, the number of days selected, and elements on the screen that will be clicked or will need to be modified. 
// Do any of these variables need to be initialized when the page is loaded? 
// When do they need to be reset or updated?


let listDays = [];
let dailyRate = 'full';


let mondayBtn = document.getElementById("monday");
let tuesdayBtn = document.getElementById("tuesday");
let wednesdayBtn = document.getElementById("wednesday");
let thursdayBtn = document.getElementById("thursday");
let fridayBtn = document.getElementById("friday");


// display total variable
let totalCost = document.getElementById("calculated-cost");



// buttons

let fullDayBtn = document.getElementById('full');
let halfDayBtn = document.getElementById('half');

var clearBtn = document.getElementById("clear-button");



/********* colour change days of week *********/
// when the day buttons are clicked, we will apply the "clicked" class to that element, and update any other relevant variables. Then, we can recalculate the total cost.
// added challenge: don't update the dayCounter if the same day is clicked more than once. hint: .classList.contains() might be helpful here!




mondayBtn.addEventListener('click', function () {
    if (mondayBtn.classList.contains('clicked')) {
        mondayBtn.classList.remove('clicked');
        listDays.pop('monday');
    } else {
        mondayBtn.classList.add('clicked');
        listDays.push('monday');
        
    }
    calculateCost();
});


tuesdayBtn.addEventListener('click', function () {
    if (tuesdayBtn.classList.contains('clicked')) {
        tuesdayBtn.classList.remove('clicked');
        listDays.pop('tuesday');
    } else {
        tuesdayBtn.classList.add('clicked');
        listDays.push('tuesday');    
    }
    calculateCost();
});

wednesdayBtn.addEventListener('click', function () {
    if (wednesdayBtn.classList.contains('clicked')) {
        wednesdayBtn.classList.remove('clicked');
        listDays.pop('wednesday');
    } else {
        wednesdayBtn.classList.add('clicked');
        listDays.push('wednesday');
    }
    calculateCost();
});



thursdayBtn.addEventListener('click', function () {
    if (thursdayBtn.classList.contains('clicked')) {
        thursdayBtn.classList.remove('clicked');
        listDays.pop('thursday');
    } else {
        thursdayBtn.classList.add('clicked');
        listDays.push('thursday');    
    }
    calculateCost();
});




fridayBtn.addEventListener('click', function () {
    if (fridayBtn.classList.contains('clicked')) {
        fridayBtn.classList.remove('clicked');
        listDays.pop('tuesday');
    } else {
        fridayBtn.classList.add('clicked');
        dailyRate = 'full';
        listDays.push('friday');
        
    }
    calculateCost();
});



/********* clear days *********/
// when the clear-button is clicked, the "clicked" class is removed from all days, any other relevant variables are reset, and the calculated cost is set to 0.



clearBtn.addEventListener('click', function () {
    fridayBtn.classList.remove('clicked');
    thursdayBtn.classList.remove('clicked');
    wednesdayBtn.classList.remove('clicked');
    tuesdayBtn.classList.remove('clicked');
    mondayBtn.classList.remove('clicked');
    listDays = [];

    calculateCost();
});





/********* change rate *********/
// when the half-day button is clicked, set the daily rate to $20, add the "clicked" class to the "half" element, remove it from the "full" element, and recalculate the total cost.


halfDayBtn.addEventListener("click", function(){
    dailyRate = 'half'; 
    halfDayBtn.classList.add("clicked");
    fullDayBtn.classList.remove("clicked");
    calculateCost();
});

// when the full-day button is clicked, the daily rate is set back to $35, the clicked class is added to "full" and removed from "half", and the total cost is recalculated.


fullDayBtn.addEventListener("click", function(){
    dailyRate = 'full';
    fullDayBtn.classList.add("clicked");
    halfDayBtn.classList.remove("clicked");
    calculateCost();
});



/********* calculate *********/
// when a calculation is needed, set the innerHTML of the calculated-cost element to the appropriate value

var costCalc;

function calculateCost(){
    if (dailyRate === 'full') {
        costCalc = listDays.length * 35;
    } else {
        costCalc= listDays.length * 20;
    }

    totalCost.innerHTML = costCalc;
}
