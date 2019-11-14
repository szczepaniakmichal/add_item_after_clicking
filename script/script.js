const btn = document.querySelector("button");
console.log(btn);

let count = 1;
let ul = document.createElement('ul');
document.querySelector('.container').appendChild(ul);

btn.addEventListener('click', function () {
    const li = document.createElement('li');
    if (count % 3 === 0) {
        li.classList.add('grow_font_size');
    }
    li.textContent = count;
    count += 2;
    ul.appendChild(li);
});
