var input = document.getElementById('userinput');
var list = document.getElementById('list');

const inputLength = () => input.value.length

function createListElement() {
    var li = document.createElement('li');
    li.appendChild(document.createTextNode(input.value));
    list.appendChild(li);
    input.value = '';
}

function addList(event) {
    if (inputLength() > 0 && event.keyCode === 13) {
        createListElement();
    }
}

input.addEventListener("keypress", addList);