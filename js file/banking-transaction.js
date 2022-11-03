document.getElementById('deposit-button').addEventListener('click', function(){
    //console.log('deposit button kaj korer');

    const depositInput= document.getElementById ('deposit-input');
    //const depositAmount= depositInput.value;
    const depositAmountText= depositInput.value;
    const depositAmount= parseFloat(depositAmountText);

    console.log(depositAmountText, ' deposit amount dekar');

    const depositTotal= document.getElementById('deposit-total');
    const depositTotalText= depositTotal.innerText;
    const previousDepositAmount= parseFloat(depositTotalText);

    //before showing sum of money was 
    // depositTotal.innerText=  depositAmount;
   // depositTotal.innerText= depositTotalText+ depositAmount;

   depositTotal.innerText= depositAmount+previousDepositAmount;

    console.log(depositTotalText, 'deposit total dkar');


   // update Balnace:

   const totalBalance= document.getElementById('total-balance');
   const totalBalaceText= totalBalance.innerText;
   const previousTotalBalance= parseFloat(totalBalaceText);

   totalBalance.innerText= previousTotalBalance+depositAmount;

   console.log(previousTotalBalance);


    depositInput.value= '';
})

//withdraw Balanace

document.getElementById('withdraw-button').addEventListener('click', function(){
   const  WithdrawInput= document.getElementById ('withdraw-input');
   const WithdrawAmountText= WithdrawInput.value;
   const withdrawAmount= parseFloat( WithdrawAmountText);
   console.log(WithdrawAmountText);

   //withdraw update

   const withdrawTotal= document.getElementById('withdraw-total');
   const withdrawTotalText= withdrawTotal.innerText;
   const previousWithdrawAmount= parseFloat(withdrawTotalText);

   withdrawTotal.innerText= parseFloat (previousWithdrawAmount + withdrawAmount);

   //withdraw to balance deduct

   const totalBalance= document.getElementById('total-balance')
   const totalBalaceText= totalBalance.innerText;

   const previousTotalBalance= parseFloat(totalBalaceText);

   
   totalBalance.innerText= previousTotalBalance-withdrawAmount ;


   WithdrawInput.value= '';
});
