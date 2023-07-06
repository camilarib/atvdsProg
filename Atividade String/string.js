const frm = document.querySelector("form");
const resp = document.querySelector("pre");

frm.addEventListener("submit", (e) => {
    //evita o envio do formulário
    e.preventDefault();

    //obter os valores digitados
    //const nome = frm.inNome.value;
    const Frase = String(frm.inFrase.value);
    const palavra = String(frm.inpalavra.value);
    const posicao = String(frm.inposicao.value);

});    

function insertString(Frase, palavra, posicao){
    const charArray = Frase.split(""); 
        insertCount = 0; 

    let indexes = Mudaposicao.split(',');

    indexes = indexes.map(index => parseInt (index.trim()));//converte o index para inteiro

        for(let i = 0; i <= str.length; i++){
            //console.log(str[i]); 
            if(indexes.includes(i)){
                charArray.splice(i + insertCount, 0, palavra); 
                insertCount++
            }
        }
        return charArray.join(""); 
}
//console.log(insertString("O Julio esta maluco", "de", [0,8]))
