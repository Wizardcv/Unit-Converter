// 1 - feet, 2 - gallon, 3- pound

const oneMeter = 3.281;      
const oneLiter = 0.264; 
const oneKilogram = 2.204;

const input = document.getElementById("num-cont")
const convert = document.getElementById("convert-btn")
const length = document.getElementById("length-btn")
const volume = document.getElementById("volume-btn")
const mass = document.getElementById("mass-btn")

length.innerHTML += `<label>Length(Meter/Feet) </label> <br> <br>`
volume.innerHTML += `<label> Volume(Liters/Gallons)</label> <br> <br>`
mass.innerHTML += `<label> Mass(Kilograms/Pounds)</label> <br> <br>`


convert.addEventListener ("click", (e) => {    
    lengthTotal(input.value)
    volumeTotal(input.value)
    massTotal(input.value)
   
}, {once : true});



function lengthTotal (desc) {
    let sumMeter = input.value * oneMeter
    let sumFeet = input.value / oneMeter
    sumFeet = sumFeet.toFixed(3)
    sumMeter = sumMeter.toFixed(3) 
    
    let newTotal = `${desc} meters = ${sumMeter} feet | ${desc} feet = ${sumFeet} meters`
    length.innerHTML += `<label style = "font-size: 15px; color: white"> ${newTotal} </label>`
}

function volumeTotal (desc) {
    let literSum = input.value / oneLiter
    let gallonSum = input.value * oneLiter
    literSum = literSum.toFixed(3)
    gallonSum = gallonSum.toFixed(3)
    
    let newTotal = `${desc} liters = ${gallonSum} gallons | ${desc} gallons = ${literSum} liters`
    volume.innerHTML += `<label style = "font-size: 15px; color: white"> ${newTotal} </label>`
    
}

function massTotal (desc) {
    
     let poundSum = input.value * oneKilogram
    let kiloSum = input.value / oneKilogram
    poundSum = poundSum.toFixed(3)
    kiloSum = kiloSum.toFixed(3)
    
    let newTotal = `${desc} kilos = ${poundSum} pounds | ${desc} pounds = ${kiloSum} kilos`
    mass.innerHTML += `<label style = "font-size: 15px; color: white"> ${newTotal} </label>`
    
}