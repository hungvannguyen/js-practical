  let name = 'Hung';
  let count = 0;

  const hello = (function helloWorld() {
      return 'hello, ' + name;
  })();

      document.getElementById('greeting').innerText = hello;
      console.log(hello);

      document.getElementById('hello').addEventListener('click', function() {
          document.getElementById('greeting').innerText = hello + ' ' + count++;
      });