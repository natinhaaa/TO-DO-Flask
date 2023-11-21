const tabela = document.querySelector('.tabela-js')

// // ##################### GET #####################

// axios.get('http://127.0.0.1:5000/list').then((response) => {
//     getData(response.data)
// }).catch((error) => {
//     console.log('Erro na requisição GET', error)
// });

// function getData(data){
//     data.map((item) => {
//         tabela.innerHTML += `
//             <tr>
//                 <th scope="row" class="text-center align-middle">${item.ID}</th>
//                 <td class="text-center align-middle">${item.TAREFA}</td>
//                 <td class="text-center align-middle">
//                     <span type="button" class="material-symbols-outlined text-success">edit</span>
//                     <span type="button" class="material-symbols-outlined text-danger">delete</span>
//                 </td>
//             </tr>
//         `
//     })
// }

// // ##################### POST #####################

const formTarefa = document.getElementById('formTarefa');

formTarefa.addEventListener('submit', function(event) {
    event.preventDefault();

    const tarefa = document.getElementById('exampleInputName1').value;

    const Tarefa = {
        Tarefa: tarefa
    };

    enviarDadosAPI(Tarefa);
});

function enviarDadosAPI(Tarefa) {
    axios.post('http://127.0.0.1:5000/add', Tarefa).then(response => {
        console.log(response.data.Tarefa);
    })
    .catch(error => {
        console.error('Erro na requisição POST', error);
    });
}


// // ##################### PUT #####################



// // ##################### DELETE #####################
