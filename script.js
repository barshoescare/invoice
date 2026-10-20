// Fungsi untuk menambah baris item layanan baru
function addItem() {
    const itemsList = document.getElementById('items-list');
    
    const newRow = document.createElement('div');
    newRow.className = 'item-row';
    
    newRow.innerHTML = `
        <input type="text" class="item-name item-col" placeholder="Nama layanan...">
        <input type="number" class="item-price price-col" placeholder="Harga" oninput="calculateTotal()">
        <input type="number" class="item-qty qty-col" placeholder="1" oninput="calculateTotal()">
        <span class="item-amount amount-col">Rp 0</span>
    `;
    
    itemsList.appendChild(newRow);
}

// Fungsi untuk menghitung Harga x QTY dan Total Akhir
function calculateTotal() {
    const rows = document.querySelectorAll('.item-row');
    let grandTotal = 0;
    
    // Perulangan untuk setiap baris layanan
    rows.forEach(row => {
        const priceInput = row.querySelector('.item-price');
        const qtyInput = row.querySelector('.item-qty');
        const amountDisplay = row.querySelector('.item-amount');
        
        // Ambil angka dari input, jadikan 0 jika kosong
        const price = parseFloat(priceInput.value) || 0;
        const qty = parseFloat(qtyInput.value) || 0;
        
        // Rumus: Harga dikali Jumlah
        const amount = price * qty;
        grandTotal += amount;
        
        // Tampilkan hasil per baris (AMOUNT)
        amountDisplay.textContent = new Intl.NumberFormat('id-ID', { 
            style: 'currency', 
            currency: 'IDR',
            minimumFractionDigits: 0
        }).format(amount);
    });
    
    // Tampilkan Total Keseluruhan di paling bawah
    document.getElementById('total-amount').textContent = new Intl.NumberFormat('id-ID', { 
        style: 'currency', 
        currency: 'IDR',
        minimumFractionDigits: 0
    }).format(grandTotal);
}
