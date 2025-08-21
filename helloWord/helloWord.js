  let name = 'Hung';

  function helloWorld() {
      console.log('hello, ' + name);
  }

  document.getElementById('hello').addEventListener('click', function() {
      document.getElementById('greeting').innerText = 'hello, ' + name;
      console.log('hello, ' + name);
  });