const tabela = document.querySelector('.tabela-js')

// ##################### GET #####################

axios.get('http://127.0.0.1:5000/list').then((response) => {
    getData(response.data)
}).catch((error) => {
    console.log('Erro na requisição GET', error)
});

function getData(data){
    data.map((item) => {
        tabela.innerHTML += `
            <tr>
                <th scope="row" class="text-center align-middle">${item.ID}</th>
                <td class="text-center align-middle">${item.TAREFA}</td>
                <td class="text-center align-middle">
                    <span type="button" class="material-symbols-outlined text-success">edit</span>
                    <span type="button" class="material-symbols-outlined text-danger">delete</span>
                </td>
            </tr>
        `
    })
}

// ##################### POST #####################

// axios.post("http://127.0.0.1:5000/add").then((response) => {
//     getData(response.data);
// });

// function AdicionarTarefa() {
//     const NovaTarefa = document.getElementById('nova-tarefa').value;

//     if (NovaTarefa === "") {
//         alert("Insira uma nova tarefa.");
//         return;
//     }
//     const UltimaTarefa = tabela.lastElementChild
//     let ID = 1;

//     if (UltimaTarefa) {
//         ID = parseInt(UltimaTarefa.querySelector('th').textContent) + 1
//     }

//     tabela.innerHTML += `
//         <tr>
//             <th scope="row" class="text-center align-middle">${ID}</th>
//             <td class="text-center align-middle">${NovaTarefa}</td>
//             <td class="text-center align-middle">
//                 <span type="button" class="material-symbols-outlined text-success">edit</span>
//                 <span type="button" class="material-symbols-outlined text-danger">delete</span>
//             </td>
//         </tr>          
//     `

//     document.getElementById('nova-tarefa').value = ""
// }

const ModalAdicionar = document.getElementById('formAdicionar');

ModalAdicionar.addEventListener('submit', (event) => {
    // previne que qualquer outra ação interrompa o evento, o evento só ocorrerá se a ação do usuário for 'submit'
    event.preventDefault();

    // pegará o valor dado pelo usuário no campo de adicionar nova tarefa
    const TarefaInserida = document.getElementById('nova-tarefa').value;
    if (NovaTarefa === "") {
            alert("Insira uma nova tarefa.");
            return;
    }
    else {
        const TarefaNova = {
            Tarefa: TarefaInserida
        };
        SalvarCSV(TarefaNova);
    }

});

function SalvarCSV(TarefaNova) {
    axios.post('http://127.0.0.1:5000/add', TarefaNova)
        .then(response => {
            console.log(response.data.TarefaNova);
        })
        .catch(error => {
            console.error('Erro na requisição POST', error);
        });
}

// ##################### PUT #####################


// ##################### DELETE #####################
