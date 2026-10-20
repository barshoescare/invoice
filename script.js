// Fungsi untuk menambah baris item layanan baru
function addItem() {
    const itemsList = document.getElementById('items-list');
    
    const newRow = document.createElement('div');
    newRow.className = 'item-row';
    
    newRow.innerHTML = `
        <input type="text" class="item-name" placeholder="Nama layanan...">
        <input type="number" class="item-amount" placeholder="0" oninput="calculateTotal()">
    `;
    
    itemsList.appendChild(newRow);
}

// Fungsi untuk menghitung total semua layanan
function calculateTotal() {
    const amountInputs = document.querySelectorAll('.item-amount');
    let total = 0;
    
    amountInputs.forEach(input => {
        const value = parseFloat(input.value);
        if (!isNaN(value)) {
            total += value;
        }
    });
    
    // Format angka ke format Rupiah
    const formattedTotal = new Intl.NumberFormat('id-ID', { 
        style: 'currency', 
        currency: 'IDR',
        minimumFractionDigits: 0
    }).format(total);
    
    document.getElementById('total-amount').textContent = formattedTotal;
}