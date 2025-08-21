(
  () => {
    const userNameInput = document.getElementById('userName');
    const moneyInput = document.getElementById('money');
    const buyBtn = document.getElementById('buyBtn');
    const profileName = document.getElementById('profileName');
    const profileWallet = document.getElementById('profileWallet');
    const profileGender = document.getElementById('profileGender');
    const userNameUpdateBtn = document.getElementById('updateNameButton');
    const transactionHistory = document.getElementById('transactionHistory');
    const transactionHistoryBtn = document.getElementById('showTransactionHistoryButton');
    const walletID = 123456;

    let transactionHistoryList = [];

    const user = {
      name: 'customer',
      wallet_amount: 10000,
      gender: 'unknown'
    }

    const cart = {
      userName: '',
      amount: 0,
      dateTime: 0,
      shopWallet: 0
    }

    function userRender() {
      profileName.innerText = user.name;
      profileWallet.innerText = user.wallet_amount;
      profileGender.innerText = user.gender;
    }

    function updateUserName() {
      const newName = userNameInput.value;
      user.name = newName;
      userRender();
    }

    function buy() {
      if (moneyInput.value === '') {
        alert('Please enter an amount to buy');
        return;
      }
      if (moneyInput.value > user.wallet_amount) {
        alert('Insufficient funds');
        return;
      }
      cart.amount = moneyInput.value;
      cart.dateTime = Date.now();
      cart.shopWallet = walletID;
      user.wallet_amount -= cart.amount;
      userRender();

      transactionHistoryList.push({
        userName: cart.userName,
        amount: cart.amount,
        dateTime: cart.dateTime,
        shopWallet: cart.shopWallet
      });
      alert('Purchase successful! User: ' + cart.userName + ', has bought: ' + cart.amount + ', at: ' + new Date(cart.dateTime).toLocaleString() + ', and send to shop Wallet: ' + cart.shopWallet);
    }

    function showTransactionHistory() {
      transactionHistory.innerHTML = '';
      transactionHistoryList.forEach((transaction) => {
        const li = document.createElement('li');
        li.innerText = 'User: ' + user.name + ', Amount: ' + transaction.amount + ', Date: ' + new Date(transaction.dateTime).toLocaleString() + ', Shop Wallet: ' + transaction.shopWallet;
        transactionHistory.appendChild(li);
      });
    }

    userRender();
    userNameUpdateBtn.addEventListener('click', updateUserName);
    buyBtn.addEventListener('click', buy);
    transactionHistoryBtn.addEventListener('click', showTransactionHistory);
  }
)();