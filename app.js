window.onload = function() {    
    let firstValue
    let secondValue
    let selectedOperator

/*const display2 =  document.getElementById("display2")*/

    const display = document.getElementById("display")
    const btnMC = document.getElementById("btnMC")
    const btnMMore = document.getElementById("btnMMore")
    const btnMLess = document.getElementById("btnMLess")
    const btnDiv = document.getElementById("btnDiv")
    const btnSeven = document.getElementById("btnSeven")
    const btnEight = document.getElementById("btnEight")
    const btnNine = document.getElementById("btnNine")
    const btnMult = document.getElementById("btnMult")
    const btnFour = document.getElementById("btnFour")
    const btnFive = document.getElementById("btnFive")
    const btnSix = document.getElementById("btnSix")
    const btnLess = document.getElementById("btnLess")
    const btnOne = document.getElementById("btnOne")
    const btnTwo = document.getElementById("btnTwo")
    const btnTree = document.getElementById("btnTree")
    const btnMore = document.getElementById("btnMore")
    const btnC = document.getElementById("btnC")
    const btnZero = document.getElementById("btnZero")
    const btnPoint = document.getElementById("btnPoint")
    const btnEquals = document.getElementById("btnEquals")
    //console.log(btnOne)
    /*btnOne.onclick = function(event){
    display.innerText += event.target.textContent
    }*/
    flag = 0
    console.dir(display)

    const numberOnclick = function(event){
    if(flag == 1){
    display.innerText = event.target.textContent
    flag = 0
    }
    else{
    display.innerText += event.target.textContent
    }
    /*stringOperation += event.target.textContent
    display2.innerText += stringOperation*/
    }
    btnNine.onclick = numberOnclick
    btnEight.onclick = numberOnclick
    btnSeven.onclick = numberOnclick
    btnSix.onclick = numberOnclick
    btnFive.onclick = numberOnclick
    btnFour.onclick = numberOnclick
    btnTree.onclick = numberOnclick
    btnTwo.onclick = numberOnclick
    btnOne.onclick = numberOnclick
    btnZero.onclick = numberOnclick
    btnPoint.onclick = numberOnclick

    btnC.onclick = function(){
    display.innerText = ""
    }

    const operatorFunction = function(event){
    firstValue = parseFloat(display.innerText)
    display.innerText = ""
    selectedOperator = event.target.textContent   
    }

    btnDiv.onclick = operatorFunction
    btnMult.onclick = operatorFunction
    btnMore.onclick = operatorFunction
    btnLess.onclick = operatorFunction

    let stringOperation;

    btnEquals.onclick = function(event){
        secondValue = parseFloat(display.innerText)
        const options = {
            baseURL:"http://localhost:3000/",
            timeout: 5000,
            method: "GET",
            headers:{
                "Content-Type":"application/json",
            },
        }      
        switch(selectedOperator){

            case '+':
                     fetch(`http://localhost:3000/suma/${firstValue}/${secondValue}/`, options)
                     .then(res=>res.json())
                     .then((response)=>{
                    console.log(response)
                    display.innerText = response.result
                    }) 
                    break;
            case '-':
                    fetch(`http://localhost:3000/resta/${firstValue}/${secondValue}/`, options)
                    .then(res=>res.json())
                    .then((response)=>{
                    console.log(response)
                    display.innerText = response.result
                    }) 
                    break;
            case '/':
                    fetch(`http://localhost:3000/division/${firstValue}/${secondValue}/`, options)
                    .then(res=>res.json())
                    .then((response)=>{
                    console.log(response)
                    display.innerText = response.result
                    }) 
                    break;
            case '*':
                    fetch(`http://localhost:3000/multiplicacion/${firstValue}/${secondValue}/`, options)
                    .then(res=>res.json())
                    .then((response)=>{
                    console.log(response)
                    display.innerText = response.result
                    }) 
                    break;
            }
            console.log("firsValue: ", firstValue)    
            console.log("secondValue: ", secondValue)
            console.log("selectedOperator: ", selectedOperator)

    flag = 1
    }

    btnMLess.onclick = function(event){
        secondValue = parseFloat(display.innerText)
        result = result - secondValue
        display.innerText = result
        flag = 1
    }

    btnMMore.onclick = function(event){
        secondValue = parseFloat(display.innerText)
        result = result + secondValue
        display.innerText = result
        flag = 1
    }

    btnMC.onclick = function(event){
        result = 0
    }
    }