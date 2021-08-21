   // get input from input field 
   function getInput(input){
    const inpuAmountString = document.getElementById(input);
    const inpuAmount = parseFloat(inpuAmountString.value);
    inpuAmountString.value = '';
    return inpuAmount;
}

// get total balance
function getTotalBalance(){
    const TotalBalanceString = document.getElementById('total-balance');
    const TotalBalance =parseFloat( TotalBalanceString.innerText);
    return TotalBalance;
}

// update total balance
function updateTotalBalance(inputAmount,isAdd){
    let currentTotalBalance = getTotalBalance();
    let updatedTotalBalance;
    if(isAdd == true){
         updatedTotalBalance = currentTotalBalance + inputAmount;
    }
    else{
         updatedTotalBalance = currentTotalBalance - inputAmount;
    }
    
    console.log('current total balance :',currentTotalBalance);
    console.log('updated total balance :',updatedTotalBalance);
    document.getElementById('total-balance').innerText = updatedTotalBalance;
}

// add input with current deposit / withdraw
function addInput(newAmount,currentAmountId){

    const currentAmountString = document.getElementById(currentAmountId);
    const currentAmount = parseFloat(currentAmountString.innerText);
    

    const updatedAmount = currentAmount + newAmount;
    currentAmountString.innerText = updatedAmount;

    console.log('current Amount :',currentAmount);
    console.log('new Amount :',newAmount);
    console.log('updated Amount :', updatedAmount);
}

// deposit calculation
document.getElementById('deposit-button').addEventListener('click',function(){
     const inputAmount = getInput('input-deposit');
     const currentTotalBalance = getTotalBalance();           

    //  add input function 
    if(inputAmount>0){
        const addInputAmount = addInput(inputAmount,'current-deposit');
        updateTotalBalance(inputAmount,true);
    }
})

// withdraw calculation
document.getElementById('withdraw-button').addEventListener('click',function(){
     const inputAmount = getInput('input-withdraw');
     const currentTotalBalance = getTotalBalance();           

    //  add input function 
    if(inputAmount>0 && inputAmount<currentTotalBalance){
        const addInputAmount = addInput(inputAmount,'current-withdraw');
        updateTotalBalance(inputAmount);
    }
})