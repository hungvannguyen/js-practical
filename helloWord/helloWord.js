(
  () => {
    let userName = document.getElementById('userName');
    let money = document.getElementById('money');
    let wallet = 1234;
    console.log(userName.value, money.value);
    let transactionHistory = [];

    function hello() {
      return 'User ' + userName.value + ' send ' + money.value + ' to ' + wallet;
    }

    document.getElementById('showGreeting').addEventListener('click', () => {
      transactionHistory.push(hello());
      document.getElementById('greeting').innerText = hello();
      document.getElementById('transHistory').innerHTML = transactionHistory.join('<br>');
    });
  }
)();