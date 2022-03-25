const input = document.getElementById('input');
const btn = document.querySelector('.btn');
const result = document.querySelector('.list');

btn.addEventListener('click', function () {
    let tempResult = document.createElement('li');
    tempResult.innerText = input.value;
    result.appendChild(tempResult);
    tempResult.style.cursor = 'pointer';
    input.value = "";
    tempResult.addEventListener('click', function () {
        tempResult.style.textDecoration = 'line-through';
    })
    tempResult.addEventListener('dblclick',function(){
        result.removeChild(tempResult);
    })
})