const calculateButton = document.getElementById('calculate')

calculateButton.addEventListener("click", function(){

    const income = parseFloat(document.getElementById('income').value) ;
    const software = parseFloat(document.getElementById('software').value) ;
    const courses = parseFloat(document.getElementById('courses').value) ;
    const internet = parseFloat(document.getElementById('internet').value) ;

    const totalExpanses = software + courses + internet ;

    const balance = income - totalExpanses ; 
    
    const totalExpansesEli = document.getElementById('total-expenses')
    totalExpansesEli.innerText = totalExpanses.toFixed(2)

    const balanceElement = document.getElementById('balance')
    balanceElement.innerText = balance.toFixed(2)

    const result = document.getElementById('results')
    result.classList.remove('hidden')
})

// calculateSavingButton 

const calculateSavingButton = document.getElementById('calculate-savings')
calculateSavingButton.addEventListener("click", function(){

    const savingParsent = parseFloat(document.getElementById('savings').value) ;

    const income = parseFloat(document.getElementById('income').value) ;
    const software = parseFloat(document.getElementById('software').value) ;
    const courses = parseFloat(document.getElementById('courses').value) ;
    const internet = parseFloat(document.getElementById('internet').value) ;

    const totalExpanses = software + courses + internet ;

    const balance = income - totalExpanses ; 

    const savingAmount = (savingParsent * balance)/ 100 ;

    const remaining = balance - savingAmount ;

    const savingElement = document.getElementById('savings-amount')
    savingElement.innerText = savingAmount.toFixed(2 );
    
    const remainingBalance = document.getElementById('remaining-balance')
    remainingBalance.innerText = remaining.toFixed(2) ;



})