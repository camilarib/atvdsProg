//cria referencia aos elementos da pg
const frm = document.querySelector("form");
const resultado = document.querySelector("h3");
const triangulo = document.querySelector("h4");

frm.addEventListener("submit", (e) => {
    //evita o envio do formulário
    e.preventDefault();

    //obter os valores digitados
    //const nome = frm.inNome.value;
    const lado1 = Number(frm.invalorA.value);
    const lado2 = Number(frm.invalorB.value);
    const lado3 = Number(frm.invalorC.value);
    
    //triangulo equilatero
    if(lado1 == lado2 && lado2 == lado3){
        triangulo.innerText = ` Este Triângulo é Equilatero`;
        triangulo.style.color = "red";
    }
    //tringulo isósceles
    else if(lado1 == lado2 || lado1 == lado3 || lado3 == lado2){
        triangulo.innerText = ` Este Triângulo é Isósceles`;
        triangulo.style.color = "blue";
    }
    //triangulo escaleno
    else{
        triangulo.innerText = ` Este Triângulo é Escaleno`;
        triangulo.style.color = "green";
    }
})