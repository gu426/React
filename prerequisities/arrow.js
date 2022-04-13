// write a function to add two numbers and print their sum (function Expression)


let add =(a , b)=>{
    console.log(a+b)
}

add(3 , 4)


let regularFunction = function(name){
     console.log(`I am ${name}`)
}


// let arrowFunction = name =>  console.log(`I am ${name}`) it is also work but more then to parameter that is not work

let arrowFunction = (name) =>{
     console.log(`I am ${name}`)
}


regularFunction('Adam')

arrowFunction('Steve')