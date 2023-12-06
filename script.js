const courantNumber = document.getElementById('number');
const increaseBtn = document.getElementById('increase');
const resetBtn = document.getElementById('reset');
const decreaseBtn = document.getElementById('decrease');

let newNum;

increaseBtn.addEventListener('click' , function(){
    newNum = Number(courantNumber.innerHTML) +1 ;
    courantNumber.innerHTML = newNum;
    courantNumber.style.color='green'
});


decreaseBtn.addEventListener('click' , function(){
    newNum = Number(courantNumber.innerHTML)-1 ;
    courantNumber.innerHTML = newNum;
    courantNumber.style.color='red'
})


resetBtn.addEventListener('click' , function(){
    courantNumber.innerHTML = 0 ;
    courantNumber.style.color='yellow'
})