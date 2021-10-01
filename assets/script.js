let gb_count = localStorage.getItem('gb_count')
let cc_count = localStorage.getItem('cc_count')
let sugar_count = localStorage.getItem('sugar_count')


// First, tell us your name
let yourName = "Dio Castillo" // HINT: Replace this with your own name!

// Code to update name display 
document.getElementById('credit').textContent = `Created by ${yourName}`

// We'll use these variables to display the counts of each cookie type and the total
let txt_gb = document.querySelector('#qty-gb')      // Ginger bread
let txt_cc = document.querySelector('#qty-cc')      // Chocolate Chip
let txt_sugar = document.querySelector('#qty-sugar')   // Sugar Sprinkle
let txt_total = document.querySelector('#qty-total')   // Total

// This code is just in case the counters are stored in local storage or somewhere
if (gb_count) txt_gb.textContent = gb_count
if (cc_count) txt_cc.textContent = cc_count
if (sugar_count) txt_sugar.textContent = sugar_count

// We'll use these variables to track the counts of each cookie type and the total
let int_gb = parseInt(txt_gb.textContent)      // Ginger bread
let int_cc = parseInt(txt_cc.textContent)      // Chocolate Chip
let int_sugar = parseInt(txt_sugar.textContent)   // Sugar Sprinkle
let int_total = int_gb + int_cc + int_sugar   // Total
txt_total.textContent = int_total

// GINGER BREAD COOKIES
// Event listener for clicks on the "+" button for Ginger Bread cookies
document.getElementById('add-gb').addEventListener('click', function () {

    // Code to be run when the "+" button for "Ginger Bread" is clicked
    int_gb++
    txt_gb.textContent = int_gb
    // re-calculate total
    int_total = int_gb + int_cc + int_sugar
    txt_total.textContent = int_total
    // store gb count
    localStorage.setItem('gb_count', int_gb)
})

// Event listener for clicks on the "-" button for Ginger Bread cookies
document.getElementById('minus-gb').addEventListener('click', function () {

    // Code to be run when the "-" button for "Ginger Bread" is clicked
    if (int_gb > 0) { // can't have a negative count
        int_gb--
        txt_gb.textContent = int_gb
        // re-calculate total
        int_total = int_gb + int_cc + int_sugar
        txt_total.textContent = int_total
        // store gb count
        localStorage.setItem('gb_count', int_gb)
    }
})

// TODO: Hook up event listeners for the rest of the buttons

// CHOCOLATE CHIP COOKIES
// Event listener for clicks on the "+" button for Chocolate Chip cookies
document.getElementById('add-cc').addEventListener('click', function () {

    // Code to be run when the "+" button for "Chocolate Chip" is clicked
    int_cc++
    txt_cc.textContent = int_cc
    // re-calculate total
    int_total = int_gb + int_cc + int_sugar
    txt_total.textContent = int_total
    // store cc count
    localStorage.setItem('cc_count', int_cc)
})

// Event listener for clicks on the "-" button for Chocolate Chip cookies
document.getElementById('minus-cc').addEventListener('click', function () {

    // Code to be run when the "-" button for "Chocolate Chip" is clicked
    if (int_cc > 0) {  // can't have a negative count
        int_cc--
        txt_cc.textContent = int_cc
        // re-calculate total
        int_total = int_gb + int_cc + int_sugar
        txt_total.textContent = int_total
        // store cc count
        localStorage.setItem('cc_count', int_cc)
    }
})

// SUGAR SPRINKLE COOKIES
// Event listener for clicks on the "+" button for Sugar Sprinkle cookies
document.getElementById('add-sugar').addEventListener('click', function () {

    // Code to be run when the "+" button for "Sugar Sprinkle" is clicked
    int_sugar++
    txt_sugar.textContent = int_sugar
    // re-calculate total
    int_total = int_gb + int_cc + int_sugar
    txt_total.textContent = int_total
    // store sugar count
    localStorage.setItem('sugar_count', int_sugar)
})

// Event listener for clicks on the "-" button for Sugar Sprinkle cookies
document.getElementById('minus-sugar').addEventListener('click', function () {

    // Code to be run when the "-" button for "Sugar Sprinkle" is clicked
    if (int_sugar > 0) {  // can't have a negative count
        int_sugar--
        txt_sugar.textContent = int_sugar
        // re-calculate total
        int_total = int_gb + int_cc + int_sugar
        txt_total.textContent = int_total
        // store sugar count
        localStorage.setItem('sugar_count', int_sugar)
    }
})