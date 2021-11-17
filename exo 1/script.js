let liste =document.getElementById('liste-commissions');

let newItem = document.createElement("li");

document.getElementById('tout').value= 'poisson';

liste.appendChild(newItem);
newItem.innerHTML = 'Whisky';

let button = document.getElementById('button');

button.addEventListener('click', del );

function del ()  {
   newItem.remove(newItem);
}