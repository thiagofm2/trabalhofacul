// Pois é eu criei um script js aqui só pra não falar que eu não usei nada de Javascript.

let contadorDeCliques = 1

function sendFunction(){
    if(contadorDeCliques < 3){
        window.alert("Caiu no conto, não tem para onde enviar a mensagem, sinto muito")
        contadorDeCliques += 1
    }
    else if(contadorDeCliques == 3){
        window.alert("Meu amigo, você já clicou 3 vezes, já disse que não tem função isso")
        contadorDeCliques += 1
    }
    else{
        window.alert("Teimoso!")
    }
}