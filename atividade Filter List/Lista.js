const nameList = []

const listE1 = document.getElementById("list");
const botaoAdicionar = document.getElementById("Adicionar");
const botaoSelecionar = document.getElementById("Selecionar");
const botaoRemover = document.getElementById("Remover");
const botaoFiltrar = document.getElementById("Filtrar");
const botaosaida = document.getElementById("saida");

const searchField = document.getElementById("searchField");
searchField.addEventListener("click", inputHandler)


this.fillList();

function fillList(list = nameList) {
    listE1.innerHTML = "";
    for(let i = 0; i < list.length; i++) {
        let listItems = document.createElement("li");
        listItems.innerHTML = list[i];
        listE1.appendChild(listItems);
    }
}

function inputHandler() {
    saida.innerHTML = ""
    const filteredList = nameList.filter(el => {
        const listItems = el.toLowerCase();
        const searchWord = searchField.value.toLowerCase();
        return listItems.includes(searchWord);
    })
    fillList(filteredList);
}

botaoFiltrar.addEventListener("click", inputHandler);

function AdicionarNome(){
    nome = searchField.value.toLowerCase(); 
    if (nome != ''){
        if (nameList.indexOf(nome) == -1){

            nameList.push(nome);
            saida.innerHTML = "Nome adicionado: " + nome;
        } else {
            saida.innerHTML = "nome anterior add"
        }
    
    } else {
        saida.innerHTML = "Digite um nome: "
    }

}

function RemoverNome(){
    nome = searchField.value.toLowerCase();

    var index = nameList.indexOf(nome);
    if (index > -1) {
        nameList.splice(index, 1);
        saida.innerHTML = "Nome removido: " + nome;
      } else {
        saida.innerHTML = 'Nome não encontrado"' + nome + " ";
      }
    
}

botaoRemover.addEventListener("click", RemoverNome);
botaoFiltrar.addEventListener("click", inputHandler);
botaoAdicionar.addEventListener("click", AdicionarNome);