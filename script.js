// h1 {color : red}




const h1 = document.querySelector('h1')
const input1 = document.getElementById('calculo1')
const input2 = document.getElementById('calculo2')
const btn = document.querySelector('#btnCalcular')
const p = document.querySelector('#result')
const form = document.querySelector('#form')

// form.addEventListener('submit',sumInputValues)

// function sumInputValues(event){
//     event.preventDefault()
//     let suma = parseInt(input1.value) + parseInt(input2.value)
//     p.innerText = "Hello world: "+ suma
// }

btn.addEventListener('click',sumInputValues)

function sumInputValues(event){
    let suma = parseInt(input1.value) + parseInt(input2.value)
    p.innerText = "Hello world: "+ suma
}

