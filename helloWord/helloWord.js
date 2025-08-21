  let name = 'Hung';

  const hello = (function helloWorld() {
      return 'hello, ' + name;
  })();

      document.getElementById('default').innerText = hello;
      console.log(hello);

      document.getElementById('hello').addEventListener('click', function() {
          document.getElementById('greeting').innerText = hello;
      });