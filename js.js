let array = [4,2,7,9];
let num = 2;
//7, 9, 4, 2


//4, 2
//7, 9


//7,9 + 4,2
//7, 9, 4, 2

function shiftArray(array, num){

    let contador = num;
    let arrayCompleto = [];
    if(num > array.length){
        contador = num%array.length;
        console.log(contador);
    }

    for(let i = contador; i<array.length; i++){
        arrayCompleto.push(array[i]);
    }

    for(let x = 0; x<contador; x++){
        arrayCompleto.push(array[x]);
    }

    return arrayCompleto;

}