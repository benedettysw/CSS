let entradax = document.getElementById('entrada');

function valor (value){

    entradax.value += value;

}

function limpiar(){
    entradax.value = "";
}

function logica(){

    try{
        entradax.value = eval(entradax.value);
    }
    catch (error){
        entradax.value = "error"
    }
}