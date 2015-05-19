var calculateButton = document.getElementById('calculate-button');
console.log(calculateButton);

calculateButton.addEventListener('click', onButtonClick);

function onButtonClick() {
	var totalBill = document.getElementById('total-bill');
	var tipPercentage = document.getElementById('tip-percentage');
	console.log('Hey! the button was clicked');
	console.log(totalBill.value);
	console.log(tipPercentage.value);

	var tipPercentageNumber = parseFloat(tipPercentage.value);
	var totalBillNumber = parseFloat(totalBill.value);

	var finalTip = calculateTip(totalBillNumber, tipPercentageNumber);
	console.log(finalTip);
}

function calculateTip(totalBill, tipPercentage) {
	return totalBill * tipPercentage / 100;
}