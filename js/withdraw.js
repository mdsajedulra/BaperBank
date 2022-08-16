
// withdraw section 

document.getElementById('withdraw-btn').addEventListener('click', function () {
    const withdrawField = document.getElementById('withdraw-feild');
    const withdrawFieldString = withdrawField.value;
    const withdrawAmount = parseFloat(withdrawFieldString);
    console.log(withdrawAmount)


    // withdraw to add withdraw amoun
    const withdrawTotalElement = document.getElementById('withdraw-total');
    const withdrawTotal = withdrawTotalElement.innerText;
    const PreviouswithdrawTotal = parseFloat(withdrawTotal);
    withdrawTotalElement.innerText = PreviouswithdrawTotal + withdrawAmount;



    const balance = document.getElementById('balance-total');
    const balacneString = balance.innerText;
    let previousBalance = parseFloat(balacneString);
    // console.log(previousBalance);
    const currentBalance = previousBalance - withdrawAmount;
    balance.innerText = currentBalance;

    withdrawField.value = '';
})
