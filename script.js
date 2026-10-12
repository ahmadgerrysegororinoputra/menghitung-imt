function hitungIMT() {
  const beratInput = document.getElementById('berat');
  const tinggiInput = document.getElementById('tinggi');
  const resultBox = document.getElementById('result');
  const scoreValue = document.getElementById('scoreValue');
  const categoryValue = document.getElementById('categoryValue');
  const descValue = document.getElementById('descValue');

  const berat = parseFloat(beratInput.value);
  const tinggiCm = parseFloat(tinggiInput.value);

  // Validasi input
  if (!berat || !tinggiCm || berat <= 0 || tinggiCm <= 0) {
    alert('Mohon masukkan berat badan dan tinggi badan yang valid!');
    return;
  }

  // Konversi tinggi badan dari cm ke meter
  const tinggiMeter = tinggiCm / 100;

  // Rumus IMT = Berat (kg) / (Tinggi (m) * Tinggi (m))
  const imt = berat / (tinggiMeter * tinggiMeter);
  const imtFixed = imt.toFixed(1);

  scoreValue.innerText = imtFixed;

  // Reset class indikator warna
  resultBox.className = 'result-box';

  // Kategori berdasarkan standar Kemenkes RI
  if (imt < 18.5) {
    categoryValue.innerText = 'Kurang Berat Badan';
    descValue.innerText = 'Berat badan Anda berada di bawah batas normal. Tingkatkan asupan nutrisi seimbang.';
    resultBox.classList.add('kurang');
  } else if (imt >= 18.5 && imt <= 22.9) {
    categoryValue.innerText = 'Normal (Ideal)';
    descValue.innerText = 'Bagus! Berat badan Anda berada dalam kategori ideal dan sehat.';
    resultBox.classList.add('normal');
  } else if (imt >= 23.0 && imt <= 24.9) {
    categoryValue.innerText = 'Kelebihan Berat Badan';
    descValue.innerText = 'Hati-hati, berat badan Anda sedikit berlebih. Jaga pola makan dan rutin berolahraga.';
    resultBox.classList.add('lebih');
  } else {
    categoryValue.innerText = 'Obesitas';
    descValue.innerText = 'Berat badan Anda masuk kategori obesitas. Disarankan konsultasi dan mulai pola hidup sehat.';
    resultBox.classList.add('obesitas');
  }

  // Tampilkan kotak hasil
  resultBox.style.display = 'block';
}

function resetForm() {
  document.getElementById('berat').value = '';
  document.getElementById('tinggi').value = '';
  
  const resultBox = document.getElementById('result');
  resultBox.style.display = 'none';
  resultBox.className = 'result-box';
}
