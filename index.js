var press = document.querySelector('.press__any__key')
var detail = document.querySelector('.detail')
var resultBox = document.querySelector('.result__which')
var key = document.querySelector('.card__key')
var cardlocation = document.querySelector('.card__location')
var which = document.querySelector('.card__which')
var code = document.querySelector('.card__code')


document.addEventListener('keydown', function(e) {
    
    resultBox.innerText = e.which
    key.innerText = e.key.toUpperCase()
    cardlocation.innerText = e.location
    which.innerText = e.which
    code.innerText = e.code

    press.classList.add('hide')
    detail.classList.remove('hide')
})