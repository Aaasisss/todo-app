var li;

function addTodo() {
    let todo = document.getElementById('inputField').value;
    console.log(todo);

    if(!todo){
        console.log('error');
    }else {

        let newTodo = document.createElement('li');
        newTodo.setAttribute('class', 'myTodos');
        document.getElementById('todoList').appendChild(newTodo);
        
        var classes = document.querySelectorAll('.myTodos');
        length = classes.length;
        console.log(length);
        
        let currentClass = classes[length-1];
        console.log(currentClass);

        let newCheckBox = document.createElement('input');
        newCheckBox.setAttribute('type', 'checkbox');
        newCheckBox.setAttribute('class', 'checkbox');
        currentClass.appendChild(newCheckBox);

        let newLabel = document.createElement('label');
        newLabel.textContent = todo;
        currentClass.appendChild(newLabel);

        document.getElementById('inputField').value = '';
        
    }
    
}




function removeTodo() {
    //console.log(document.getElementsByClassName('myTodos')[0].document.querySelector('label').value);
    li = document.getElementById('todoList').children;
    console.log(li);
    console.log(li.length);
    for(let i=0; i<li.length; i++){
        while(li[i] && li[i].children[0].checked){
            document.getElementById('todoList').removeChild(li[i]);
        }
    }
    
    }