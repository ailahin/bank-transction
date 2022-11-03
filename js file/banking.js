document.getElementById('deposit-button').addEventListener('click' , function(){
  //depossit total
   const depositInput= document.getElementById("deposit-input");
   const newDepositAmountText= depositInput.value;
   const newDepositAmount= newDepositAmountText;

   const depositTotal= document.getElementById ('deposit-total');
  
   const previousTotalText= depositTotal.innerText;
   const previousTotalAmount= previousTotalText;
   const newDepositTotal=  newDepositAmount + previousTotalAmount;
   depositTotal.innerText= newDepositTotal;


  //// const depositInput= document.getElementById("deposit-input");
   ///const totalDepositAmount=depositInput.value; 
   ///const currentDepositAmount= perseFloat('TotalDepositAmount')
 //  const 



   //Deposit Total Value

   const totalBalanace= document.getElementById('total-balance');
   const totalBalanceText= totalBalance.innerText;
   const initialTotalBalance= totalBalanceText ;
   const newBalanceTotal= initialTotalBalance+newDepositTotal;
   totalBalanace.innerText= newBalanceTotal;

  

   depositInput.value='';

   
   
})