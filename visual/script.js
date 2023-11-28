const tabela = document.querySelector('.tabela-js')
const URLApi = 'http://127.0.0.1:5000'


/* REQUISIÇÃO GET */
axios.get(URLApi + '/list').then((response) => {
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
                    <span type="button" class="material-symbols-outlined text-success" data-bs-toggle="modal" data-bs-target="#exampleModal1" onclick="AlterarTarefa('${item.ID}')">edit</span>
                    <span type="button" class="material-symbols-outlined text-danger" data-bs-toggle="modal" data-bs-target="#exampleModal2" onclick="ExcluirTarefa(${item.ID})">delete</span>
                </td>
            </tr>
        `
    })
}
/* REQUISIÇÃO POST */
const ModalAdicionar = document.getElementById('formAdicionar');

ModalAdicionar.addEventListener('submit', function(event) {
    event.preventDefault();

    const TarefaInserida = document.getElementById('nova-tarefa').value;

    if (TarefaInserida === "") {
        alert("Insira uma nova tarefa.");
        return;
    }
    else {
        const NovaTarefa = {
            Tarefa: TarefaInserida
        };
        SalvarCSV(NovaTarefa);
    }
});

function SalvarCSV(NovaTarefa) {
    axios.post(URLApi + '/add', NovaTarefa)
        .then(response => {
            console.log(response.data.NovaTarefa);
        })
        .catch(error => {
            console.error('Erro na requisição POST', error);
            alert("Erro ao adicionar a tarefa.")
        });
}

/* REQUISIÇÃO PUT */

function AlterarTarefa(IDAlterar) {
    const btnAlterarTarefa = document.getElementById('alterar');
        
    btnAlterarTarefa.addEventListener("click", () => {
        if (IDAlterar === undefined) {
            console.error('O ID não existe.');
        }

        else{
            const TarefaInseridaAlt = document.getElementById("tarefa-alterar").value;
    
            if (TarefaInseridaAlt === "") {
                alert("Insira uma nova tarefa.")
                return;
            }

            else {
                const TarefaNovaAlt = {
                    Tarefa: TarefaInseridaAlt
                }
                axios.put(URLApi + `/update/${IDAlterar}`, TarefaNovaAlt)
                .then(response => {
                    console.log(response.data.TarefaNovaAlt);
                })
                .catch(error => {
                    console.error('Erro na requisição PUT', error);
                    alert("Erro ao alterar a tarefa.")
                });
            }
        }
        
    });
}

/* REQUISIÇÃO DELETE */

function ExcluirTarefa(idExcluir){
    const btnExcluirTarefa = document.getElementById('excluir')
    btnExcluirTarefa.addEventListener('click', () => {
        axios.delete(URLApi + `/delete/${idExcluir}`)
        .then(response => {
            console.log(response.data.NovaTarefa);
        })
        .catch(error => {
            console.error('Erro na requisição DELETE', error);
            alert("Erro ao deletar a tarefa.")
        });
    })
}
