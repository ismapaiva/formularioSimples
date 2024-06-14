// Array para armazenar os objetos pessoa
let listaPessoasMaiores = [];
let listaPessoasMenores = [];

// Função para calcular a idade com base na data de nascimento
function calcularIdade(dataNascimento) {
    let hoje = new Date();
    let nascimento = new Date(dataNascimento);
    let idade = hoje.getFullYear() - nascimento.getFullYear();
    let mes = hoje.getMonth() - nascimento.getMonth();

    // Ajusta a idade se o aniversário ainda não tiver ocorrido no ano atual
    if (mes < 0 || (mes === 0 && hoje.getDate() < nascimento.getDate())) {
        idade--;
    }


    return idade;
}

// Função para lidar com o envio do formulário
document.getElementById("cadastroForm").addEventListener("submit", function(event) {
    event.preventDefault();

    // Obtendo os valores dos inputs
    let nome = document.getElementById("nome").value;
    let dataNascimento = document.getElementById("dataNascimento").value;

    // Calculando a idade
    let idade = calcularIdade(dataNascimento);

    if(idade <=18){
        const pessoaMenor = {
            nome: nome,
            idade: idade
        };
        listaPessoasMenores.push(pessoaMenor);
    } else{
        const pessoaMaior = {
            nome: nome,
            idade: idade
        };
        listaPessoasMaiores.push(pessoaMaior);
    }
    

    // Adicionando o objeto à lista

    // Atualizando a exibição das pessoas cadastradas
    atualizarListaPessoas();

    // Limpando os campos do formulário
    document.getElementById("nome").value = "";
    document.getElementById("dataNascimento").value = "";

    document.getElementById("nome").focus();
});

// Função para atualizar a exibição das pessoas cadastradas
function atualizarListaPessoas() {
    let listaElementMaiores = document.getElementById("listaPessoasMaiores");
    let listaElementMenores = document.getElementById("listaPessoasMenores");
    listaElementMaiores.innerHTML = "";
    listaElementMenores.innerHTML = "";

    listaPessoasMaiores.forEach(pessoa => {
        let item = document.createElement("li");
        item.textContent = `Nome: ${pessoa.nome} - Idade: ${pessoa.idade}`;
        listaElementMaiores.appendChild(item);
    });
    listaPessoasMenores.forEach(pessoa => {
        let item = document.createElement("li");
        item.textContent = `Nome: ${pessoa.nome} - Idade: ${pessoa.idade}`;
        listaElementMenores.appendChild(item);
    });
}
