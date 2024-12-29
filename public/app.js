import saveFuelRecord from '../src/saveData.js';

document.getElementById('fuelForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const date = document.getElementById('date').value;
    const liters = document.getElementById('liters').value;
    const pricePerLiter = document.getElementById('pricePerLiter').value;
    const totalPrice = document.getElementById('totalPrice').value;
    const fuelType = document.getElementById('fuelType').value;
    const station = document.getElementById('station').value;

    saveFuelRecord(date, liters, pricePerLiter, totalPrice, fuelType, station);

    // เคลียร์ฟอร์มหลังจากบันทึก
    document.getElementById('fuelForm').reset();
});

document.getElementById('liters').addEventListener('input', calculateTotalPrice);
document.getElementById('pricePerLiter').addEventListener('input', calculateTotalPrice);

function calculateTotalPrice() {
    const liters = parseFloat(document.getElementById('liters').value);
    const pricePerLiter = parseFloat(document.getElementById('pricePerLiter').value);
    const totalPrice = liters * pricePerLiter;

    if (!isNaN(totalPrice)) {
        document.getElementById('totalPrice').value = totalPrice.toFixed(2);
    } else {
        document.getElementById('totalPrice').value = '';
    }
}
