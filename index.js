const Array2 = [];

function writeCards(names,event){
    for(let i=0; i < names.length; i++){
        const message = `Thank you, ${names[i]}, for the wonderful ${event} gift!`;
        Array2[i] = message;
    }
    return Array2;
}

function countDown(positiveInteger){
    let downinc = positiveInteger;
    while (downinc >= 0){
        console.log(downinc--)
    };
}