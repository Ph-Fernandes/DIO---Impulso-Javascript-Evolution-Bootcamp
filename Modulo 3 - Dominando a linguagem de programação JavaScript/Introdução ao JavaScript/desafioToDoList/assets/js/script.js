// document.getElementsByTagName('button')[0].addEventListener('click', adicionar);
var list = document.getElementById('todo-list');
var countValue = 0;

function adicionar() {
    var checkbox = document.createElement('input');
    checkbox.type = "checkbox";
    checkbox.id = `item${countValue}`;
    checkbox.className = 'inputs'

    var label = document.createElement('label');
    label.htmlFor = `item${countValue}`
    label.className = 'labels'
    label.innerText = document.getElementsByTagName('input')[0].value;

    var div = document.createElement('div')
    div.append(checkbox, label)

    var br = document.createElement('br');

    list.append(div)
    countValue++;

    //limpando input principal
    document.getElementById('job-name').value = '';
}





