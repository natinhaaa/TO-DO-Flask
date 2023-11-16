from flask import Flask, jsonify, request
from flask_cors import CORS
#pega a informação e transforma em JSON
import pandas as pd

app = Flask(__name__)
CORS(app)

try:
    open('Text.csv', 'x')
    with open("Text.csv", "w") as arquivo:
        arquivo.write("ID,TAREFA\n") 
except:
    pass

@app.route("/list", methods=['GET'])
def listarTarefas():    
    tarefas = pd.read_csv('Text.csv')
    tarefas = tarefas.to_dict('records')    
    return jsonify(tarefas)

@app.route("/add", methods=['POST'])
def addTarefas():
    item = request.json  
    tarefas = pd.read_csv('Text.csv')
    tarefas = tarefas.to_dict('records') 
    id = len(tarefas) + 1
    with open("Text.csv", "a") as arquivo:
        arquivo.write(f"{id},{item['Tarefa']}\n")    

    tarefas = pd.read_csv('Text.csv')
    tarefas = tarefas.to_dict('records')        
    return jsonify(tarefas)

@app.route("/update/<int:idAlterar>", methods=['PUT'])
def updateTarefas(idAlterar):
    item = request.json  
    tarefas = pd.read_csv('Text.csv')
    tarefas = tarefas.to_dict('records') 
    with open("Text.csv", "w") as arquivo:
        arquivo.write("ID,TAREFA\n") 
        for tarefa in tarefas:
            if tarefa['ID'] != idAlterar:
                arquivo.write(f"{tarefa['ID']},{tarefa['TAREFA']}\n") 
            else:
                arquivo.write(f"{idAlterar},{item['Tarefa']}\n")

    tarefas = pd.read_csv('Text.csv')
    tarefas = tarefas.to_dict('records')        
    return jsonify(tarefas)

@app.route("/delete/<int:idExcluir>", methods=['DELETE'])
def deleteTarefas(idExcluir):
    tarefas = pd.read_csv('Text.csv')
    tarefas = tarefas[tarefas['ID'] != idExcluir].reset_index(drop=True)
    tarefas['ID'] = range(1, len(tarefas) + 1)
    tarefas.to_csv('Text.csv', index=False)
    return jsonify(tarefas.to_dict('records'))


if __name__ == '__main__':
    app.run(debug=True, host="0.0.0.0")
