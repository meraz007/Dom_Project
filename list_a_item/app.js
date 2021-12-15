var inputItem=document.querySelector('input');
var button = document.querySelector('button');
var listElement =document.querySelector('ul');

function addGoal(){
    const entererdValue=inputItem.value;
    const listItem =document.createElement('li');
    listItem.textContent=entererdValue;
    listElement.appendChild(listItem);
    inputItem.value='';
}
button.addEventListener('click',addGoal)