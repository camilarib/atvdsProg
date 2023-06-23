//criar referências aos elementos da página
const frm = document.querySelector("form");
//const resp = document.querySelector("form");
const resp1 = document.querySelector("pre");
//const resp2 = document.querySelector("pre");

frm.addEventListener ("submit", (e) => {
    //evita o envio do formulário
    e.preventDefault();

    // obter os valores
    const numero = frm.inNumero.value;
    const NumerosRomanos = {
        'I' : 1,
        'V' : 5,
        'X' : 10,
        'L' : 50,
        'C' : 100,
        'D' : 500,
        'M' : 1000
    };
    //percorre o numero romano
    for (var i = numero.length - 1; i >= 0; i--) {
        var n1 = NumerosRomanos[numero[i + 1]];
         
        // verifica se o proximo numero é maior ou mennor
        if(i + 1 < numero.length){
            var n2 = NumerosRomanos[numeros[i + 1]];

            if(n2 > n1){
                cont -= n2;
                continue;
            }
        }
        cont += n2;
    }
    resp1.innerText = cont;
})