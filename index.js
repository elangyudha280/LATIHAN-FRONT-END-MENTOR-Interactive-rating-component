


let card = document.querySelector('.card-page')
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