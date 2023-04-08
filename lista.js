const namelist = ["Aline", "Otavio", "Camila", "Nareba", "Jean", "Julio", "Julio Ronaldo", "Rany", "TI"]

const listE1 = document.getElementById("list");
const botaoAdicionar = document.getElementById("Adicionar");
const botaoSelecionar = document.getElementById("Selecionar");
const botaoRemover = document.getElementById("Remover");
const botaoFiltrar = document.getElementById("Filtrar");

const searchField = document.getElementById("searchField");
/*searchField.addEventListener("input", inputHandler);*/

this.fillList();

function fillList(list = namelist) {
    listE1.innerHTML = "";
    for(let i=0; i < list.length; i++) {
        let listItems = document.createElement("li");
        listItems.innerHTML = list[i];
        listE1.appendChild(listItems);
    }
}

function inputHandler() {
    const filteredList = namelist.filter(el => {
        const listItems = el.toLowerCase();
        const searchWord = searchField.value.toLowerCase();
        return listItems.includes(searchWord)
    });
    fillList(filteredList);
}

botaoFiltrar.addEventListener("click", inputHandler);

function Adicionar(){
    nome = searchField.value.toLowerCase(); 
    if (nome != ''){
            nameList.push(nome);
            mensagem.innerHTML = "Nome add " + nome;
    }
         else {
            mensagem.innerHTML = "nome anterior colocado: "
        }
    
    } 

botaoAdicionar.addEventListener("click", add);

function remove(){
    nome = searchField.value.toLowerCase();

    var index = nameList.indexOf(nome);

    if(index > -1){
        namelist.splice(index, 1);
        mensagem.innerHTML = "nome removido" + nome;
    }
    else{
        mensagem.innerHTML = "tente novamente" + nome + " ";

    }
}

botaoRemover.addEventListener("click", Remover);