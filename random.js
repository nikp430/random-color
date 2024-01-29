

// Random color generate section:
const button = document.querySelector('button');
const h1 = document.querySelector('h1');


// generate a random color using function with Math.floor and Math.random
// return a value of rgb using string template
const randomColor = () => {
    const r = Math.floor(Math.random() * 255);
    const g = Math.floor(Math.random() * 255);
    const b = Math.floor(Math.random() * 255);
    return `rgb(${r}, ${g}, ${b})`;
}

// add an event listener to the button when click it
button.addEventListener('click', function () {
    const newColor = randomColor(); // assigning the result of random color function to a new variable
    document.body.style.backgroundColor = newColor;  // a new color will be shown in the background
    h1.innerText = newColor; // the string `rgb ${r}, ${g}, ${b}` will be shown in the h1
})

