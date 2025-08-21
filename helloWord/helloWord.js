let name = 'Hung';
let count = 0;
let userName = document.getElementById('userName');

function hello() {
  return 'hello, ' + (userName && userName.value ? userName.value : name);
}

document.getElementById('greeting').innerText = hello();

document.getElementById('showGreeting').addEventListener('click', function () {
  document.getElementById('greeting').innerText = hello();
});