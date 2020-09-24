const tipForm = document.getElementById("tip-form");


tipForm.addEventListener("submit", function (e) {
    e.preventDefault();
    const billAmount = Number(document.querySelector("#bill-amount").value);
    const tipPercentage = Number(document.querySelector("#tip-amount").value);
    const tipAmount = document.querySelector("#final-tip");
    tipAmount.innerHTML = "50";
});
