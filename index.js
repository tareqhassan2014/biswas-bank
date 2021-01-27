// Login button event Handelar
const loginBtn = document.getElementById('login');
loginBtn.addEventListener("click", function(){
    const loginArea = document.getElementById('login-area');
    loginArea.style.display = "none";
    const tranjectionArea = document.getElementById('trangection-area');
    tranjectionArea.style.display = "block";
})
// Deposite button event Handelar
const depositBtn = document.getElementById('addDiposit');
depositBtn.addEventListener("click", function(){
    const depositAmount = document.getElementById('depositAmount').value;
    const depositNumber = parseFloat(depositAmount);
    
    updateSpanText("carrentDeposite", depositNumber);
    updateSpanText("carrentBalance", depositNumber);

    document.getElementById('depositAmount').value = "";
})

// Withdraw button event Handelar
const withdrawBtn = document.getElementById("addWithdraw");
withdrawBtn.addEventListener("click", function () {
    const withdrawNumber = getInputNumber("withdrawAmount")
})

function getInputNumber(id) {
    const Amount = document.getElementById(id).innerText;
    const amountNumber = parseFloat(Amount);
    return amountNumber;
}

function updateSpanText(id, depositeNumber) {
    const carrent = document.getElementById(id).innerText;
    const carrentNumber = parseFloat(carrent);
    const totalAmount = depositeNumber + carrentNumber;
    document.getElementById(id).innerText = totalAmount;
}