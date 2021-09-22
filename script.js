function element() {

}

const input = ducument.getElementById(element: "range")
const min = input.min
const max= input.max
const value = input.value

//
input.style.background = 'linear-gradient(to right,red 0%, red ${(value-min)/(max-min)*100}%), blue 100%)'

input.oninput = function (){
    this.style.background ='linear-gradient(to right,red 0%, blue ${(this.value-this.min)/(this.max-this.min)*100%, blue 100%)'
}