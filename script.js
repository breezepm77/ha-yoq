const elForm = document.querySelector('#form');
const elInput = document.querySelector('#input');
const elCheckboxFirst = document.querySelector('.checkbox1');
const elCheckboxSec = document.querySelector('.checkbox2');
const elYes = document.querySelector('#yes');
const elNo = document.querySelector('#no');

elForm.addEventListener('keyup', function(){
    if(elInput.value >= 5 && elInput.value < 30){
        elYes.classList.add('yes')
    }

    if(elCheckboxFirst.checked &&  elInput.value >= 5 && elInput.value < 30){
        elYes.classList.remove('yes')
        elNo.classList.add('no')
    }

    if(elCheckboxFirst.checked && elCheckboxSec.checked && elInput.value >= 5 && elInput.value < 30){
        elNo.classList.remove('no')
        elYes.classList.add('yes')
    }

    if(elInput.value < 5 && elCheckboxSec.checked){
        elNo.classList.add('no')
    }

})