const displayNumbers = document.getElementById('displayNumbers'); // get the element to display the numbers
const form = document.forms['generate-numbers']; // get the form element

form.addEventListener('submit', function (e) { //add an event listener to the form element
    e.preventDefault();

    const value = form.querySelector('div input').value; //get the value of what is inputted

    displayNumbers.innerHTML = ''; //empty the element that will display the numbers

    for (let numbers = 1; numbers <= value; numbers++) { //using loop to generate numbers from 1 to any number inputted
        const div = document.createElement('div'); //create a div element
        div.textContent = numbers; //text content of the div element is the generated numbers
        div.classList.add('col-1'); //added class of col-1 to put the text content into each column 
        div.classList.add('p-3'); //added padding to each of the div
        div.classList.add('m-1'); //added margin
        div.classList.add('text-center'); //added text content
        div.classList.add('display-6'); //increased font size using bootstrap display 
       
        displayNumbers.appendChild(div); // append the div to its parent element
        
        const evenOdd = evenAndOddNumbers(numbers); //calling the function of even and odd numbers and putting it inside a variable
        if (evenOdd) { //if truthy 
            div.classList.add('text-bg-success'); //give the div a background color of green
        } else {
            div.classList.add('text-bg-warning'); //else give the div a background color of yellow
        }

        const primeNumber = isPrimeNumber(numbers); //calling the function for prime number and putting it inside a variable
        if (primeNumber) { //if truthy 
            div.classList.add('text-bg-danger') //giv the div a background color of red
        }
    }
})

function evenAndOddNumbers(numbers) { //function to get even and odd numbers
    return numbers % 2 == 0;
}

function isPrimeNumber(numbers) { //function to get odd numbers
    if (numbers === 1) {
        return false;
    }
    for (let i = 2; i < numbers; i++) {
        if (numbers % i === 0) {
            return false;
        }
    }
    return true;
}
