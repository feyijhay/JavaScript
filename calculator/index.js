const result = document.getElementById("result")
function enterDigit(number){
    result.value += number;
}
function refreshButton(){
    result.value = "";
}
function calculateDigits(){
    try{
        result.value = eval(result.value);

    }catch(error){
        result.value = "Error";
    }
}