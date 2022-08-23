// selecting queries 
const btn = document.querySelector('button');
const h1 = document.querySelector('h1');



btn.addEventListener('click', function () {
    // store function to new var
    const newColor = makeRandomColor();

    // change body color to new color
    document.body.style.backgroundColor = newColor;

    // update h1 text to the new color code
    h1.innerText = newColor;
})

// generate new color function
const makeRandomColor = () => {

    // random numbers from 0-255 for rgb channels
    const r = Math.floor(Math.random() * 255);
    const g = Math.floor(Math.random() * 255);
    const b = Math.floor(Math.random() * 255);

    // store new color code 
    return `RGB(${r}, ${g}, ${b})`;
}
