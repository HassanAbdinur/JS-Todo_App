var input = document.getElementById('userinput');
var list = document.querySelector('ul');

function inputLength() {
    return input.value.length;
}

function createListElement() {
    var li = document.createElement('li');
    li.appendChild(document.createTextNode(input.value));
    list.appendChild(li);
    input.value = '';
}
