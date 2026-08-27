// Random Shadow 
const boxShadow = document.getElementsByTagName('section');

const shadow = () => {
    let r = Math.round(Math.random() * 255) + 1; //random numbers are near by 255 only, check error
    let g = Math.round(Math.random() * 255) + 1;
    let b = Math.round(Math.random() * 255) + 1;
    let o = Math.round(Math.random() * 10) / 10;

    let rgbo = [r, g, b];

    return `rgba(${rgbo})`
};
shadow();

setInterval(() => {
    boxShadow[0].style.boxShadow = `0px 0px 25px 15px ${shadow()}`;
    boxShadow[1].style.boxShadow = `0px 0px 25px 15px ${shadow()}`;
}, 1000);


// ***** Counting Number *****
const counting = document.getElementsByTagName('span');
// console.log(counting)

let num = 1;

setInterval(() => {
    counting[0].textContent = num++

}, 1000)

// ***** Click Me Button *****

const clickmeBtn = document.querySelector('button');
const clickPara = document.querySelectorAll('.setTimeOut p')[1];

clickmeBtn.addEventListener('click', () => {
    setTimeout(() => {
        clickmeBtn.style.backgroundColor = "red";
        clickmeBtn.style.color = "white";
        clickPara.textContent = 'Hello! The 3 Seconds are Up!'
    }, 3000);
});





