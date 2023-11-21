const tabela = document.querySelector('.tabela-js')
    axios.get('http://10.109.142.139:5000/list').then((response) => {
        getData(response.data)
    }).catch((error) => {
        console.log(error)
    })

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
