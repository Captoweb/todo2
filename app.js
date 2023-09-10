let arrTodo = [
    {id: 1, name: "сделать что то 1", done: false},
    {id: 2, name: "сделать что то 2", done: false},
    {id: 3, name: "сделать что то 3", done: false},
]

arrTodo = JSON.parse(localStorage.getItem("arr"));


// добавить
function add() {
    let inputValue = document.querySelector('.add-task_input').value;
    console.log(inputValue);
    if (inputValue != '') {

        let newItem = {id: arrTodo.length + 1, name: inputValue, done: false};
        arrTodo.push(newItem);
        console.log('arrTodo:', arrTodo);
        localStorage.setItem("arr", JSON.stringify(arrTodo));
    }
  
   render(); 
}

// вывести

function render() {
    let out = '';
    
    for (let key in arrTodo) {
       
        out += `<li class="list-item">`;
        out += '<div>';
        out += `<input type="checkbox">`;
        out += `${arrTodo[key].name}`;
        out += '</div>';
        out +=`<img class="deleteImg" src="img/close.svg">`;
        out += `</li>`;
  
    }
    document.querySelector('.list').innerHTML = out;
    document.querySelector('.add-button').onclick = add;
}

render(); 


// let btn = document.querySelectorAll('.deleteImg');
// let li = document.querySelector('.list-item');
// btn.forEach( function(elem) {
//     console.log('delete from ls');
//     elem.onclic = deleteItem;
// })

// function deleteItem() {
//     console.log('hello');

// }