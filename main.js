let numRandom = Math.floor((Math.random()*100 +1)); 
let numeroS = document.getElementById("numeroEntrada");
let mensaje = document.getElementById("mensaje");
let acc = 0 ;
let intentos = document.getElementById("intentos");



function chequearNum(){
    let numero = parseInt(numeroS.value) ;
    acc ++
    intentos.textContent = acc;
    if(numero <1 || numero>100|| isNaN(numero) ){
        mensaje.textContent = "Por favor ponga un numero de 1 al 100 y no ponga letras"
    
    } else if (numero == numRandom){
        mensaje.textContent = "FELICITACIONES GANASTE EL JUEGO";
        mensaje.style.color ="green";
        numeroS.disabled = true;
        
    }else if (numero > numRandom){
        mensaje.textContent = "Es un numero mas chico";
        mensaje.style.color = "black";
    }else{
        mensaje.textContent = "Es un numero mas Grande";
        mensaje.style.color = "black";
    }
   

}

console.log(numRandom);


