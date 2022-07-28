var currentNumberWrapper = document.getElementById('currentNumber')
var currentNumber = 0

document.getElementsByName("subtrair")[0].addEventListener('click', decrement)

document.getElementsByName("adicionar")[0].addEventListener('click', increment)

function increment() {
    currentNumber = currentNumber + 1;
    currentNumberWrapper.innerHTML = currentNumber;

    if (currentNumberWrapper.innerHTML > 0) {
        currentNumberWrapper.style.color = "blue"
    } 
}

function decrement() {
    currentNumber = currentNumber - 1;
    currentNumberWrapper.innerHTML = currentNumber;

    if (currentNumberWrapper.innerHTML < 0) {
        currentNumberWrapper.style.color = "red"
    }
}




