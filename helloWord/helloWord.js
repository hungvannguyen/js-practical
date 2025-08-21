  let name = 'Hung';

  const hello = (function helloWorld() {
      return 'hello, ' + name;
  })();

      document.getElementById('greeting').innerText = hello;
      console.log(hello);