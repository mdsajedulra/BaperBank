document.getElementById('deposit-btn').addEventListener('click', function () {
    const depositField = document.getElementById('deposit-feild');
    const depositAmountString = depositField.value;
    const depositAmount = parseFloat(depositAmountString);





    // deposit total previous and new deposit add;
    const depositTotalElement = document.getElementById('deposit-total');
    const depositTotalString = depositTotalElement.innerText;
    const depositTotal = parseFloat(depositTotalString);
    depositTotalElement.innerText = depositAmount + depositTotal;

    // defult deposit value set

    depositField.value = '';
    // deposit with balacne ad

    const balance = document.getElementById('balance-total');
    const balacneString = balance.innerText;
    let previousBalance = parseFloat(balacneString);
    // console.log(previousBalance);
    const currentBalance = previousBalance + depositAmount;
    balance.innerText = currentBalance;

})






