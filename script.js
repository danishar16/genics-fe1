let tampung = ''
const displayInput = document.getElementById('display')


function press(num){
    if(num == 0 && tampung == ''){
        tampung = ''
        displayInput.value = tampung
    }else{
        tampung += num
        displayInput.value = tampung
    }
    
}

function equal(){
    let input = document.getElementById("display").value
    tampung = eval(input)
    displayInput.value = tampung
    tampung = ""
}

function hapus(){
    tampung = ''
    displayInput.value = tampung
    
}