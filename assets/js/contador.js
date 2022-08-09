/*

Necesito que este contador haga 3 cosas
-Incrementr de uno en uno
-Decremente de uno en uno
-Borre toda la cuente

Necesitamos iniciar en 0

*/

var valorContador = 0; //Iniciamos nuestra variable en 0

function incrementar(){
    valorContador++;
    document.getElementById("contador").innerHTML = valorContador;
}

function decrementar(){
    valorContador--;
    document.getElementById("contador").innerHTML = valorContador;
}

function resetear(){
    document.getElementById("contador").innerHTML = 0;
}