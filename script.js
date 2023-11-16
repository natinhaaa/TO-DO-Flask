const tabela = document.querySelector('.tabela-js')
    axios.get("http://10.109.131.195:5000/list").then((response) => {
        exibirTask(response.data);
    });

function exibirTask(data){
    const lista = document.getElementById("to-do-list")
    data.map((item) => {
        const li = document.createElement("li")
        li.innerHTML =item.ID + " - " + item.TAREFA
        lista.appendChild(li)  
    })
    }

function getData(dados){
    dados.map((item)=>{
        tabela.innerHTML += `
    <tr>
        <th scope="row" class="text-center align-middle">${item.id}</th>
        <td class="text-center align-middle">${item.nome}</td>
        <td class="text-center align-middle">
            <button class="btn btn-primary" onclick="editar(${item.id})">Editar</button>
            <button class="btn btn-danger" onclick="deletar(${item.id})">Deletar</button>
        </td>
    </tr>            
        `
    })
}


/*

const onClick = document.getElementById("btn-new-task"); 

onClick.addEventListener("click", newTask);

function newTask() {
    const textoCapturado = document.getElementById('input-new-task').value;
    axios.post("https://apitodo.ccadu86.repl.co/add", {
    "Tarefa": textoCapturado
}).then((response) => {
    console.log(response.data);
});
window.location.reload();
}
*/
