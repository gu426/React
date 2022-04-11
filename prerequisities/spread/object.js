let obj = {
    name: 'Gurmeet',
    address: {
        country: 'USA',
        state: {
            stateName: 'NEW YORK',
            pincode: 123456
        }
    }
}

//let obj2 = {...obj , address : {...obj.address}}  //state:{...obj.address.state} //shallow copy
//obj.address.state.pincode = '222222'

obj.address.country = 'India'

let obj2 = JSON.parse(JSON.stringify(obj)) // deep copy

console.log(obj)
console.log(obj2)

