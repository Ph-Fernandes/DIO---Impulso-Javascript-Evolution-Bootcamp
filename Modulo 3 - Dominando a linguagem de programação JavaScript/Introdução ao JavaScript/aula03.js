// para executar um comando no console é ó executar o comando console.log()

// console.log("Hello World!")
let evenNums = []

function returnEvenValues (array) {
    for (let i = 0; i < array.length; i++) {
        if (array[i] % 2 === 0) {
            evenNums.push(array[i])
        } else {
            console.log(`${array[i]} não é par!`)
        }
    }
    console.log('os numeros pares são : ', evenNums);
}

let array = [1,2,4,5,6,8]

returnEvenValues(array);