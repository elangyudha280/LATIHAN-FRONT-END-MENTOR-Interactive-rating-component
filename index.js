


let card = document.querySelector('.card-page')
let card_thanks = document.querySelector('.card-thanks')
let number_item = document.querySelectorAll('.number-item')
card.addEventListener('click',function(el){

    if(el.target.className === 'number-item'){
        number_item.forEach(function(e){
            if(e.classList.contains('active-number') ){
                e.classList.remove('active-number')
            }
         
        })
        el.target.classList.add('active-number')
    }
})

let button_submit = document.querySelector('.btn-submit')
let num_selected = document.querySelector('.num-selected')
button_submit.addEventListener('click',function(e){
    card.style.display = 'none';
    card_thanks.style.display ='initial'
    number_item.forEach((e) => {
        if(e.classList.contains('active-number') ){
            num_selected.textContent = e.textContent;
        }
     
    })
})